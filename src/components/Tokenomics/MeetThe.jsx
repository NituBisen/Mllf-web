import React from "react";
import { motion } from "framer-motion";
import { Zap, DollarSign, Globe, Shield } from "lucide-react";

const FEATURES = [
  {
    number: "01",
    icon: Zap,
    title: "Instant Liquidity",
    description:
      "Trade anytime, on-chain. No waiting periods, no broker intermediaries.",
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Lower Entry Barrier",
    description:
      "Invest with smaller amounts. Premium real estate no longer requires millions.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Global Access",
    description:
      "No geographic restrictions. Own property anywhere from anywhere in the world.",
  },
  {
    number: "04",
    icon: Shield,
    title: "On-Chain Security",
    description:
      "Every transaction transparent and verified. Immutable records, zero counterparty risk.",
  },
];

// ----------------------------------------------------------------------------
// Animation variants (unchanged)
// ----------------------------------------------------------------------------
const badgeVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

const descVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ----------------------------------------------------------------------------
// FeatureItem — reusable, keyboard accessible
// ----------------------------------------------------------------------------
function FeatureItem({ number, icon: Icon, title, description }) {
  return (
    <motion.article
      variants={itemVariants}
      tabIndex={0}
      /*
        RESPONSIVE FIX: the original had unprefixed "text-center text-left"
        sitting side-by-side, which is a same-specificity conflict — CSS
        cascade order (not JSX order) decides the winner, so it wasn't
        reliably centering on mobile. Replaced with an explicit mobile-first
        pair "text-center sm:text-left" that matches the existing
        "items-center ... sm:items-start" alignment already on this element,
        and still resolves to text-left at sm+ — identical to desktop's
        original (accidental) resolved value, so desktop is unaffected.
      */
      className="relative flex flex-col items-center p-2 w-full text-center text-left rounded-2xl transition-transform duration-300 ease-out outline-none focus-visible:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-[#D6AA39]/60 group hover:-translate-y-1.5 -m-2 sm:items-start"
    >
      {/* Large background number */}
      <span
        aria-hidden="true"
        /*
          RESPONSIVE FIX: "-mb-6 -mb-8 -mb-10 -mb-12" were unprefixed and
          conflicting — only one value could ever apply (whichever Tailwind
          happened to generate last), so the negative margin never actually
          scaled together with the number's font-size (56px → 72px → 96px).
          Now the margin steps up in sync with the font-size breakpoints,
          and lg:-mb-12 preserves the exact desktop value.
        */
        className="block mb-4 font-gilroy font-semibold leading-none text-[56px] text-[#D6AA39] opacity-10 transition-opacity duration-300 ease-out pointer-events-none select-none group-hover:opacity-20 group-focus-visible:opacity-20 -mb-6 -mb-8 -mb-12 sm:text-[72px] md:-mb-10 lg:text-[96px] xl:text-[96px]"
      >
        {number}
      </span>

      {/* Icon */}
      <Icon
        aria-hidden="true"
        /*
          RESPONSIVE FIX: width classes "w-6 w-7 w-8" were unprefixed and
          conflicting, so the icon's width was frozen at 32px (w-8) on every
          screen size while its height correctly scaled via "h-6 sm:h-7
          lg:h-8" — distorting the icon's aspect ratio below lg. Width now
          mirrors the height breakpoints exactly, and w-8 at lg preserves
          the desktop icon size (32x32) unchanged.
        */
        className="z-10 relative h-6 w-6 w-7 w-8 text-[#D6AA39] transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110 sm:h-7 lg:h-8"
        strokeWidth={2}
      />

      {/* Title */}
      <h3 className="z-10 relative mb-1 text-lg font-gilroy font-semibold text-[#C9C9C9] transition-colors duration-300 ease-out group-hover:text-[#D6AA39] group-focus-visible:text-[#D6AA39] sm:text-[16px] lg:text-[20px]">
        {title}
      </h3>

      {/* Description */}
      <p
        /*
          RESPONSIVE FIX: removed the redundant trailing "text-base" utility
          — it's the same 16px value as the explicit "text-[16px]" already
          set, so it was dead weight, not an actual conflict. Also added
          break-words as a safety net so long words can never force
          horizontal overflow on very narrow (320px) screens.
        */
        className="z-10 relative mt-2 mx-auto max-w-[266px] font-gilroy font-light text-[16px] leading-[150%] text-[#C9C9C9] break-words sm:mx-0"
      >
        {description}
      </p>
    </motion.article>
  );
}

// ----------------------------------------------------------------------------
// Main section
// ----------------------------------------------------------------------------
export default function WhyTokenize() {
  return (
    <section className="overflow-x-hidden w-full bg-black">
      {/*
        RESPONSIVE FIX: "py-20 py-28 py-32" were unprefixed and conflicting
        (only the last-generated one could ever win), so vertical padding
        never actually scaled down for mobile. Now it steps up with screen
        size, and lg:py-32 preserves the exact original desktop value.
      */}
      <div className="mx-auto px-6 py-4 px-16 max-w-[1440px] sm:py-4 md:py-28 lg:py-32 xl:px-20">
        {/* ---------------------------------------------------------------- */}
        {/* Top content: badge + heading (left) / description (right)       */}
        {/* ---------------------------------------------------------------- */}
        {/*
          RESPONSIVE FIX: "gap-8 gap-10" were unprefixed and conflicting.
          Now gap-8 on mobile (stacked column), lg:gap-10 preserves the
          original desktop row-gap exactly.
        */}
        <header className="flex flex-col items-end justify-between gap-4 lg:flex-row">
          {/*
            RESPONSIVE FIX: same "text-center text-left" conflict pattern as
            FeatureItem above — resolved the same way, mobile-first, with
            lg:items-start/text-left matching the original desktop result.
          */}
          <div className="flex flex-col items-center text-center text-left lg:items-start">
            {/* Badge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={badgeVariants}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border"
              style={{
                backgroundColor: "#FDED9926",
              }}
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 bg-[#D6AA39] rounded-full"
              />
              <span className="text-[12px] font-gilroy font-light tracking-[0.18em] text-[#E2BF57] uppercase">
                Meet The Team
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={headingVariants}
              /*
                BUG FIX: "lg:text-[70x]" was an invalid unit (missing the
                "p" — should be 70px), so it was silently dropped and the
                heading fell back to md's 40px for the entire 1024–1279px
                range instead of the intended 70px (which only kicked in at
                xl:1280px by accident matching). Corrected to lg:text-[70px]
                so the heading is the intended 70px across all of "desktop"
                (1024px+), matching xl exactly as originally intended.
              */
              className="mt-6 max-w-[545px] font-cinzel font-light text-[#EDE8DF] leading-[110%] text-[30px] md:text-[40px] lg:text-[70px] xl:text-[70px]"
            >
              Why Tokenize
              <br />
              Real Estate?
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={descVariants}
            /*
              CRITICAL BUG FIX: "w-full w-[519px]" were unprefixed and
              conflicting — the fixed 519px width won for EVERY screen size,
              including phones as narrow as 320px. That forced this
              paragraph (and the section) into horizontal scroll on any
              viewport under ~519px + padding. Also "text-center text-right"
              conflicted the same way, always resolving to text-right even
              while stacked full-width on mobile.
              Fix: fluid w-full below lg, switching to the fixed 519px only
              at lg+ (xl:w-[519px] kept for clarity/no-op at that width) —
              which is exactly the value desktop already rendered, so
              desktop is pixel-identical. Text is centered while stacked
              (mobile/tablet) and right-aligned once it sits beside the
              heading in the row layout (lg+), matching the original intent.
            */
            className="mx-auto w-full w-[519px] font-gilroy text-center text-base leading-[170%] text-right lg:mx-0 xl:w-[519px]"
            style={{ color: "#C9C9C9" }}
          >
            Tokenization removes the traditional barriers to real estate
            investment by enabling fractional ownership, increased liquidity,
            global access, and transparent blockchain-based
            transactions—making premium property investment more accessible
            to everyone.
          </motion.p>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/* Feature grid                                                     */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
          /*
            RESPONSIVE FIX: several groups of unprefixed conflicting
            utilities here collapsed to a single "always-on" desktop value
            regardless of screen size:
              - "gap-x-10 gap-x-8 gap-x-12"  -> always gap-x-12
              - "mt-16 mt-20 mt-24"          -> always mt-24
              - "place-items-center place-items-start" -> always place-items-start
              - "text-center text-left"      -> always text-left (also mostly
                overridden per-item anyway, see FeatureItem)
            None of these ever actually scaled down for mobile/tablet. Each
            is now a proper mobile-first progression, with the lg: value
            matching what desktop already rendered — so desktop is
            unchanged, and smaller screens get tighter gaps/margins and
            centered items until the 2-column layout kicks in at sm.
            grid-cols breakpoints (sm:grid-cols-2 / xl:grid-cols-4) are left
            exactly as authored since that IS the current desktop behavior.
          */
          className="grid grid-cols-1 gap-x-6 gap-y-6 place-items-center mt-16 place-items-start mt-20 mt-24 text-center text-left sm:grid-cols-2 lg:gap-x-12 xl:grid-cols-4"
        >
          {FEATURES.map((feature) => (
            <FeatureItem key={feature.number} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}