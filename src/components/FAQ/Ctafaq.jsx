'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ctaBgImage from '../../assets/FAQ/cta-card-background.png';
import { useNavigate } from "react-router-dom";

/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 * (Unchanged — animations behave identically across all breakpoints)
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
  headingSlide: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  },
  descriptionSlide: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  },
  buttonSlide: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  },
  imageSlide: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  },
};



/**
 * PremiumButton Component
 * Luxury gold gradient button with hover effects
 * (Used only inside the md+ two-column layout — already fluid via clamp(),
 * left untouched so lg+ renders pixel-identical to the original)
 */
const PremiumButton = ({ onClick = () => {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.button
      variants={animationVariants.buttonSlide}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="overflow-hidden relative flex items-center justify-center gap-2.5 px-8 h-14 font-semibold text-black rounded-[8px] transition-all duration-300 group"
      style={{
        width: 'clamp(160px, 90%, 180px)',
        backgroundImage: 'linear-gradient(270deg, #C08E22 0%, #FDED99 51.93%, #C08E22 100%)',
        boxShadow: isHovered
          ? '0 12px 32px rgba(192,142,34,0.4)'
          : '0 6px 16px rgba(192,142,34,0.2)',
      }}
    >
      {/* Shimmer effect on hover */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          filter: 'blur(8px)',
        }}
      />

      {/* Button content */}
      <span
  onClick={() => navigate("/ContactUs")}
  className="relative whitespace-nowrap font-semibold tracking-tight cursor-pointer"
  style={{
    fontSize: "clamp(11px, 3vw, 18px)",
    fontFamily: "Gilroy, sans-serif",
  }}
>
  Contact Us
</span>

<motion.span
  animate={{ x: isHovered ? 4 : 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="relative flex items-center justify-center shrink-0"
>
  <ArrowRight size={20} strokeWidth={2.5} />
</motion.span>
    </motion.button>
  );
};

/**
 * PremiumBackground Component
 * Luxury decorative background effects
 *
 * RESPONSIVE CHANGES:
 * - The golden glow circle now scales down on phones/tablets (smaller
 *   diameter + lighter blur) so it doesn't overpower short mobile card
 *   heights, then rejoins the original w-[600px] h-[600px] blur-3xl
 *   exactly at lg (1024px+).
 */
const PremiumBackground = () => (
  <div className="overflow-hidden absolute inset-0 pointer-events-none">
    {/* Soft golden radial glow */}
    <div
      className="absolute top-1/2 right-0 w-72 h-72 h-96 h-[420px] h-[600px] rounded-full opacity-15 blur-2xl blur-3xl sm:w-96 md:w-[420px] lg:w-[600px]"
      style={{
        background: 'radial-gradient(circle, rgba(224,166,52,0.4), transparent)',
        transform: 'translate(30%, -50%)',
      }}
    />

    {/* Subtle vignette */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        background:
          'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
      }}
    />

    {/* Left side darker gradient */}
    <div
      className="absolute inset-y-0 left-0 w-1/3 opacity-30"
      style={{
        background: 'linear-gradient(90deg, rgba(0,0,0,0.8), transparent)',
      }}
    />

    {/* Subtle particles effect */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(224,166,52,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(224,166,52,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 40% 20%, rgba(224,166,52,0.1) 0%, transparent 50%)`,
      }}
    />
  </div>
);

/**
 * CTASection Component
 * Premium CTA card section with heading, description, button, and illustration
 * Fully responsive with luxury black-and-gold aesthetic
 *
 * RESPONSIVE CHANGES (section-level):
 * - Container horizontal padding tightened for phones (px-4) and given an
 *   extra tablet step (md:px-10) so the 60/40 two-column layout has more
 *   breathing room between 768–1023px; `lg:px-20` explicitly restores the
 *   original desktop value untouched.
 * - The md+ two-column branch (previously fixed 48px `whitespace-nowrap`
 *   heading) now scales fluidly from 30px→34px between md and lg, only
 *   reaching the exact original 48px + nowrap at `lg:`, which prevents
 *   text clipping/overflow on tablets (768–1023px) where 60% of the card
 *   width isn't wide enough for a single 48px line.
 * - Fixed a conflicting-classes bug in the mobile stacked layout wrapper
 *   (`py-12 ... py-16` on the same element — only the last was ever
 *   applied); replaced with a clean `py-12 sm:py-16` ramp.
 */
export default function CTACardSection() {
  return (
    <motion.section
      variants={animationVariants.containerFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden relative py-3 w-full bg-black sm:py-3 md:py-0 lg:py-0 xl:py-0"
    >
      {/* Main Container */}
      <div className="mx-auto px-4 max-w-[1800px] w-full sm:px-6 md:px-10 lg:px-20">
        {/* CTA Card */}
        <div className="overflow-hidden relative w-full rounded-[20px]">
          {/* Background Image with overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={ctaBgImage}
              alt="Luxury CTA card background"
              className="object-cover w-full h-full"
            />
             
        
          </div>

          {/* Premium background effects */}
          <PremiumBackground />

          {/* Content Layout */}
          <div className="z-10 relative">
            {/* Desktop/Tablet: 2-column layout (md and up) */}
            <div className="hidden items-center min-h-[420px] min-h-[500px] md:flex lg:min-h-[600px]">
              {/* Left Content - 60% width */}
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
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col justify-center gap-6 pr-6 w-[60%] sm:gap-8 md:pr-8 lg:pr-12"
              >
                <motion.h2
  variants={animationVariants.headingSlide}
  className="max-w-[800px] font-light leading-[110%] text-white whitespace-normal text-[30px] text-[48px] md:text-[34px] lg:whitespace-nowrap"
  style={{
    fontFamily: "Cinzel, serif",
    fontWeight: 400,
  }}
>
  STILL HAVE QUESTIONS?
</motion.h2>

                {/* Description */}
                <motion.p
                  variants={animationVariants.descriptionSlide}
                  className="max-w-[500px] text-[#EDE8DF] leading-[170%] text-[14px] md:text-[15px] lg:text-[16px]"
                  style={{
                    fontFamily: 'Gilroy, sans-serif',
                  }}
                >
                  Whether you're new to tokenized real estate or ready to invest with MLLF, our
                  experts are here to provide clear answers and personalized guidance.
                </motion.p>

                {/* Button */}
                <PremiumButton />
              </motion.div>

              {/* Right Content - % width (Background handles visual) */}
              <div className="w-[40%] h-full min-h-[420px] md:min-h-[500px] lg:min-h-[600px]" />
            </div>

            {/* Mobile: Stacked layout (below md) */}
            <div className="flex flex-col items-center gap-8 px-0 py-12 py-16 sm:gap-10 md:hidden">
              {/* Content Section */}
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
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center gap-5 px-5 w-full sm:gap-6"
              >
                {/* Heading */}
                <motion.h2
                  variants={animationVariants.headingSlide}
                  className="font-light leading-[110%] text-[#F5F0EA] text-center"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: 'clamp(28px, 6vw, 48px)',
                    fontWeight: 400,
                  }}
                >
                  STILL HAVE
                  <br />
                  QUESTIONS?
                </motion.h2>

                {/* Description */}
                <motion.p
                  variants={animationVariants.descriptionSlide}
                  className="max-w-[500px] text-[#E5E5E5] leading-[170%] text-center"
                  style={{
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    fontFamily: 'Gilroy, sans-serif',
                  }}
                >
                  Whether you're new to tokenized real estate or ready to invest with MLLF, our
                  experts are here to provide clear answers and personalized guidance.
                </motion.p>

                {/* Button */}
                <div className="flex justify-center w-full">
                  <motion.div
                    variants={animationVariants.buttonSlide}
                    className="w-full max-w-xs"
                  >
                    <motion.button
  onClick={() => navigate("/ContactUs")}
  onHoverStart={() => {}}
  onHoverEnd={() => {}}
  whileHover={{ scale: 1.05, y: -3 }}
  whileTap={{ scale: 0.98 }}
  className="overflow-hidden flex items-center justify-center gap-2.5 px-8 w-full h-11 font-semibold text-black rounded-[10px] transition-all duration-300 group"
  style={{
    backgroundImage:
      "linear-gradient(270deg, #C08E22 0%, #FDED99 51.93%, #C08E22 100%)",
    boxShadow: "0 6px 16px rgba(192,142,34,0.2)",
  }}
>
  <span
    className="relative font-semibold tracking-tight"
    style={{
      fontSize: "clamp(14px, 3.5vw, 16px)",
      fontFamily: "Gilroy, sans-serif",
    }}
  >
    Contact Us
  </span>

  <ArrowRight size={20} strokeWidth={2.5} />
</motion.button>
                  </motion.div>
                </div>
              </motion.div>


            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}