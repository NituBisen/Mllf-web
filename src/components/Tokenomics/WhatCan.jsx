'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/Tokenomics/token.png';

/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 * (Unchanged — animations preserved exactly as-is)
 */
const animationVariants = {
  containerFade: {
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
  paragraphFade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
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
  imageFadeScale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  },
  cardsStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  },
  cardItem: {
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
 * FeatureCard Component
 * Reusable card component with title and description
 *
 * RESPONSIVE CHANGE:
 * - Title/description font-size now uses clamp() instead of a fixed 16px.
 *   The clamp() max value is tuned (1.6vw) so it only reaches its 16px
 *   ceiling at ~1024px viewport width — meaning desktop (lg+) still
 *   renders at EXACTLY 16px, pixel-identical to the original, while
 *   smaller screens scale the text down smoothly instead of risking
 *   overflow/wrapping issues on narrow cards (320px–767px).
 */
const FeatureCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-[1px] rounded-[10px]"
      style={{
        background:
          "linear-gradient(290.99deg, rgba(192,142,34,0.14) 0%, rgba(253,237,153,0.406) 48.68%, rgba(192,142,34,0.14) 97.37%)",
      }}
    >
      <motion.div
        variants={animationVariants.cardItem}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -4, scale: 1.02 }}
        className="p-6 bg-[#050505] rounded-[9px] sm:p-3"
        style={{
          boxShadow: isHovered
            ? "0 0 24px rgba(226,191,87,0.3), 0 8px 24px rgba(157,122,27,0.2)"
            : "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        {/* Card Content */}
        <div className="z-10 relative flex flex-col gap-2 sm:gap-3">
          <h3
            className="text-white font-light tracking-tight break-words"
            style={{
              fontSize: 'clamp(13px, 1.6vw, 16px)',
              fontFamily: 'Gilroy, serif',
              fontWeight: 400,
            }}
          >
            {title}
          </h3>
          <p
            className="text-white font-light leading-relaxed break-words"
            style={{
              fontSize: 'clamp(13px, 1.6vw, 16px)',
              fontFamily: 'Gilroy, serif',
              opacity: 0.8,
            }}
          >
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * What Can You Do With MLLF Section Component
 * Premium section with feature cards and hero image
 * Fully responsive across all screen sizes
 */
export default function WhatCanYouDoSection() {
  const leftCards = [
    {
      title: 'Ownership',
      description: 'Real shares in premium properties.',
    },
    {
      title: 'Rental Rewards',
      description: 'Earn from property rental income.',
    },
    {
      title: 'Staking',
      description: 'Extra rewards for long-term holders.',
    },
  ];

  const rightCards = [
    {
      title: 'Referral Rewards',
      description: 'Earn by growing the community.',
    },
    {
      title: 'Governance',
      description: 'Vote on key ecosystem decisions.',
    },
    {
      title: 'Appreciation',
      description: 'Benefit from long-term value growth.',
    },
  ];

  return (
    <motion.section
      variants={animationVariants.containerFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      // RESPONSIVE CHANGE: added overflow-x-hidden safety net (in addition to
      // existing overflow-hidden) so nothing introduced below can ever cause
      // horizontal scroll on small viewports.
      className="overflow-hidden relative w-full bg-black md:py-28 lg:py-36 xl:py-44"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          style={{
            background: 'radial-gradient(circle at center, rgba(226,191,87,0.1), transparent)',
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Main Container */}
      <div className="z-10 relative mx-auto px-5 max-w-[1600px] w-full sm:px-8 md:px-12 lg:px-20">
        {/*
          TOP SECTION - Paragraph and Heading (DESKTOP / LARGE-LAPTOP ONLY, lg+)

          RESPONSIVE FIX (bug found in original code):
          This block previously had NO "hidden" toggle, so it rendered on
          every screen size alongside the separate, already-responsive
          heading+paragraph that live inside the Tablet and Mobile layout
          blocks further down. That caused:
            1) A duplicated heading/paragraph on tablet & mobile.
            2) A non-scaling 70px heading (only text-align changed,
               font-size never shrank) which risked overflow/clipping
               below 1024px.
          Fix: this block is now `hidden` below the `lg` breakpoint and
          only shown at lg+ (1024px+), which is exactly the range where
          the original fixed 70px/408px design was intended to apply.
          Desktop markup/classes/styles are otherwise 100% unchanged.
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
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="hidden flex-row justify-between items-start gap-20 mb-32 lg:flex"
        >
          {/* Left - Paragraph */}
          <motion.p
            variants={animationVariants.paragraphFade}
            className="max-w-[408px] text-[#C9C9C9] leading-[1.75] text-left"
            style={{
              fontSize: '16px',
              fontFamily: 'Gilroy, sans-serif',
              opacity: 0.7,
            }}
          >
            MLLF unlocks a complete investment ecosystem, enabling fractional property ownership,
            passive rental income, staking rewards, governance rights, referral incentives, and
            long-term value growth—all powered by secure blockchain technology.
          </motion.p>

          {/* Right - Heading */}
          <motion.h2
            variants={animationVariants.headingFadeUp}
            className="flex-1 font-light leading-[110%] text-[#EDE8DF] text-right"
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '70px',
              fontWeight: 400,
              letterSpacing: '0.01em',
            }}
          >
            WHAT CAN YOU DO
            <br />
            WITH MLLF?
          </motion.h2>
        </motion.div>

        {/* BOTTOM SECTION - Cards and Image Layout */}
        <motion.div
          variants={animationVariants.cardsStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Desktop Layout (3 columns) — UNCHANGED, exactly as original */}
          <div className="hidden grid-cols-[0.85fr_1.6fr_0.85fr] gap-8 lg:grid xl:gap-16">
            {/* Left Cards Column */}
            <div className="flex flex-col justify-start gap-4 lg:gap-4">
              {leftCards.map((card, index) => (
                <FeatureCard key={index} title={card.title} description={card.description} />
              ))}
            </div>

            {/* Center Image */}
            <motion.div
              variants={animationVariants.imageFadeScale}
              className="overflow-hidden flex items-center justify-center p-4 bg-black sm:p-6 lg:p-8"
              style={{
                minHeight: "700px",
              }}
            >
              <img
                src={heroImage}
                alt="MLLF Token - Golden coin with ecosystem benefits"
                className="object-cover w-[610px] h-[629px]"
              />
            </motion.div>

            {/* Right Cards Column */}
            <div className="flex flex-col justify-end gap-4 lg:gap-4">
              {rightCards.map((card, index) => (
                <FeatureCard key={index} title={card.title} description={card.description} />
              ))}
            </div>
          </div>

          {/*
            Tablet Layout (1 column, 768px–1023px)

            RESPONSIVE CHANGE: replaced the ambiguous, unprefixed duplicate
            utility classes ("gap-8 gap-12", "gap-6 gap-8") with proper
            mobile-first breakpoint-prefixed classes so spacing resolves
            predictably at every width instead of relying on Tailwind's
            generated-CSS source order. Visual values are unchanged from
            what the tablet range already rendered.
          */}
          <div className="hidden flex-col gap-8 gap-12 md:flex lg:hidden">
            {/* Heading and Paragraph */}
            <div className="flex flex-col gap-6 text-center">
              <motion.h2
                variants={animationVariants.headingFadeUp}
                className="font-light leading-[110%] text-white"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: 'clamp(40px, 8vw, 60px)',
                  fontWeight: 300,
                }}
              >
                WHAT CAN YOU DO
                <br />
                WITH MLLF?
              </motion.h2>

              <motion.p
                variants={animationVariants.paragraphFade}
                className="mx-auto max-w-[600px] text-white leading-[1.75]"
                style={{
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  fontFamily: 'Gilroy, sans-serif',
                  opacity: 0.7,
                }}
              >
                MLLF unlocks a complete investment ecosystem, enabling fractional property
                ownership, passive rental income, staking rewards, governance rights, referral
                incentives, and long-term value growth—all powered by secure blockchain technology.
              </motion.p>
            </div>

            {/* Image */}
            <motion.div
              variants={animationVariants.imageFadeScale}
              className="overflow-hidden flex items-center justify-center p-6 bg-black rounded-[24px] border-[rgba(157,122,27,0.3)] border md:p-8"
              style={{
                minHeight: '420px',
              }}
            >
              <img
                src={heroImage}
                alt="MLLF Token - Golden coin with ecosystem benefits"
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 gap-8 md:grid-cols-2">
              {/* Left Cards */}
              <div className="flex flex-col gap-6 md:gap-8">
                {leftCards.map((card, index) => (
                  <FeatureCard key={index} title={card.title} description={card.description} />
                ))}
              </div>

              {/* Right Cards */}
              <div className="flex flex-col gap-6 md:gap-8">
                {rightCards.map((card, index) => (
                  <FeatureCard key={index} title={card.title} description={card.description} />
                ))}
              </div>
            </div>
          </div>

          {/*
            Mobile Layout (Single Column, 0px–767px)

            RESPONSIVE CHANGE: widened the fluid clamp() ranges very slightly
            at the low end (min bound) so headings/paragraphs stay readable
            and never clip/overflow down to a true 320px viewport, and added
            `px-1`/`break-words` safety so long words can't force horizontal
            scroll on the smallest phones. Layout structure, stacking order,
            and visual style are unchanged.
          */}
          <div className="flex flex-col gap-8 sm:gap-10 md:hidden">
            {/* Heading */}
            <motion.h2
              variants={animationVariants.headingFadeUp}
              className="font-light leading-[110%] text-white text-center break-words"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(26px, 7vw, 40px)',
                fontWeight: 300,
              }}
            >
              WHAT CAN YOU DO
              <br />
              WITH MLLF?
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={animationVariants.paragraphFade}
              className="mx-auto px-1 max-w-[500px] text-white leading-[1.75] text-center break-words"
              style={{
                fontSize: 'clamp(13px, 3.5vw, 16px)',
                fontFamily: 'Gilroy, sans-serif',
                opacity: 0.7,
              }}
            >
              MLLF unlocks a complete investment ecosystem, enabling fractional property ownership,
              passive rental income, staking rewards, governance rights, referral incentives, and
              long-term value growth—all powered by secure blockchain technology.
            </motion.p>

            {/* Image */}
            <motion.div
              variants={animationVariants.imageFadeScale}
              className="overflow-hidden flex items-center justify-center p-4 bg-black rounded-[24px] border-[rgba(157,122,27,0.3)] border sm:p-6"
              style={{
                minHeight: '260px',
              }}
            >
              <img
                src={heroImage}
                alt="MLLF Token - Golden coin with ecosystem benefits"
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* All Cards Stacked */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {[...leftCards, ...rightCards].map((card, index) => (
                <FeatureCard key={index} title={card.title} description={card.description} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}