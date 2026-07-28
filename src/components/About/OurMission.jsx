'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import missionBg from "../../assets/About/mission-bg.png";

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
        delay: 0.15,
        ease: 'easeOut',
      },
    },
  },
  headingSlideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.25,
        ease: 'easeOut',
      },
    },
  },
  descriptionFadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.35,
        ease: 'easeOut',
      },
    },
  },
  cardStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
 * MissionBadge Component
 * Reusable badge with glowing dot
 */
const MissionBadge = () => (
  <motion.div
    variants={animationVariants.badgeFadeDown}
    className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(157,122,27,0.25)] rounded-full backdrop-blur-sm"
  >
    <div className="w-1.5 h-1.5 bg-[#E2BF57] rounded-full shadow-[0_0_6px_rgba(226,191,87,0.6)]" />
    <span
      className="text-sm font-light tracking-[0.08em] text-[#E2BF57] uppercase"
      style={{
        fontFamily: 'Gilroy, sans-serif',
      }}
    >
      Our Mission
    </span>
  </motion.div>
);

/**
 * MissionCard Component
 * Reusable mission card with title and description
 */
const MissionCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={animationVariants.cardItem}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4, scale: 1.03 }}
      className="relative px-8 py-6 bg-[rgba(0,0,0,0.6)] rounded-full border-[#9D7A1B] transition-all duration-300 border backdrop-blur-md"
      style={{
        boxShadow: isHovered
          ? '0 0 20px rgba(157,122,27,0.4), 0 8px 24px rgba(157,122,27,0.2)'
          : '0 4px 12px rgba(157,122,27,0.1)',
        minWidth: 'clamp(320px, 90vw, 420px)',
        minHeight: '104px',
      }}
    >
      {/* Card Content */}
      <div className="flex flex-col items-center justify-center gap-2 h-full">
        <h3
          className="text-white font-semibold text-center"
          style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 600,
          }}
        >
          {title}
        </h3>
        <p
          className="text-white text-center"
          style={{
            fontSize: 'clamp(16px, 3vw, 18px)',
            fontFamily: 'Gilroy, sans-serif',
            opacity: 0.8,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

/**
 * OurMissionSection Component
 * Premium "Our Mission" section with mission cards and exact design layout
 * Fully responsive across all screen sizes
 */
export default function OurMissionSection() {
  const missionCards = [
    {
      title: 'Transparency',
      description: 'Everything on-chain',
    },
    {
      title: 'Accessibility',
      description: 'Investment for everyone',
    },
    {
      title: 'Innovation',
      description: 'Real assets + blockchain',
    },
    {
      title: 'Community',
      description: 'Holders shape our future',
    },
  ];

  return (
    <motion.section
      variants={animationVariants.containerFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden relative w-full bg-black sm:py-20 md:py-28 lg:py-10 xl:py-10"
    >
      
     <img
  src={missionBg}
  alt=""
  className="absolute bottom-0 left-1/2 max-w-[1550px] opacity-70 rotate-180 pointer-events-none select-none -translate-x-1/2"
/>

      

      {/* Main Container */}
      <div className="z-10 relative mx-auto px-5 max-w-[1550px] sm:px-8 md:px-12 lg:px-20">
        {/* TOP SECTION - Badge, Description, Heading */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Desktop Layout - Flex with space-between */}
          <div className="hidden justify-between items-end gap-8 mb-16 mb-20 mb-24 md:flex lg:gap-12">
            {/* Left Column - Description */}
            <motion.p
              variants={animationVariants.descriptionFadeUp}
              className="text-white leading-[170%]"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 18px)',
                fontFamily: 'Gilroy, sans-serif',
                maxWidth: '420px',
                opacity: 0.75,
              }}
            >
              To break the barriers of traditional real estate investment through tokenization,
              giving everyday investors genuine access to premium, income-generating assets.
            </motion.p>

            {/* Right Column - Badge and Heading */}
            <div className="flex flex-col items-end gap-6 sm:gap-8">
              {/* Badge */}
              <MissionBadge />

              {/* Heading */}
              <motion.h1
                variants={animationVariants.headingSlideUp}
                className="font-light leading-[100%] text-white text-right"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: 'clamp(48px, 7vw, 72px)',
                  fontWeight: 300,
                  letterSpacing: '0.02em',
                }}
              >
                OUR MISSION
              </motion.h1>
            </div>
          </div>

          {/* Tablet & Mobile Layout - Stacked */}
          <div className="flex flex-col items-center gap-6 mb-12 mb-16 text-center sm:gap-8 md:hidden">
            {/* Badge */}
            <MissionBadge />

            {/* Heading */}
            <motion.h1
              variants={animationVariants.headingSlideUp}
              className="font-light leading-[100%] text-white"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(28px, 7vw, 48px)',
                fontWeight: 300,
                letterSpacing: '0.02em',
              }}
            >
              OUR MISSION
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={animationVariants.descriptionFadeUp}
              className="max-w-[500px] text-white leading-[170%]"
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                fontFamily: 'Gilroy, sans-serif',
                opacity: 0.75,
              }}
            >
              To break the barriers of traditional real estate investment through tokenization,
              giving everyday investors genuine access to premium, income-generating assets.
            </motion.p>
          </div>
        </motion.div>

        {/* MISSION CARDS SECTION */}
        <motion.div
          variants={animationVariants.cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Desktop Layout - Top row edge-to-edge, bottom row inset/shifted right (matches reference) */}
          <div className="hidden flex-col gap-12 lg:flex">
            {/* Top Row - Transparency and Accessibility, flush to container edges */}
            <div className="flex justify-between gap-12">
              <motion.div variants={animationVariants.cardItem}>
                <MissionCard title="Transparency" description="Everything on-chain" />
              </motion.div>
              <motion.div variants={animationVariants.cardItem}>
                <MissionCard title="Accessibility" description="Investment for everyone" />
              </motion.div>
            </div>

            {/* Bottom Row - Innovation and Community, inset and shifted toward the right */}
            <div className="flex justify-center gap-12 pl-[10%]">
              <motion.div variants={animationVariants.cardItem}>
                <MissionCard title="Innovation" description="Real assets + blockchain" />
              </motion.div>
              <motion.div variants={animationVariants.cardItem}>
                <MissionCard title="Community" description="Holders shape our future" />
              </motion.div>
            </div>
          </div>

          {/* Laptop / Tablet Layout - Even grid, no stagger (avoids cramped offset on smaller screens) */}
          <div className="hidden gap-6 gap-8 md:grid lg:hidden">
            {/* Top Row */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <motion.div variants={animationVariants.cardItem}>
                <MissionCard title="Transparency" description="Everything on-chain" />
              </motion.div>
              <motion.div variants={animationVariants.cardItem}>
                <MissionCard title="Accessibility" description="Investment for everyone" />
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <motion.div variants={animationVariants.cardItem}>
                <MissionCard title="Innovation" description="Real assets + blockchain" />
              </motion.div>
              <motion.div variants={animationVariants.cardItem}>
                <MissionCard title="Community" description="Holders shape our future" />
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout - Single Column */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:hidden">
            {missionCards.map((card, index) => (
              <motion.div key={index} variants={animationVariants.cardItem}>
                <MissionCard title={card.title} description={card.description} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}