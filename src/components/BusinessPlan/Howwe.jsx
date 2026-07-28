'use client';

import React from 'react';
import { motion } from 'framer-motion';
import meshBg from "../../assets/Read/mesh-bg.png";

// Strategy Cards Data
const STRATEGY_CARDS = [
  {
    id: 1,
    label: 'Portfolio Expansion',
    subtitle: 'Adding Premium Properties',
  },
  {
    id: 2,
    label: 'Staking Incentives',
    subtitle: 'Rewarding Long-Term Holders',
  },
  {
    id: 3,
    label: 'Referral Growth',
    subtitle: 'Community-Driven Expansion',
  },
  {
    id: 4,
    label: 'Global Partnerships',
    subtitle: 'Developers & Legal Advisors',
  },
];

// Mesh Background Component
const MeshBackground = () => (
  <div className="overflow-hidden absolute inset-0 pointer-events-none">
    {/* Background Image */}
    <img
      src={meshBg}
      alt=""
      className="object-cover absolute inset-0 mx-auto max-w-[1550px] h-full"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Optional Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
  </div>
);

// Badge Component
const SectionBadge = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-4 h-10 w-fit bg-[#FDED9914] rounded-full border"
  >
    <span className="h-2.5 w-2.5 bg-[#C08E22] rounded-full shadow-[0_0_12px_rgba(192,142,34,0.8)]" />

    <span
      className="text-[12px] font-medium tracking-[0.18em] text-[#E2BF57] uppercase"
      style={{ fontFamily: "Gilroy, sans-serif" }}
    >
      HOW WE SCALE
    </span>
  </motion.div>
);
// Heading Component
const SectionHeading = ({ delay = 0.15 }) => (
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="max-w-full text-[28px] font-light text-center text-[#EDE8DF] leading-[1.05] text-[30px] text-[35px] sm:text-center md:text-left lg:text-left xl:text-[70px]"
    style={{ fontFamily: 'Cinzel, serif' }}
  >
    Our Growth
    Strategy Across
    Four Core Pillars
  </motion.h1>
);

// Description Component
const SectionDescription = ({ delay = 0.1 }) => (
  <motion.p
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="max-w-full text-[13px] text-center text-[#E5E3DF] leading-[1.75] text-lg text-[16px] text-left sm:text-center md:max-w-[313px] lg:max-w-[313px]"
    style={{ fontFamily: 'Gilroy, sans-serif' }}
  >
    Our growth strategy is built on four key pillars that drive platform adoption, investor confidence, and long-term value.
  </motion.p>
);

// Strategy Card Component
const StrategyCard = ({ card, delay = 0 }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full group sm:w-full md:w-[351px] lg:w-[351px]"
    >
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden relative p-5 w-full bg-[#050505] rounded-[20px] cursor-pointer border"
      >
        {/* Hover Glow Effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered
              ? '0 0 24px rgba(192,142,34,0.25), inset 0 0 20px rgba(192,142,34,0.08)'
              : '0 0 0px rgba(192,142,34,0)',
          }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 rounded-[20px] pointer-events-none"
        />

        {/* Content */}
        <div className="z-10 relative flex flex-col gap-1">
          <span
            className="text-[10px] font-light tracking-[0.16em] text-[#E8C96B] uppercase"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          >
            {card.label}
          </span>
          <h3
            className="text-[10px] font-light tracking-[0.16em] text-[#ECECEC] sm:text-[10px] lg:text-[10px]"
            style={{ fontFamily: 'Gilroy, sans-serif' }}
          >
            {card.subtitle}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Component
export default function GrowthStrategy() {
  return (
    <section
      className="overflow-hidden relative mx-auto py-16 px-4 max-w-full w-full bg-black sm:py-20 md:py-24 lg:py-[120px]"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.75)
          ),
          url(${meshBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F0F0FF2]/75"></div>

      <div className="relative mx-auto px-4 max-w-[1445px] sm:px-6 lg:px-12">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 items-center justify-items-center justify-items-start gap-4 sm:gap-4 md:gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 w-full max-w-full max-w-[697px] w-auto sm:gap-8 lg:gap-12"
          >
            <div className="flex justify-center sm:justify-center lg:justify-start">
              <SectionBadge delay={0} />
            </div>

            <SectionHeading delay={0.15} />

            <SectionDescription delay={0.1} />
          </motion.div>

          {/* Right Column - Cards Grid */}
          <div className="flex flex-col gap-4 w-full max-w-full max-w-md max-w-[411px] w-auto sm:gap-5 md:max-w-lg lg:gap-6">
            {STRATEGY_CARDS.map((card, index) => (
              <StrategyCard
                key={card.id}
                card={card}
                delay={0.12 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}