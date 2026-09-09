import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

const WIX_QUERY_URL = "https://www.wixapis.com/stores-reader/v1/products/query";

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function mapProduct(p, index) {
  const media = p.media || {};
  const images = (media.items || [])
    .filter((i) => i.mediaType === "image" && i.image?.url)
    .map((i) => i.image.url);
  const main = media.mainMedia?.image?.url || images[0] || "";
  const pageUrl = p.productPageUrl
    ? String(p.productPageUrl.base || "").replace(/\/$/, "") + (p.productPageUrl.path || "")
    : "";
  const price = p.priceData || p.price || {};
  return {
    wix_id: p.id,
    name: p.name || "",
    slug: p.slug || "",
    description: stripHtml(p.description),
    price: typeof price.discountedPrice === "number" ? price.discountedPrice : price.price ?? 0,
    price_formatted: price.formatted?.discountedPrice || price.formatted?.price || "",
    currency: price.currency || "",
    in_stock: p.stock?.inStock !== false,
    visible: p.visible !== false,
    ribbon: p.ribbons?.[0]?.text || "",
    main_image: main,
    images,
    product_url: pageUrl,
    order: index,
    synced_at: new Date().toISOString()
  };
}

async function fetchAllWixProducts(accessToken) {
  const all = [];
  let offset = 0;
  const limit = 100;
  while (true) {
    const res = await fetch(WIX_QUERY_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: { paging: { limit, offset } }, includeVariants: false })
    });
    if (!res.ok) throw new Error(`Wix ${res.status} ${await res.text()}`);
    const data = await res.json();
    const batch = data.products || [];
    all.push(...batch);
    const total = data.totalResults ?? all.length;
    offset += limit;
    if (batch.length < limit || all.length >= total) break;
  }
  return all;
}

export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    // Callable by the scheduled workflow (no user) or by an app admin.
    const user = await base44.auth.me().catch(() => null);
    if (user && user.role !== "admin") {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection("wix");
    const wixProducts = await fetchAllWixProducts(accessToken);
    const mapped = wixProducts.map(mapProduct);

    const existing = await base44.asServiceRole.entities.WixProduct.list("-created_date", 500);
    const byWixId = new Map(existing.map((e) => [e.wix_id, e]));

    const toCreate = [];
    const toUpdate = [];
    for (const item of mapped) {
      const found = byWixId.get(item.wix_id);
      if (found) {
        toUpdate.push({ id: found.id, ...item });
        byWixId.delete(item.wix_id);
      } else {
        toCreate.push(item);
      }
    }
    const staleIds = [...byWixId.values()].map((e) => e.id);

    if (toCreate.length) await base44.asServiceRole.entities.WixProduct.bulkCreate(toCreate);
    if (toUpdate.length) await base44.asServiceRole.entities.WixProduct.bulkUpdate(toUpdate);
    for (const id of staleIds) await base44.asServiceRole.entities.WixProduct.delete(id);

    return Response.json({
      synced: mapped.length,
      created: toCreate.length,
      updated: toUpdate.length,
      removed: staleIds.length
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}