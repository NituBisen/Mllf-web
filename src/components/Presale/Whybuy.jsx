import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Coins, Zap, Wallet } from "lucide-react";
import Presalebg2 from "../../assets/Presale/presale2.png"
/**
 * PresaleSections.jsx
 * Complete presale landing page in a SINGLE section
 * React + Tailwind CSS + Framer Motion
 *
 * SETUP
 * -----
 * 1. Install dependencies:
 *      npm install framer-motion lucide-react
 *
 * 2. Add serif font to tailwind.config.js:
 *      theme: {
 *        extend: {
 *          fontFamily: {
 *            serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
 *          },
 *        },
 *      }
 *    Load font in index.html:
 *      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet">
 *
 * 3. Use in your app:
 *      import PresaleSections from './PresaleSections';
 *      export default function App() { return <PresaleSections />; }
 */

// ============================================================================
// CONFIGURATION
// ============================================================================
const GOLD = "#D6AA39";
const DARK_BG = "#0a0a0a";

const FEATURES = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Early Entry Advantage",
    description: "Lock in your tokens at presale price — 30% below public listing.",
  },
  {
    number: "02",
    icon: Shield,
    title: "Asset-Backed Security",
    description: "Every MLLF token is backed by real, verifiable luxury real estate.",
  },
  {
    number: "03",
    icon: Coins,
    title: "Rental Income Rights",
    description: "Presale participants earn rental income distributions from Phase 3 onwards.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Priority Staking Access",
    description: "Early holders get priority access to staking pools and governance rights.",
  },
];

const TIMELINE_STEPS = [
  {
    number: "01",
    title: "Create a Wallet",
    description: "Set up a BNB Smart Chain wallet in minutes.",
  },
  {
    number: "02",
    title: "Add Funds",
    description: "Fund your wallet with BNB or USDT.",
  },
  {
    number: "03",
    title: "Connect & Swap",
    description: "Connect your wallet and swap for MLLF.",
  },
  {
    number: "04",
    title: "Receive Tokens",
    description: "Tokens land directly in your wallet.",
  },
];

const CTA_BUTTONS = [
  {
    label: "Buy MLLF Now",
    href: "#",
    icon: Wallet,
    variant: "primary",
  },
  {
    label: "Learn About the Token",
    href: "#",
    icon: null,
    variant: "secondary",
  },
];

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================
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

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.25 },
  },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const timelineContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const buttonItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

// Badge Component
function SectionBadge({ children }) {
  return (
    <motion.div
      variants={badgeVariants}
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
      style={{
        backgroundColor: "#FDED9926"
      }}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: GOLD }}
      />
      <span
        className="text-[12px] font-gilroy font-ligt tracking-[0.18em] uppercase"
        style={{ color: "#E2BF57" }}
      >
        {children}
      </span>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ number, icon: Icon, title, description, isFirst, isLast }) {
  return (
    <motion.article
      variants={cardVariants}
      tabIndex={0}
      className={`group relative flex flex-col justify-center gap-5 border p-6 sm:p-7 lg:p-9 min-h-[220px] lg:min-h-[300px] outline-none transition-all duration-300 ease-out hover:-translate-y-1.5 focus-visible:-translate-y-1.5 hover:z-10 focus-visible:z-10 hover:shadow-[0_0_30px_-6px_rgba(214,170,57,0.4)] focus-visible:shadow-[0_0_30px_-6px_rgba(214,170,57,0.4)] ${
        isFirst ? "rounded-t-[20px] md:rounded-t-none md:rounded-l-[20px]" : ""
      } ${
        isLast ? "rounded-b-[20px] md:rounded-b-none md:rounded-r-[20px]" : ""
      }`}
      style={{
        backgroundColor: "rgba(10,10,10,0.9)",
        borderColor: "rgba(214,170,57,0.18)",
      }}
    >
      <span
        className="font-serif leading-none text-[48px] sm:text-[56px] lg:text-[68px]"
        style={{ color: GOLD }}
      >
        {number}
      </span>

      <div
        className="flex items-center justify-center h-11 w-11 rounded-lg border"
        style={{
          backgroundColor: "rgba(214,170,57,0.06)",
          borderColor: "rgba(214,170,57,0.3)",
        }}
      >
        <Icon
          aria-hidden="true"
          className="h-5 w-5 transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110"
          style={{ color: GOLD }}
          strokeWidth={1.75}
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-white sm:text-[22px]">
          {title}
        </h3>
        <p
          className="mt-2 text-base leading-[170%] sm:text-[18px]"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {description}
        </p>
      </div>
    </motion.article>
  );
}

// Timeline Step Component
function TimelineStep({ number, title, description, isActive, isLast }) {
  return (
    <li className="relative flex flex-1 flex-col items-center text-center text-left md:flex-row">
      <div className="flex flex-col items-center md:flex-1">
        <motion.div
          variants={nodeVariants}
          className="z-10 relative flex items-center justify-center h-[50px] w-[50px] w-16 font-semibold rounded-2xl border sm:h-16"
          style={
            isActive
              ? {
                  background: "linear-gradient(135deg, #C79622, #F2D16B)",
                  borderColor: "rgba(214,170,57,0.6)",
                  color: "#000000",
                  boxShadow: "0 0 24px -4px rgba(214,170,57,0.6)",
                }
              : {
                  backgroundColor: "rgba(10,10,10,0.9)",
                  borderColor: "rgba(214,170,57,0.4)",
                  color: GOLD,
                }
          }
        >
          {number}
        </motion.div>

        <div className="mt-4 max-w-[180px]">
          <h4 className="text-base font-semibold text-white sm:text-lg">
            {title}
          </h4>
          <p className="mt-1 text-sm text-white/55">{description}</p>
        </div>
      </div>

      {!isLast && (
        <span
          aria-hidden="true"
          className="my-4 my-0 h-10 w-px h-px w-full md:flex-1"
          style={{ backgroundColor: "rgba(214,170,57,0.3)" }}
        />
      )}
    </li>
  );
}

// CTA Button Component
function CTAButton({ label, href, icon: Icon, variant }) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      aria-label={label}
      variants={buttonItemVariants}
      whileHover={
        isPrimary
          ? { scale: 1.03, y: -3, filter: "brightness(1.08)" }
          : { scale: 1.03, y: -3 }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex h-12 w-full sm:w-auto sm:min-w-[230px] items-center justify-center gap-2 rounded-xl px-8 font-semibold transition-colors duration-300 ease-out ${
        isPrimary
          ? "text-black"
          : "text-white border hover:text-[#D6AA39] hover:border-[#D6AA39]"
      }`}
      style={
        isPrimary
          ? { background: "linear-gradient(90deg, #C79622, #F2D16B)" }
          : {
              backgroundColor: "rgba(214,170,57,0.05)",
              borderColor: "rgba(255,255,255,0.6)",
            }
      }
    >
      {Icon && <Icon className="h-5 w-5" strokeWidth={2} />}
      {label}
    </motion.a>
  );
}

// ============================================================================
// MAIN SECTION - SINGLE COMPONENT
// ============================================================================
export default function PresaleSections() {
  return (
   <section className="overflow-hidden relative mx-auto max-w-[1600px] w-full bg-black">
  {/* Background Image */}
  <img
  src={Presalebg2}
  alt=""
  className="object-cover absolute top-0 left-1/2 h-full w-[1550px] -translate-x-1/2"
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 mx-auto max-w-[1550px] bg-black/90" />

  {/* Content */}

      <div className="z-10 relative mx-auto px-6 py-[70px] px-8 px-10 max-w-[1450px] sm:py-[100px] md:py-[140px] lg:px-14 xl:px-16">
        
        {/* ================================================================ */}
        {/* SECTION 01 — Why Buy Early */}
        {/* ================================================================ */}
        <header className="flex flex-col items-center mb-20 font-cinzel text-center text-left md:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={badgeVariants}
          >
            <SectionBadge>Why Buy Early</SectionBadge>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={headingVariants}
            className="mt-6 font-cinzel font-normal text-white leading-[110%] tracking-wide text-[30px] sm:text-[35px] md:text-[35px] lg:text-[48px] xl:text-[48px]"
          >
            PRESALE PARTICIPANTS
            <br />
            GET THE MOST 
          </motion.h2>
        </header>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridVariants}
          className="overflow-hidden grid grid-cols-1 mb-24 font-gilroy rounded-[20px] border md:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "rgba(214,170,57,0.18)" }}
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.number}
              {...feature}
              isFirst={i === 0}
              isLast={i === FEATURES.length - 1}
            />
          ))}
        </motion.div>

        {/* ================================================================ */}
        {/* SECTION 02 — How To Buy */}
        {/* ================================================================ */}
        <header className="flex flex-col items-center mb-16 font-cinzel text-center text-left md:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={badgeVariants}
          >
            <SectionBadge>How To Buy</SectionBadge>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={headingVariants}
            className="mt-6 font-cinzel text-[#EDE8DF] leading-[110%] tracking-wide text-[30px] sm:text-[35px] md:text-[35px] lg:text-[48px] xl:text-[48px]"
          >
            FOUR STEPS TO YOUR FIRST MLLF TOKENS
          </motion.h2>
        </header>

        {/* Timeline */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={timelineContainerVariants}
          aria-label="How to buy MLLF tokens"
          className="flex flex-col items-stretch gap-0 mb-32 font-gilroy md:flex-row"
        >
          {TIMELINE_STEPS.map((step, i) => (
            <TimelineStep
              key={step.number}
              {...step}
              isActive={i === 0}
              isLast={i === TIMELINE_STEPS.length - 1}
            />
          ))}
        </motion.ol>

        {/* ================================================================ */}
        {/* SECTION 03 — Limited Presale Window (CTA) */}
        {/* ================================================================ */}
        <div className="flex flex-col items-center mx-auto py-16 max-w-[1500px] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={badgeVariants}
          >
            <SectionBadge>Limited Presale Window</SectionBadge>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={headingVariants}
            className="mt-6 font-cinzel leading-[105%] tracking-wide text-[30px] sm:text-[38px] md:text-[56px] lg:text-[70px] xl:text-[70px]"
          >
            <span className="block font-cinzel font-light text-white">
              DON&apos;T MISS YOUR ENTRY AT
            </span>
            <span
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #C79622, #F5E18A)",
              }}
            >
              PRESALE PRICE
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={descriptionVariants}
            className="mt-6 max-w-[720px] text-[15px] font-gilroy leading-[170%] sm:text-[16px] md:text-[16px] lg:text-[16px]"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Phase 2 closes once tokens are sold out or the timer hits zero.
            After that, MLLF lists at the public price of $0.010.
          </motion.p>

          <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  variants={buttonsContainerVariants}
  className="flex flex-col items-center justify-center gap-6 mt-9 w-full font-gilroy sm:flex-row"
>
  {CTA_BUTTONS.map((btn) => (
    <CTAButton key={btn.label} {...btn} />
  ))}
</motion.div>
        </div>
      </div>
    </section>
  );
}