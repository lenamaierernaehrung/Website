import { useId } from "react";
import { motion } from "motion/react";
import svgPaths from "@/imports/ErnahrungsberatungLenaMaier/svg-rf8dr8pybf";

// ── Design tokens ─────────────────────────────────────────────────
export const GOLD = "#c9a66b";
export const GOLD_LITE = "#ffe5c5";
export const TEXT = "#f4f4f4";
export const CARD_BG = "rgba(75,67,65,0.85)";
export const CARD_DARK = "#282423";

// Each gradient starts where the previous one ended — no seams.
// Dark = rgb(43,38,37)  |  Medium = rgb(90,80,78)
export const G = {
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
export const F = {
  heading: "Montserrat, sans-serif",
  body: "Arsenal, sans-serif",
  sc: "'Arsenal SC', sans-serif",
};

// ── Container ────────────────────────────────────────────────────
export function Container({
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
export function Reveal({
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
export function GoldLine({ className = "" }: { className?: string }) {
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
export function SectionLabel({
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
export function SectionHeading({
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
export function LeafLogo({ size = 40 }: { size?: number }) {
  const gradId = `leafGrad${useId().replace(/:/g, "")}`;
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
            id={gradId}
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
        <path d={svgPaths.p346db880} fill={`url(#${gradId})`} />
      </svg>
    </div>
  );
}

// ── Primary button ───────────────────────────────────────────────
export function PrimaryBtn({
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
      className={`inline-flex items-center justify-center gap-3 rounded-full cursor-pointer min-h-[52px] ${full ? "w-full" : ""} px-[8px] py-[0px] sm:mx-[10px] my-[0px]`}
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
export function GhostBtn({
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
export function FeatureCard({
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