import { Link } from "react-router";
import {
  CARD_BG,
  CARD_DARK,
  Container,
  F,
  G,
  GOLD,
  GOLD_LITE,
  Reveal,
  SectionHeading,
  SectionLabel,
  TEXT,
} from "./shared";
import {
  ArrowIcon,
  CheckList,
  Eyebrow,
  ImageSlot,
  Pill,
  PriceBlock,
} from "./offer-ui";
import { Timeline } from "./Timeline";
import {
  BERATUNG,
  EINZELBERATUNG,
  VORTRAEGE,
  ZUSAMMENARBEIT_STEPS,
  vortragPath,
  type IntroOffer,
  type Price,
} from "../content/angebote";

const leadStyle: React.CSSProperties = {
  fontFamily: F.body,
  fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
  color: TEXT,
  opacity: 0.8,
  maxWidth: 580,
};

// ────────────────────────────────────────────────────────────────
// OFFER CARD (private clients)
// ────────────────────────────────────────────────────────────────
function OfferCard({
  label,
  tag,
  title,
  desc,
  bullets,
  price,
  intro,
  to,
  linkLabel,
  featured = false,
}: {
  label: string;
  tag?: string;
  title: string;
  desc: string;
  bullets: string[];
  price: Price;
  intro?: IntroOffer | null;
  to: string;
  linkLabel: string;
  featured?: boolean;
}) {
  return (
    <article
      className="rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col h-full"
      style={{
        background: featured ? CARD_DARK : CARD_BG,
        border: `1px solid ${featured ? `${GOLD}80` : `${GOLD_LITE}35`}`,
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <Eyebrow>{label}</Eyebrow>
        {tag && (
          <span
            className="shrink-0 rounded-full px-3 py-1"
            style={{
              fontFamily: F.sc,
              fontSize: 13,
              color: GOLD_LITE,
              border: `1px solid ${GOLD}60`,
              lineHeight: 1.3,
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <h3
        className="font-semibold mb-4 leading-snug text-balance"
        style={{
          fontFamily: F.heading,
          fontSize: "clamp(1.375rem,2.4vw,1.75rem)",
          color: TEXT,
        }}
      >
        {title}
      </h3>
      <p
        className="mb-8 leading-relaxed"
        style={{
          fontFamily: F.body,
          fontSize: "clamp(0.9375rem,1.25vw,1.0625rem)",
          color: TEXT,
          opacity: 0.82,
        }}
      >
        {desc}
      </p>
      <CheckList items={bullets} />

      {/* Price + action stay at the bottom so both cards line up */}
      <div className="mt-auto pt-9">
        <div
          className="mb-7"
          style={{ height: 1, background: `${GOLD}30` }}
        />
        <div className="flex flex-col gap-7">
          <PriceBlock price={price} intro={intro} />
          <Pill
            to={to}
            variant={featured ? "primary" : "ghost"}
            className="w-full sm:w-fit"
          >
            Mehr erfahren
            <span className="sr-only"> {linkLabel}</span>
            <ArrowIcon />
          </Pill>
        </div>
      </div>
    </article>
  );
}

// ────────────────────────────────────────────────────────────────
// SERVICES — private offers + how we work together
// ────────────────────────────────────────────────────────────────
export function Services() {
  return (
    <section
      style={{ backgroundImage: G.services }}
      className="pt-4 pb-24 md:pt-8 md:pb-32"
    >
      <Container>
        <div id="services" className="scroll-mt-[84px]">
          <Reveal className="text-center mb-5">
            <SectionLabel>Angebot</SectionLabel>
            <SectionHeading className="text-balance">
              Meine Leistungen
            </SectionHeading>
          </Reveal>
        </div>
        <Reveal delay={0.06} className="text-center mb-14 md:mb-16">
          <p className="mx-auto leading-relaxed" style={leadStyle}>
            Ob du deine Ernährung langfristig verändern möchtest
            oder Antworten auf konkrete Fragen suchst: Gemeinsam
            finden wir die passende Unterstützung.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <Reveal delay={0.1} className="h-full">
            <OfferCard
              featured
              label={BERATUNG.label}
              tag={BERATUNG.tag}
              title={BERATUNG.title}
              desc={BERATUNG.desc}
              bullets={BERATUNG.bullets}
              price={BERATUNG.price}
              intro={BERATUNG.intro}
              to={BERATUNG.path}
              linkLabel="über die 8-Wochen-Beratung"
            />
          </Reveal>
          <Reveal delay={0.18} className="h-full">
            <OfferCard
              label={EINZELBERATUNG.label}
              title={EINZELBERATUNG.title}
              desc={EINZELBERATUNG.desc}
              bullets={EINZELBERATUNG.bullets}
              price={EINZELBERATUNG.price}
              to={EINZELBERATUNG.path}
              linkLabel="über die Einzelberatung"
            />
          </Reveal>
        </div>

        {/* How we work together */}
        <div className="mt-28 md:mt-40">
          <Reveal className="text-center mb-14 md:mb-20">
            <SectionLabel>Ablauf</SectionLabel>
            <SectionHeading className="text-balance">
              So läuft unsere Zusammenarbeit ab
            </SectionHeading>
          </Reveal>
          <Timeline steps={ZUSAMMENARBEIT_STEPS} />
        </div>
      </Container>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// LECTURES — companies & organisations
// ────────────────────────────────────────────────────────────────
function LectureCard({ v }: { v: (typeof VORTRAEGE)[number] }) {
  return (
    <article
      className="lecture-card relative rounded-2xl overflow-hidden h-full flex flex-col md:flex-row lg:flex-col"
      style={{
        background: CARD_BG,
        border: `1px solid ${GOLD_LITE}35`,
      }}
    >
      <div className="lecture-card-image overflow-hidden shrink-0 aspect-[4/3] md:aspect-auto md:w-[40%] lg:w-full lg:aspect-[4/3]">
        <ImageSlot src={v.image} alt={v.imageAlt} />
      </div>
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* min-height keeps titles aligned when a label wraps */}
        <Eyebrow className="mb-4 lg:min-h-[2.6rem]">
          {v.number} · {v.audience}
        </Eyebrow>
        <h3
          className="font-semibold mb-3 leading-snug text-balance"
          style={{
            fontFamily: F.heading,
            fontSize: "clamp(1.1875rem,1.8vw,1.375rem)",
            color: TEXT,
          }}
        >
          {v.title}
        </h3>
        <p
          className="mb-6 leading-relaxed"
          style={{
            fontFamily: F.body,
            fontSize: "clamp(0.9375rem,1.15vw,1rem)",
            color: TEXT,
            opacity: 0.8,
          }}
        >
          {v.teaser}
        </p>
        {/* The link's ::after covers the whole card (see globals.css) */}
        <Link
          to={vortragPath(v)}
          className="lecture-card-link offer-textlink mt-auto inline-flex items-center gap-2 min-h-[44px] w-fit"
          style={{
            fontFamily: F.body,
            fontSize: 15.5,
            color: GOLD,
            textDecoration: "none",
          }}
        >
          Mehr erfahren
          <span className="sr-only"> über den Vortrag „{v.title}“</span>
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

export function Vortraege() {
  return (
    <section
      style={{ backgroundImage: G.why }}
      className="py-24 md:py-32"
    >
      <Container>
        <div id="vortraege" className="scroll-mt-[84px]">
          <Reveal className="text-center mb-5">
            <SectionLabel>Vorträge für Unternehmen & Organisationen</SectionLabel>
            <SectionHeading className="text-balance">
              Ernährungswissen für alle.
            </SectionHeading>
          </Reveal>
        </div>
        <Reveal
          delay={0.06}
          className="text-center mb-14 md:mb-16 flex flex-col gap-4 items-center"
        >
          <p className="leading-relaxed" style={leadStyle}>
            Ob im Unternehmen, Sportverein oder in einer
            Bildungseinrichtung: Ich vermittle Ernährungswissen
            verständlich, praxisnah und mit einem klaren Bezug zum
            Alltag.
          </p>
          <p className="leading-relaxed" style={leadStyle}>
           
          </p>
        </Reveal>

        <div
          id="vortraege-karten"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 scroll-mt-[100px]"
        >
          {VORTRAEGE.map((v, i) => (
            <Reveal key={v.slug} delay={0.08 + i * 0.08} className="h-full">
              <LectureCard v={v} />
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}
