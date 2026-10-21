import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router";
import {
  OG_IMAGE,
  PAGE_META,
  SITE_NAME,
  canonicalUrl,
} from "./content/seo";

// State passed along when a detail page sends visitors to the contact
// section, so the WhatsApp message can name the chosen offer.
export type ContactState = { topic?: string } | null;

// Scroll to a section of the home page — directly when already there,
// otherwise via route + hash (ScrollManager handles the jump and each
// target's scroll-margin keeps it clear of the fixed nav).
export function useGoToSection() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (id: string, topic?: string) => {
    const el = document.getElementById(id);
    if (pathname === "/" && el && !topic) {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      return;
    }
    navigate(`/#${id}`, { state: topic ? { topic } : null });
  };
}

// ── Scroll position per navigation ───────────────────────────────
// Replaces react-router's <ScrollRestoration>, which keys saved
// positions by location.key. Every fresh page load has the key
// "default", so a reload or a new visit in the same tab jumped back to
// wherever the visitor had last been (often the lecture section).
//
// Rules:
//  - first load / reload: hash target if the URL has one, else the top
//    (index.html drops a stale hash on reload before the app starts)
//  - link navigation (PUSH/REPLACE): hash target, else the top
//  - back/forward (POP): the position the visitor left that entry at
const savedPositions = new Map<string, number>();
let isFirstRender = true;

export function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const currentKey = useRef(location.key);

  // Remember the scroll position of the entry being viewed
  useEffect(() => {
    let frame = 0;
    const save = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        savedPositions.set(currentKey.current, window.scrollY),
      );
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", save);
    };
  }, []);

  // Runs after the new page is in the DOM, before it is painted
  useLayoutEffect(() => {
    currentKey.current = location.key;
    const firstRender = isFirstRender;
    isFirstRender = false;

    const saved = savedPositions.get(location.key);
    if (!firstRender && navigationType === "POP" && saved !== undefined) {
      window.scrollTo({ top: saved, behavior: "instant" });
      return;
    }
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.key]);

  return null;
}

// ── Per-page metadata ────────────────────────────────────────────
// Static HTML already carries these tags (see vite.config.ts); this
// keeps them in sync while navigating inside the app.
export function usePageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = PAGE_META[pathname] ?? PAGE_META["/"];
    const url = canonicalUrl(meta.path);
    document.title = meta.title;
    const set = (selector: string, attr: string, value: string) =>
      document.head.querySelector(selector)?.setAttribute(attr, value);
    set('meta[name="description"]', "content", meta.description);
    set('link[rel="canonical"]', "href", url);
    set('meta[property="og:title"]', "content", meta.title);
    set('meta[property="og:description"]', "content", meta.description);
    set('meta[property="og:url"]', "content", url);
    set('meta[property="og:site_name"]', "content", SITE_NAME);
    set('meta[property="og:image"]', "content", OG_IMAGE);
    set('meta[name="twitter:title"]', "content", meta.title);
    set('meta[name="twitter:description"]', "content", meta.description);
  }, [pathname]);
}
