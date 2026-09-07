import { useEffect } from "react";

const SITE = "Singapore Sea Regatta";
const ORIGIN = "https://sgsearegatta.com";

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

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Sets per-page title, meta description, canonical URL and Open Graph tags.
export default function usePageMeta({ title, description, image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE}` : SITE;
    document.title = fullTitle;

    const canonical = `${ORIGIN}${window.location.pathname}`.replace(/\/$/, "") || ORIGIN;

    upsertCanonical(canonical);
    upsert("name", "description", description);
    upsert("property", "og:title", fullTitle);
    upsert("property", "og:description", description);
    upsert("property", "og:type", "website");
    upsert("property", "og:site_name", SITE);
    upsert("property", "og:url", canonical);
    upsert("name", "twitter:card", image ? "summary_large_image" : "summary");
    upsert("property", "og:image", image);
  }, [title, description, image]);
}