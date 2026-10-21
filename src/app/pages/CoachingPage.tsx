import { F, G, GOLD, Reveal, TEXT } from "../components/shared";
import { ArrowIcon, FactList, Pill, PriceBlock } from "../components/offer-ui";
import { Timeline } from "../components/Timeline";
import { COACHING, COACHING_STEPS } from "../content/angebote";
import { useGoToSection, usePageMeta } from "../navigation";
import {
  DetailHero,
  DetailSection,
  RequestPanel,
  RuledItems,
  bodyStyle,
} from "./DetailPage";

const INCLUDED = [
  {
    title: "5 persönliche Onlinegespräche",
    text: "Ein ausführlicher Starttermin und vier weitere Gespräche, in denen wir an deinen Zielen arbeiten.",
  },
  {
    title: "Individuelle Strategien",
    text: "Keine Lösung von der Stange. Wir erarbeiten Veränderungen, die zu deinen Bedürfnissen passen.",
  },
  {
    title: "Persönliche Begleitung",
    text: "Auch zwischen den Gesprächen bin ich für kurze Fragen zur Umsetzung erreichbar.",
  },
  {
    title: "Deine Abschlussübersicht",
    text: "Am Ende erhältst du eine persönliche Zusammenfassung deiner wichtigsten Erkenntnisse und nächsten Schritte.",
  },
];

const SCOPE = [
  { label: "Laufzeit", text: "8 Wochen" },
  { label: "Format", text: "Online per Videogespräch" },
  {
    label: "Gespräche",
    text: "Ein Erstgespräch mit 75 Minuten und vier Folgegespräche mit jeweils 45 Minuten. Das letzte davon ist unser Abschlussgespräch.",
  },
  {
    label: "Zwischendurch",
    text: "Bei kurzen Fragen zur Umsetzung kannst du mir zwischen den Terminen eine Nachricht schreiben.",
  },
];

const KENNENLERNEN = [
  "Du meldest dich bei mir.",
  "Wir stimmen persönlich einen Termin ab.",
  "Wir sprechen etwa 15 Minuten über dein Anliegen.",
];

export function CoachingPage() {
  usePageMeta(
    "8-Wochen-Online-Ernährungscoaching | Lena Maier",
    "Persönliches Online-Ernährungscoaching über 8 Wochen: 5 Videogespräche, Begleitung zwischen den Terminen und eine persönliche Abschlussübersicht. Ohne starre Pläne und Verbote.",
  );
  const goTo = useGoToSection();

  return (
    <main>
      <DetailHero
        back={{ to: "/#services", label: "Zur Angebotsübersicht" }}
        eyebrow="Persönliches Coaching · 8 Wochen"
        title={COACHING.title}
        subtitle="8 Wochen persönliches Online-Ernährungscoaching"
      >
        <p style={bodyStyle}>
          Du möchtest deine Ernährung langfristig verändern, dein
          Gewicht bewusster managen oder endlich mehr Sicherheit bei
          deinen Ernährungsentscheidungen gewinnen?
        </p>
        <p style={bodyStyle}>
          In meinem 8-Wochen-Coaching begleite ich dich persönlich.
          Gemeinsam schauen wir auf deine bisherigen Gewohnheiten,
          entwickeln individuelle Strategien und finden Lösungen, die
          zu deinem Alltag passen.
        </p>
        <p style={bodyStyle}>
          Ohne starre Ernährungspläne und unnötige Verbote. Dafür mit
          verständlichem Ernährungswissen und persönlicher
          Unterstützung.
        </p>
      </DetailHero>

      <DetailSection
        label="Leistungen"
        heading="Das erwartet dich"
        gradient={G.about}
      >
        <RuledItems items={INCLUDED} />
        <Reveal className="mt-16 md:mt-20">
          <h3
            className="font-semibold mb-6"
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(1.0625rem,1.6vw,1.1875rem)",
              color: TEXT,
            }}
          >
            Im Überblick
          </h3>
          <FactList items={SCOPE} />
        </Reveal>
      </DetailSection>

      <DetailSection
        label="Ablauf"
        heading="So läuft dein Coaching ab"
        gradient={G.philosophy}
      >
        <Timeline steps={COACHING_STEPS} />
      </DetailSection>

      <section
        id="coaching-anfragen"
        style={{ backgroundImage: G.services }}
        className="py-20 md:py-28"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: 960 }}>
          <RequestPanel
            heading="Du möchtest herausfinden, ob das Coaching zu dir passt?"
            aside={
              <>
                {/* the intro offer carries its own label */}
                {!COACHING.intro && (
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: F.sc,
                      fontSize: 13,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: GOLD,
                    }}
                  >
                    Preis
                  </p>
                )}
                <PriceBlock price={COACHING.price} intro={COACHING.intro} large />
              </>
            }
          >
            <p className="mb-8" style={bodyStyle}>
              Dann melde dich bei mir. In einem kurzen, unverbindlichen
              Kennenlerngespräch klären wir dein Anliegen und
              besprechen, wie ich dich unterstützen kann.
            </p>
            <p
              className="mb-4"
              style={{
                fontFamily: F.sc,
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              Kostenloses Kennenlerngespräch · ca. 15 Minuten
            </p>
            <ol className="flex flex-col gap-2.5 mb-9">
              {KENNENLERNEN.map((t, i) => (
                <li key={t} className="flex gap-3" style={{ ...bodyStyle, lineHeight: 1.5 }}>
                  <span
                    className="shrink-0 w-5"
                    style={{ fontFamily: F.heading, fontWeight: 600, color: GOLD, fontSize: 14, paddingTop: 2 }}
                  >
                    {i + 1}.
                  </span>
                  {t}
                </li>
              ))}
            </ol>
            <Pill
              onClick={() => goTo("contact", COACHING.topic)}
              className="w-full sm:w-fit"
            >
              Coaching anfragen
              <ArrowIcon />
            </Pill>
          </RequestPanel>
        </div>
      </section>
    </main>
  );
}
