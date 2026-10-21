import { Link } from "react-router";
import { F, G, GOLD, Reveal, TEXT } from "../components/shared";
import { ArrowIcon, Pill, PriceBlock } from "../components/offer-ui";
import { BERATUNG, EINZELBERATUNG } from "../content/angebote";
import { useGoToSection, usePageMeta } from "../navigation";
import {
  DetailHero,
  DetailSection,
  RequestPanel,
  RuledItems,
  G_CLOSING,
  bodyStyle,
} from "./DetailPage";

const INCLUDED = [
  {
    title: "Individuelle Vorbereitung",
    text: "Vor unserem Termin schilderst du mir kurz dein Anliegen. So kann ich mich gezielt auf deine Fragen vorbereiten.",
  },
  {
    title: "60 Minuten persönliche Onlineberatung",
    text: "Wir schauen uns deine Situation genauer an, klären deine Fragen und besprechen mögliche Veränderungen.",
  },
  {
    title: "Konkrete Empfehlungen",
    text: "Du erhältst individuelle Anregungen und nächste Schritte, die du eigenständig in deinen Alltag integrieren kannst.",
  },
];

export function EinzelberatungPage() {
  usePageMeta();
  const goTo = useGoToSection();

  return (
    <main>
      <DetailHero
        back={{ to: "/#services", label: "Zur Angebotsübersicht" }}
        eyebrow="Einzelberatung · 60 Minuten online"
        title={EINZELBERATUNG.title}
      >
        <p style={bodyStyle}>
          Du hast Fragen zu deiner Ernährung oder möchtest bestimmte
          Gewohnheiten verändern? In einer persönlichen
          Onlineberatung nehmen wir uns Zeit für dein Anliegen und
          entwickeln gemeinsam praktische Lösungen, die zu deinem
          Alltag passen.
        </p>
      </DetailHero>

      <DetailSection
        label="Leistungen"
        heading="Das erwartet dich"
        gradient={G.about}
        narrow={false}
      >
        <RuledItems items={INCLUDED} columns={3} />

        <Reveal className="mt-20 md:mt-24 mx-auto" style={{ maxWidth: 680 }}>
          <h2
            className="font-semibold mb-5"
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(1.25rem,2.2vw,1.5rem)",
              color: TEXT,
            }}
          >
            Für wen ist die Beratung geeignet?
          </h2>
          <p className="mb-4" style={bodyStyle}>
            Die Einzelberatung eignet sich besonders, wenn du konkrete
            Ernährungsfragen hast, dir eine erste Orientierung
            wünschst oder einzelne Aspekte deiner Ernährung verbessern
            möchtest.
          </p>
          <p style={bodyStyle}>
            Wenn du dir über einen längeren Zeitraum persönliche
            Unterstützung bei der Veränderung deiner Gewohnheiten
            wünschst, könnte mein{" "}
            <Link
              to={BERATUNG.path}
              style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              8-Wochen-Beratung
            </Link>{" "}
            besser zu dir passen.
          </p>
        </Reveal>
      </DetailSection>

      <section
        style={{ backgroundImage: G_CLOSING }}
        className="py-20 md:py-28"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: 960 }}>
          <RequestPanel
            heading="Du möchtest einen Termin vereinbaren?"
            aside={
              <>
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
                <PriceBlock
                  large
                  price={{
                    amount: EINZELBERATUNG.price.amount,
                    note: `60 Minuten Onlineberatung. ${EINZELBERATUNG.price.note}`,
                  }}
                />
              </>
            }
          >
            <p className="mb-9" style={bodyStyle}>
              Schreib mir kurz, worum es geht. Wir klären gemeinsam
              die nächsten Schritte und vereinbaren einen passenden
              Termin.
            </p>
            <Pill
              onClick={() => goTo("contact", EINZELBERATUNG.topic)}
              className="w-full sm:w-fit"
            >
              Beratung anfragen
              <ArrowIcon />
            </Pill>
          </RequestPanel>
        </div>
      </section>
    </main>
  );
}
