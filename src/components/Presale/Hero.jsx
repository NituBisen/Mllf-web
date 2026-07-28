import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";


import heroBg from "../../assets/Presale/hero-bg.png";

const BACKGROUND_IMAGE_URL = heroBg;

const GOLD = "#D6AA39";
const LAUNCH_DATE = "2025-10-31T23:59:00Z"; // 31 Oct 2025, 23:59 UTC

const PRESALE_STATS = [
  { label: "Tokens Sold", value: "287,400,000", suffix: "MLLF" },
  { label: "Sale Goal", value: "500,000,000", suffix: "MLLF" },
  { label: "Current Price", value: "$0.007", suffix: "per token" },
];

const BOTTOM_STATS = [
  {
    label: "Current Price",
    value: "$0.007",
    description: "Per MLLF token",
    gold: true,
  },
  {
    label: "Public Sale Price",
    value: "$0.010",
    description: "After presale ends",
    gold: true,
  },
  {
    label: "Tokens Sold",
    value: "287.4M",
    description: "Of 500M presale supply",
    gold: false,
  },
  {
    label: "Participants",
    value: "1,240+",
    description: "Early investors",
    gold: false,
  },
];

// ----------------------------------------------------------------------------
// Countdown hook
// ----------------------------------------------------------------------------
function useCountdown(targetIso) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [timeLeft, setTimeLeft] = useState(() => target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const clamped = Math.max(timeLeft, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);

  return { days, hours, minutes, seconds };
}

const pad2 = (n) => String(n).padStart(2, "0");

// ----------------------------------------------------------------------------
// Animation variants
// ----------------------------------------------------------------------------
const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

const buttonsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const buttonItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const countdownVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.45 },
  },
};

const presaleCardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

const bottomStatsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const bottomStatItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ----------------------------------------------------------------------------
// CountdownBox — reusable
// ----------------------------------------------------------------------------
function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="flex items-center justify-center h-14 w-14 w-16 w-20 rounded-xl border backdrop-blur-xl sm:h-16 lg:h-20"
        style={{
          background: "rgba(255, 255, 255, 0.08)", // Transparent background
          backdropFilter: "blur(10px)",            // Blur effect
          WebkitBackdropFilter: "blur(10px)",      // Safari support
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <span className="font-semibold text-xl text-white tabular-nums sm:text-2xl lg:text-3xl">
          {pad2(value)}
        </span>
      </div>

      <span className="text-[10px] tracking-[0.14em] text-white/50 uppercase sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

// ----------------------------------------------------------------------------
// StatCard — reusable
// ----------------------------------------------------------------------------
function StatCard({ label, value, suffix }) {
  return (
    <div className="flex flex-col gap-1 px-4 py-4 sm:px-5">
      <span className="text-[11px] tracking-[0.14em] text-white/45 uppercase">
        {label}
      </span>
      <span className="text-lg font-semibold text-white sm:text-xl">
        {value}
      </span>
      <span className="text-xs text-white/40">{suffix}</span>
    </div>
  );
}

// ----------------------------------------------------------------------------
// BottomStat — reusable, for the strip below the hero banner
// ----------------------------------------------------------------------------
function BottomStat({ label, value, description, gold, isFirst }) {
  return (
    <motion.div
      variants={bottomStatItemVariants}
      className={`flex flex-col gap-1.5 px-6 py-6 sm:px-8 sm:py-7 ${
        isFirst ? "" : "border-t md:border-t-0 md:border-l"
      }`}
      style={{ borderColor: "rgba(214,170,57,0.18)" }}
    >
      <span className="text-[12px] tracking-[0.14em] text-white/50 uppercase">
        {label}
      </span>
      <span
        className="text-2xl font-semibold sm:text-3xl"
        style={{ color: gold ? "#C9A84C" : "#C9A84C" }}
      >
        {value}
      </span>
      <span className="text-sm text-white/50">{description}</span>
    </motion.div>
  );
}

// ----------------------------------------------------------------------------
// InputField — reusable
// ----------------------------------------------------------------------------
function InputField({ label, value, onChange, placeholder, suffix, readOnly }) {
  return (
    <div
      className="flex flex-col gap-2 px-5 py-3.5 rounded-2xl border"
      style={{
        backgroundColor: "#0A0A0A",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <span className="text-[11px] tracking-[0.14em] text-white/45 uppercase">
        {label}
      </span>
      <div className="flex items-center justify-between gap-3">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          className="placeholder-white/30 w-full text-xl font-semibold text-white bg-transparent outline-none sm:text-2xl"
        />
        <span className="text-sm font-medium text-white/60 shrink-0">
          {suffix}
        </span>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Main section
// ----------------------------------------------------------------------------
export default function Hero({ imageUrl = BACKGROUND_IMAGE_URL }) {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
  const [token, setToken] = useState("BNB");
  const [amount, setAmount] = useState("");

  const tokensSold = 287_400_000;
  const saleGoal = 500_000_000;
  const progressPct = Math.min((tokensSold / saleGoal) * 100, 100).toFixed(1);
  const pricePerToken = 0.007;

  const youReceive =
    amount && !isNaN(parseFloat(amount))
      ? (parseFloat(amount) / pricePerToken).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })
      : "";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={heroVariants}
      className="overflow-hidden relative w-full bg-black"
    >
      <div className="mx-auto max-w-[1550px]">
        <div
          className="overflow-hidden relative mx-auto max-w-[1550px] min-h-[720px] md:min-h-[720px] lg:min-h-[820px] xl:min-h-[1000px]"
          style={{
  backgroundColor: "#000",
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "contain",
  backgroundPosition: "contain",
  backgroundRepeat: "no-repeat",
}}
        >
         <div
  aria-hidden="true"
  className="absolute inset-0"
  style={{
    background: "rgba(0,0,0,0.80)",
  }}

/>

          <div className="z-10 relative grid grid-cols-1 items-center gap-10 gap-[60px] px-6 py-10 px-10 py-0 sm:px-8 md:px-10 lg:grid-cols-[48%_52%]">
            {/* -------------------------------------------------------- */}
            {/* LEFT CONTENT                                             */}
            {/* -------------------------------------------------------- */}
            <header className="flex flex-col items-center order-1 text-center text-left lg:items-start">
              <motion.h1
                variants={headingVariants}
                className="font-cinzel font-normal text-[#EDE8DF] leading-[105%] tracking-wide text-[34px] sm:text-[42px] md:text-[56px] lg:text-[70px] xl:text-[70px]"
              >
                Real Estate,
                <br />
                On-Chain
              </motion.h1>

              <motion.p
                variants={paragraphVariants}
                className="mt-5 max-w-[520px] max-w-[396px] font-gilroy text-[16px] leading-[170%] text-[18px] sm:mt-6 lg:text-[16px]"
                style={{ color: "#EDE8DF" }}
              >
                MLLF tokenizes premium luxury properties — giving you
                fractional ownership, rental income rights, and governance —
                all secured on the Binance Smart Chain.
              </motion.p>

              <motion.div
                variants={buttonsContainerVariants}
                className="flex flex-col gap-4 gap-5 mt-7 mt-8 w-full sm:flex-row"
              >
                <motion.button
                  variants={buttonItemVariants}
                  whileHover={{ scale: 1.02, filter: "brightness(1.08)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center justify-center gap-2 px-5 h-11 w-full font-gilroy font-semibold text-black rounded-xl sm:w-auto"
                  style={{
                    background: "linear-gradient(90deg, #C79622, #F2D16B)",
                  }}
                >
                  Enter Presale
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </motion.button>

                <motion.button
                  variants={buttonItemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center justify-center gap-2 px-6 h-11 w-full font-gilroy font-semibold text-white rounded-xl border-white/70 transition-colors duration-300 border hover:border-[#D6AA39] sm:w-auto"
                >
                  Read Whitepaper
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </motion.button>
              </motion.div>

              {/* Countdown card */}
              <motion.div
                variants={countdownVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-9 p-1 w-full w-[458px] rounded-[10px] border sm:mt-10 lg:w-[520px]"
                style={{
                  backgroundColor: "rgba(30,20,10,0.40",
                  borderColor: "rgba(214,170,57,0.25)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-gilroy tracking-[0.14em] text-white/55 uppercase">
                    LAUNCHING IN
                  </span>
                  <span className="text-[12px] font-gilroy tracking-[0.14em] text-white/55 uppercase">
                    UTC
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-3 mt-4 font-gilroy sm:gap-4">
                  <CountdownBox value={days} label="Days" />
                  <CountdownBox value={hours} label="Hrs" />
                  <CountdownBox value={minutes} label="Min" />
                  <CountdownBox value={seconds} label="Sec" />
                </div>

                <p className="mt-5 text-center font-gilroy text-[13px] text-[#C9A84CB2]">
                  Launch Day · 31 Oct 2025, 23:59 UTC
                </p>
              </motion.div>
            </header>

            {/* -------------------------------------------------------- */}
            {/* RIGHT COLUMN — Presale Card                              */}
            {/* -------------------------------------------------------- */}
            <motion.article
              variants={presaleCardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="order-2 p-6 w-full max-w-[505px] rounded-[10px] border sm:p-8"
              style={{
                backgroundColor: "#111111",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {/* Top row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 font-gilroy text-[11px] font-light tracking-[0.1em] rounded-sm border uppercase"
                    style={{
                      color: "#3DDC84",
                      borderColor: "rgba(61,220,132,0.35)",
                      backgroundColor: "rgba(61,220,132,0.1)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "#3DDC84" }}
                    />
                    LIVE NOW
                  </span>
                  <span className="text-base font-gilroy font-semibold text-white sm:text-lg">
                    Presale Phase 2
                  </span>
                </div>
                <span
                  className="text-lg font-gilroy font-semibold sm:text-xl"
                  style={{ color: GOLD }}
                >
                  {progressPct}%
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="overflow-hidden mt-4 h-2.5 w-full rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progressPct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #C79622, #F2D16B)",
                  }}
                />
              </div>

              {/* Stats */}
              <div
                className="overflow-hidden grid grid-cols-1 mt-0 font-gilroy rounded-2xl border sm:grid-cols-3"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {PRESALE_STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={
                      i > 0
                        ? "border-t sm:border-t-0 font-gilroy sm:border-l"
                        : ""
                    }
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>

              {/* Price box */}
              <div
                className="flex flex-wrap items-center justify-between gap-4 mt-6 px-5 py-4 font-gilroy rounded-2xl border"
                style={{
                  backgroundColor: "#0A0A0A",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div>
                  <p className="text-[11px] font-gilroy tracking-[0.14em] text-white/45 uppercase">
                    Launch / Listing Price
                  </p>
                  <p
                    className="mt-1 text-xl font-semibold sm:text-2xl"
                    style={{ color: GOLD }}
                  >
                    $0.0100
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-gilroy font-medium rounded-lg transition-colors duration-300 border hover:border-[#D6AA39]"
                  style={{ color: GOLD, borderColor: "rgba(214,170,57,0.4)" }}
                >
                  Buy Before Launch
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </motion.button>
              </div>

              {/* Token switch */}
              <div
                className="grid grid-cols-2 gap-1 mt-6 p-1 rounded-xl border"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                role="tablist"
                aria-label="Payment token"
              >
                {["BNB", "USDT"].map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={token === t}
                    onClick={() => setToken(t)}
                    className={`h-11 rounded-lg text-sm font-gilroy font-semibold transition-all duration-300 ${
                      token === t ? "text-black" : "text-white/60"
                    }`}
                    style={
                      token === t
                        ? { background: "linear-gradient(90deg, #C79622, #F2D16B)" }
                        : { backgroundColor: "transparent" }
                    }
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-4 mt-6 font-gilroy">
                <InputField
                  label="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  suffix={token}
                />
                <InputField
                  label="You Receive"
                  value={youReceive}
                  onChange={() => {}}
                  placeholder="—"
                  suffix="MLLF"
                  readOnly
                />
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ filter: "brightness(1.08)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center gap-2 mt-7 h-[45px] w-full font-gilroy font-semibold text-black rounded-xl"
                style={{
                  background: "linear-gradient(90deg, #C79622, #F2D16B)",
                }}
              >
                <FileText className="h-5 w-5" strokeWidth={2} />
                Read Whitepaper
              </motion.button>
            </motion.article>
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* BOTTOM STATS STRIP                                              */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={bottomStatsContainerVariants}
          className="overflow-hidden grid grid-cols-1 font-gilroy rounded-[20px] border md:grid-cols-4"
          style={{ borderColor: "rgba(214,170,57,0.18)" }}
        >
          {BOTTOM_STATS.map((stat, i) => (
            <BottomStat key={stat.label} {...stat} isFirst={i === 0} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}