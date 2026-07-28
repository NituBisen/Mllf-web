import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

/**
 * ============================================================
 *  TOKENOMICS + CONTRACT ADDRESS SECTION (single file)
 * ============================================================
 *  Swap these imports for your real assets:
 *
 *    tokenomicsBg   -> Tokenomics section background image
 *    allocationImg  -> the circular token wheel
 *    mllfLogo       -> the LM logo, overlaid centered on the wheel
 *    contractBg     -> Contract Address card background image
 *                      (already contains the coin, building,
 *                      corner marks, and all decorative graphics)
 *
 *  Fonts: this file assumes `font-cinzel` and `font-gilroy` are
 *  registered as Tailwind font families (tailwind.config.js):
 *
 *    fontFamily: {
 *      cinzel: ['Cinzel', 'serif'],
 *      gilroy: ['Gilroy', 'sans-serif'],
 *    }
 * ============================================================
 */

import tokenomicsBg from "../../assets/S6/tokenomics-bg.png";
import allocationImg from "../../assets/S6/token-allocation.png";
import mllfLogo from "../../assets/S6/mllf-logo.png";
import contractBg from "../../assets/S6/contract-bg.png";

/* ---------------------------------------------------------- */
/*  DATA                                                       */
/* ---------------------------------------------------------- */

const ALLOCATIONS = [
  { label: "Reserve/Treasury", value: "5%" },
  { label: "Team & Dev", value: "5%" },
  { label: "Liquidity", value: "10%" },
  { label: "Staking & Rewards", value: "15%" },
  { label: "Ecosystem", value: "15%" },
  { label: "Investors", value: "20%" },
  { label: "Community", value: "30%" },
];

const INFO_ROWS = [
  { label: "Token Name", value: "My Luxurious Life Style" },
  { label: "Symbol", value: "MLLF" },
  { label: "Network", value: "BEP 20" },
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Decimal", value: "18" },
];

const CONTRACT_ADDRESS = "0xF4A2D6C8B1E9A3F7D5C2B8E1A6D9F3C7B4E2A1D5";

/* ---------------------------------------------------------- */
/*  LEADER-LINE CALLOUT POSITIONS FOR WHEEL LABELS            */
/*  (all positions in % of wheel wrapper for responsive scale) */
/* ---------------------------------------------------------- */

const LEADER_LINE_COLOR = "#C08E22";
const LEADER_DOT_COLOR = "#FDED99";

const WHEEL_CALLOUTS = [
  {
    id: "team-dev",
    label: "Team & Dev",
    value: "5%",
    dot: { top: "22%", left: "15%" },
    points: [
      { top: "22%", left: "15%" },
      { top: "22%", left: "5%" },
      { top: "13%", left: "5%" },
    ],
    labelBox: { top: "7%", right: "95%" },
    align: "right",
  },
  {
    id: "liquidity",
    label: "Liquidity",
    value: "10%",
    dot: { top: "40%", left: "11%" },
    points: [
      { top: "40%", left: "11%" },
      { top: "40%", left: "2%" },
      { top: "27%", left: "2%" },
    ],
    labelBox: { top: "21%", right: "98%" },
    align: "right",
  },
  {
    id: "staking",
    label: "Staking & Rewards",
    value: "15%",
    dot: { top: "55%", left: "18%" },
    points: [
      { top: "55%", left: "18%" },
      { top: "55%", left: "5%" },
      { top: "73%", left: "3%" },
    ],
    labelBox: { top: "80%", right: "80%" },
    align: "right",
  },
  {
    id: "reserve",
    label: "Reserve / Treasury",
    value: "5%",
    dot: { top: "6%", left: "57%" },
    points: [
      { top: "6%", left: "57%" },
      { top: "1%", left: "57%" },
      { top: "1%", left: "71%" },
    ],
    labelBox: { top: "-2%", left: "71%" },
    align: "left",
  },
  {
    id: "ecosystem",
    label: "Ecosystem",
    value: "15%",
    dot: { top: "95%", left: "43%" },
    points: [
      { top: "95%", left: "43%" },
      { top: "110%", left: "43%" },
    ],
    labelBox: { top: "115%", left: "43%" },
    align: "center",
  },
  {
    id: "community",
    label: "Community",
    value: "30%",
    dot: { top: "31%", left: "80%" },
    points: [
      { top: "31%", left: "80%" },
      { top: "31%", left: "99%" },
      { top: "23%", left: "99%" },
    ],
    labelBox: { top: "17%", left: "99%" },
    align: "left",
  },
  {
    id: "investors",
    label: "Investors",
    value: "20%",
    dot: { top: "65%", left: "82%" },
    points: [
      { top: "65%", left: "82%" },
      { top: "65%", left: "98%" },
      { top: "72%", left: "98%" },
    ],
    labelBox: { top: "80%", left: "98%" },
    align: "left",
  },
];

/* ---------------------------------------------------------- */
/*  ANIMATION VARIANTS                                         */
/* ---------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const calloutDotVariant = {
  hidden: { scale: 0, opacity: 0 },
  show: (i) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, delay: 0.15 + i * 0.08, ease: "easeOut" },
  }),
};

const calloutLineVariant = {
  hidden: { scaleX: 0, scaleY: 0, opacity: 0 },
  show: (i) => ({
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.45, delay: 0.2 + i * 0.08, ease: "easeOut" },
  }),
};

const calloutLabelVariant = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.4 + i * 0.08, ease: "easeOut" },
  }),
};

/* ---------------------------------------------------------- */
/*  HELPER COMPONENTS                                          */
/* ---------------------------------------------------------- */

/**
 * RowIcon - small gradient dot used in info rows
 */
function RowIcon() {
  return (
    <span className="flex items-center justify-center h-9 w-9 w-10 bg-black/40 rounded-full border-amber-400/50 border shrink-0 sm:h-10">
      <span className="h-2.5 w-2.5 bg-gradient-to-br from-[#FDED99] to-[#C08E22] rounded-full" />
    </span>
  );
}

/**
 * InfoRow - single data row with label and value
 */
function InfoRow({ label, value }) {
  return (
    <motion.div
      variants={rowVariant}
      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-5 border-b border-white/[0.06] last:border-b-0 sm:py-7"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <RowIcon />
        <span className="font-gilroy text-sm text-gray-300 sm:text-base">{label}</span>
      </div>
      <span className="font-gilroy text-sm font-semibold text-white sm:text-base">{value}</span>
    </motion.div>
  );
}

/**
 * CalloutLineSegment - horizontal or vertical 1px line between two points
 * Uses percentage-based positioning for responsive scaling
 */
function CalloutLineSegment({ from, to, index }) {
  const f = { top: parseFloat(from.top), left: parseFloat(from.left) };
  const t = { top: parseFloat(to.top), left: parseFloat(to.left) };
  const isHorizontal = f.top === t.top;

  if (isHorizontal) {
    const left = Math.min(f.left, t.left);
    const width = Math.abs(t.left - f.left);
    const originSide = t.left > f.left ? "left" : "right";
    return (
      <motion.div
        custom={index}
        variants={calloutLineVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute h-px"
        style={{
          top: `${f.top}%`,
          left: `${left}%`,
          width: `${width}%`,
          backgroundColor: LEADER_LINE_COLOR,
          transformOrigin: originSide,
        }}
      />
    );
  }

  const top = Math.min(f.top, t.top);
  const height = Math.abs(t.top - f.top);
  const originSide = t.top > f.top ? "top" : "bottom";
  return (
    <motion.div
      custom={index}
      variants={calloutLineVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="absolute w-px"
      style={{
        left: `${f.left}%`,
        top: `${top}%`,
        height: `${height}%`,
        backgroundColor: LEADER_LINE_COLOR,
        transformOrigin: originSide,
      }}
    />
  );
}

/**
 * WheelCallout - complete callout with leader lines, dot, and label
 * Only visible on lg+ (desktop/laptop)
 */
function WheelCallout({ item, index }) {
  const segments = [];
  for (let i = 0; i < item.points.length - 1; i++) {
    segments.push(
      <CalloutLineSegment
        key={`${item.id}-seg-${i}`}
        from={item.points[i]}
        to={item.points[i + 1]}
        index={index}
      />
    );
  }

  const textAlignClass =
    item.align === "right"
      ? "text-right items-end"
      : item.align === "left"
      ? "text-left items-start"
      : "text-center items-center";

  const translateClass =
    item.align === "center" ? "-translate-x-1/2 -translate-y-1/2" : "-translate-y-1/2";

  return (
    <div className="absolute inset-0 hidden pointer-events-none lg:block">
      {segments}

      <motion.span
        custom={index}
        variants={calloutDotVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute h-2 w-2 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          top: item.dot.top,
          left: item.dot.left,
          backgroundColor: LEADER_DOT_COLOR,
        }}
      />

      <motion.div
        custom={index}
        variants={calloutLabelVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className={`absolute flex flex-col whitespace-nowrap font-gilroy ${textAlignClass} ${translateClass}`}
        style={{
          top: item.labelBox.top,
          left: item.labelBox.left,
          right: item.labelBox.right,
        }}
      >
        <span className="text-sm text-amber-50 lg:text-lg">{item.label}</span>
        <span className="text-sm text-amber-50 font-bold lg:text-lg">{item.value}</span>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------- */
/*  MAIN COMPONENT                                              */
/* ---------------------------------------------------------- */

export default function TokenomicsSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}........${address.slice(-1)}`;
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="overflow-hidden relative px-4 py-10 bg-black sm:px-6 lg:px-10 xl:px-16"
    >
      {/* Background image — Tokenomics section */}
      <img
        src={tokenomicsBg}
        alt=""
        aria-hidden="true"
        className="object-cover absolute inset-0 mx-auto w-full h-full max-w-[1547px] pointer-events-none"
      />
      
      {/* Subtle black overlay for readability */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-[1550px]">
        {/* ================= TOKENOMICS SECTION ================= */}
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 xl:gap-16">
          
          {/* ---------- LEFT: WHEEL + DESCRIPTION ---------- */}
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Description paragraph */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mb-8 max-w-[482px] text-center font-gilroy text-[16px] text-[#ECECEC] leading-[170%] sm:mb-10 lg:text-left"
            >
              My Luxuries Life Style Token (MLLF) features a fixed supply of 1
              billion tokens, strategically allocated to support community
              growth, staking rewards, liquidity, ecosystem development, and
              long-term sustainability.
            </motion.p>

            {/* Circular allocation wheel with logo overlay */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative mx-auto w-full max-w-xs max-w-2xl sm:max-w-sm md:max-w-md lg:mt-30"
            >
              {/* Allocation wheel image */}
              <img
                src={allocationImg}
                alt="MLLF token allocation wheel — Reserve/Treasury 5%, Team & Dev 5%, Liquidity 10%, Staking & Rewards 15%, Ecosystem 15%, Investors 20%, Community 30%"
                className="object-contain h-auto w-full"
              />

              {/* Logo centered over wheel donut hole */}
              <img
                src={mllfLogo}
                alt="MLLF logo"
                aria-hidden="true"
                className="object-contain absolute left-1/2 top-1/2 w-[23%] h-auto pointer-events-none -translate-x-1/2 -translate-y-1/2"
              />

              {/* Leader-line callouts (desktop only, lg+) */}
              {WHEEL_CALLOUTS.map((item, i) => (
                <WheelCallout key={item.id} item={item} index={i} />
              ))}
            </motion.div>

            {/* Legend grid (mobile/tablet only, hidden on lg+) */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-x-6 gap-y-3 mt-8 w-full max-w-md sm:grid-cols-3 lg:hidden"
            >
              {ALLOCATIONS.map((item) => (
                <motion.div
                  key={item.label}
                  variants={rowVariant}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1 h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0" />
                  <div>
                    <p className="font-gilroy text-xs text-gray-200 sm:text-sm">{item.label}</p>
                    <p className="font-gilroy text-xs font-semibold text-amber-400 sm:text-sm">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ---------- RIGHT: INFO CARD ---------- */}
          <div className="flex flex-col items-center pt-0 lg:items-start">
            
            {/* Badge */}
            <motion.span
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 font-gilroy text-[12px] font-light tracking-[0.2em] text-[#E2BF57] rounded-full uppercase sm:text-[12px]"
              style={{ backgroundColor: "#FDED9926" }}
            >
              <span className="h-1.5 w-1.5 bg-amber-300 rounded-full" />
              MLLF Tokenomics
            </motion.span>

            {/* Section heading */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-[600px] font-cinzel text-2xl leading-[110%] text-white text-center text-left sm:text-3xl md:text-4xl lg:text-4xl"
            >
              My Luxuries Life Style Token — Supply &amp; Allocation Overview
            </motion.h2>

            {/* Information card with table */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden mt-8 w-full rounded-lg rounded-2xl shadow-2xl backdrop-blur-md sm:mt-10"
              style={{
                backgroundColor: "rgba(12,12,12,0.92)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="px-5 py-2 sm:px-7">
                {INFO_ROWS.map((row) => (
                  <InfoRow key={row.label} label={row.label} value={row.value} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= CONTRACT ADDRESS SECTION ================= */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="overflow-hidden relative w-full rounded-2xl sm:mt-20 lg:mt-24"
>
  {/* Background image — fills the mobile min-height via object-cover;
      at lg+ it goes back to static/h-auto, exactly as before, so
      desktop's sizing and cropping are unchanged */}
  <img
    src={contractBg}
    alt="Contract Address background"
    className="block w-full h-auto rounded-2xl"
  />

  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-black/15 rounded-lg pointer-events-none sm:rounded-2xl" />

  {/* Content overlay */}
  <div className="z-10 absolute inset-0 flex flex-col justify-center px-5 sm:px-10 md:px-14 lg:flex-row">
    <div className="flex flex-col justify-center items-center w-full max-w-full max-w-[55%] text-center text-left lg:items-start">

      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="font-cinzel leading-tight text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl"
      >
        Contract Address
      </motion.h3>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-2 max-w-[480px] break-all font-gilroy text-[#D0D0D0] text-xs text-base xs:text-sm sm:mt-3 md:text-lg lg:text-xl"
      >
        <span className="md:hidden">
          {truncateAddress(CONTRACT_ADDRESS)}
        </span>
        <span className="hidden md:inline">
          {CONTRACT_ADDRESS}
        </span>
      </motion.p>

      <div className="z-20 relative flex flex-wrap justify-center items-center gap-2 mt-4 mt-5 mt-6 pointer-events-auto sm:gap-3 lg:justify-start">
        <motion.button
          type="button"
          onClick={handleCopy}
          whileHover={{ y: -2, boxShadow: "0 0 25px rgba(253,237,153,.45)" }}
          whileTap={{ scale: 0.97 }}
          className="z-20 relative inline-flex flex-shrink-0 items-center gap-1.5 px-4 py-2.5 px-5 py-3 font-gilroy font-semibold text-black text-xs whitespace-nowrap text-sm rounded-[10px] transition-all sm:gap-2"
          style={{
            background: "linear-gradient(90deg,#C08E22 0%,#FDED99 50%,#C08E22 100%)",
          }}
        >
          {copied ? (
            <>
              <Check size={14} className="flex-shrink-0 sm:size-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} className="flex-shrink-0 sm:size-4" />
              Copy Address
            </>
          )}
        </motion.button>

        {copied && (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            className="z-20 relative flex-shrink-0 text-xs text-[#FDED99] font-gilroy whitespace-nowrap sm:text-sm"
          >
            Copied!
          </motion.div>
        )}
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </motion.section>
  );
}