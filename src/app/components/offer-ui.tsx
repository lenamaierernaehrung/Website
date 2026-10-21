import { Link } from "react-router";
import { F, G, GOLD, TEXT, LeafLogo } from "./shared";
import type { IntroOffer, Price } from "../content/angebote";

// ── Icons ────────────────────────────────────────────────────────
export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="offer-arrow shrink-0"
    >
      <path
        d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M12.5 4.5L7 10l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Small uppercase label (same style as the former service badge) ─
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 11.5,
        color: GOLD,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        lineHeight: 1.5,
      }}
    >
      {children}
    </p>
  );
}

// ── Check list ───────────────────────────────────────────────────
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <svg
            className="shrink-0 mt-[5px]"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
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
              fontSize: "clamp(0.9375rem,1.2vw,1rem)",
              color: TEXT,
              opacity: 0.88,
              lineHeight: 1.5,
            }}
          >
            {b}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── Price ────────────────────────────────────────────────────────
// With an intro offer the intro price leads and the planned regular
// price is stated plainly — no strike-through, since the regular price
// has not been charged before.
export function PriceBlock({
  price,
  intro,
  large = false,
}: {
  price: Price;
  intro?: IntroOffer | null;
  large?: boolean;
}) {
  const amountStyle: React.CSSProperties = {
    fontFamily: F.heading,
    fontWeight: 600,
    fontSize: large
      ? "clamp(2rem,4vw,2.5rem)"
      : "clamp(1.75rem,3vw,2rem)",
    color: TEXT,
    lineHeight: 1.1,
  };
  const noteStyle: React.CSSProperties = {
    fontFamily: F.body,
    fontSize: "clamp(0.875rem,1.1vw,0.9375rem)",
    color: TEXT,
    opacity: 0.72,
    lineHeight: 1.5,
  };

  if (!intro) {
    return (
      <div>
        <p style={amountStyle}>{price.amount}</p>
        <p className="mt-1.5" style={noteStyle}>
          {price.note}
        </p>
      </div>
    );
  }

  return (
    <div>
      <Eyebrow className="mb-2">{intro.label}</Eyebrow>
      <p style={amountStyle}>{intro.amount}</p>
      <p className="mt-1.5" style={{ ...noteStyle, opacity: 0.85 }}>
        {intro.note}
      </p>
      <p className="mt-3" style={noteStyle}>
        {price.note}. {intro.regularNote}.
      </p>
    </div>
  );
}

// ── Pill action (link or button) in the existing button language ──
export function Pill({
  to,
  onClick,
  variant = "primary",
  children,
  className = "",
}: {
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2.5 rounded-full px-7 min-h-[50px] font-semibold text-center ${className}`;
  const style: React.CSSProperties = {
    fontFamily: F.sc,
    fontSize: "clamp(0.9375rem,1.3vw,1rem)",
    color: TEXT,
    textDecoration: "none",
    ...(variant === "primary"
      ? {
          background: `linear-gradient(135deg, ${GOLD}55 0%, ${GOLD}25 100%)`,
          border: `1px solid ${GOLD}80`,
        }
      : {
          background: "transparent",
          border: "1px solid rgba(244,244,244,0.3)",
        }),
  };
  if (to)
    return (
      <Link to={to} className={cls} style={style}>
        {children}
      </Link>
    );
  return (
    <button type="button" onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}

// ── Quiet text link with arrow (former "Mehr erfahren" style) ─────
export function TextLink({
  to,
  href,
  children,
  className = "",
  back = false,
}: {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  back?: boolean;
}) {
  const cls = `offer-textlink inline-flex items-center gap-2 min-h-[44px] ${className}`;
  const style: React.CSSProperties = {
    fontFamily: F.body,
    fontSize: 15.5,
    color: GOLD,
    textDecoration: "none",
  };
  const inner = back ? (
    <>
      <BackIcon />
      {children}
    </>
  ) : (
    <>
      {children}
      <ArrowIcon />
    </>
  );
  if (href)
    return (
      <a href={href} className={cls} style={style}>
        {inner}
      </a>
    );
  return (
    <Link to={to ?? "/"} className={cls} style={style}>
      {inner}
    </Link>
  );
}

// ── Image slot for lecture photos ────────────────────────────────
// Renders the photo when one is configured, otherwise a calm
// placeholder in the site's own gradient (see content/angebote.ts).
export function ImageSlot({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  if (src)
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      style={{ backgroundImage: G.about }}
      data-placeholder="bild-fehlt"
      aria-hidden="true"
    >
      <div style={{ opacity: 0.22 }}>
        <LeafLogo size={56} />
      </div>
      <span className="sr-only">{alt}</span>
    </div>
  );
}

// ── Facts list (label + value rows) ──────────────────────────────
export function FactList({
  items,
}: {
  items: { label: string; text: React.ReactNode }[];
}) {
  return (
    <dl
      className="grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_1fr]"
      style={{ borderTop: `1px solid ${GOLD}25` }}
    >
      {items.map((f) => (
        <div
          key={f.label}
          className="contents"
        >
          <dt
            className="pt-5 sm:py-5 sm:border-b"
            style={{
              fontFamily: F.sc,
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GOLD,
              borderColor: `${GOLD}25`,
            }}
          >
            {f.label}
          </dt>
          <dd
            className="pt-1.5 pb-5 sm:py-5 border-b"
            style={{
              fontFamily: F.body,
              fontSize: "clamp(0.9375rem,1.2vw,1rem)",
              color: TEXT,
              opacity: 0.88,
              lineHeight: 1.55,
              borderColor: `${GOLD}25`,
            }}
          >
            {f.text}
          </dd>
        </div>
      ))}
    </dl>
  );
}

