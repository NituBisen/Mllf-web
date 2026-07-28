'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bgImage from '../../assets/Read/cta-background.png';

/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 * (Unchanged — animations preserved exactly as-is)
 */
const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },
  slideUpFade: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  },
  buttonAppear: {
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
 * CTAButton Component
 * Reusable button component with hover animations
 */
const CTAButton = ({ text, isPrimary = false, onClick = () => {} }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isPrimary) {
    return (
      <motion.button
        variants={animationVariants.buttonAppear}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="overflow-hidden relative px-6 h-11 font-medium text-black rounded-[4px] transition-all duration-300 group sm:px-8"
        style={{
          minWidth: '117px',
          backgroundImage: 'linear-gradient(90deg, #C08E22 0%, #FDED99 50%, #C08E22 100%)',
          backgroundSize: isHovered ? '200% 100%' : '100% 100%',
          backgroundPosition: isHovered ? 'right' : 'left',
        }}
      >
        {/* Glow effect on hover */}
        <div
          className={`absolute inset-0 rounded-[12px] opacity-0 blur-lg transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(250,237,153,0.4), transparent)',
            filter: 'blur(12px)',
            pointerEvents: 'none',
          }}
        />

        {/* Button content */}
        <div className="relative flex items-center justify-center gap-2.5">
          <span className="text-base font-gilroy font-medium tracking-tight sm:text-[18px]">
            {text}
          </span>
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <ArrowRight size={20} strokeWidth={2.5} />
          </motion.span>
        </div>
      </motion.button>
    );
  }

  // Secondary Button
  return (
    <motion.button
      variants={animationVariants.buttonAppear}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      // RESPONSIVE CHANGE: px-8 -> px-6 sm:px-8 so the button gets a touch
      // slimmer on the smallest phones, mirroring the primary button's own
      // px-6 sm:px-8 pattern. Resolves to the original px-8 from sm/640px
      // up, so desktop (lg+) is unaffected.
      className="relative px-6 h-11 min-w-[170px] rounded-[4px] transition-all duration-300 sm:px-8"
      style={{
        background: `
          linear-gradient(#000000, #000000) padding-box,
          linear-gradient(270deg, #C08E22 0%, #FDED99 51.93%, #C08E22 100%) border-box
        `,
        border: "1px solid transparent",
      }}
    >
      <div className="relative flex items-center justify-center gap-2.5">
        <span
          // RESPONSIVE CHANGE: text-[18px] (fixed, no scaling) -> text-base
          // sm:text-[18px], matching the primary button's already-responsive
          // label sizing. Still exactly 18px from sm/640px up, so desktop
          // text size is unchanged.
          className="text-base font-medium text-transparent bg-[linear-gradient(270deg,#C08E22_0%,#FDED99_51.93%,#C08E22_100%)] bg-clip-text sm:text-[18px]"
          style={{ fontFamily: "Gilroy, sans-serif" }}
        >
          {text}
        </span>

        <motion.span
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <ArrowRight
            size={20}
            strokeWidth={2.2}
            className="text-[#E0A634]"
          />
        </motion.span>
      </div>
    </motion.button>
  );
};

/**
 * CTASection Component
 * Main CTA section with luxury black-and-gold aesthetic
 * Fully responsive across all screen sizes
 */
export default function CTASection() {
  const buttons = [
    { text: 'Buy Now', isPrimary: true },
    { text: 'View Business Plan ', isPrimary: false },
  ];

  return (
    <motion.section
      variants={animationVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="overflow-hidden relative py-10 w-full bg-black sm:py-20 md:py-[140px]"
    >
      {/*
        RESPONSIVE FIX: this wrapper (and the <img> inside it) previously
        had a hard-coded w-[1440px] with no breakpoint, applied at every
        screen size. On any viewport under 1440px — i.e. almost every
        phone/tablet, and even small laptops down to 1024px — that forced
        a fixed 1440px-wide box centered via mx-auto, relying entirely on
        the section's overflow-hidden to silently clip the excess instead
        of the image actually scaling to fit. Changed to w-full below the
        lg breakpoint (so the background fills and scales with its actual
        container on mobile/tablet) and lg:w-[1440px] to preserve the exact
        original fixed-width "boxed" desktop look unchanged.
      */}
      <div className="absolute inset-0 mx-auto w-full h-full lg:w-[1440px]">
        <img
          src={bgImage}
          alt="Luxury golden wave background"
          className="object-cover mx-auto w-full h-full lg:w-[1440px]"
          style={{ opacity: 0.4 }}
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/60" />

      {/* Soft radial overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Content Container */}
      <div className="z-10 relative mx-auto px-5 max-w-[1440px] w-full sm:px-10 md:px-20">
        {/* Centered Content Wrapper */}
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12"
        >
          {/* Heading */}
          <motion.h2
            variants={animationVariants.slideUpFade}
            className="mx-auto max-w-[681px] text-center font-light leading-[115%] text-[#F5F0EA]"
            style={{
              fontFamily: 'Cinzel, serif',
              // RESPONSIVE FIX: fontSize was a fixed '48px' with no scaling
              // at any viewport. On narrow phones (320–414px) that produced
              // a very cramped, heavily-wrapped headline. Switched to
              // clamp() with a vw-based middle value tuned so it only
              // reaches its 48px ceiling right around the 1024px (lg)
              // breakpoint — meaning desktop still renders at EXACTLY 48px,
              // pixel-identical to before, while smaller screens scale the
              // heading down smoothly instead of jamming it into 5–6
              // characters per line.
              fontSize: 'clamp(28px, 4.7vw, 48px)',
              letterSpacing: 'normal',
            }}
          >
           GET MLLF TOKENS TODAY
          </motion.h2>

          {/*
            Button Group

            RESPONSIVE FIX: "flex-nowrap" (unconditional) forced both CTA
            buttons onto a single row at every screen size. Their combined
            min-widths + gap (~307px) exceed the available width on the
            smallest phones (320–374px, which after the section's own
            horizontal padding leaves less room than that), causing the
            button row itself to overflow horizontally.
            Fixed: allow wrapping below the sm breakpoint (buttons stack
            vertically and center on very small phones) and force back to
            a single nowrap row from sm/640px up — exactly matching the
            original unconditional nowrap behavior for tablet and desktop,
            so desktop (lg+) layout is completely unchanged.
          */}
          <motion.div
            variants={animationVariants.staggerContainer}
            className="flex flex-row flex-wrap items-center justify-center gap-4 gap-5 sm:flex-nowrap"
          >
            {buttons.map((button, index) => (
              <CTAButton
                key={index}
                text={button.text}
                isPrimary={button.isPrimary}
                onClick={() => console.log(`${button.text} clicked`)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}