'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import showcaseImage from '../../assets/Tokenomics/mllf-showcase.png';
import bgImage from "../../assets/Tokenomics/your-bg-image.png";

/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 */
const animationVariants = {
  containerFadeUp: {
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
  circleScale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  },
  descriptionSlide: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  },
  imageFadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  },
  rectangleFadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  },
};

/**
 * SectionBadge Component
 * Reusable badge with glowing dot
 */
const SectionBadge = () => (
  <motion.div
    variants={animationVariants.badgeFadeDown}
    className="inline-flex items-center gap-2 px-[22px] h-[42px] bg-[#FDED9926] rounded-full backdrop-blur-sm"
  >
    <div className="w-2 h-2 bg-[#E2BF57] rounded-full shadow-[0_0_8px_rgba(226,191,87,0.6)]" />
    <span
      className="text-[12px] font-light tracking-[0.08em] text-[#E2BF57] uppercase"
      style={{
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '12px',
      }}
    >
      What is MLLF
    </span>
  </motion.div>
);

/**
 * CircularBadge Component
 * Luxury circular badge with rotating text and arrow icon
 */
const CircularBadge = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <div className="flex justify-center">
  <motion.div
    variants={animationVariants.circleScale}
    onHoverStart={() => setIsHovered(true)}
    onHoverEnd={() => setIsHovered(false)}
    whileHover={{ scale: 1.05 }}
    className="relative flex items-center justify-center"
    style={{
      width: "clamp(110px, 15vw, 170px)",
      height: "clamp(110px, 15vw, 170px)",
    }}
  >
     
      {/* Inner Content */}
      <div className="absolute inset-0 flex items-center justify-center rounded-full">
        {/* Arrow Icon */}
        <ArrowUpRight
  size={34}
  strokeWidth={2.2}
  className="z-20 absolute left-1/2 top-1/2 text-black -translate-x-1/2 -translate-y-1/2"
/>
        {/* Circular Text */}
        <div className="relative flex items-center justify-center w-[126px] h-[126px]">
  {/* Background Circle */}
  <svg
    width="126"
    height="126"
    viewBox="0 0 126 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0"
  >
    <circle
      cx="63"
      cy="63"
      r="62.5"
      fill="#FDED99"
      stroke="#C08E22"
    />
  </svg>

  {/* Circular Text */}
  <svg
    viewBox="0 0 126 126"
    className="absolute inset-0 w-full h-full transition-transform duration-500"
    style={{
      transform: isHovered ? "rotate(-45deg)" : "rotate(0deg)",
    }}
  >
    <defs>
      <path
        id="textCircle"
        d="M63,63 m-48,0
           a48,48 0 1,1 96,0
           a48,48 0 1,1 -96,0"
        fill="none"
      />
    </defs>

    <text
      fill="#111111"
      fontSize="10"
      fontFamily="Gilroy, sans-serif"
      fontWeight="600"
      letterSpacing="3"
    >
      <textPath
        href="#textCircle"
        startOffset="50%"
        textAnchor="middle"
      >
        My Luxuries Life
      </textPath>
    </text>
  </svg>

  {/* Center Arrow */}
  <ArrowUpRight
    size={34}
    strokeWidth={2.2}
    className="z-10 relative text-black transition-transform duration-500 group-hover:rotate-45"
  />
</div>
      </div>
    </motion.div>
    </div>
    
  );
};


/**
 * FeatureImage Component
 * Showcase image with decorative gold rectangle
 */
const FeatureImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={animationVariants.imageFadeUp}
      className="relative mt-16 w-full md:mt-[70px]"
    >
      {/* Decorative Gold Rectangle (Desktop Only) */}
      <motion.div
        variants={animationVariants.rectangleFadeIn}
        className="z-0 absolute hidden w-110 h-110 bg-[#C08E2299] rounded-lg pointer-events-none -bottom-10 -right-10 lg:block"
        style={{
          opacity: 0.8,
        }}
      />

      {/* Image Container */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        className="overflow-hidden z-10 relative bg-black rounded-[24px] border-[#9D7A1B] transition-all duration-300 border"
        style={{
          boxShadow: isHovered
            ? '0 20px 60px rgba(226,191,87,0.2)'
            : '0 10px 30px rgba(0,0,0,0.4)',
          height: 'clamp(260px, 50vw, 520px)',
        }}
      >
        <img
          src={showcaseImage}
          alt="MLLF blockchain tokenized real estate showcase - golden cityscape on circuit board"
          className="object-cover w-full h-full"
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

/**
 * WhatIsMLLFSection Component
 * Premium "What is MLLF?" section with circular icon, description, and showcase image
 * Fully responsive across all screen sizes
 */
export default function WhatIsMLLFSection() {
  return (
    <motion.section
    
      variants={animationVariants.containerFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden relative py-16 w-full bg-[#0B0B0B] sm:py-15 md:py-20 lg:py-10 xl:py-10"
    >
        {/* Background Image */}
<div className="absolute inset-0">
  <img
    src={bgImage}
    alt=""
    className="object-cover mx-auto max-w-[1550px] h-full"
  />
</div>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/85" />

{/* Optional Radial Overlay */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
  }}
/>
      

      {/* Main Container */}
      <div className="z-10 relative mx-auto px-5 max-w-[1600px] w-full sm:px-8 md:px-12 lg:px-20">
        {/* Top Badge */}
        <div className="flex justify-center mb-8 md:justify-start">
          <SectionBadge />
        </div>

        {/* Section Heading */}
        <motion.h2
          variants={animationVariants.headingFadeUp}
          className="mb-12 font-light leading-[100%] text-white text-center text-left md:mb-16 lg:mb-[60px]"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(34px, 8vw, 72px)',
            fontWeight: 300,
            letterSpacing: '0.01em',
          }}
        >
          WHAT IS MLLF?
        </motion.h2>

        {/* Content Row - Icon and Description */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-12 gap-16 mb-16 mb-20 mb-[70px] md:flex-row lg:gap-[60px]"
        >
          {/* Circular Badge Icon */}
          <div className="md:translate-x-40 lg:translate-x-100 xl:translate-x-120">
  <CircularBadge />
</div>

          {/* Description Text */}
         <motion.p
  variants={animationVariants.descriptionSlide}
  className="flex-1 ml-auto text-[#C9C9C9] leading-[170%] text-center md:text-right"
  style={{
    fontSize: "16px",
    fontFamily: "Gilroy, sans-serif",
    maxWidth: "754px",
    opacity: 0.78,
  }}
>
            MLLF is a BEP-20 utility token built on the Binance Smart Chain (BSC) that enables
            fractional ownership of premium, tokenized real estate assets. By combining the
            long-term stability of luxury property investments with the speed, transparency, and
            security of blockchain technology, MLLF makes real estate investing more accessible,
            efficient, and globally available.
          </motion.p>
        </motion.div>

        {/* Feature Image */}
        <FeatureImage />
      </div>
    </motion.section>
  );
}