import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  CARD_DARK,
  Container,
  F,
  G,
  GOLD,
  GoldLine,
  Reveal,
  SectionHeading,
  SectionLabel,
  TEXT,
} from "../components/shared";
import { TextLink } from "../components/offer-ui";

// Shared building blocks of the offer and lecture detail pages.

// Closing section on pages with an odd number of sections: starts and
// ends dark so the footer gradient follows without a seam.
export const G_CLOSING =
  "linear-gradient(180deg, rgb(43,38,37) 0%, rgb(90,80,78) 50%, rgb(43,38,37) 100%)";

export const bodyStyle: React.CSSProperties = {
  fontFamily: F.body,
  fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
  color: TEXT,
  opacity: 0.85,
  lineHeight: 1.7,
};

// ── Intro ────────────────────────────────────────────────────────
export function DetailHero({
  back,
  eyebrow,
  title,
  subtitle,
  children,
  backOnScroll = false,
}: {
  back: { to: string; label: string };
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  backOnScroll?: boolean;
}) {
  const [showStickyBack, setShowStickyBack] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!backOnScroll) return;
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 120) {
        setShowStickyBack(false);
      } else if (currentY < lastScrollY.current) {
        setShowStickyBack(true);
      } else if (currentY > lastScrollY.current) {
        setShowStickyBack(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [backOnScroll]);

  return (
    <>
      {backOnScroll && showStickyBack && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="fixed inset-x-0 top-[88px] z-40 px-3 sm:px-6 lg:px-8 pointer-events-none"
        >
          <Container>
            <div
              className="w-fit opacity-75 transition-opacity hover:opacity-100"
              style={{
                pointerEvents: "auto",
                filter: "drop-shadow(0 1px 5px rgba(25,20,18,0.45))",
              }}
            >
              <TextLink to={back.to} back className="min-h-[36px]">
                {back.label}
              </TextLink>
            </div>
          </Container>
        </motion.div>
      )}
      <section
        style={{ backgroundImage: G.hero }}
        className="pt-[104px] sm:pt-28 md:pt-32 pb-20 md:pb-28"
      >
        <Container>
          <TextLink to={back.to} back className="mb-10 md:mb-14 -ml-1">
            {back.label}
          </TextLink>
        </Container>
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mx-auto"
            style={{ maxWidth: 680 }}
          >
            <SectionLabel>{eyebrow}</SectionLabel>
            <h1
              className="font-bold leading-[1.15] text-balance"
              style={{
                fontFamily: F.heading,
                fontSize: "clamp(1.75rem,4.5vw,2.75rem)",
                color: TEXT,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-4"
                style={{
                  fontFamily: F.sc,
                  fontSize: "clamp(1rem,1.8vw,1.1875rem)",
                  color: TEXT,
                  opacity: 0.85,
                  letterSpacing: "0.04em",
                }}
              >
                {subtitle}
              </p>
            )}
            <GoldLine className="my-10 max-w-[200px] mx-auto" />
            {children && (
              <div className="flex flex-col gap-5 text-left sm:text-center">
                {children}
              </div>
            )}
          </motion.div>
        </Container>
      </section>
    </>
  );
}

// ── Section with centred heading ─────────────────────────────────
export function DetailSection({
  label,
  heading,
  gradient,
  children,
  narrow = true,
  className = "",
}: {
  label?: string;
  heading: string;
  gradient: string;
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <section
      style={{ backgroundImage: gradient }}
      className={`py-20 md:py-28 ${className}`}
    >
      <Container narrow={narrow}>
        <Reveal className="text-center mb-12 md:mb-16">
          {label && <SectionLabel>{label}</SectionLabel>}
          <SectionHeading className="text-balance">{heading}</SectionHeading>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}

// ── Items with a thin top rule (no boxes, no icons) ──────────────
export function RuledItems({
  items,
  columns = 2,
}: {
  items: { title: string; text: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-x-10 gap-y-2 ${columns === 3 ? "md:grid-cols-3" : "sm:grid-cols-2"}`}
    >
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 0.06}>
          <div className="pt-6 pb-6" style={{ borderTop: `1px solid ${GOLD}40` }}>
            <h3
              className="font-semibold mb-2.5"
              style={{
                fontFamily: F.heading,
                fontSize: "clamp(1.0625rem,1.6vw,1.1875rem)",
                color: TEXT,
                lineHeight: 1.35,
              }}
            >
              {it.title}
            </h3>
            <p style={{ ...bodyStyle, opacity: 0.8 }}>{it.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ── Price + request panel (reuses the contact card look) ─────────
export function RequestPanel({
  heading,
  children,
  aside,
}: {
  heading: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <Reveal>
      <div
        className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]"
        style={{ background: CARD_DARK, border: `1px solid ${GOLD}35` }}
      >
        {aside && (
          <div
            className="p-7 sm:p-10 md:border-r border-b md:border-b-0"
            style={{ borderColor: `${GOLD}25` }}
          >
            {aside}
          </div>
        )}
        <div className={`p-7 sm:p-10 ${aside ? "" : "md:col-span-2"}`}>
          <h2
            className="font-semibold mb-4 leading-snug text-balance"
            style={{
              fontFamily: F.heading,
              fontSize: "clamp(1.25rem,2.2vw,1.5rem)",
              color: TEXT,
            }}
          >
            {heading}
          </h2>
          {children}
        </div>
      </div>
    </Reveal>
  );
}
