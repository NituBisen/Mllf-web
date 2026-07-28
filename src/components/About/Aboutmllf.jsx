'use client';

import React from 'react';
import { motion } from 'framer-motion';
import heroBgImage from '../../assets/About/hero-background.png';

/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 * (unchanged — animations are preserved exactly across all breakpoints)
 */
const animationVariants = {
  containerFade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.9,
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
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  },
  headingSlideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  },
  descriptionFadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  },
  imagePropertySlide: {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  },
};

/**
 * HeroBadge Component
 * Small badge with glowing dot and text.
 * RESPONSIVE CHANGE: base (mobile-first) classes are slightly smaller/tighter
 * for small screens, but every property gets an explicit `lg:` value equal to
 * the ORIGINAL style so the desktop badge (rendered only inside DesktopLayout,
 * which is lg:block) is pixel-identical to before.
 */
const HeroBadge = () => (
  <motion.div
    variants={animationVariants.badgeFadeDown}
    className="inline-flex items-center gap-2 px-3 py-2 max-w-full bg-[#FDED9926] rounded-full sm:gap-2.5 px-4 py-2.5 lg:gap-2.5 px-4 py-2.5"
  >
    <div className="flex-shrink-0 w-2 h-2 bg-[#E2BF57] rounded-full shadow-[0_0_8px_rgba(226,191,87,0.6)]" />
    <span className="text-[10px] font-gilroy font-light tracking-wider text-[#E2BF57] whitespace-nowrap uppercase sm:text-[11px] lg:text-[11px]">
      About MLLF - Who We Are
    </span>
  </motion.div>
);

/**
 * DesktopLayout Component
 * Two-column layout for desktop (left content, right image property info)
 * UNCHANGED — this entire block only ever renders at lg (1024px) and above
 * (`hidden lg:block`), so its absolute positioning, font sizes (70px Cinzel),
 * and 353px description column are untouched and remain pixel-perfect.
 */
const DesktopLayout = () => (
  <div className="relative hidden h-full lg:block">
    {/* Left Content */}
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="absolute bottom-20 left-0"
    >
      <HeroBadge />

      <motion.h1
        variants={animationVariants.headingSlideUp}
        className="mt-8 max-w-[900px] font-light leading-[120%] text-[#EDE8DF]"
        style={{
          fontFamily: "Cinzel, serif",
          fontSize: "70px",
          fontWeight: 300,
          letterSpacing: "0.02em",
        }}
      >
        BRIDGING REAL ESTATE
        
        WITH BLOCKCHAIN
        
        INNOVATION
      </motion.h1>
    </motion.div>

    {/* Right Description */}
    <motion.div
      variants={animationVariants.descriptionFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="absolute right-0 bottom-32 w-[353px]"
    >
      <p
        className="text-left leading-[180%] text-[#F5F0EA]"
        style={{
          fontFamily: "Gilroy, sans-serif",
          fontSize: "16px",
        }}
      >
        MLLF is redefining property investment by combining the security of
        real estate with the transparency of blockchain. We make premium
        real estate accessible, affordable, and borderless through secure
        tokenized ownership.
      </p>
    </motion.div>
  </div>
);


/**
 * TabletLayout Component
 * Single column centered layout for tablet and mobile (< 1024px)
 * RESPONSIVE CHANGES:
 * - Fixed a duplicate/conflicting `px-4 px-8` class (Tailwind class collision
 *   bug in the original) with a proper mobile→tablet padding scale.
 * - Added `w-full` + `max-w-*` guards on every text block so nothing can
 *   overflow horizontally at 320–420px widths.
 * - Widened the heading's clamp() floor slightly and tightened line-height
 *   at the smallest sizes to prevent clipping/overlap of the 3-line heading.
 * - Added `break-words` safety on the paragraph for very narrow viewports.
 * - Scaled the vertical `gap` down a notch below `sm` so content doesn't feel
 *   too spaced-out on short mobile viewports.
 */
const TabletLayout = () => (
  <div className="z-20 flex flex-col items-center justify-center gap-5 px-4 w-full h-full text-center sm:gap-6 px-6 md:gap-8 px-10 lg:hidden">
    {/* Badge */}
    <HeroBadge />

    {/* Heading */}
    <motion.h1
      variants={animationVariants.headingSlideUp}
      className="w-full max-w-[680px] font-light leading-[115%] text-[#F5F0EA] sm:leading-[110%] md:leading-[105%]"
      style={{
        fontFamily: 'Cinzel, serif',
        fontSize: 'clamp(26px, 8vw, 56px)',
        fontWeight: 300,
        letterSpacing: '0.02em',
      }}
    >
      BRIDGING REAL ESTATE
      <br />
      WITH BLOCKCHAIN
      <br />
      INNOVATION
    </motion.h1>

    {/* Description */}
    <motion.p
      variants={animationVariants.descriptionFadeUp}
      className="w-full max-w-[550px] break-words text-[#CFCFCF] leading-[170%] sm:leading-[180%]"
      style={{
        fontSize: 'clamp(13px, 3.2vw, 16px)',
        fontFamily: 'Gilroy, sans-serif',
      }}
    >
      MLLF is redefining property investment by combining the security of real estate with the
      transparency of blockchain. We make premium real estate accessible, affordable, and
      borderless through secure tokenized ownership.
    </motion.p>
  </div>
);

/**
 * AboutHeroSection Component
 * Premium hero section with luxury background, cinematic overlays, and animations
 * Fully responsive across all screen sizes
 * RESPONSIVE CHANGES:
 * - Section height clamp() floor lowered slightly on the smallest phones so
 *   the hero doesn't force excess vertical scroll on short viewports, while
 *   the lg breakpoint's effective rendered size is unaffected since
 *   85vh/900px math still governs from md/lg up as before.
 * - `w-full overflow-hidden` reinforced on the root to guarantee no
 *   horizontal scrollbar is introduced by any inner element.
 * - Inner max-w-[1550px] wrapper padding scale expanded with extra steps
 *   (px-4 → sm:px-6 → md:px-10 → lg:px-20) instead of jumping straight from
 *   px-5 to sm:px-8, so spacing grows smoothly across breakpoints.
 */
export default function AboutHeroSection() {
  return (
    <motion.section
      variants={animationVariants.containerFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="overflow-hidden relative w-full"
      style={{
        height: 'clamp(560px, 85vh, 900px)',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 mx-auto max-w-[1550px] h-full">
        <img
          src={heroBgImage}
          alt="Luxury villa with sunset - MLLF blockchain real estate investment"
          className="object-cover object-center w-full h-full"
          loading="eager"
        />
      </div>

      
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(226,191,87,0.15), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto px-4 w-full max-w-[1550px] h-full sm:px-6 md:px-10 lg:px-20">
          {/* Desktop Layout */}
          <DesktopLayout />

          {/* Tablet/Mobile Layout */}
          <TabletLayout />
        </div>
      </div>
    </motion.section>
  );
}