'use client';

import React from 'react';
import { motion } from 'framer-motion';
import cardBg from "../../assets/Read/card-bg.png";

// Card Data
const CARDS_DATA = [
  {
    id: 1,
    title: 'Tokenization',
    description:
      'Real-world properties are securely tokenized into BEP-20 digital assets, enabling transparent, fractional, and blockchain-based ownership.',
  },
  {
    id: 2,
    title: 'Fractional Access',
    description:
      'Invest in premium real estate with smaller capital, making high-value property ownership more accessible to everyone.',
  },
  {
    id: 3,
    title: 'Rental Distribution',
    description:
      'Earn a share of real rental income, distributed directly to token holders based on their ownership.',
  },
  {
    id: 4,
    title: 'Secondary Trading',
    description:
      'Buy and sell MLLF tokens anytime through blockchain-enabled secondary markets, providing enhanced liquidity.',
  },
  {
    id: 5,
    title: 'Portfolio Diversification',
    description:
      'Diversify your investments across residential, commercial, and hospitality real estate assets to reduce risk.',
  },
  {
    id: 6,
    title: 'Asset-Backed Value',
    description:
      'Every token is backed by real, legally verified properties, ensuring transparency, stability, and tangible value.',
  },
];



const SectionBadge = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="flex justify-end max-w-[1273]px]"
  >
    <div className="inline-flex items-center gap-2.5 px-5 h-9 bg-[#FDED9926] rounded-full border">
      <div className="h-2 w-2 bg-[#C08E22] rounded-full shadow-[0_0_8px_rgba(192,142,34,0.6)]" />
      <span
        className="text-[12px] font-light tracking-[0.18em] text-[#E2BF57] uppercase"
        style={{ fontFamily: "Gilroy, sans-serif" }}
      >
        How MLLF Generates Value
      </span>
    </div>
  </motion.div>
);

// Heading Component
const SectionHeading = ({ delay = 0.2 }) => (
  <div className="flex justify-end max-w-[1273px]">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="w-full max-w-[601px] text-right text-[30px] font-light leading-[1.08] text-[#EDE8DF] sm:text-[30px] lg:text-[70px] xl:text-[70px]"
      style={{ fontFamily: "Cinzel, serif" }}
    >
      Six Pillars of
    
      Value Creation
    </motion.h1>
  </div>
);

// Description Component
const SectionDescription = ({ delay = 0.1 }) => (
  <motion.p
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="max-w-full text-base text-[#C9C9C9] leading-[1.8] text-[16px] sm:text-[16px] lg:max-w-[410px]"
    style={{ fontFamily: 'Gilroy, sans-serif' }}
  >
    Built on transparency, security, and accessibility, our six core pillars redefine real estate
    investing through blockchain-powered tokenization, enabling investors to own, earn, and trade
    with confidence.
  </motion.p>
);

// Card Component
const ValueCard = ({ card, delay = 0 }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
  animate={{ y: isHovered ? -10 : 0 }}
  transition={{ duration: 0.35 }}
  className="overflow-hidden relative p-6 h-full max-w-[402px] min-h-[200px] rounded-[24px] border-transparent cursor-pointer border sm:p-7 lg:p-9"
  style={{
    background: `
      linear-gradient(#090909,#090909) padding-box,
      linear-gradient(
        290.99deg,
        rgba(192,142,34,0.42) 0%,
        rgba(253,237,153,0.7) 48.68%,
        rgba(192,142,34,0.42) 97.37%
      ) border-box
    `,
  }}
>
  {/* Background Image */}
  <img
    src={cardBg}
    alt=""
    className="object-cover absolute inset-0 w-full h-full opacity-20 pointer-events-none"
  />


  {/* Glow Effect */}
  <motion.div
    animate={{
      opacity: isHovered ? 1 : 0,
    }}
    transition={{ duration: 0.35 }}
    className="absolute inset-0 rounded-[24px] shadow-[0_0_35px_rgba(192,142,34,0.18)]"
  />

  {/* Content */}
  <div className="z-10 relative flex flex-col h-full">
    <h3
      className="mb-4 text-[24px] font-semibold text-[#E5E3DF] lg:mb-6"
      style={{ fontFamily: "Gilroy, sans-serif" }}
    >
      {card.title}
    </h3>

    <p
      className="flex-grow text-[#E5E3DF] text-[14px] leading-[1.8] font-semibold"
      style={{ fontFamily: "Gilroy, sans-serif" }}
    >
      {card.description}
    </p>
  </div>
</motion.div>
    </motion.div>
  );
};

// Main Component
export default function ValueCreation() {
  return (
    <section className="px-4 px-6 px-12 w-full sm:py-0 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1273px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 items-center gap-6 mb-5 sm:gap-8 lg:grid-cols-[1fr_1.5fr] xl:mb-24">
          {/* Left Column - Description */}
          <div className="flex flex-col order-2 gap-4 gap-8 sm:gap-6 lg:order-1">
            <SectionDescription delay={0.1} />
          </div>

          {/* Right Column - Badge & Heading */}
          <div className="flex flex-col order-1 gap-6 gap-12 sm:gap-8 lg:order-2">
            <SectionBadge delay={0} />
            <SectionHeading delay={0.2} />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS_DATA.map((card, index) => (
            <ValueCard key={card.id} card={card} delay={0.1 * (index + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}