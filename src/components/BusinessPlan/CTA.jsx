'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bgImage from '../../assets/Read/cta-background.png';
import { useNavigate } from "react-router-dom";

/**
 * CTASection - FULLY RESPONSIVE VERSION
 * 
 * Premium CTA section with luxury black-and-gold aesthetic
 * 
 * RESPONSIVE IMPROVEMENTS:
 * • Heading scales fluidly: clamp(28px, 7vw, 48px) across all breakpoints
 * • Button text and padding scale responsively
 * • Arrow icons scale proportionally with screen size
 * • Background image optimized for mobile (prevents overflow)
 * • Padding & gaps scale smoothly across all screens
 * • Vertical padding: clamp(40px, 12vw, 140px)
 * • Button layout: stacked on mobile (flex-col), horizontal on tablet+ (flex-row)
 * • Typography uses fluid sizing to prevent text overflow
 * • All hover effects and animations preserved
 * • Desktop (1024px+) design remains pixel-perfect unchanged
 */

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
 * Responsive sizing across all breakpoints
 */
const CTAButton = ({ text, isPrimary = false, onClick = () => {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  if (isPrimary) {
    return (
     <motion.button
  variants={animationVariants.buttonAppear}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
  whileHover={{ y: -4, scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  onClick={onClick}
  className="overflow-hidden relative inline-flex items-center justify-center px-6 h-[clamp(40px,10vw,50px)] min-w-[190px] whitespace-nowrap rounded-[10px] transition-all duration-300 group"
  style={{
    backgroundImage:
      "linear-gradient(90deg, #C08E22 0%, #FDED99 50%, #C08E22 100%)",
    backgroundSize: isHovered ? "200% 100%" : "100% 100%",
    backgroundPosition: isHovered ? "right" : "left",
  }}
>
  {/* Glow */}
  <div
    className={`absolute inset-0 rounded-[12px] blur-lg transition-opacity duration-300 ${
      isHovered ? "opacity-100" : "opacity-0"
    }`}
    style={{
      background:
        "radial-gradient(circle, rgba(250,237,153,0.4), transparent)",
      pointerEvents: "none",
    }}
  />

  {/* Content */}
  <div className="relative flex items-center justify-center gap-2 whitespace-nowrap">
    <span
      className="flex-shrink-0 font-gilroy whitespace-nowrap font-medium tracking-tight"
      style={{
        fontSize: "clamp(13px, 3vw, 18px)",
      }}
    >
      {text}
    </span>

    <motion.span
      animate={{ x: isHovered ? 4 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-shrink-0 items-center justify-center"
    >
      <ArrowRight
        strokeWidth={2.5}
        style={{
          width: "clamp(16px,4vw,20px)",
          height: "clamp(16px,4vw,20px)",
        }}
      />
    </motion.span>
  </div>
</motion.button>
    );
  }

  // Secondary Button (Outlined)
  return (
  <motion.button
  variants={animationVariants.buttonAppear}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
  whileHover={{ y: -4, scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => navigate("/ContactUs")}
  className="relative inline-flex items-center justify-center px-6 h-[clamp(40px,10vw,50px)] min-w-[190px] whitespace-nowrap rounded-[10px] transition-all duration-300"
  style={{
    background: `
      linear-gradient(#000000, #000000) padding-box,
      linear-gradient(270deg, #C08E22 0%, #FDED99 51.93%, #C08E22 100%) border-box
    `,
    border: "1px solid transparent",
  }}
>
  <div className="relative flex items-center justify-center gap-2 whitespace-nowrap">
    <span
      className="flex-shrink-0 whitespace-nowrap font-medium text-transparent bg-clip-text"
      style={{
        fontFamily: "Gilroy, sans-serif",
        fontSize: "clamp(13px,3vw,18px)",
        backgroundImage:
          "linear-gradient(270deg,#C08E22 0%,#FDED99 51.93%,#C08E22 100%)",
      }}
    >
      {text}
    </span>

    <motion.span
      animate={{ x: isHovered ? 4 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-shrink-0 items-center justify-center"
    >
      <ArrowRight
        strokeWidth={2.2}
        className="text-[#E0A634]"
        style={{
          width: "clamp(10px,4vw,20px)",
          height: "clamp(10px,4vw,20px)",
        }}
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
    { text: 'View MLLF Token', isPrimary: true },
    { text: 'Contact Us', isPrimary: false },
  ];

  return (
    <motion.section
      variants={animationVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="overflow-hidden relative w-full bg-black"
      style={{
        paddingTop: "clamp(40px, 12vw, 140px)",
        paddingBottom: "clamp(40px, 12vw, 140px)",
      }}
    >
      {/* ============ BACKGROUND IMAGE ============ */}
      {/* 
        RESPONSIVE BACKGROUND:
        - Image scales to fit container on all screen sizes
        - Uses object-cover to maintain aspect ratio
        - Width clamps to prevent overflow on mobile
        - Desktop: 1550px width maintained
      */}
      <div className="overflow-hidden absolute inset-0">
        <img
          src={bgImage}
          alt="Luxury golden wave background"
          className="object-cover mx-auto h-full"
          style={{
            opacity: 0.4,
            minWidth: "90%",
            minHeight: "100%",
          }}
        />
      </div>

      {/* Dark overlay for readability - gradient strengthens content visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/60" />

      {/* Soft radial overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* ============ CONTENT CONTAINER ============ */}
      {/* 
        RESPONSIVE CONTAINER:
        - Mobile: max-width 100%, px-4 (16px padding)
        - Tablet: px-6 to px-10 increases readability
        - Desktop: px-20 maintains luxury spacing
        - max-w-[1440px] ensures content doesn't stretch too wide
      */}
      <div
        className="z-10 relative mx-auto px-4 w-full sm:px-6 md:px-10 lg:px-20"
        style={{
          maxWidth: "1440px",
        }}
      >
        {/* ============ CENTERED CONTENT WRAPPER ============ */}
        {/* 
          STAGGER ANIMATION:
          - Heading appears first (slideUpFade)
          - Buttons follow with staggered timing
          - Maintains desktop animation feel on all screens
        */}
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
        >
          {/* ============ HEADING ============ */}
          {/* 
            RESPONSIVE TYPOGRAPHY:
            - Font size: clamp(28px, 7vw, 48px)
            - Scales from 28px (mobile) → 48px (desktop+)
            - Line height: 1.15 (115%) maintained for luxury feel
            - max-w-[681px] on desktop preserved
            - Text centers properly on all screens
          */}
          <motion.h2
            variants={animationVariants.slideUpFade}
            className="mx-auto text-center font-light"
            style={{
              maxWidth: "clamp(280px, 95vw, 681px)",
              fontFamily: 'Cinzel, serif',
              fontSize: "clamp(28px, 7vw, 48px)",
              lineHeight: "1.15",
              letterSpacing: "normal",
              color: "#F5F0EA",
            }}
          >
            BE PART OF A TRANSPARENT
            <br className="hidden sm:block" />
            REAL ESTATE ECOSYSTEM
          </motion.h2>

          {/* ============ BUTTON GROUP ============ */}
          {/* 
            RESPONSIVE BUTTON LAYOUT:
            - Mobile (320px): Stacked vertically (flex-col), full width
            - Tablet (640px+): Horizontal layout (flex-row)
            - Gaps scale: gap-3 (mobile) → gap-5 (tablet) → gap-5 (desktop)
            - Buttons scale responsively with clamp()
            - Wrap at center for visual balance
          */}
          <motion.div
            variants={animationVariants.staggerContainer}
            className="flex flex-col flex-wrap items-center justify-center gap-3 gap-4 w-full w-auto sm:flex-row md:gap-5"
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