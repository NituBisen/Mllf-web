'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import heroBgImage from '../../assets/Tokenomics/hero-background.png';

/**
 * HeroSection - FULLY RESPONSIVE VERSION
 *
 * Premium hero section with luxury black & gold aesthetic
 *
 * RESPONSIVE IMPROVEMENTS:
 * • Heading scales fluidly: clamp(36px, 9vw, 70px) across all breakpoints
 * • Description text: clamp(14px, 2.5vw, 18px) prevents overflow
 * • Badge scales responsively with screen size
 * • Buttons scale height & width: clamp(40px, 9vw, 56px)
 * • Button text scales: clamp(13px, 2.5vw, 16px)
 * • Stats grid: 1 column mobile → 3 columns desktop
 * • Padding & gaps scale smoothly across all screens
 * • Layout: stacked on mobile, side-by-side on desktop (md:flex-row)
 * • All animations preserved and optimized
 * • Desktop (1024px+) design remains pixel-perfect unchanged
 */

/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 */
const animationVariants = {
  containerFade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },
  badgeFadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  },
  headingFadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  },
  descriptionSlideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  },
  buttonStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  },
  buttonItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  statStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  },
  statItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
};

/**
 * HeroBadge Component
 * Reusable badge with glowing dot
 * RESPONSIVE: Scales padding and font size fluidly
 */
const HeroBadge = () => (
  <motion.div
    variants={animationVariants.badgeFadeDown}
    className="inline-flex items-center gap-1.5 px-4 px-5 rounded-full backdrop-blur-sm sm:gap-2 md:px-[22px]"
    style={{
      height: "clamp(28px, 6vw, 30px)",
      background: "#FDED9926",
    
    }}
  >
    <div
      className="bg-[#E2BF57] rounded-full shadow-[0_0_8px_rgba(226,191,87,0.6)]"
      style={{
        width: "clamp(6px, 1vw, 8px)",
        height: "clamp(6px, 1vw, 8px)",
      }}
    />
    <span
      className="font-light tracking-[0.08em] text-[#E2BF57] uppercase"
      style={{
        fontFamily: 'Gilroy, sans-serif',
        fontSize: "clamp(10px, 2vw, 12px)",
        lineHeight: "1.2",
      }}
    >
      The MLLF Token - Utility Token
    </span>
  </motion.div>
);

/**
 * HeroButton Component
 * Reusable button with variants
 * RESPONSIVE: Scales height, width, font size, and icon size
 */
const HeroButton = ({ variant = 'primary', children, icon: Icon = null, onClick = () => {} }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isPrimary = variant === 'primary';

  return (
    <motion.button
      variants={animationVariants.buttonItem}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-6 rounded-[8px] font-semibold transition-all duration-300 overflow-hidden whitespace-nowrap`}
      style={{
        height: "clamp(40px, 9vw, 56px)",
        minWidth: "clamp(130px, 85%, 190px)",
        maxWidth: "190px",
        background: isPrimary
          ? "linear-gradient(270deg, #C08E22 0%, #FDED99 51.93%, #C08E22 100%)"
          : "transparent",
        border: isPrimary ? "none" : "1px solid #E2BF57",
        boxShadow: isHovered
          ? isPrimary
            ? "0 0 20px rgba(253,237,153,0.4)"
            : "0 0 20px rgba(157,122,27,0.3)"
          : "none",
      }}
    >
      <span
       
  className="flex-shrink-0 font-semibold tracking-tight whitespace-nowrap"
        style={{
          fontSize: "clamp(13px, 2.5vw, 16px)",
          fontFamily: "Gilroy, sans-serif",
          color: isPrimary ? "#000" : "#E2BF57",
          lineHeight: "1.4",
        }}
      >
        {children}
      </span>
      {Icon && (
        <motion.span
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex flex-shrink-0 items-center justify-center"
        >
          <Icon
            style={{
              width: "clamp(14px, 3vw, 18px)",
              height: "clamp(14px, 3vw, 18px)",
            }}
            strokeWidth={2.5}
            color={isPrimary ? "#000" : "#E2BF57"}
          />
        </motion.span>
      )}
    </motion.button>
  );
};

/**
 * HeroButtons Component
 * Reusable buttons group
 * RESPONSIVE: Stacks on mobile, horizontal on tablet/desktop
 */
const HeroButtons = () => (
  <motion.div
    variants={animationVariants.buttonStagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="flex flex-col flex-wrap justify-center gap-2.5 gap-3 gap-4 gap-[18px] w-full w-auto sm:flex-row md:justify-start"
  >
    <HeroButton variant="primary">Buy MLLF</HeroButton>
    <HeroButton variant="secondary" icon={FileText}>
      Read Whitepaper
    </HeroButton>
    <HeroButton variant="secondary" icon={ArrowRight}>
      Stake Now
    </HeroButton>
  </motion.div>
);

/**
 * HeroStats Component
 * Reusable stats display
 * RESPONSIVE: 1 column mobile → 3 columns desktop
 * Stats scale responsively: title clamp(22px, 6vw, 30px), subtitle clamp(14px, 3vw, 18px)
 */
const HeroStats = () => {
  const stats = [
    {
      title: 'BEP-20',
      subtitle: 'Token Standard',
    },
    {
      title: 'BSC',
      subtitle: 'Blockchain Network',
    },
    {
      title: 'Fixed',
      subtitle: 'Total Supply',
    },
  ];

  return (
    <motion.div
      variants={animationVariants.statStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 justify-items-center gap-y-6 gap-x-4 gap-x-8 gap-y-10 gap-x-12 mt-8 mt-10 w-full sm:gap-y-8 md:grid-cols-3 lg:gap-x-20"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={animationVariants.statItem}
          className="flex flex-col items-center w-full max-w-[220px] text-center"
        >
          <h3
            className="text-[#C08E22] font-semibold"
            style={{
              fontSize: "clamp(22px, 6vw, 30px)",
              fontFamily: "Gilroy, sans-serif",
              fontWeight: 600,
              lineHeight: "1.2",
            }}
          >
            {stat.title}
          </h3>

          <p
            className="mt-1.5 text-[#B3A57C] sm:mt-2 md:mt-2"
            style={{
              fontSize: "clamp(14px, 3vw, 18px)",
              fontFamily: "Gilroy, sans-serif",
              opacity: 0.8,
              lineHeight: "1.4",
            }}
          >
            {stat.subtitle}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * HeroSection Component
 * Main hero section with full-screen background, premium typography, and animations
 * Fully responsive across all screen sizes (320px - 1920px+)
 */
export default function HeroSection() {
  return (
    <motion.section
      variants={animationVariants.containerFade}
      initial="hidden"
      animate="visible"
      className="overflow-hidden relative w-full min-h-screen bg-black"
    >
      {/* ============ BACKGROUND IMAGE ============ */}
      {/*
        RESPONSIVE BACKGROUND:
        - Full-screen coverage on all devices
        - object-cover maintains aspect ratio
        - Removed fixed max-w-[1550px] container to allow scaling
        - Overlay opacity: 0.65 for text readability
      */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBgImage}
          alt="Luxury real estate property - MLLF blockchain tokenization"
          className="object-cover object-center w-full h-full"
          loading="eager"
        />
      </div>

      {/* Dark Overlay for Text Readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0,0,0,.65)',
        }}
      />

      {/* ============ CONTENT CONTAINER ============ */}
      {/*
        RESPONSIVE CONTAINER:
        - Mobile: min-h-screen, px-4, py-16
        - Tablet: px-8, py-20
        - Desktop: px-20, maintains luxury spacing
        - Flexbox layout: vertical on mobile, horizontal on desktop (md:flex-row)
        - max-w-[1600px] ensures content doesn't stretch excessively
      */}
      <div className="z-10 relative flex flex-col justify-between mx-auto px-4 py-12 py-16 py-20 min-h-screen w-full max-w-[1600px] sm:px-6 md:px-8 lg:px-20">
        
        {/* ============ TOP BADGE ============ */}
        {/*
          RESPONSIVE BADGE POSITIONING:
          - Center on mobile, left-aligned on desktop (md:justify-start)
        */}
        <div className="flex justify-center md:justify-start">
          <HeroBadge />
        </div>

        {/* ============ MAIN CONTENT AREA ============ */}
        {/*
          RESPONSIVE LAYOUT:
          - Mobile: flex-col (stacked vertically)
          - Desktop: md:flex-row (side by side)
          - Gap scales: gap-8 sm:gap-10 md:gap-12 lg:gap-20
          - Items align properly at center on mobile, space-between on desktop
        */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex flex-col flex-1 justify-between items-center items-end gap-8 gap-12 my-auto sm:gap-10 md:flex-row lg:gap-20"
        >
          {/* ============ LEFT CONTENT: Heading and Buttons ============ */}
          {/*
            RESPONSIVE LEFT COLUMN:
            - Mobile: centered text
            - Desktop: left-aligned (md:text-left)
            - Heading scales: clamp(36px, 9vw, 70px)
            - Gap between heading and buttons: gap-8 sm:gap-10 md:gap-12 lg:gap-[60px]
            - maxWidth for heading preserved at 760px on desktop
          */}
          <div className="flex flex-col flex-1 gap-6 gap-[60px] w-full w-auto sm:gap-8 md:gap-12">
            
            {/* Heading */}
            <motion.h1
              variants={animationVariants.headingFadeUp}
              className="font-light leading-[130%] text-[#EDE8DF] text-center md:text-left"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: "clamp(36px, 9vw, 70px)",
                fontWeight: 300,
                letterSpacing: '0.01em',
                maxWidth: "clamp(280px, 95vw, 760px)",
                lineHeight: "1.3",
              }}
            >
              FRACTIONAL REAL
              <br />
              ESTATE OWNERSHIP
              <br />
              ON THE
              <br />
              BLOCKCHAIN
            </motion.h1>

            {/* Buttons */}
            <HeroButtons />
          </div>

          {/* ============ RIGHT CONTENT: Description ============ */}
          {/*
            RESPONSIVE RIGHT COLUMN:
            - Mobile: centered text (text-center)
            - Desktop: right-aligned (md:text-right, md:justify-end)
            - Width: 100% on mobile, flex-1 on desktop
            - Description text scales: clamp(14px, 2.5vw, 18px)
            - maxWidth maintained at 430px on desktop
            - Opacity: 0.78 for luxury feel
          */}
          <motion.div
            variants={animationVariants.descriptionSlideLeft}
            className="flex-1 flex justify-center w-full w-auto md:justify-end"
          >
            <p
              className="text-white leading-[170%] text-center md:text-right"
              style={{
                fontSize: "clamp(14px, 2.5vw, 18px)",
                fontFamily: "Gilroy, sans-serif",
                maxWidth: "clamp(280px, 95vw, 430px)",
                opacity: 0.78,
                lineHeight: "1.7",
              }}
            >
              MLLF Token is the utility token that powers the entire MLLF ecosystem. It enables
              seamless transactions, staking rewards, platform access, governance participation, and
              ecosystem incentives while connecting blockchain technology with real-world real estate
              assets.
            </p>
          </motion.div>
        </motion.div>

        {/* ============ BOTTOM STATS ============ */}
        {/*
          RESPONSIVE STATS:
          - Mobile: single column (grid-cols-1)
          - Desktop: three columns (md:grid-cols-3)
          - Gap scales smoothly across breakpoints
          - Stats scale responsively with clamp() functions
        */}
        <HeroStats />
      </div>
    </motion.section>
  );
}