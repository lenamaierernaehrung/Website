import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import {
  Link,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router";
import svgPaths from "@/imports/ErnahrungsberatungLenaMaier/svg-rf8dr8pybf";
import svgScroll from "@/imports/ScrollIndicator/svg-axvrxmtrd7";
import imgLenaMaier from "@/imports/ErnahrungsberatungLenaMaier/d5d32fa9064166e615e6332edb6bc5c225bc6936.png";
import {
  CARD_DARK,
  Container,
  F,
  FeatureCard,
  G,
  GOLD,
  GOLD_LITE,
  GhostBtn,
  GoldLine,
  LeafLogo,
  PrimaryBtn,
  Reveal,
  SectionHeading,
  SectionLabel,
  TEXT,
} from "./components/shared";
import { Services, Vortraege } from "./components/Offers";
import { CoachingPage } from "./pages/CoachingPage";
import { EinzelberatungPage } from "./pages/EinzelberatungPage";
import { VortragPage } from "./pages/VortragPage";
import {
  useGoToSection,
  usePageMeta,
  type ContactState,
} from "./navigation";

// ────────────────────────────────────────────────────────────────
// NAV
// ────────────────────────────────────────────────────────────────
function Nav({
  onScrollTo,
}: {
  onScrollTo: (id: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        setNavVisible(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > lastScrollY.current && !menuOpen) {
        setNavVisible(false);
      } else if (currentY < lastScrollY.current) {
        setNavVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) setNavVisible(true);
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "Über mich", id: "about" },
    { label: "Angebot", id: "services" },
    { label: "Vorträge", id: "vortraege" },
    { label: "Kontakt", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: navVisible ? 1 : 0, y: navVisible ? 0 : -24 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4"
        style={{ pointerEvents: navVisible ? "auto" : "none" }}
      >
        <div
          className="flex items-center justify-between px-4 sm:px-6 lg:px-8 rounded-full"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            height: 68,
            backdropFilter: "blur(24px) saturate(1.6)",
            WebkitBackdropFilter: "blur(24px) saturate(1.6)",
            background: scrolled
              ? "linear-gradient(135deg, rgba(25,20,18,0.88), rgba(25,20,18,0.68))"
              : "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
            border: `1px solid ${scrolled ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.14)"}`,
            boxShadow: scrolled
              ? "0 18px 50px rgba(0, 0, 0, 0.28)"
              : "0 10px 30px rgba(0, 0, 0, 0.16)",
            transition: "all 0.4s ease",
          }}
        >
          <button
            onClick={() => {
              if (pathname === "/")
                window.scrollTo({ top: 0, behavior: "smooth" });
              else navigate("/");
              setMenuOpen(false);
            }}
            className="flex items-center gap-2.5 focus:outline-none"
            aria-label="Zur Startseite"
          >
            <LeafLogo size={34} />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10">
            {links.map((l) => (
              <NavLink
                key={l.id}
                label={l.label}
                onClick={() => onScrollTo(l.id)}
              />
            ))}
            <motion.button
              onClick={() => onScrollTo("contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full px-5 py-2 min-h-[40px] cursor-pointer"
              style={{
                background: `${GOLD}30`,
                border: `1px solid ${GOLD}60`,
                fontFamily: F.body,
                fontSize: 15,
                color: TEXT,
              }}
            >
              Erstgespräch vereinbaren
            </motion.button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] focus:outline-none"
            aria-label={
              menuOpen ? "Menü schließen" : "Menü öffnen"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="block h-[1.5px] w-5 transition-all duration-300 origin-center rounded-full"
              style={{
                background: TEXT,
                transform: menuOpen
                  ? "translateY(6.5px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block h-[1.5px] w-5 transition-all duration-200 rounded-full"
              style={{
                background: TEXT,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-[1.5px] w-5 transition-all duration-300 origin-center rounded-full"
              style={{
                background: TEXT,
                transform: menuOpen
                  ? "translateY(-6.5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-40 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "all" : "none",
          background: "rgba(35,30,29,0.97)",
          backdropFilter: "blur(24px)",
          transition: `opacity 0.35s ease, visibility 0s linear ${menuOpen ? "0s" : "0.35s"}`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l, i) => (
            <motion.button
              key={l.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 16,
              }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              onClick={() => {
                onScrollTo(l.id);
                setMenuOpen(false);
              }}
              className="text-2xl tracking-wide transition-colors duration-200 min-h-[48px] px-4"
              style={{
                fontFamily: F.body,
                color: TEXT,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {l.label}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : 16,
            }}
            transition={{ delay: 0.28, duration: 0.4 }}
            onClick={() => {
              onScrollTo("contact");
              setMenuOpen(false);
            }}
            className="mt-4 rounded-full px-8 py-3 min-h-[52px] cursor-pointer"
            style={{
              background: `${GOLD}30`,
              border: `1px solid ${GOLD}60`,
              fontFamily: F.body,
              fontSize: 18,
              color: TEXT,
            }}
          >
            Erstgespräch vereinbaren
          </motion.button>
        </div>
      </div>
    </>
  );
}

function NavLink({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative pb-0.5 focus:outline-none"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: F.body,
        fontSize: 15.5,
        color: hovered ? GOLD : TEXT,
        transition: "color .2s",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          width: hovered ? "100%" : "0%",
          background: GOLD,
          transition: "width .28s cubic-bezier(0.16,1,0.3,1)",
          display: "block",
        }}
      />
    </button>
  );
}

// ────────────────────────────────────────────────────────────────
// HERO
// ────────────────────────────────────────────────────────────────
function Hero({
  onScrollTo,
}: {
  onScrollTo: (id: string) => void;
}) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      style={{ backgroundImage: G.hero, minHeight: "100svh" }}
      className="relative flex flex-col items-center justify-center text-center pt-[68px] px-4 sm:px-6"
    >
      <div style={{ maxWidth: 680, width: "100%" }}>
        <Reveal>
          {/* Wraps on small screens (see .hero-tagline in globals.css) */}
          <p
            className="hero-tagline mb-8 uppercase"
            style={{
              fontFamily: F.sc,
              color: GOLD,
            }}
          >
            {/* non-breaking space keeps each "·" with the word before it */}
            individuell{"\u00A0"}· alltagstauglich{"\u00A0"}·
            wissenschaftlich fundiert
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            className="font-bold uppercase mb-2 leading-[1.1] w-full"
            style={{
              fontFamily: F.heading,
              // Same size as before wherever the word fits; below
              // ~430px it scales down so "Ernährungsberatung" stays
              // inside the viewport.
              fontSize:
                "clamp(1.15rem, min(6.1vw, max(1.5rem, 5.5vw)), 3rem)",
              color: TEXT,
              letterSpacing: "0.025em",
              wordBreak: "keep-all",
              overflowWrap: "normal",
            }}
          >
            Ernährungsberatung
          </h1>
          <p
            className="uppercase mb-10"
            style={{
              fontFamily: F.sc,
              fontSize: "clamp(1rem, 3vw, 1.75rem)",
              color: TEXT,
              letterSpacing: "clamp(0.3rem, 1.4vw, 1rem)",
            }}
          >
            Lena Maier
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <GoldLine className="mb-10 max-w-[200px] mx-auto" />
          <p
            className="mb-12 leading-relaxed mx-auto"
            style={{
              fontFamily: F.body,
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              color: TEXT,
              opacity: 0.82,
              maxWidth: 480,
            }}
          >
            Veränderung beginnt nicht auf dem Teller. Sondern im
            Kopf.
          </p>
        </Reveal>

        <Reveal
          delay={0.28}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <PrimaryBtn onClick={() => onScrollTo("contact")}>
            <span
              className="font-semibold"
              style={{
                fontFamily: F.sc,
                fontSize: "clamp(0.9375rem,1.3vw,1rem)",
                color: TEXT,
                padding: "0 0 0 clamp(6px,1vw,12px)",
              }}
            >
              Kostenloses Erstgespräch
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{
                marginLeft: -6,
                marginRight: "clamp(6px,1vw,12px)",
              }}
            >
              <path
                d="M3 8h10M8.5 4l4 4-4 4"
                stroke={TEXT}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </PrimaryBtn>
          <GhostBtn onClick={() => onScrollTo("services")}>
            <span
              className="font-semibold"
              style={{
                fontFamily: F.sc,
                fontSize: "clamp(0.9375rem,1.3vw,1rem)",
                color: TEXT,
              }}
            >
              Angebot erkunden
            </span>
          </GhostBtn>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ opacity: hasScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: hasScrolled ? "none" : "auto" }}
      >
        <svg
          width="72"
          height="44"
          viewBox="89 145 540 360"
          fill="none"
        >
          {/* Group handles synchronized fade-out for all three arcs */}
          <motion.g
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.62, 0.8, 1],
            }}
          >
            {(
              [
                { d: svgScroll.p27bdbd00, t0: 0, t1: 0.24 },
                { d: svgScroll.p8abad10, t0: 0.09, t1: 0.33 },
                { d: svgScroll.p237f5630, t0: 0.18, t1: 0.43 },
              ] as { d: string; t0: number; t1: number }[]
            ).map(({ d, t0, t1 }, i) => (
              <motion.path
                key={i}
                d={d}
                stroke={GOLD}
                strokeWidth="9"
                strokeLinecap="round"
                animate={{ pathLength: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, t0, t1, 0.8, 0.801],
                }}
              />
            ))}
          </motion.g>
        </svg>
      </motion.div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// ABOUT
// ────────────────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="about"
      style={{ backgroundImage: G.about }}
      className="py-0 md:pt-8 md:pb-32 scroll-mt-[90px]"
    >
      <Container>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-end">
          {/* Photo */}
          <Reveal className="shrink-0 w-full md:w-auto flex justify-center">
            <div
              className="relative"
              style={{
                width: "clamp(280px, 55vw, 500px)",
                aspectRatio: "430/526",
              }}
            >
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{ border: `1px solid ${GOLD_LITE}35` }}
              >
                <img
                  src={imgLenaMaier}
                  alt="Lena Maier"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div className="flex-1">
            <Reveal>
              <SectionLabel>Über mich</SectionLabel>
              <SectionHeading className="mb-6">
                Hey, ich bin Lena
              </SectionHeading>
              <GoldLine className="mb-8 max-w-[160px]" />
            </Reveal>
            <Reveal
              delay={0.12}
              className="flex flex-col gap-4"
            >
              {[
                "Ich bin zertifizierte Ernährungsberaterin mit Fokus auf eine Ernährungsweise, die im echten Leben funktioniert, im stressigen Alltag genauso wie am Wochenende. Mein Ansatz: weniger starre Regeln, dafür mehr Verständnis, um schlaue Entscheidungen treffen zu können.",
                "Ich weiß, wie es ist, wenn die Gedanken ständig ums Essen kreisen. Essen war für mich schon immer mehr als nur Nahrung. Und lange habe ich mich dabei ertappt, ständig zu überlegen, was ich als nächstes esse, während ich gleichzeitig dachte, ich sei zu dick. Diese Schleife kenne ich aus eigener Erfahrung, und genau deshalb verstehe ich Menschen, die mit ihrem Gewicht oder ihrem Verhältnis zum Essen kämpfen.",
                "Ich arbeite in der persönlichen Beratung sowie in Vorträgen für Schulen, Vereine und Unternehmen. Denn Ernährung wird uns nirgends beigebracht, dabei sollte sie eigentlich jeden von uns beschäftigen.",
                "Am Ende wollen wir doch alle dasselbe: Gesund alt werden und uns im eigenen Körper wohlfühlen.",
              ].map((t, i) => (
                <p
                  key={i}
                  className="leading-relaxed"
                  style={{
                    fontFamily: F.body,
                    fontSize:
                      "clamp(0.9375rem,1.25vw,1.0625rem)",
                    color: TEXT,
                    opacity: 0.88,
                  }}
                >
                  {t}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// PHILOSOPHY
// ────────────────────────────────────────────────────────────────
function Philosophy() {
  const cards = [
    {
      title:
        "Wissen schafft Gewohnheiten. Gewohnheiten schaffen Gesundheit",
      body: "Du sollst nicht blind irgendwas befolgen, sondern verstehen, wie Ernährung funktioniert – damit du selbst gute Entscheidungen treffen kannst.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10.5 17.251C10.8912 17.598 11.367 17.8358 11.8795 17.9401C12.3919 18.0445 12.9228 18.0119 13.4186 17.8456C13.9144 17.6792 14.3575 17.385 14.7033 16.9927C15.0491 16.6004 15.2853 16.1238 15.388 15.611L15.425 15.425C16.0852 15.2854 16.6855 14.9436 17.1425 14.4472C17.5995 13.9507 17.8906 13.3243 17.9752 12.6549C18.0599 11.9854 17.934 11.3062 17.6149 10.7116C17.2959 10.1171 16.7996 9.6366 16.195 9.337C16.4487 9.10297 16.6512 8.81892 16.7898 8.50277C16.9283 8.18661 16.9999 7.84518 17 7.5V7.302C16.9997 6.6783 16.7835 6.07394 16.3881 5.5916C15.9927 5.10925 15.4425 4.77866 14.831 4.656L14.425 4.576L14.299 3.948C14.2194 3.5497 14.0409 3.17781 13.7799 2.86652C13.519 2.55524 13.184 2.31455 12.8057 2.16658C12.4274 2.01862 12.018 1.96812 11.6151 2.01974C11.2122 2.07137 10.8288 2.22344 10.5 2.462V17.251ZM9.5 2.461C9.17123 2.22221 8.78769 2.06994 8.38467 2.01819C7.98164 1.96644 7.57207 2.01688 7.19365 2.16487C6.81522 2.31285 6.48008 2.55363 6.21907 2.86505C5.95807 3.17647 5.77957 3.54853 5.7 3.947L5.575 4.575L5.169 4.656C4.55748 4.77866 4.00729 5.10925 3.6119 5.5916C3.2165 6.07394 3.00029 6.6783 3 7.302V7.5C3 8.226 3.31 8.88 3.805 9.337C3.20039 9.6366 2.70409 10.1171 2.38506 10.7116C2.06603 11.3062 1.94011 11.9854 2.02477 12.6549C2.10944 13.3243 2.40051 13.9507 2.85753 14.4472C3.31455 14.9436 3.91484 15.2854 4.575 15.425L4.612 15.61C4.71459 16.1229 4.95066 16.5996 5.29638 16.992C5.6421 17.3845 6.08523 17.6788 6.58104 17.8452C7.07686 18.0117 7.60782 18.0444 8.12032 17.9401C8.63282 17.8357 9.10872 17.598 9.5 17.251V2.461Z"
            fill={GOLD}
          />
        </svg>
      ),
    },
    {
      title: "Kleine Entscheidungen, große Wirkung",
      body: "Nicht der perfekte Plan macht den Unterschied – sondern das, was du jeden Tag machst. Kleine Gewohnheiten summieren sich.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 21.6736 18.9284"
          fill="none"
        >
          <path
            d="M1.33662 3.5C3.16862 1.353 8.37712 6.91 10.8366 10C13.2966 6.91 18.5051 1.353 20.3366 3.5C20.6761 3.825 21.0581 4.9385 19.8366 6.5C19.4976 6.988 18.9296 8.353 19.3366 10.5C19.3366 11.0695 18.7791 11.976 16.3366 11C17.5241 11.8135 19.7616 14.048 18.3366 16C16.9796 17.708 13.8191 19.7285 11.8366 15L10.8366 13L9.83662 15C7.85462 19.7285 4.69362 17.708 3.33662 16C1.91162 14.048 4.14962 11.8135 5.33662 11C2.89412 11.976 2.33662 11.0695 2.33662 10.5C2.74362 8.353 2.17612 6.988 1.83662 6.5C0.615621 4.9385 0.997621 3.825 1.33662 3.5Z"
            fill={GOLD}
            stroke={GOLD}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8526 9C10.6036 6.432 13.2931 1 15.3366 1"
            stroke={GOLD}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8206 9C11.0696 6.432 8.38012 1 6.33662 1"
            stroke={GOLD}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Wer nichts verändert, verändert auch nichts",
      body: "Kurzfristige Lösungen führen zu kurzfristigen Ergebnissen. Ich arbeite mit dir an Veränderungen, die dauerhaft in deinem Leben funktionieren.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill={GOLD}
          />
        </svg>
      ),
    },
    {
      title: "Keine Verbote",
      body: "Du musst nichts komplett streichen. Es geht nicht um gut oder schlecht – sondern darum, bewusstere Entscheidungen zu treffen und dabei Freude am Essen zu behalten.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23ZM1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22ZM16.03 15C16.03 7 1 7 1 15H16.03ZM1 17H16V19H1V17Z"
            fill={GOLD}
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{ backgroundImage: G.philosophy }}
      className="py-24 md:py-32"
    >
      <Container>
        <Reveal className="text-center mb-16">
          <SectionLabel>Werte</SectionLabel>
          <SectionHeading>Meine Philosophie</SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <FeatureCard
                title={c.title}
                body={c.body}
                icon={c.icon}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-20">
          <div className="text-center py-8 md:py-12">
            <p
              className="italic leading-relaxed mb-5"
              style={{
                fontFamily: F.body,
                fontSize: "clamp(1.125rem, 2.5vw, 1.625rem)",
                color: TEXT,
                lineHeight: 1.65,
              }}
            >
              "Die beste Ernährungsweise ist die, die du
              dauerhaft leben kannst"
            </p>
            <p
              style={{
                fontFamily: F.sc,
                fontSize: 13,
                color: GOLD,
                letterSpacing: "0.1em",
              }}
            >
              — Lena Maier
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}


// ────────────────────────────────────────────────────────────────
// CONTACT
// ────────────────────────────────────────────────────────────────
function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "kontakt@lenamaier-ernaehrung.de";
  // Coming from a detail page: name the chosen offer in the WhatsApp draft
  const topic = (useLocation().state as ContactState)?.topic;
  const whatsappUrl = topic
    ? `https://wa.me/4915732419806?text=${encodeURIComponent(
        `Hallo Lena, ich interessiere mich für ${topic}.`,
      )}`
    : "https://wa.me/4915732419806";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  return (
    <section
      id="contact"
      style={{ backgroundImage: G.contact }}
      className="pt-0 pb-16 md:pt-8 md:pb-56 scroll-mt-[90px]"
    >
      <Container narrow>
        <Reveal className="text-center mb-14">
          <SectionLabel>Kontakt</SectionLabel>
          <SectionHeading className="mb-4">
            Ich freue mich von dir zu hören!
          </SectionHeading>
          <p
            style={{
              fontFamily: F.body,
              fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
              color: TEXT,
              opacity: 0.75,
            }}
          >
            Ganz unverbindlich und kostenlos.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: CARD_DARK,
              border: `1px solid ${GOLD}35`,
            }}
          >
            {/* WhatsApp */}
            <div className="p-8 md:p-12">
              <h3
                className="text-center font-medium mb-2"
                style={{
                  fontFamily: F.heading,
                  fontSize: "clamp(1.0625rem,1.8vw,1.375rem)",
                  color: TEXT,
                }}
              >
                Am liebsten per WhatsApp
              </h3>
              <p
                className="text-center mb-8"
                style={{
                  fontFamily: F.body,
                  fontSize: "clamp(0.875rem,1.1vw,0.9375rem)",
                  color: TEXT,
                  opacity: 0.65,
                }}
              >
                Ich melde mich in der Regel innerhalb von 24
                Stunden bei dir zurück.
              </p>
              <div className="flex justify-center">
                <PrimaryBtn
                  onClick={() =>
                    window.open(
                      whatsappUrl,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 19.916 19.8382"
                    fill="none"
                    style={{ marginLeft: 12, marginRight: -8 }}
                  >
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p6657e40}
                      fill={GOLD}
                      fillRule="evenodd"
                    />
                  </svg>
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: F.sc,
                      fontSize: "clamp(0.9375rem,1.3vw,1rem)",
                      color: TEXT,
                      padding:
                        "0 clamp(12px,1.5vw,20px) 0 clamp(6px,1vw,12px)",
                    }}
                  >
                    Jetzt per WhatsApp kontaktieren
                  </span>
                </PrimaryBtn>
              </div>
            </div>

            {/* Divider */}
            <div className="px-8 md:px-12">
              <div className="flex items-center gap-4">
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: `${GOLD}20`,
                  }}
                />
                <span
                  style={{
                    fontFamily: F.body,
                    fontSize: 12,
                    color: TEXT,
                    opacity: 0.4,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  oder
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: `${GOLD}20`,
                  }}
                />
              </div>
            </div>

            {/* Email row */}
            <div className="p-4 md:p-6">
              <motion.button
                type="button"
                onClick={copy}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center gap-4 rounded-2xl px-5 py-4"
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: copied ? `${GOLD}18` : "#4b4341",
                  border: `1px solid ${copied ? `${GOLD}70` : "transparent"}`,
                  transition: "background 0.2s, border-color 0.2s",
                }}
                title="E-Mail-Adresse kopieren"
              >
                {/* Icon */}
                <div
                  className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: `${GOLD}18` }}
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 25 20"
                    fill="none"
                  >
                    <path d={svgPaths.p399b4b80} fill={GOLD} />
                    <path d={svgPaths.p37429e00} fill={GOLD} />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="mb-0.5"
                    style={{
                      fontFamily: F.heading,
                      fontSize: 11,
                      color: TEXT,
                      opacity: 0.55,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {copied ? "E-Mail kopiert" : "E-Mail kopieren"}
                  </p>
                  <p
                    className="truncate"
                    style={{
                      fontFamily: F.body,
                      fontSize:
                        "clamp(0.8125rem,1.2vw,0.9375rem)",
                      color: TEXT,
                    }}
                  >
                    {email}
                  </p>
                </div>

                <div
                  className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl"
                  style={{
                    background: copied
                      ? `${GOLD}25`
                      : "transparent",
                    border: `1px solid ${GOLD}30`,
                    transition: "background 0.2s",
                  }}
                  aria-hidden="true"
                >
                  {copied ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke={GOLD}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="9"
                        height="9"
                        rx="1.5"
                        stroke={TEXT}
                        strokeWidth="1.4"
                        opacity="0.7"
                      />
                      <path
                        d="M5.5 5.5h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z"
                        stroke={TEXT}
                        strokeWidth="1.4"
                        opacity="0.7"
                      />
                    </svg>
                  )}
                </div>
                <span className="sr-only" aria-live="polite">
                  {copied ? "E-Mail-Adresse kopiert" : ""}
                </span>
              </motion.button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// FOOTER
// ────────────────────────────────────────────────────────────────
function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <footer style={{ backgroundImage: G.footer }}>
      <div style={{ borderTop: `2px solid ${GOLD_LITE}40` }}>
        <Container className="pt-16 pb-0">
          {/* Three-column row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-12 items-start justify-items-center">
            {/* Brand — centered on mobile */}
            <button
              onClick={() =>
                pathname === "/"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : navigate("/")
              }
              aria-label="Zur Startseite"
              className="focus:outline-none w-fit text-center mx-auto"
            >
              <p
                className="font-semibold leading-[1.4]"
                style={{
                  fontFamily: F.heading,
                  fontSize: "clamp(16px,1.8vw,20.656px)",
                  color: TEXT,
                }}
              >
                Ernährungsberatung
              </p>
              <p
                style={{
                  fontFamily: F.sc,
                  fontSize: "clamp(12px,1.4vw,15px)",
                  color: TEXT,
                  letterSpacing: "clamp(4px,0.6vw,7.6px)",
                  marginTop: 4,
                }}
              >
                Lena Maier
              </p>
            </button>

            {/* Kontakt — centered on mobile */}
            <div className="text-center">
              <p
                className="mb-4 uppercase"
                style={{
                  fontFamily: F.heading,
                  fontWeight: 700,
                  fontSize: 13,
                  color: TEXT,
                  letterSpacing: "3.1px",
                }}
              >
                Kontakt
              </p>
              <div className="flex flex-col gap-2 items-center">
                <a
                  href="mailto:kontakt@lenamaier-ernaehrung.de"
                  style={{
                    fontFamily: F.body,
                    fontSize: 15,
                    color: TEXT,
                    textDecoration: "none",
                    opacity: 0.85,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "1")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = "0.85")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.createElement("textarea");
                    el.value = "kontakt@lenamaier-ernaehrung.de";
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand("copy");
                    document.body.removeChild(el);
                  }}
                >
                  kontakt@lenamaier-ernaehrung.de
                </a>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: 15,
                  color: TEXT,
                  opacity: 0.75,
                }}
              >
                Alfdorf, Deutschland
              </p>
            </div>
          </div>

          {/* Rechtliches — centered on mobile */}
          <div className="text-center">
            <p
              className="mb-4 uppercase"
              style={{
                fontFamily: F.heading,
                fontWeight: 700,
                fontSize: 13,
                color: TEXT,
                letterSpacing: "3.1px",
              }}
            >
              Rechtliches
            </p>
            <div className="flex flex-col gap-0.5 items-center">
              {(
                [
                  ["Impressum", "impressum"],
                  ["Datenschutz", "datenschutz"],
                  ["AGB", "agb"],
                ] as [string, LegalOnlyId][]
              ).map(([label, id]) => (
                <Link
                  key={id}
                  to={`/${id}`}
                  className="py-1.5 px-2"
                  style={{
                    fontFamily: F.body,
                    fontSize: 15,
                    color: TEXT,
                    opacity: 0.85,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "1")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = "0.85")
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(244,244,244,0.15)",
          }}
          className="py-5 flex flex-col items-center gap-1.5"
        >
          <p
            style={{
              fontFamily: F.body,
              fontSize: 15,
              color: TEXT,
              opacity: 0.75,
            }}
          >
            © 2026 Lena Maier. Alle Rechte vorbehalten.
          </p>
          <p
            className="flex items-center gap-1.5"
            style={{
              fontFamily: F.body,
              fontSize: 15,
              color: TEXT,
              opacity: 0.75,
            }}
          >
            Gemacht mit
            <svg
              width="13"
              height="13"
              viewBox="0 0 16.418 16.633"
              fill="none"
            >
              <path
                d="M8.209 14.5C5.4 12.1 1 8.9 1 5.8 1 3.7 2.7 2 4.8 2c1.1 0 2.2.5 3.4 1.9C9.4 2.5 10.5 2 11.6 2c2.1 0 3.8 1.7 3.8 3.8 0 3.1-4.4 6.3-7.2 8.7z"
                stroke={TEXT}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              />
            </svg>
            für deine Gesundheit
          </p>
        </div>
        </Container>
      </div>
    </footer>
  );
}


// ────────────────────────────────────────────────────────────────
// LEGAL PAGES
// ────────────────────────────────────────────────────────────────
type LegalOnlyId = "impressum" | "datenschutz" | "agb";
const LEGAL_CONTENT: Record<
  LegalOnlyId,
  {
    title: string;
    sections: { heading?: string; body: string }[];
  }
> = {
  impressum: {
    title: "Impressum",
    sections: [
      {
        heading: "Angaben gemäß § 5 TMG",
        body: "Lena Marie Maier\nErnährungsberatung\n\n Hans-Vom-Holtz-Straße 12, 73553 Alfdorf, Deutschland\n\nTelefon: +49 1573 2419806\nE-Mail: kontakt@lenamaier-ernaehrung.de",
      },
      {
        heading:
          "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        body: "Lena Marie Maier\n Hans-Vom-Holtz-Straße 12, 73553 Alfdorf, Deutschland",
      },

      {
        heading: "Berufsbezeichnung",
        body: "Ernährungsberaterin\n\nDie Berufsbezeichnung wurde in Deutschland verliehen.",
      },
      {
        heading: "Haftung für Inhalte",
        body: "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
      },
      {
        heading: "Haftung für Links",
        body: "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Deshalb kann für diese fremden Inhalte keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
      },
      {
        heading: "Urheberrecht",
        body: "Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der jeweiligen Urheberin bzw. Rechteinhaberin.",
      },
    ],
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    sections: [
      {
        heading: "1. Datenschutz auf einen Blick",
        body: "Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.\n\nVerantwortliche Stelle\n Lena Marie Maier \n Hans-Vom-Holtz-Straße, 12 \n 73553, Alfdorf \nE-Mail: kontakt@lenamaier-ernaehrung.de \nTelefon: +49 1573 2419806",
      },
      {
        heading: "2. Datenerfassung auf dieser Website",
        body: "Cookies: Diese Website nutzt technisch notwendige Cookies, die zur Anzeige der Website erforderlich sind. Andere (optionale) Cookies werden nur nach Ihrer ausdrücklichen Einwilligung über unseren Consent-Banner gesetzt.\n\nServer-Log-Files: Der Provider der Seiten erhebt automatisch Informationen in sogenannten Server-Log-Files (IP-Adresse, Browsertyp, Datum/Uhrzeit). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen der Stabilität und Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO).",
      },
      {
        heading:
          "3. Verarbeitung von Gesundheitsdaten (Ernährungsberatung)",
        body: "Im Rahmen meiner Beratung verarbeite ich besondere Kategorien personenbezogener Daten – konkret Gesundheitsdaten (z. B. Körpergewicht, Vorerkrankungen, Laborwerte).\n\nZweck: Erbringung der Ernährungsberatung und Dokumentation.\nRechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) i.V.m. Art. 9 Abs. 2 lit. h DSGVO (Gesundheitsvorsorge).\nSpeicherdauer: Gemäß gesetzlicher Aufbewahrungsfristen für medizinische Dokumentationen (in der Regel 10 Jahre).",
      },
      {
        heading: "4. Hosting und Infrastruktur",
        body: "Vercel & GitHub: Die Website wird über Vercel (USA) gehostet. Ein EU-US Data Privacy Framework ist vorhanden.\nIONOS: Domain-Verwaltung durch IONOS SE (Deutschland). Ein AVV ist abgeschlossen.",
      },
      {
        heading: "5. Kommunikation via WhatsApp Business",
        body: "Ich nutze WhatsApp Business für die organisatorische Kommunikation.\n\nWichtiger Hinweis: Bitte senden Sie keine sensiblen Gesundheitsdaten über diesen Kanal.\nRechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung durch aktives Anschreiben).",
      },
      {
        heading: "6. Cloud-Dienste (Google Workspace)",
        body: "Die Verwaltung von Klientendaten erfolgt via Google Workspace. Es wurde ein AVV inklusive EU-Standardvertragsklauseln abgeschlossen, um ein Schutzniveau gemäß EU-Standards zu gewährleisten.",
      },
      {
        heading: "7. Ihre Rechte als betroffene Person",
        body: "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Zudem haben Sie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Kontaktieren Sie mich hierzu bitte unter der oben genannten E-Mail-Adresse.\n\nBeschwerderecht: Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde (Landesbeauftragte für den Datenschutz) zu beschweren.",
      },
    ],
  },
  agb: {
    title: "Allgemeine Geschäftsbedingungen",
    sections: [
      {
        heading: "1. Geltungsbereich",
        body: "Diese AGB gelten für alle Verträge über Ernährungsberatungsleistungen zwischen mir, Lena Marie Maier, und dem Klienten / der Klientin.",
      },
      {
        heading: "2. Vertragsgegenstand und Leistungsumfang",
        body: "Gegenstand der Beratung ist die individuelle Ernährungsberatung zur Gesundheitsförderung und Ernährungsoptimierung.\n\nKeine Heilversprechen: Meine Beratung dient der Prävention und der allgemeinen gesundheitlichen Information. Sie ersetzt keine ärztliche Diagnose, Therapie oder Behandlung. Ich stelle keine medizinischen Diagnosen. Bei gesundheitlichen Beschwerden ist der Gang zum Arzt zwingend erforderlich.\n\nEigenverantwortung: Der Klient entscheidet selbst, welche Informationen er umsetzt. Die Beratung stellt lediglich eine Empfehlung dar.",
      },
      {
        heading: "3. Zustandekommen des Vertrages",
        body: "Der Vertrag kommt durch das Angebot der Beratung (z.B. per E-Mail oder mündlich) und die Bestätigung durch den Klienten zustande.",
      },
      {
        heading: "4. Vergütung und Zahlungsbedingungen",
        body: "Die Vergütung richtet sich nach der aktuellen Preisliste oder der individuellen Honorarvereinbarung.\n\nAlle Beträge verstehen sich, sofern nicht anders ausgewiesen, als Endpreise.\n\nDie Zahlung ist innerhalb von 14 Tagen nach Rechnungsstellung fällig.",
      },
      {
        heading: "5. Absage- und Stornierungsregelungen",
        body: "Termine müssen im Interesse eines reibungslosen Ablaufs verbindlich eingehalten werden.\n\nAbsage: Termine können bis zu 24 Stunden vor dem vereinbarten Termin kostenfrei abgesagt oder verschoben werden.\n\nVerspätung/Nichtwahrnehmung: Bei einer späteren Absage oder dem Nichterscheinen zum Termin wird das volle Honorar (bzw. ein Ausfallhonorar in Höhe von 100%) in Rechnung gestellt, sofern der Termin nicht anderweitig vergeben werden konnte.",
      },
      {
        heading: "6. Datenschutz",
        body: "Die Speicherung und Verarbeitung der personenbezogenen Daten erfolgt gemäß der Datenschutzerklärung, die Bestandteil dieser AGB ist. Mit Vertragsabschluss willigt der Klient in die Speicherung seiner Daten zur Erbringung der Dienstleistung ein.",
      },
      {
        heading: "7. Haftung",
        body: "Meine Haftung für einfache Fahrlässigkeit ist ausgeschlossen, sofern keine wesentlichen Vertragspflichten verletzt wurden, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht. Diese Haftungsbeschränkung gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.",
      },
      {
        heading: "8. Schlussbestimmungen",
        body: "Es gilt das Recht der Bundesrepublik Deutschland.\nGerichtsstand ist 73553 Alfdorf, Deutschland .\n\nSollte eine Bestimmung dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam.",
      },
    ],
  },
};

function LegalPage({ id }: { id: LegalOnlyId }) {
  const content = LEGAL_CONTENT[id];
  const navigate = useNavigate();
  const location = useLocation();
  usePageMeta(
    `${content.title} | Ernährungsberatung Lena Maier`,
    `${content.title} der Ernährungsberatung Lena Maier.`,
  );
  // Back to where the visitor came from, or home on a direct visit
  const onBack = () =>
    location.key !== "default" ? navigate(-1) : navigate("/");

  return (
    <div style={{ minHeight: "100svh", background: "rgb(43,38,37)" }}>

      {/* Top bar */}
      <div
        className="sticky top-0 z-50"
        style={{
          background: "rgba(35,30,29,0.96)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${GOLD}22`,
        }}
      >
        <div
          className="flex items-center gap-4 px-4 sm:px-6 lg:px-10"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            height: 64,
          }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2.5 focus:outline-none"
            style={{
              background: "none",
              border: "none",
              color: TEXT,
              fontFamily: F.body,
              fontSize: 15,
              opacity: 0.85,
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.opacity = "1")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.opacity = "0.85")
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5 4.5L7 10l5.5 5.5"
                stroke={TEXT}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Zurück
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding:
            "clamp(2rem,6vw,4rem) clamp(1rem,4vw,2rem) 5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h1
            className="mb-10 font-semibold"
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(1.625rem,4vw,2.25rem)",
              color: TEXT,
            }}
          >
            {content.title}
          </h1>
          <div className="flex flex-col gap-8">
            {content.sections.map((s, i) => (
              <div key={i}>
                {s.heading && (
                  <h2
                    className="mb-3 font-semibold"
                    style={{
                      fontFamily: F.heading,
                      fontSize: "clamp(1rem,2vw,1.1875rem)",
                      color: TEXT,
                    }}
                  >
                    {s.heading}
                  </h2>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {s.body.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: F.body,
                        fontSize: "clamp(0.9375rem,1.3vw,1rem)",
                        color: TEXT,
                        opacity: 0.82,
                        lineHeight: 1.75,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// APP
// ────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────
// PAGES & ROUTING
// ────────────────────────────────────────────────────────────────
function HomePage() {
  usePageMeta(
    "Ernährungsberatung Lena Maier | Beratung & Vorträge",
    "Persönliche Online-Ernährungsberatung mit Lena Maier: 8-Wochen-Begleitung, Einzelberatung für konkrete Fragen und Ernährungsvorträge für Unternehmen, Vereine und Bildungseinrichtungen.",
  );
  const goTo = useGoToSection();
  return (
    <main>
      <Hero onScrollTo={goTo} />
      <About />
      <Philosophy />
      <Services />
      <Vortraege />
      <Contact />
    </main>
  );
}

// Nav + footer around every content page
function SiteLayout() {
  const goTo = useGoToSection();
  return (
    <>
      <Nav onScrollTo={goTo} />
      <Outlet />
      <Footer />
    </>
  );
}

function RootLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; background: rgb(43,38,37); }
        img { display: block; max-width: 100%; }
        button { cursor: pointer; }
        button:focus-visible, a:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        button, a { transition: transform 0.18s cubic-bezier(0.16,1,0.3,1); }
        @media (hover: hover) {
          button:hover, a:hover { transform: scale(1.03); }
        }
      `}</style>
      <Outlet />
      {/* Top on new pages, saved position on back/forward, #hash targets */}
      <ScrollRestoration />
      <Analytics />
    </MotionConfig>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <SiteLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/8-wochen-coaching", element: <CoachingPage /> },
          { path: "/einzelberatung", element: <EinzelberatungPage /> },
          { path: "/vortraege/:slug", element: <VortragPage /> },
          { path: "/vortraege", element: <Navigate to="/#vortraege" replace /> },
        ],
      },
      { path: "/impressum", element: <LegalPage id="impressum" /> },
      { path: "/datenschutz", element: <LegalPage id="datenschutz" /> },
      { path: "/agb", element: <LegalPage id="agb" /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
