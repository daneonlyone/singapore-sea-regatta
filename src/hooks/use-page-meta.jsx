import { useEffect } from "react";

const SITE = "Singapore Sea Regatta";

function upsert(key, keyValue, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${key}="${keyValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Sets per-page title, meta description and Open Graph tags for SEO / social sharing.
export default function usePageMeta({ title, description, image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE}` : SITE;
    document.title = fullTitle;

    upsert("name", "description", description);
    upsert("property", "og:title", fullTitle);
    upsert("property", "og:description", description);
    upsert("property", "og:type", "website");
    upsert("property", "og:url", window.location.href);
    upsert("name", "twitter:card", image ? "summary_large_image" : "summary");
    upsert("property", "og:image", image);
  }, [title, description, image]);
}