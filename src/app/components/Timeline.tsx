import { motion } from "motion/react";
import { CARD_DARK, F, GOLD, GOLD_LITE, TEXT } from "./shared";

// ── Vertical step timeline ───────────────────────────────────────
// Steps fade in one after another while scrolling; the connector below
// each marker draws downwards once its step is visible. Only opacity and
// transform are animated, so nothing shifts the layout. Under
// prefers-reduced-motion the MotionConfig in App skips the transforms.
export function Timeline({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  const ease = [0.16, 1, 0.3, 1] as const;
  return (
    <ol className="timeline mx-auto w-full" style={{ maxWidth: 680 }}>
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <motion.li
            key={s.title}
            className="timeline-step relative grid"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Marker column */}
            <div className="relative flex justify-center" aria-hidden="true">
              <span
                className="timeline-marker relative z-[1] flex items-center justify-center rounded-full"
                style={{
                  background: CARD_DARK,
                  border: `1px solid ${GOLD}80`,
                  fontFamily: F.heading,
                  fontWeight: 600,
                  color: GOLD_LITE,
                  letterSpacing: "0.04em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {!last && (
                <span className="timeline-track absolute">
                  <motion.span
                    className="block w-full h-full"
                    style={{ background: GOLD, originY: 0 }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                    transition={{ duration: 1.1, ease, delay: 0.25 }}
                  />
                </span>
              )}
            </div>

            {/* Content */}
            <div className={last ? "" : "timeline-gap"}>
              <h3
                className="timeline-title font-semibold text-balance"
                style={{
                  fontFamily: F.heading,
                  fontSize: "clamp(1.0625rem,1.8vw,1.25rem)",
                  color: TEXT,
                  lineHeight: 1.3,
                }}
              >
                <span className="sr-only">Schritt {i + 1}: </span>
                {s.title}
              </h3>
              <p
                className="mt-2.5 leading-relaxed"
                style={{
                  fontFamily: F.body,
                  fontSize: "clamp(0.9375rem,1.25vw,1.0625rem)",
                  color: TEXT,
                  opacity: 0.82,
                  maxWidth: 520,
                }}
              >
                {s.text}
              </p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
