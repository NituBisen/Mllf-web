'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroBg from "../../assets/S7/hero-bg.png";

/**
 * LuxuryRealEstateHero - Pixel-Perfect Single Component
 * 
 * Luxury real estate section with:
 * - Cinzel & Gilroy typography
 * - Multiple overlay layers
 * - Responsive design (desktop, tablet, mobile)
 * - Framer Motion animations
 * - Gold gradient button
 * 
 * Usage:
 * <LuxuryRealEstateHero backgroundImage="/images/bg.jpg" assetImage="/images/asset.png" />
 */

const LuxuryRealEstateHero = ({ 
  backgroundImage = '/images/hero-bg.png',
  assetImage = '/images/hero-asset.png'
}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  // Container animation - fade up
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  // Heading animation - fade
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  // Paragraph animation - fade
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4,
      },
    },
  };

  // Button animation - fade up
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
      },
    },
  };

  // Image animation - slide from right
  const imageVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };

  // Button hover animation
  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(201, 162, 75, 0.6)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
   <section
  className="overflow-hidden relative mx-auto w-full max-w-[1475px]"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      

      {/* Content */}
      <div className="z-10 relative">
        <motion.div
          className="mx-auto px-6 max-w-[1475px] sm:px-8 lg:px-12"
          style={{
            paddingTop: 'clamp(48px, 12vw, 96px)',
            paddingBottom: 'clamp(48px, 12vw, 96px)',
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Desktop/Laptop Layout */}
          <div className="hidden grid-cols-2 items-center gap-20 lg:grid">
            {/* Left Column */}
            <div>
              {/* Heading */}
              <motion.h1
                className="pt-20 text-white font-cinzel font-medium leading-[1.5] tracking-[-2%] lg:pb-6"
                style={{
                  fontSize: '48px',
                  maxWidth: '697px',
                  letterSpacing: '-0.02em',
                }}
                variants={headingVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                FRACTIONAL REAL ESTATE OWNERSHIP — ACCESSIBLE, TRANSPARENT, AND BUILT FOR THE FUTURE.
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                className="mb-0 text-[#ECECEC] font-gilroy leading-[1.7]"
                style={{
                  fontSize: '16px',
                  maxWidth: '345px',
                }}
                variants={paragraphVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                MILLF opens the door to institutional-grade real estate for every investor. No minimums. No paperwork. Just tokenized ownership, on-chain.
              </motion.p>

              {/* Button */}
              <motion.div
                className="mt-6"
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 font-gilroy font-semibold text-[14px] text-black rounded-[6px] transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #C08E22, #FDED99, #C08E22)',
                    height: '40px',
                    paddingLeft: '32px',
                    paddingRight: '32px',
                  }}
                  variants={buttonHoverVariants}
                  whileHover="hover"
                >
                  GET STARTED
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              className="flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              
            </motion.div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden grid-cols-1 gap-12 md:grid lg:hidden">
            {/* Content */}
            <div className="text-center">
              <motion.h1
                className="text-white font-cinzel font-medium leading-[1.2]"
                style={{
                  fontSize: '48px',
                  letterSpacing: '-0.02em',
                }}
                variants={headingVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                FRACTIONAL REAL ESTATE OWNERSHIP — ACCESSIBLE, TRANSPARENT, AND BUILT FOR THE FUTURE.
              </motion.h1>

              <motion.p
                className="mt-8 mx-auto text-white/75 font-gilroy leading-[1.7]"
                style={{
                  fontSize: '18px',
                  maxWidth: '470px',
                }}
                variants={paragraphVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                MILLF opens the door to institutional-grade real estate for every investor. No minimums. No paperwork. Just tokenized ownership, on-chain.
              </motion.p>

              <motion.div
                className="flex justify-center mt-8"
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 font-gilroy font-bold text-lg text-black rounded-[12px]"
                  style={{
                    background: 'linear-gradient(90deg, #C08E22, #FDED99, #C08E22)',
                    height: '56px',
                    paddingLeft: '32px',
                    paddingRight: '32px',
                  }}
                  variants={buttonHoverVariants}
                  whileHover="hover"
                >
                  GET STARTED
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="grid gap-8 md:hidden">
            {/* Content */}
            <div className="text-center">
              <motion.h1
                className="max-w-[697px] text-white font-cinzel font-medium leading-[1.2]"
                style={{
                  fontSize: '34px',
                  letterSpacing: '-0.02em',
                }}
                variants={headingVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                FRACTIONAL REAL ESTATE OWNERSHIP — ACCESSIBLE, TRANSPARENT, AND BUILT FOR THE FUTURE.
              </motion.h1>

              <motion.p
                className="mt-6 mx-auto text-white/75 font-gilroy leading-[1.7]"
                style={{
                  fontSize: '16px',
                }}
                variants={paragraphVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                MILLF opens the door to institutional-grade real estate for every investor. No minimums. No paperwork. Just tokenized ownership, on-chain.
              </motion.p>

              <motion.div
                className="mt-6 w-full"
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <motion.button
                  className="flex items-center justify-center gap-3 px-6 w-full font-gilroy font-bold text-lg text-black rounded-[12px]"
                  style={{
                    background: 'linear-gradient(90deg, #C08E22, #FDED99, #C08E22)',
                    height: '56px',
                  }}
                  variants={buttonHoverVariants}
                  whileHover="hover"
                >
                  GET STARTED
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Gilroy:wght@400;500;600;700&display=swap');

        .font-cinzel {
          font-family: 'Cinzel', Georgia, serif;
        }

        .font-gilroy {
          font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default LuxuryRealEstateHero;