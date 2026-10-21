import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CARD_DARK, F, GOLD, GOLD_LITE, TEXT } from "./shared";

// ── Vertical step timeline ───────────────────────────────────────
// Steps fade in while scrolling; the connector below each marker draws
// downwards as its step enters the viewport. Both animations reverse when
// scrolling away, so they replay on subsequent passes.
export function Timeline({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  const ease = [0.16, 1, 0.3, 1] as const;
  return (
    <ol className="timeline mx-auto w-full" style={{ maxWidth: 680 }}>
      {steps.map((s, i) => {
        return (
          <TimelineStep
            key={s.title}
            step={s}
            index={i}
            isLast={i === steps.length - 1}
            ease={ease}
          />
        );
      })}
    </ol>
  );
}

function TimelineStep({
  step,
  index,
  isLast,
  ease,
}: {
  step: { title: string; text: string };
  index: number;
  isLast: boolean;
  ease: readonly [number, number, number, number];
}) {
  const itemRef = useRef<HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.li
      ref={itemRef}
      className="timeline-step relative grid"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 14 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease }}
    >
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
          {String(index + 1).padStart(2, "0")}
        </span>
        {!isLast && (
          <span className="timeline-track absolute">
            <motion.span
              className="block w-full h-full"
              style={{ background: GOLD, originY: 0 }}
              initial={false}
              animate={{ scaleY: shouldReduceMotion || isVisible ? 1 : 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.1,
                ease,
                delay: shouldReduceMotion ? 0 : 0.25,
              }}
            />
          </span>
        )}
      </div>

      <div className={isLast ? "" : "timeline-gap"}>
        <h3
          className="timeline-title font-semibold text-balance"
          style={{
            fontFamily: F.heading,
            fontSize: "clamp(1.0625rem,1.8vw,1.25rem)",
            color: TEXT,
            lineHeight: 1.3,
          }}
        >
          <span className="sr-only">Schritt {index + 1}: </span>
          {step.title}
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
          {step.text}
        </p>
      </div>
    </motion.li>
  );
}
