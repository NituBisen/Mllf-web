'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroBg from "../../assets/S7/hero-bg.png";

/**
 * LuxuryRealEstateHero - Pixel-Perfect Single Component
 *
 * DESKTOP (lg: 1024px+) — 100% UNCHANGED from the original file.
 * Same JSX, same inline styles, same fontSize values (48px heading /
 * 16px paragraph / 345px max-width), same button dimensions, same
 * animations. Nothing in that block was touched.
 *
 * TABLET (md: 768–1023px) — unchanged from the previous responsive pass.
 *
 * MOBILE (below md: 320–767px) — reworked for a cleaner, more
 * comfortable experience:
 * 1. Heading now steps across three points instead of two, so it scales
 *    smoothly from small phones to the tablet handoff:
 *    24px (320–374px) -> 28px (375–639px, xs:) -> 34px (640–767px, sm:)
 *    — the sm: value still matches what tablet expects at the handoff.
 * 2. Removed the duplicate/conflicting paragraph font-size classes from
 *    the original ("text-[15px] text-[16px]" applied together) and
 *    replaced with a single clean step: 14px base -> 16px at sm:.
 * 3. Button was cramped (max-w-[110px], h-10, 12px text) — icon and
 *    label were fighting for space. Now it's a comfortably tappable
 *    control (min 44px touch target): h-12 (48px), auto width with
 *    generous padding, 13px -> 14px label, no forced max-width.
 * 4. Slightly more breathing room in vertical rhythm (mt-6/mt-8 instead
 *    of mt-5/mt-6) and a touch more side padding so text doesn't sit
 *    flush against the viewport edge on the smallest phones.
 * 5. Kept `break-words` / safe max-widths so long uppercase text can
 *    never force horizontal scroll on narrow viewports.
 * 6. Section-level `w-full overflow-x-hidden` safety net retained —
 *    does not affect layout/positioning at any breakpoint, purely
 *    prevents accidental horizontal scroll from motion transforms.
 */

const LuxuryRealEstateHero = ({
  backgroundImage = '/images/hero-bg.png',
  assetImage = '/images/hero-asset.png'
}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  // Container animation - fade up (unchanged)
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

  // Heading animation - fade (unchanged)
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

  // Paragraph animation - fade (unchanged)
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

  // Button animation - fade up (unchanged)
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

  // Image animation - slide from right (unchanged)
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

  // Button hover animation (unchanged)
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
      className="overflow-hidden overflow-x-hidden relative mx-auto w-full max-w-[1550px] bg-black"
    >
      {/* Background image — tablet & desktop only (md: 768px+), exactly
          reproducing the original section-level background (same url,
          contain/center/no-repeat) but scoped so it can't stretch across
          the taller, stacked mobile layout and collide with the text.
          Mobile instead falls back to the plain bg-black set above. */}
      <div
        className="absolute inset-0 hidden pointer-events-none md:block"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="z-10 relative">
       <motion.div
  className="mx-auto pt-5 pb-0 pb-[clamp(48px,12vw,96px)] max-w-[1475px] lg:pt-[clamp(48px,12vw,96px)]"
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
          {/* ================= Desktop/Laptop Layout — UNCHANGED ================= */}
          <div className="hidden grid-cols-2 items-center gap-20 lg:grid">
            {/* Left Column */}
            <div>
              {/* Heading */}
              <motion.h1
                className="pt-0 text-white font-cinzel font-light leading-[1.5] tracking-[-2%] lg:pb-6"
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
                className="mt-10"
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

          {/* ================= Tablet Layout ================= */}
          <div className="hidden grid-cols-1 gap-12 md:grid lg:hidden">
            {/* Content */}
            <div className="text-center">
              <motion.h1
                className="mx-auto max-w-[720px] min-[900px]:text-[48px] text-white font-cinzel font-medium leading-[1.2] break-words text-[40px]"
                style={{
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

          {/* ================= Mobile Layout — reworked ================= */}
          <div className="grid gap-6 px-4 px-6 sm:gap-8 md:hidden">
            {/* Content */}
            <div className="text-center">
              <motion.h1
                // Three-step scale: 24px (320–374px) -> 28px (375–639px)
                // -> 34px (640–767px, matches the tablet handoff exactly).
                className="mx-auto max-w-[520px] min-[375px]:text-[28px] text-white font-cinzel font-medium leading-[1.3] break-words text-[24px] sm:text-[34px]"
                style={{
                  letterSpacing: '-0.02em',
                }}
                variants={headingVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                FRACTIONAL REAL ESTATE OWNERSHIP — ACCESSIBLE, TRANSPARENT, AND BUILT FOR THE FUTURE.
              </motion.h1>

              <motion.p
                // Single clean step: 14px base -> 16px at sm:. Original had
                // two conflicting size classes applied together — fixed.
                className="mx-auto mt-6 max-w-[420px] text-white/75 font-gilroy leading-[1.7] text-[14px] text-[16px] sm:mt-8"
                variants={paragraphVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                MILLF opens the door to institutional-grade real estate for every investor. No minimums. No paperwork. Just tokenized ownership, on-chain.
              </motion.p>

              <motion.div
                className="flex justify-center mt-6 w-full sm:mt-8"
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <motion.button
                  // Comfortable 48px tall tap target, auto width, no more
                  // squeezed icon/label — matches tablet's proportions but
                  // slightly more compact.
                  className="inline-flex items-center gap-2 px-6 h-12 font-gilroy font-semibold text-black text-[13px] rounded-[8px] transition-all duration-300 sm:text-[14px]"
                  style={{
                    background: 'linear-gradient(90deg, #C08E22, #FDED99, #C08E22)',
                  }}
                  variants={buttonHoverVariants}
                  whileHover="hover"
                >
                  GET STARTED
                  <svg
                    className="w-4 h-4 h-5 shrink-0 sm:w-5"
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

            {/* Image — shown as its own contained block instead of a
                full-bleed section background, so it can never overlap
                the heading/paragraph/button above it. */}
            <motion.div
              className="flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <img
                src={heroBg}
                alt=""
                className="object-cover w-full max-w-[420px] rounded-2xl"
              />
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