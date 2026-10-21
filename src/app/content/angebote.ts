import gesundEssenImage from "../../assets/vortraege/gesund-essen-im-berufsalltag.webp";
import sporternaehrungImage from "../../assets/vortraege/sporternaehrung.webp";
import ernaehrungVerstehenImage from "../../assets/vortraege/ernaehrung-verstehen.webp";

// ── Angebote & Vorträge ──────────────────────────────────────────
// Single source for prices, scopes and lecture content. Home cards and
// detail pages both read from here, so a change only happens once.

export type Price = {
  amount: string;
  note: string;
};

// Introductory offer for the coaching. To end the campaign, set
// `COACHING_INTRO` to null — card and detail page fall back to the
// regular price without any further changes.
export type IntroOffer = {
  label: string;
  amount: string;
  note: string;
  regularNote: string;
};

export const COACHING_INTRO: IntroOffer | null = {
  label: "Einführungspreis",
  amount: "349 €",
  note: "für die ersten drei Plätze",
  regularNote: "Geplanter regulärer Paketpreis: 449 €",
};

export const COACHING = {
  path: "/8-wochen-begleitung",
  label: "01 · Persönliche Begleitung",
  tag: "8 Wochen",
  title: "Deine Ernährung. Dein Weg.",
  desc: "Du möchtest deine Ernährung langfristig verändern und wünschst dir persönliche Unterstützung? In acht Wochen arbeiten wir gemeinsam an deinen Zielen und entwickeln Strategien, die zu deinem Alltag passen.",
  bullets: [
    "5 persönliche Onlinegespräche",
    "Individuelle Ernährungsstrategien",
    "Begleitung zwischen den Terminen",
    "Persönliche Abschlussübersicht",
  ],
  price: { amount: "449 €", note: "Gesamtpreis für 8 Wochen" } as Price,
  intro: COACHING_INTRO,
  topic: "die 8-Wochen-Begleitung",
};

export const EINZELBERATUNG = {
  path: "/einzelberatung",
  label: "02 · Einzelberatung",
  title: "Eine Stunde für deine Fragen.",
  desc: "Du hast ein konkretes Ernährungsanliegen und möchtest eine fachliche Einschätzung? Wir schauen gemeinsam auf deine Situation und finden praktische Ansätze, die du direkt in deinem Alltag umsetzen kannst.",
  bullets: [
    "60 Minuten persönliche Onlineberatung",
    "Individuelle Vorbereitung auf dein Anliegen",
    "Konkrete Empfehlungen für deinen Alltag",
  ],
  price: { amount: "69 €", note: "Einmaliger Gesamtpreis" } as Price,
  topic: "eine Einzelberatung",
};

export const ZUSAMMENARBEIT_STEPS = [
  {
    title: "Kennenlernen",
    text: "Wir sprechen über dein Anliegen und finden heraus, welches Angebot zu dir passt.",
  },
  {
    title: "Gemeinsam loslegen",
    text: "Wir betrachten deine Situation und entwickeln passende Ernährungsschritte.",
  },
  {
    title: "Im Alltag umsetzen",
    text: "Du probierst die Veränderungen aus und gewinnst Sicherheit für deinen eigenen Weg.",
  },
];

export const COACHING_STEPS = [
  {
    title: "Wir lernen uns kennen",
    text: "Im ausführlichen Erstgespräch schauen wir auf deine aktuelle Ernährung, deinen Alltag und deine Ziele. Gemeinsam legen wir fest, woran du arbeiten möchtest.",
  },
  {
    title: "Wir entwickeln neue Gewohnheiten",
    text: "In den weiteren Gesprächen besprechen wir deine Erfahrungen, beantworten Fragen und passen die vereinbarten Veränderungen an. Du bekommst Zeit, das Gelernte in deinem Alltag auszuprobieren.",
  },
  {
    title: "Du gehst deinen Weg selbstständig weiter",
    text: "Zum Abschluss reflektieren wir deine Fortschritte und halten fest, welche Strategien dir langfristig helfen können.",
  },
];

// ── Vorträge ─────────────────────────────────────────────────────
export type Vortrag = {
  slug: string;
  number: string;
  audience: string;
  title: string;
  teaser: string;
  intro: string[];
  topics: string[];
  audienceText: string;
  audienceNote?: string;
  // Shared by the lecture card and detail page.
  image?: string;
  imageAlt: string;
};

export const VORTRAEGE: Vortrag[] = [
  {
    slug: "gesund-essen-im-berufsalltag",
    number: "01",
    audience: "Unternehmen",
    title: "Gesund essen im Berufsalltag",
    teaser:
      "Zwischen Meetings, Terminen und Zeitdruck bleibt ausgewogene Ernährung oft auf der Strecke. Dieser Vortrag zeigt, wie gesunde Ernährung auch im Arbeitsalltag praktisch umsetzbar wird.",
    intro: [
      "Zwischen Terminen, Meetings und einem vollen Arbeitsalltag bleibt eine ausgewogene Ernährung häufig auf der Strecke.",
      "In diesem Vortrag zeige ich, wie sich gesunde Ernährung auch mit wenig Zeit praktisch umsetzen lässt und worauf es dabei wirklich ankommt.",
    ],
    topics: [
      "Mahlzeiten sinnvoll zusammenstellen",
      "Ausgewogene Ernährung trotz Zeitdruck",
      "Praktische Ideen für Arbeitstage und Pausen",
      "Typische Ernährungsmythen im Berufsalltag",
    ],
    audienceText:
      "Geeignet für Mitarbeitendenveranstaltungen, Gesundheitstage und betriebliche Gesundheitsaktionen.",
    image: gesundEssenImage,
    imageAlt: "Ausgewogene Mittagsmahlzeit am Arbeitsplatz",
  },
  {
    slug: "sporternaehrung",
    number: "02",
    audience: "Sportvereine",
    title: "Sporternährung: Was wirklich zählt",
    teaser:
      "Wie beeinflusst Ernährung Training und Regeneration? Wir schauen uns die wichtigsten Grundlagen an und klären, was hinter verbreiteten Sporternährungsmythen steckt.",
    intro: [
      "Wer regelmäßig Sport treibt, beschäftigt sich früher oder später mit der Frage, welche Ernährung Training, Leistungsfähigkeit und Regeneration sinnvoll unterstützt.",
    
    ],
    topics: [
      "Energiebedarf und Energiebereitstellung",
      "Proteine und Kohlenhydrate im Sport",
      "Ernährung rund um Training und Regeneration",
      "Nahrungsergänzungsmittel sinnvoll einordnen",
    ],
    audienceText:
      "Geeignet für Sportvereine sowie erwachsene Freizeit- und Hobbysportler.",
    image: sporternaehrungImage,
    imageAlt: "Sportlerin bei einer Pause mit Wasserflasche und Snack",
  },
  {
    slug: "ernaehrung-verstehen",
    number: "03",
    audience: "Organisationen & Bildungseinrichtungen",
    title: "Ernährung verstehen statt Trends folgen",
    teaser:
      "Zwischen Ernährungstrends und widersprüchlichen Empfehlungen verliert man schnell den Überblick. Dieser Vortrag vermittelt die Grundlagen und hilft dabei, verbreitete Ernährungsmythen einzuordnen.",
    intro: [
      "Zwischen Ernährungstrends, Social Media und widersprüchlichen Empfehlungen ist es oft schwer, den Überblick zu behalten.",
      
    ],
    topics: [
      "Was unser Körper an Nährstoffen braucht",
      "Grundlagen einer ausgewogenen Ernährung",
      "Häufige Ernährungsmythen",
      "Wissenschaftliche Empfehlungen im Alltag anwenden",
    ],
    audienceText:
      "Geeignet für Organisationen, Bildungseinrichtungen und allgemein interessierte Gruppen.",
    audienceNote:
      "Bei Veranstaltungen für Jugendliche vermittle ich die Inhalte altersgerecht und spreche über Ernährung, ohne Körpergewicht zu bewerten.",
    image: ernaehrungVerstehenImage,
    imageAlt: "Frisches Gemüse, Hülsenfrüchte und Vollkornprodukte auf einem Tisch",
  },
];

export const vortragPath = (v: Vortrag) => `/vortraege/${v.slug}`;
