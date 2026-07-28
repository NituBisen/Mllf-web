'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import govImage from '../../assets/Read/governance-image.png';

/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 */
const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  },
};

/**
 * SectionBadge Component
 * Displays the governance badge with glowing dot and text
 */
const SectionBadge = () => (
  <motion.div
    variants={animationVariants.fadeDown}
    className="flex justify-center mb-6 sm:mb-8 lg:mb-12"
  >
    <div
      className="inline-flex items-center gap-1.5 px-3 px-[18px] h-9 h-10 bg-[#FDED9926] rounded-full border backdrop-blur-sm sm:gap-2.5"
    >
      {/* Glowing gold dot */}
      <div className="relative flex-shrink-0">
        <div className="h-1.5 w-1.5 w-2 bg-[#E2BF57] rounded-full shadow-[0_0_8px_rgba(226,191,87,0.6)] sm:h-2" />
      </div>

      {/* Badge text */}
      <span
        className="whitespace-nowrap font-gilroy text-[9px] font-light tracking-[0.12em] text-[#E2BF57] tracking-[0.16em] tracking-[0.18em] uppercase sm:text-[10px] md:text-[11px] lg:text-[12px]"
      >
        Governance Built Into The Ecosystem
      </span>
    </div>
  </motion.div>
);
/**
 * ImageContainer Component
 * Displays the premium governance image with hover effects and golden border
 */
const ImageContainer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={animationVariants.slideInLeft}
      className="relative flex items-center justify-center w-full h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Golden glow background */}
      <div
        className={`absolute inset-0 rounded-[24px] bg-gradient-to-b from-[rgba(226,191,87,0.1)] to-transparent blur-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-60'
        }`}
      />

      {/* Image container with border */}
      <div className="overflow-hidden relative w-full h-full bg-black/40 rounded-[24px] border-[rgba(224,166,52,.7)] border">
        <motion.img
          src={govImage}
          alt="Community-Driven Governance"
          className="object-cover w-full h-full"
          animate={{ scale: isHovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* Subtle overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

/**
 * GovernanceSection Component
 * Main component for the Community-Driven Decision Making section
 * Fully responsive with luxury black-and-gold aesthetic
 */
export default function GovernanceSection() {
  return (
    <motion.section
      variants={animationVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-black"
    >
      <div className="mx-auto px-5 max-w-[1440px] sm:px-8 md:px-10 lg:px-12 xl:py-[120px] 2xl:px-20">
  <div className="flex flex-col items-center justify-between lg:flex-row">

    {/* Left Column */}
    <motion.div
  className="flex-shrink-0 order-2 w-full max-w-[573px] h-[250px] w-[52%] sm:h-[320px] md:h-[376px] lg:order-1"
>
  <ImageContainer />
</motion.div>

    {/* Right Column */}
   <motion.div
  className="flex flex-col order-1 items-center justify-center w-full w-[48%] text-center lg:order-2"
>
  <SectionBadge />

  <motion.h2
    variants={animationVariants.fadeUp}
    className="mt-6 mb-8 max-w-[550px] font-light leading-[105%] text-[#F5F0EA] text-[32px] sm:text-[30px] md:text-[30px] lg:text-[48px]"
    style={{ fontFamily: "Cinzel, serif" }}
  >
    COMMUNITY-DRIVEN
    <br />
    DECISION MAKING
  </motion.h2>

  <motion.p
    variants={animationVariants.fadeUp}
    className="max-w-[433px] text-center text-[#ECECEC] text-[15px] leading-[180%] sm:text-[16px] lg:text-[16px]"
    style={{ fontFamily: "Gilroy, sans-serif" }}
  >
    MLLF token holders are not passive investors—they are stakeholders.
    Through decentralized governance, holders vote on key decisions,
    including new property acquisitions, ecosystem upgrades, and reward
    structures, keeping MLLF transparent and community-aligned.
  </motion.p>
</motion.div>

  </div>
</div>
    </motion.section>
  );
}