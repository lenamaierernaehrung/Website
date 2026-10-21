import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

// State passed along when a detail page sends visitors to the contact
// section, so the WhatsApp message can name the chosen offer.
export type ContactState = { topic?: string } | null;

export const SITE_URL = "https://www.lenamaier-ernaehrung.de";

// Scroll to a section of the home page — directly when already there,
// otherwise via route + hash (ScrollRestoration handles the jump and
// each section's scroll-margin keeps it clear of the fixed nav).
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

export function usePageMeta(title: string, description: string) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL + (pathname === "/" ? "/" : pathname);
  }, [title, description, pathname]);
}
