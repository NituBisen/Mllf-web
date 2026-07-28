'use client';

import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/FAQ/faq-background.png';

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
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  },
};

const FAQBadge = () => (
  <motion.div
    variants={animationVariants.fadeDown}
    className="flex justify-center mb-6 md:mb-8"
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDED9926] rounded-full">
      <div className="w-1.5 h-1.5 bg-[#E2BF57] rounded-full shadow-[0_0_6px_rgba(226,191,87,0.6)]" />
      <span className="text-xs font-gilroy font-light tracking-wider text-[#E2BF57] uppercase sm:text-sm">
        SUPPORT
      </span>
    </div>
  </motion.div>
);

export default function Support() {
  return (
    <motion.section
      variants={animationVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="overflow-hidden relative py-10 w-full bg-black sm:py-3 md:py-32 lg:py-50"
    >
      {/*
        RESPONSIVE FIX: the background image had no width class at all —
        just h-full and a max-w cap — so its rendered width followed its
        natural intrinsic size rather than filling the section, at every
        breakpoint (not just mobile). Added w-full so it properly stretches
        to fill its container (up to the existing max-w-[1600px] cap) and
        object-cover can crop it correctly, instead of leaving inconsistent
        gaps. This is a sizing correctness fix, not a visual style change —
        object-cover, opacity, and the max-w-[1600px] cap are unchanged.
      */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="FAQ Background"
          className="object-cover mx-auto w-full h-full max-w-[1600px] opacity-90"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000CC]/0" />

      {/* Content */}
      <div className="z-10 relative flex flex-col items-center mx-auto px-5 max-w-[1440px] text-center sm:px-10 md:px-20">
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FAQBadge />

          <motion.h1
            variants={animationVariants.slideUpFade}
            className="font-light leading-[110%] text-[#EDE8DF] break-words"
            style={{
              fontFamily: 'Cinzel, serif',
              // RESPONSIVE FIX: fontSize was a fixed '70px' with no scaling
              // at any viewport, which would wrap/crowd badly on phones as
              // narrow as 320px (a two-line, all-caps 70px headline barely
              // fits on a small-laptop screen, let alone a phone). Switched
              // to clamp() with a vw-based middle value tuned so it only
              // reaches its 70px ceiling right around the 1024px (lg)
              // breakpoint — desktop still renders at EXACTLY 70px, and
              // smaller screens scale the heading down smoothly instead.
              fontSize: 'clamp(32px, 6.84vw, 70px)',
            }}
          >
            FREQUENTLY ASKED
            <br />
            QUESTIONS
          </motion.h1>

          <motion.p
            variants={animationVariants.slideUpFade}
            className="mx-auto mt-8 max-w-[650px] text-[#C9C9C9] leading-[1.7]"
            style={{
              fontFamily: 'Gilroy, sans-serif',
              fontSize: '16px',
            }}
          >
            Everything you need to know about MLLF
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}