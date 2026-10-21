import { Navigate, useParams } from "react-router";
import { Container, F, G, GOLD_LITE, Reveal, TEXT } from "../components/shared";
import {
  ArrowIcon,
  CheckList,
  FactList,
  ImageSlot,
  Pill,
  TextLink,
} from "../components/offer-ui";
import { VORTRAEGE, type Vortrag } from "../content/angebote";
import { useGoToSection, usePageMeta } from "../navigation";
import {
  DetailHero,
  DetailSection,
  RequestPanel,
  G_CLOSING,
  bodyStyle,
} from "./DetailPage";

const EMAIL = "kontakt@lenamaier-ernaehrung.de";

const subheadStyle: React.CSSProperties = {
  fontFamily: F.heading,
  fontSize: "clamp(1.0625rem,1.6vw,1.1875rem)",
  color: TEXT,
};

export function VortragPage() {
  const { slug } = useParams();
  const v = VORTRAEGE.find((x) => x.slug === slug);
  if (!v) return <Navigate to="/#vortraege" replace />;
  return <VortragDetail key={v.slug} v={v} />;
}

function VortragDetail({ v }: { v: Vortrag }) {
  usePageMeta(`Vortrag: ${v.title} | Lena Maier`, v.metaDescription);
  const goTo = useGoToSection();
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Anfrage Vortrag: ${v.title}`,
  )}`;

  return (
    <main>
      <DetailHero
        back={{ to: "/#vortraege-karten", label: "Zu allen Vorträgen" }}
        backOnScroll
        eyebrow={`Vortrag · ${v.audience}`}
        title={v.title}
      >
        {v.intro.map((t) => (
          <p key={t} style={bodyStyle}>
            {t}
          </p>
        ))}
      </DetailHero>

      {/* Title image */}
      {/* hero ends on the medium tone, the next section starts on it */}
      <div style={{ background: "rgb(90,80,78)" }}>
        <Container>
          <Reveal>
            <div
              className="rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
              style={{ border: `1px solid ${GOLD_LITE}35` }}
            >
              <ImageSlot src={v.image} alt={v.imageAlt} eager />
            </div>
          </Reveal>
        </Container>
      </div>

      <DetailSection
        label="Im Vortrag"
        heading="Inhalt & Themen"
        gradient={G.about}
      >
        <Reveal className="mx-auto flex justify-center">
          <div className="w-fit max-w-full">
            <CheckList items={v.topics} />
          </div>
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <h3 className="font-semibold mb-6" style={subheadStyle}>
            
          </h3>
          <FactList
            items={[
              {
                label: "Zielgruppe",
                text: (
                  <>
                    {v.audienceText}
                    {v.audienceNote && (
                      <span className="block mt-3">{v.audienceNote}</span>
                    )}
                  </>
                ),
              },
              {
                label: "Dauer",
                text: "60 Minuten: etwa 45 Minuten Vortrag und 15 Minuten für Fragen und Austausch",
              },
              {
                label: "Durchführung",
                text: "Online oder vor Ort nach Vereinbarung",
              },
              { label: "Preis", text: "Auf Anfrage" },
            ]}
          />
        </Reveal>
      </DetailSection>

      <section
        style={{ backgroundImage: G_CLOSING }}
        className="py-20 md:py-28"
      >
        <Container narrow>
          <RequestPanel heading="Interesse an diesem Vortrag?">
            <div className="flex flex-col gap-4 mb-9">
              <p style={bodyStyle}>
                Sie möchten diesen Vortrag für Ihr Unternehmen, Ihren
                Verein oder Ihre Organisation buchen?
              </p>
              <p style={bodyStyle}>
                Schreiben Sie mir gerne, wann Ihre Veranstaltung
                stattfinden soll und ob Sie eine Durchführung online
                oder vor Ort wünschen.
              </p>
              <p style={bodyStyle}>
                Ich freue mich auf Ihre Anfrage und erstelle Ihnen ein
                passendes Angebot.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-7">
              <Pill
                onClick={() => goTo("contact", `den Vortrag „${v.title}“`)}
                className="w-full sm:w-fit"
              >
                Vortrag anfragen
                <ArrowIcon />
              </Pill>
              <TextLink href={mailto} className="self-center sm:self-auto">
                Oder direkt per E-Mail
              </TextLink>
            </div>
          </RequestPanel>

          <div className="mt-12 text-center">
            <TextLink to="/#vortraege-karten" back>
              Zu allen Vorträgen
            </TextLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
