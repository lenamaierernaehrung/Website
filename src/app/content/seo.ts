// ── SEO metadata ─────────────────────────────────────────────────
// One source for titles, descriptions and canonical URLs. Used at
// runtime (usePageMeta) and at build time (vite.config.ts writes a
// static HTML file per page with these tags, so crawlers and link
// previews see the right metadata without running JavaScript).
// This file also runs in Node (vite.config.ts), so it must not import
// anything else from the app — angebote.ts pulls in images.

export const SITE_URL = "https://www.lenamaier-ernaehrung.de";
export const SITE_NAME = "Ernährungsberatung Lena Maier";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  // listed in sitemap.xml
  sitemap: boolean;
};

const pages: PageMeta[] = [
  {
    path: "/",
    title: "Ernährungsberatung online | Lena Maier",
    description:
      "Du möchtest deine Ernährung verbessern oder gesund abnehmen? Ich unterstütze dich mit persönlicher Online-Ernährungsberatung und individueller Begleitung.",
    sitemap: true,
  },
  {
    path: "/8-wochen-beratung",
    title: "8-Wochen-Ernährungsberatung online | Lena Maier",
    description:
      "Acht Wochen persönliche Begleitung online: fünf Videogespräche, Unterstützung zwischen den Terminen und eine Abschlussübersicht. Ohne starre Pläne und Verbote.",
    sitemap: true,
  },
  {
    path: "/einzelberatung",
    title: "Online-Ernährungsberatung: 60 Minuten | Lena Maier",
    description:
      "Du hast eine konkrete Frage zu deiner Ernährung? In 60 Minuten Onlineberatung schauen wir auf deine Situation und besprechen, was du im Alltag umsetzen kannst.",
    sitemap: true,
  },
  // Lecture titles must match VORTRAEGE in angebote.ts (checked in
  // development by VortragPage).
  {
    path: "/vortraege/gesund-essen-im-berufsalltag",
    title: "Gesund essen im Berufsalltag | Lena Maier",
    description:
      "Ernährungsvortrag für Unternehmen: wie gesunde Ernährung im Arbeitsalltag mit wenig Zeit gelingt. 60 Minuten inklusive Fragerunde, online oder vor Ort.",
    sitemap: true,
  },
  {
    path: "/vortraege/sporternaehrung",
    title: "Sporternährung: Was wirklich zählt | Lena Maier",
    description:
      "Vortrag zur Sporternährung für Sportvereine: Energiebedarf, Proteine, Kohlenhydrate, Regeneration und Nahrungsergänzung verständlich eingeordnet.",
    sitemap: true,
  },
  {
    path: "/vortraege/ernaehrung-verstehen",
    title: "Ernährung verstehen statt Trends folgen | Lena Maier",
    description:
      "Vortrag für Organisationen und Bildungseinrichtungen: Ernährungsgrundlagen verstehen und Ernährungsmythen einordnen. 60 Minuten, online oder vor Ort.",
    sitemap: true,
  },
  {
    path: "/impressum",
    title: "Impressum | Lena Maier",
    description: "Impressum der Ernährungsberatung Lena Maier.",
    sitemap: false,
  },
  {
    path: "/datenschutz",
    title: "Datenschutzerklärung | Lena Maier",
    description: "Datenschutzerklärung der Ernährungsberatung Lena Maier.",
    sitemap: false,
  },
  {
    path: "/agb",
    title: "AGB | Lena Maier",
    description:
      "Allgemeine Geschäftsbedingungen der Ernährungsberatung Lena Maier.",
    sitemap: false,
  },
];

export const PAGE_META: Record<string, PageMeta> = Object.fromEntries(
  pages.map((p) => [p.path, p]),
);

export const canonicalUrl = (path: string) =>
  SITE_URL + (path === "/" ? "/" : path);

// ── Static HTML rewriting (build time) ───────────────────────────
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Replaces the values of the meta tags already present in index.html.
export function applyMeta(html: string, meta: PageMeta) {
  const url = canonicalUrl(meta.path);
  const attr = (selector: string, value: string) => {
    const re = new RegExp(`(<${selector}[^>]*?(?:content|href)=")[^"]*(")`);
    html = html.replace(re, `$1${esc(value)}$2`);
  };
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${esc(meta.title)}</title>`,
  );
  attr('meta name="description"', meta.description);
  attr('link rel="canonical"', url);
  attr('meta property="og:title"', meta.title);
  attr('meta property="og:description"', meta.description);
  attr('meta property="og:url"', url);
  attr('meta name="twitter:title"', meta.title);
  attr('meta name="twitter:description"', meta.description);
  return html;
}

export function sitemapXml() {
  const urls = pages
    .filter((p) => p.sitemap)
    .map((p) => `  <url><loc>${canonicalUrl(p.path)}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
