import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import svgPaths from "@/imports/ErnahrungsberatungLenaMaier/svg-rf8dr8pybf";
import svgScroll from "@/imports/ScrollIndicator/svg-axvrxmtrd7";
import imgLenaMaier from "@/imports/ErnahrungsberatungLenaMaier/d5d32fa9064166e615e6332edb6bc5c225bc6936.png";

// ── Design tokens ─────────────────────────────────────────────────
const GOLD = "#c9a66b";
const GOLD_LITE = "#ffe5c5";
const TEXT = "#f4f4f4";
const CARD_BG = "rgba(75,67,65,0.85)";
const CARD_DARK = "#282423";

// Each gradient starts where the previous one ended — no seams.
// Dark = rgb(43,38,37)  |  Medium = rgb(90,80,78)
const G = {
  hero: "linear-gradient(180deg, rgb(43,38,37) 0%, rgb(90,80,78) 100%)",
  about:
    "linear-gradient(180deg, rgb(90,80,78) 0%, rgb(43,38,37) 100%)",
  philosophy:
    "linear-gradient(180deg, rgb(43,38,37) 0%, rgb(90,80,78) 100%)",
  services:
    "linear-gradient(180deg, rgb(90,80,78) 0%, rgb(43,38,37) 100%)",
  why: "linear-gradient(180deg, rgb(43,38,37) 0%, rgb(90,80,78) 100%)",
  contact:
    "linear-gradient(180deg, rgb(90,80,78) 0%, rgb(43,38,37) 100%)",
  footer:
    "linear-gradient(180deg, rgb(43,38,37) 0%, rgb(90,80,78) 100%)",
};

// Shared font families
const F = {
  heading: "Montserrat, sans-serif",
  body: "Arsenal, sans-serif",
  sc: "'Arsenal SC', sans-serif",
};

// ── Container ────────────────────────────────────────────────────
function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}
      style={{ maxWidth: narrow ? 800 : 1120 }}
    >
      {children}
    </div>
  );
}

// ── Reveal animation ─────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ── Gold divider ─────────────────────────────────────────────────
function GoldLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${GOLD}40)`,
        }}
      />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <rect
          x="1.5"
          y="1.5"
          width="5"
          height="5"
          rx="1"
          fill={GOLD}
          opacity="0.6"
        />
      </svg>
      <div
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, ${GOLD}40, transparent)`,
        }}
      />
    </div>
  );
}

// ── Section label ────────────────────────────────────────────────
function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      className="uppercase tracking-[0.18em] mb-4"
      style={{
        fontFamily: F.sc,
        fontSize: 11,
        color: GOLD,
        letterSpacing: "0.18em",
      }}
    >
      {children}
    </p>
  );
}

// ── Section heading ──────────────────────────────────────────────
function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-semibold leading-[1.18] ${className}`}
      style={{
        fontFamily: F.heading,
        fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)",
        color: TEXT,
      }}
    >
      {children}
    </h2>
  );
}

// ── Leaf logo ────────────────────────────────────────────────────
function LeafLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: Math.round(size * 1.17),
        flexShrink: 0,
      }}
    >
      <svg
        style={{
          position: "absolute",
          left: size * 0.19,
          top: size * 0.095,
          width: size * 0.634,
          height: size * 0.966,
        }}
        fill="none"
        viewBox="0 0 26.6357 40.5566"
      >
        <defs>
          <linearGradient
            id="leafGrad"
            x1="15.6122"
            x2="3.95475"
            y1="-1.9017"
            y2="39.0019"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE5C5" />
            <stop offset="1" stopColor="#E2B578" />
          </linearGradient>
        </defs>
        <path d={svgPaths.p346db880} fill="url(#leafGrad)" />
      </svg>
    </div>
  );
}

// ── Primary button ───────────────────────────────────────────────
function PrimaryBtn({
  children,
  onClick,
  full = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  full?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-3 rounded-full cursor-pointer min-h-[52px] ${full ? "w-full" : ""} px-[8px] py-[0px] mx-[10px] my-[0px]`}
      style={{
        background: `linear-gradient(135deg, ${GOLD}55 0%, ${GOLD}25 100%)`,
        border: `1px solid ${GOLD}80`,
      }}
    >
      {children}
    </motion.button>
  );
}

// ── Ghost button ─────────────────────────────────────────────────
function GhostBtn({
  children,
  onClick,
  full = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  full?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-3 rounded-full cursor-pointer min-h-[52px] px-7 ${full ? "w-full" : ""}`}
      style={{
        background: "transparent",
        border: `1px solid rgba(244,244,244,0.3)`,
      }}
    >
      {children}
    </motion.button>
  );
}

// ── Feature card ─────────────────────────────────────────────────
function FeatureCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-7 h-full flex flex-col gap-4"
      style={{
        background: CARD_BG,
        border: `1px solid ${GOLD}55`,
      }}
    >
      {icon && (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${GOLD}18` }}
        >
          {icon}
        </div>
      )}
      <h3
        className="font-semibold leading-snug"
        style={{
          fontFamily: F.heading,
          fontSize: "clamp(0.9375rem,1.5vw,1.125rem)",
          color: TEXT,
        }}
      >
        {title}
      </h3>
      <p
        className="leading-relaxed flex-1"
        style={{
          fontFamily: F.body,
          fontSize: "clamp(0.875rem,1.1vw,0.9375rem)",
          color: TEXT,
          opacity: 0.85,
        }}
      >
        {body}
      </p>
    </div>
  );
}

// ── Service feature row ──────────────────────────────────────────
function ServiceFeature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center mt-0.5"
        style={{ background: `${GOLD}18` }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <p
          className="font-medium"
          style={{
            fontFamily: F.body,
            fontSize: "clamp(0.9375rem,1.2vw,1rem)",
            color: TEXT,
            lineHeight: 1.5,
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: F.body,
            fontSize: "clamp(0.8125rem,1vw,0.875rem)",
            color: TEXT,
            opacity: 0.7,
            lineHeight: 1.55,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

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
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="flex items-center gap-2.5 focus:outline-none"
            aria-label="Zur Startseite"
          >
            <LeafLogo size={34} />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
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
        className="fixed inset-0 z-40 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          background: "rgba(35,30,29,0.97)",
          backdropFilter: "blur(24px)",
          transition: "opacity 0.35s ease",
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
              className="text-2xl tracking-wide transition-colors duration-200"
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
            transition={{ delay: 0.21, duration: 0.4 }}
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
            Erstgespräch buchen
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
          <p
            className="mb-8 uppercase"
            style={{
              fontFamily: F.sc,
              fontSize: "clamp(0.45rem, 3vw, 0.8125rem)",
              color: GOLD,
              whiteSpace: "nowrap",
              letterSpacing: "clamp(0.04em, 0.18em, 0.18em)",
            }}
          >
            individuell · alltagstauglich · wissenschaftlich
            fundiert
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            className="font-bold uppercase mb-2 leading-[1.1] w-full"
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(1.5rem, 5.5vw, 3rem)",
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
// SERVICES
// ────────────────────────────────────────────────────────────────
function Services({
  onOpenPrivat,
  onOpenOrg,
}: {
  onOpenPrivat: () => void;
  onOpenOrg: () => void;
}) {
  const personal = [
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            fill={GOLD}
          />
        </svg>
      ),
      title: "Gesund für die Familie",
      desc: "Beratung für groß und klein, weil gesunde Ernährung Familiensache ist",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 23 23"
          fill="none"
        >
          <path d={svgPaths.p16288100} fill={GOLD} />
        </svg>
      ),
      title: "Nachhaltiger Fettverlust",
      desc: "Ohne Jojo-Effekt und Extremdiäten zu deinem Wunschgewicht",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle
            cx="10"
            cy="10"
            r="9"
            stroke={GOLD}
            strokeWidth="1.67"
          />
          <path
            d="M10 5.5V10L12.5 12.5"
            stroke={GOLD}
            strokeWidth="1.67"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Langfristige Begleitung",
      desc: "Kontinuierliche Unterstützung auf deinem Weg",
    },
  ];

  const orgs = [
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
            fill={GOLD}
          />
        </svg>
      ),
      title: "Für Unternehmen",
      desc: "Gesunde Ernährung am Arbeitsplatz – für mehr Energie und Leistungsfähigkeit",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 3L1 9l4 2.18V15h2v-2.82L9 13.36V17c0 1.1 1.35 2 3 2s3-.9 3-2v-3.64l6-3.28L12 3zm5 12.99l2 .01v2l-2-.01v-2.01zM4 19v2H2v-2h2z"
            fill={GOLD}
          />
        </svg>
      ),
      title: "Für Schulen",
      desc: "Altersgerechte Vermittlung von Ernährungswissen für Schüler und Eltern",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            fill={GOLD}
          />
        </svg>
      ),
      title: "Für Vereine",
      desc: "Sportgerechte Ernährung für optimale Performance und Regeneration",
    },
  ];

  function ServiceCard({
    badge,
    title,
    desc,
    features,
    accent,
    onMoreClick,
  }: {
    badge: string;
    title: string;
    desc: string;
    features: {
      icon: React.ReactNode;
      title: string;
      desc: string;
    }[];
    accent: string;
    onMoreClick: () => void;
  }) {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        className="rounded-2xl p-7 md:p-9 flex flex-col h-full"
        style={{
          background: CARD_BG,
          border: `1px solid ${GOLD_LITE}35`,
        }}
      >
        <span
          className="inline-block mb-5"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            color: GOLD,
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </span>
        <h3
          className="font-semibold mb-3 leading-snug"
          style={{
            fontFamily: F.heading,
            fontSize: "clamp(1.1875rem,2vw,1.5rem)",
            color: TEXT,
          }}
        >
          {title}
        </h3>
        <p
          className="mb-8 leading-relaxed"
          style={{
            fontFamily: F.body,
            fontSize: "clamp(0.875rem,1.2vw,0.9375rem)",
            color: TEXT,
            opacity: 0.8,
          }}
        >
          {desc}
        </p>
        <div className="flex flex-col gap-5">
          {features.map((f, i) => (
            <ServiceFeature key={i} {...f} />
          ))}
        </div>
        <button
          onClick={onMoreClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="mt-8 flex items-center gap-2 focus:outline-none w-fit"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: F.body,
            fontSize: 15,
            color: hovered ? GOLD_LITE : GOLD,
            transition: "color .2s",
          }}
        >
          Mehr erfahren
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{
              transform: hovered
                ? "translateX(3px)"
                : "translateX(0)",
              transition: "transform .2s",
            }}
          >
            <path
              d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <section
      id="services"
      style={{ backgroundImage: G.services }}
      className="py-0 md:pt-8 md:pb-32 scroll-mt-[90px]"
    >
      <Container>
        <Reveal className="text-center mb-4">
          <SectionLabel>Angebot</SectionLabel>
          <SectionHeading>Meine Leistungen</SectionHeading>
        </Reveal>
        <Reveal delay={0.06} className="text-center mb-14">
          <p
            className="mx-auto leading-relaxed"
            style={{
              fontFamily: F.body,
              fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
              color: TEXT,
              opacity: 0.8,
              maxWidth: 560,
            }}
          >
            Einzelberatung und Gruppenvorträge für eine
            Ernährung, die auch im stressigen Alltag
            funktioniert
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <ServiceCard
              badge="Privatpersonen"
              title="Persönliche Beratung"
              desc="Individuell auf dich abgestimmt. Wir entwickeln gemeinsam einen Plan, der zu deinem Leben, deinen Zielen und deinen Vorlieben passt."
              features={personal}
              accent={GOLD}
              onMoreClick={onOpenPrivat}
            />
          </Reveal>
          <Reveal delay={0.18}>
            <ServiceCard
              badge="Organisationen"
              title="Vorträge"
              desc="Fundiertes Ernährungswissen für Vereine, Schulen und Unternehmen. Praxisnah, wissenschaftlich fundiert und sofort anwendbar."
              features={orgs}
              accent={GOLD}
              onMoreClick={onOpenOrg}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// WHY IT WORKS
// ────────────────────────────────────────────────────────────────
function WhyItWorks() {
  const cards = [
    {
      title: "Individuelle Anpassung",
      body: "Dein Plan passt sich deinem Leben an – nicht umgekehrt. Wir berücksichtigen deine Vorlieben, deinen Alltag und deine Ziele.",
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
      title: "Langfristige Perspektive",
      body: "Keine Crash-Diäten. Ich arbeite mit dir an kleinen Veränderungen, die ein Leben lang bleiben.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
            fill={GOLD}
          />
        </svg>
      ),
    },
    {
      title: "Persönliche Begleitung",
      body: "Du bist nicht allein. Ich begleite dich Schritt für Schritt und bin bei Fragen und Herausforderungen für dich da.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            fill={GOLD}
          />
        </svg>
      ),
    },
    {
      title: "Ohne Verzicht",
      body: "Essen soll Freude machen. Wir finden Wege, wie du geniessen und gleichzeitig deine Ziele erreichen kannst.",
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
      style={{ backgroundImage: G.why }}
      className="py-24 md:py-32"
    >
      <Container>
        <Reveal className="text-center mb-4">
          <SectionLabel>Methode</SectionLabel>
          <SectionHeading>Was dich erwartet</SectionHeading>
        </Reveal>
        <Reveal delay={0.06} className="text-center mb-14">
          <p
            style={{
              fontFamily: F.body,
              fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
              color: TEXT,
              opacity: 0.8,
            }}
          >
            Ein ganzheitlicher Ansatz für bleibende Veränderung
          </p>
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
                      "https://wa.me/4915732419806",
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
function Footer({
  onOpenLegal,
}: {
  onOpenLegal: (id: LegalOnlyId) => void;
}) {
  return (
    <footer style={{ backgroundImage: G.footer }}>
      <div style={{ borderTop: `2px solid ${GOLD_LITE}40` }}>
        <Container className="pt-16 pb-0">
          {/* Three-column row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-12 items-start justify-items-center">
            {/* Brand — centered on mobile */}
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
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
            <div className="flex flex-col gap-2 items-center">
              {(
                [
                  ["Impressum", "impressum"],
                  ["Datenschutz", "datenschutz"],
                  ["AGB", "agb"],
                ] as [string, LegalOnlyId][]
              ).map(([label, id]) => (
                <a
                  key={id}
                  href="#"
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
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenLegal(id);
                  }}
                >
                  {label}
                </a>
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
// SUBPAGE SHELL (shared back-bar + scroll container)
// ────────────────────────────────────────────────────────────────
function SubPageShell({
  onBack,
  children,
}: {
  onBack: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        overflowY: "auto",
        background: "rgb(43,38,37)",
      }}
    >
      <style>{`*, *::before, *::after { box-sizing: border-box; } body { margin: 0; } button { cursor: pointer; } button:hover, a:hover { transform: scale(1.03); } button, a { transition: transform 0.18s cubic-bezier(0.16,1,0.3,1); }`}</style>
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
            maxWidth: 1120,
            margin: "0 auto",
            height: 64,
          }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 focus:outline-none"
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
      {children}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// SHARED SUBPAGE OFFER CARD
// ────────────────────────────────────────────────────────────────
function OfferCard({
  icon,
  title,
  subtitle,
  bullets,
  scope,
  price,
  onContact,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  bullets: string[];
  scope: string[];
  price: string;
  onContact: () => void;
}) {
  return (
    <div
      className="rounded-3xl flex flex-col h-full"
      style={{
        background: CARD_BG,
        border: `1px solid ${GOLD}40`,
      }}
    >
      <div className="p-7 md:p-9 flex flex-col gap-5 flex-1">
        <div>
          <h2
            className="font-semibold leading-snug mb-1"
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(1.1875rem,2vw,1.5rem)",
              color: TEXT,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="leading-relaxed"
              style={{
                fontFamily: F.body,
                fontSize: "clamp(0.875rem,1.1vw,0.9375rem)",
                color: TEXT,
                opacity: 0.65,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2.5">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <svg
                className="shrink-0 mt-0.5"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7.5l3.5 3.5L12 3"
                  stroke={GOLD}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: F.body,
                  fontSize: "clamp(0.875rem,1.1vw,0.9375rem)",
                  color: TEXT,
                  opacity: 0.85,
                  lineHeight: 1.5,
                }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mx-7 md:mx-9"
        style={{ height: 1, background: `${GOLD}25` }}
      />
      <div className="p-7 md:p-9 flex flex-col gap-5">
        <div>
          <p
            className="mb-3 uppercase"
            style={{
              fontFamily: F.heading,
              fontWeight: 700,
              fontSize: 11,
              color: GOLD,
              letterSpacing: "0.12em",
            }}
          >
            Leistungsumfang
          </p>
          <div className="flex flex-col gap-2">
            {scope.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5"
              >
                <div
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ background: GOLD }}
                />
                <span
                  style={{
                    fontFamily: F.body,
                    fontSize: "clamp(0.8125rem,1vw,0.875rem)",
                    color: TEXT,
                    opacity: 0.75,
                  }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p
              className="mb-0.5 uppercase"
              style={{
                fontFamily: F.heading,
                fontWeight: 700,
                fontSize: 11,
                color: GOLD,
                letterSpacing: "0.12em",
              }}
            >
              Preis
            </p>
            <p
              style={{
                fontFamily: F.heading,
                fontSize: "clamp(1rem,1.5vw,1.125rem)",
                color: TEXT,
                opacity: 0.85,
              }}
            >
              {price}
            </p>
          </div>
          <motion.button
            onClick={onContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-5 min-h-[42px] cursor-pointer shrink-0"
            style={{
              background: `${GOLD}25`,
              border: `1px solid ${GOLD}60`,
              fontFamily: F.sc,
              fontSize: "clamp(0.75rem,1vw,0.875rem)",
              color: TEXT,
            }}
          >
            Anfragen
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2 6h8M6.5 3l3 3-3 3"
                stroke={TEXT}
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// PRIVATPERSONEN PAGE
// ────────────────────────────────────────────────────────────────
function PrivatpersonenPage({
  onBack,
  onContact,
}: {
  onBack: () => void;
  onContact: () => void;
}) {
  return (
    <SubPageShell onBack={onBack}>
      {/* Hero — compact */}
      <section
        style={{ backgroundImage: G.hero }}
        className="flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ maxWidth: 640 }}
        >
          <p
            className="mb-4 uppercase tracking-[0.18em]"
            style={{
              fontFamily: F.sc,
              fontSize: "clamp(0.6rem,1vw,0.75rem)",
              color: GOLD,
            }}
          >
            Ernährungsberatung · Privatpersonen
          </p>
          <h1
            className="font-bold mb-4 leading-[1.1] whitespace-nowrap"
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(1.25rem,3.2vw,2.25rem)",
              color: TEXT,
            }}
          >
            Zwei Angebote. Ein Klares Ziel.
          </h1>
          <p
            className="mb-8"
            style={{
              fontFamily: F.body,
              fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
              color: TEXT,
              opacity: 0.75,
            }}
          >
            Endlich die Ernährungsweise finden, die in deinem Leben funktioniert!
          </p>
          <motion.button
            onClick={onContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-7 min-h-[48px] cursor-pointer"
            style={{
              background: `${GOLD}30`,
              border: `1px solid ${GOLD}70`,
              fontFamily: F.sc,
              fontSize: "clamp(0.8125rem,1.1vw,0.9375rem)",
              color: TEXT,
            }}
          >
            Unverbindlich Kontakt aufnehmen
          </motion.button>
        </motion.div>
      </section>

      {/* Angebote */}
      <section
        style={{ backgroundImage: G.about }}
        className="py-16 md:py-20"
      >
        <Container>
          <Reveal className="mb-10 text-center">
            <SectionLabel>Meine Angebote</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <Reveal delay={0.06} className="h-full">
              <OfferCard
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                     <path
            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            fill={GOLD}
          />
        </svg>
                }
                title="Gesund für die Familie"
                subtitle="Gemeinsam gesunde Gewohnheiten aufbauen."
                bullets={[
                  "Ernährung der ganzen Familie – weils zusammen mehr Spaß macht",
                  "Kinder lernen Essverhalten zuerst zuhause",
                  "Kühlschrankcheck & Einkaufsgewohnheiten",
                  "Praktische Essensplanung für den Alltag",
                  "Kleine Veränderungen mit messbarer Wirkung",
                  "Keine Verbote – Verständnis statt Regeln",
                ]}
                scope={[
                  "Gemeinsamen Gespräch",
                  "Hausbesuch auf Wunsch möglich",
                ]}
                price="50€ zzgl. Fahrtkosten – Erstgespräch kostenlos"
                onContact={onContact}
              />
            </Reveal>
            <Reveal delay={0.12} className="h-full">
              <OfferCard
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5v-5l-2.28 2.28C7.06 18.04 6 15.12 6 12c0-4.08 3.05-7.44 7-7.93V2.05z"
                      fill={GOLD}
                    />
                  </svg>
                }
                title="Ab zum Wunschgewicht!"
                subtitle="Es müssen nicht immer nur die Anderen bleiben, die es schaffen."
                bullets={[
                  "Nachhaltige Gewichtsabnahme – endlich ohne Jojo-Effekt",
                  "Keine unsinnigen Diäten, keine Verbote",
                  "Gewohnheiten dauerhaft verändern",
                ]}
                scope={[
                  "Mehrwöchige persönliche Begleitung",
                  "Regelmäßige Beratungstermine",
                  "Individueller Plan",
                  "Begleitung per WhatsApp",
                  "Anpassung bei Bedarf",
                ]}
                price="50€ pro Sitzung – Erstgespräch kostenlos"
                onContact={onContact}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundImage: G.contact }}
        className="py-14"
      >
        <Container narrow>
          <Reveal
            className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-7"
            style={{
              background: CARD_BG,
              border: `1px solid ${GOLD}30`,
            }}
          >
            <div>
              <p
                className="font-semibold mb-1"
                style={{
                  fontFamily: F.heading,
                  fontSize: "clamp(1rem,1.6vw,1.25rem)",
                  color: TEXT,
                }}
              >
                Noch unsicher, welches Angebot passt?
              </p>
              <p
                style={{
                  fontFamily: F.body,
                  fontSize: 15,
                  color: TEXT,
                  opacity: 0.65,
                }}
              >
                Das erste Gespräch ist kostenlos und
                unverbindlich.
              </p>
            </div>
            <motion.button
              onClick={onContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full px-7 min-h-[48px] cursor-pointer shrink-0"
              style={{
                background: `linear-gradient(135deg, ${GOLD}55, ${GOLD}25)`,
                border: `1px solid ${GOLD}80`,
                fontFamily: F.sc,
                fontSize: "clamp(0.8125rem,1.1vw,0.9375rem)",
                color: TEXT,
              }}
            >
              Kostenloses Erstgespräch
            </motion.button>
          </Reveal>
        </Container>
      </section>

      <div
        style={{
          borderTop: `1px solid rgba(244,244,244,0.08)`,
          background: "rgb(43,38,37)",
        }}
        className="py-5 text-center"
      >
        <p
          style={{
            fontFamily: F.body,
            fontSize: 12,
            color: TEXT,
            opacity: 0.35,
          }}
        >
          © 2026 Lena Maier · Ernährungsberatung
        </p>
      </div>
    </SubPageShell>
  );
}

// ────────────────────────────────────────────────────────────────
// ORGANISATIONEN PAGE
// ────────────────────────────────────────────────────────────────
function OrganisationenPage({
  onBack,
  onContact,
}: {
  onBack: () => void;
  onContact: () => void;
}) {
  const includes = [
    "Alltagstaugliches Wissen statt Ernährungsmythen",
    "Wissenschaftlich fundiert und verständlich erklärt",
    "Praktische Tipps, die sich wirklich umsetzen lassen",
    "Gesunde Gewohnheiten nachhaltig entwickeln",
    "Mehr Sicherheit bei alltäglichen Ernährungsfragen",
    "Impulse für einen gesünderen Lebensstil",
  ];

  return (
    <SubPageShell onBack={onBack}>
      {/* Hero */}
      <section
        style={{ backgroundImage: G.hero }}
        className="flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ maxWidth: 620 }}
        >
          <p
            className="mb-4 uppercase tracking-[0.18em]"
            style={{
              fontFamily: F.sc,
              fontSize: "clamp(0.6rem,1vw,0.75rem)",
              color: GOLD,
            }}
          >
            Ernährungsberatung · Organisationen
          </p>
          <h1
            className="font-bold mb-4 leading-[1.1]"
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(1.625rem,4vw,2.5rem)",
              color: TEXT,
            }}
          >
            Ernährungswissen direkt in Ihr Team.
          </h1>
          <p
            style={{
              fontFamily: F.body,
              fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
              color: TEXT,
              opacity: 0.72,
            }}
          >
            Ein kompakter Vortrag – praxisnah und sofort
            umsetzbar.
          </p>
        </motion.div>
      </section>

      {/* Angebot */}
      <section
        style={{ backgroundImage: G.about }}
        className="py-16 md:py-24"
      >
        <Container narrow>
          <Reveal>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${GOLD}40` }}
            >
              {/* Header */}
              <div
                className="px-8 py-8"
                style={{
                  background: `linear-gradient(135deg, ${GOLD}22, ${GOLD}08)`,
                  borderBottom: `1px solid ${GOLD}30`,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p
                      className="uppercase tracking-[0.15em] mb-2"
                      style={{
                        fontFamily: F.sc,
                        fontSize:
                          "clamp(0.6rem,0.9vw,0.6875rem)",
                        color: GOLD,
                      }}
                    >
                      Vortrag
                    </p>
                    <h2
                      className="font-bold leading-tight"
                      style={{
                        fontFamily: F.heading,
                        fontSize:
                          "clamp(1.25rem,2.5vw,1.75rem)",
                        color: TEXT,
                      }}
                    >
                      Auf Sie zugeschnittenes Ernährungswissen
                    </h2>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: F.body,
                        fontSize: 15,
                        color: TEXT,
                        opacity: 0.6,
                      }}
                    >
                      60–90 Minuten · bei Ihnen vor Ort oder
                      online
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p
                      style={{
                        fontFamily: F.body,
                        fontSize: 13,
                        color: TEXT,
                        opacity: 0.5,
                      }}
                    >
                      Preis
                    </p>
                    <p
                      className="font-bold"
                      style={{
                        fontFamily: F.heading,
                        fontSize: "clamp(1.5rem,3vw,2rem)",
                        color: GOLD,
                      }}
                    >
                      auf Anfrage €
                    </p>
                    <p
                      style={{
                        fontFamily: F.body,
                        fontSize: 13,
                        color: TEXT,
                        opacity: 0.45,
                      }}
                    >
                      zzgl. MwSt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div
                className="px-8 py-8"
                style={{ background: CARD_BG }}
              >
                <p
                  className="mb-6"
                  style={{
                    fontFamily: F.body,
                    fontSize: "clamp(0.9375rem,1.2vw,1rem)",
                    color: TEXT,
                    opacity: 0.8,
                  }}
                >
                  Keine Organisation ist wie die andere. Deshalb
                  wird jeder Vortrag individuell auf Ihre
                  Wünsche, Ihre Zielgruppe und Ihre
                  Rahmenbedingungen zugeschnitten – ganz gleich,
                  ob Unternehmen, Schule, Verein oder andere
                  Einrichtung.
                </p>
                <p
                  className="mb-5 font-semibold"
                  style={{
                    fontFamily: F.heading,
                    fontSize: 14,
                    color: GOLD,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Was die Teilnehmer mitnehmen
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {includes.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <svg
                        className="shrink-0"
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2 8.5l4 4L14 3"
                          stroke={GOLD}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: F.body,
                          fontSize:
                            "clamp(0.875rem,1.1vw,0.9375rem)",
                          color: TEXT,
                          opacity: 0.85,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{ borderTop: `1px solid ${GOLD}20` }}
                  className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <p
                    style={{
                      fontFamily: F.body,
                      fontSize: 14,
                      color: TEXT,
                      opacity: 0.5,
                    }}
                  >
                    Für Gruppen ab 5 Personen.
                  </p>
                  <motion.button
                    onClick={onContact}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-full px-7 min-h-[48px] cursor-pointer shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD}55, ${GOLD}25)`,
                      border: `1px solid ${GOLD}80`,
                      fontFamily: F.sc,
                      fontSize:
                        "clamp(0.8125rem,1.1vw,0.9375rem)",
                      color: TEXT,
                    }}
                  >
                    Jetzt anfragen
                  </motion.button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <div
        style={{
          borderTop: `1px solid rgba(244,244,244,0.08)`,
          background: "rgb(43,38,37)",
        }}
        className="py-5 text-center"
      >
        <p
          style={{
            fontFamily: F.body,
            fontSize: 12,
            color: TEXT,
            opacity: 0.35,
          }}
        >
          © 2026 Lena Maier · Ernährungsberatung
        </p>
      </div>
    </SubPageShell>
  );
}

// ────────────────────────────────────────────────────────────────
// LEGAL PAGES
// ────────────────────────────────────────────────────────────────
type LegalPageId =
  | "impressum"
  | "datenschutz"
  | "agb"
  | "preise"
  | "privatpersonen"
  | "organisationen";

type LegalOnlyId =
  | "impressum"
  | "datenschutz"
  | "agb"
  | "preise";
const LEGAL_CONTENT: Record<
  LegalOnlyId,
  {
    title: string;
    sections: { heading?: string; body: string }[];
  }
> = {
  preise: {
    title: "Preise & Modelle",
    sections: [
      {
        body: "Alle Angebote richten sich individuell nach deinen Zielen und deiner Situation. Eine persönliche Erstberatung ist kostenlos und unverbindlich.",
      },
      {
        heading: "Persönliche Beratung – Privatpersonen",
        body: "Erstgespräch (30 Min.): kostenlos\nEinzelstunde (60 Min.): [Preis eintragen]\nBeratungspaket (3 Sitzungen): [Preis eintragen]\nBeratungspaket (6 Sitzungen): [Preis eintragen]\n\nAlle Pakete beinhalten eine individuelle Ernährungsanalyse sowie schriftliche Auswertung und Empfehlungen.",
      },
      {
        heading: "Vorträge  – Organisationen",
        body: "Vortrag (60–90 Min.): [Preis eintragen]\nHalbtagsworkshop (3–4 Std.): [Preis eintragen]\nGanztagesworkshop (6–8 Std.): [Preis eintragen]\n\nAngebote für Schulen, Vereine und Unternehmen werden individuell nach Gruppengröße und Thema kalkuliert.",
      },
      {
        heading: "Hinweis",
        body: "Alle Preise verstehen sich als Endpreise. Eine Umsatzsteuer wird gemäß Kleinunternehmerregelung (§ 19 UStG) nicht ausgewiesen.\n\nFür ein individuelles Angebot oder bei Fragen melde dich gerne direkt bei mir.",
      },
    ],
  },
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

function LegalPage({
  id,
  onBack,
}: {
  id: LegalOnlyId;
  onBack: () => void;
}) {
  const content = LEGAL_CONTENT[id];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        overflowY: "auto",
        background: "rgb(43,38,37)",
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; overflow-x: hidden; background: rgb(43,38,37); }
        img { display: block; max-width: 100%; }
        button { cursor: pointer; }
        button:focus-visible, a:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
      `}</style>

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
// SCROLL PROGRESS BAR
// ────────────────────────────────────────────────────────────────
function ProgressBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;
      setPct(
        max > 0
          ? Math.min(100, (window.scrollY / max) * 100)
          : 0,
      );
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 200,
        height: 2,
        width: `${pct}%`,
        background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LITE})`,
        transition: "width .12s linear",
        pointerEvents: "none",
      }}
    />
  );
}

// ────────────────────────────────────────────────────────────────
// APP
// ────────────────────────────────────────────────────────────────
export default function App() {
  const [activePage, setActivePage] =
    useState<LegalPageId | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openContactAndClose = () => {
    setActivePage(null);
    requestAnimationFrame(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  };

  const legalIds: LegalOnlyId[] = [
    "impressum",
    "datenschutz",
    "agb",
    "preise",
  ];
  const isLegal =
    activePage && legalIds.includes(activePage as LegalOnlyId);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; overflow-x: hidden; background: rgb(43,38,37); }
        img { display: block; max-width: 100%; }
        button { cursor: pointer; }
        button:focus-visible, a:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        button, a { transition: transform 0.18s cubic-bezier(0.16,1,0.3,1); }
        button:hover, a:hover { transform: scale(1.03); }
      `}</style>

      {activePage === "privatpersonen" && (
        <PrivatpersonenPage
          onBack={() => setActivePage(null)}
          onContact={openContactAndClose}
        />
      )}
      {activePage === "organisationen" && (
        <OrganisationenPage
          onBack={() => setActivePage(null)}
          onContact={openContactAndClose}
        />
      )}
      {isLegal && (
        <LegalPage
          id={activePage as LegalOnlyId}
          onBack={() => setActivePage(null)}
        />
      )}

      <Nav onScrollTo={scrollTo} />
      <main>
        <Hero onScrollTo={scrollTo} />
        <About />
        <Philosophy />
        <Services
          onOpenPrivat={() => setActivePage("privatpersonen")}
          onOpenOrg={() => setActivePage("organisationen")}
        />
        <WhyItWorks />
        <Contact />
      </main>
      <Footer onOpenLegal={(id) => setActivePage(id)} />
    </>
  );
}