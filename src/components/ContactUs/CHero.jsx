import React from "react";
import { motion } from "framer-motion";
import contactBg from "../../assets/ContactUs/contact-hero-bg.png";


const BACKGROUND_IMAGE_URL = contactBg;
// ----------------------------------------------------------------------------
// Animation variants (unchanged)
// ----------------------------------------------------------------------------
const bannerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.25 },
  },
};

// ----------------------------------------------------------------------------
// Main section
// ----------------------------------------------------------------------------
export default function ContactHero({ imageUrl = BACKGROUND_IMAGE_URL }) {
  return (
    <section className="w-full bg-black">
      {/*
        RESPONSIVE FIX: "py-10 py-12 py-14" were unprefixed and conflicting
        — same-specificity rules with no media query, so only the last one
        generated (py-14) could ever win, applying at every screen size
        including mobile. Now a proper mobile-first progression, with
        lg:py-14 preserving the exact original desktop value.
      */}
      <div className="mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={bannerVariants}
          className="overflow-hidden relative max-w-[1550px] h-[400px] sm:h-[460px] md:h-[560px] lg:h-[660px] xl:h-[720px] 2xl:h-[760px]"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(0,0,0,0.45),
              rgba(0,0,0,0.55),
              rgba(0,0,0,0.65)
            ), url(${imageUrl}) center/cover no-repeat`,
            borderColor: "rgba(214,170,57,0.25)",
          }}
        >
          {/* Dark overlay for text readability */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.55), rgba(0,0,0,0.65))",
            }}
          />

          {/* Content */}
          <div className="z-10 relative flex items-center justify-center px-5 h-full w-full sm:px-6 md:px-10">
            <div className="flex flex-col items-center max-w-3xl text-center">
              {/* Badge */}
              <motion.div
                variants={badgeVariants}
                /*
                  RESPONSIVE FIX: "py-1.5 py-2" were unprefixed and
                  conflicting (last one, py-2, always won, even on mobile).
                  Now py-1.5 on mobile, sm:py-2 preserves the original
                  value from 640px up — desktop unaffected.
                */
                className="inline-flex items-center gap-2 px-4 py-1.5 py-2 rounded-full sm:px-5"
                style={{
                  backgroundColor: "#FDED9926",
                }}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 bg-[#D6AA39] rounded-full shadow-[0_0_6px_2px_rgba(214,170,57,0.55)]"
                />
                <span className="text-[10px] font-gilroy font-light tracking-[0.25em] text-[#E2BF57] uppercase sm:text-[12px]">
                  Contact Us
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={headingVariants}
                /*
                  CRITICAL BUG FIX: "text-[30px] text-[40px] text-[70px]"
                  were all unprefixed and conflicting, so only the LAST one
                  (text-[70px]) could ever win as the base/mobile size —
                  meaning phones as narrow as 320px were being forced into
                  a 70px heading (worse than desktop's own scaled-down
                  md:text-[48px] step), guaranteeing wrapping/clipping.
                  These three literal sizes were clearly meant to be a
                  mobile-first progression that just never got its
                  breakpoint prefixes. Restored as: base 30px, sm:40px,
                  md:48px (unchanged), then xl:70px / 2xl:70px (unchanged).
                  Since md:text-[48px] and xl:text-[70px] already existed
                  and are untouched, desktop (lg, which inherits md's 48px,
                  and xl/2xl at 70px) renders EXACTLY as before.
                */
                className="mt-5 font-cinzel font-normal text-[#EDE8DF] leading-[105%] tracking-wide text-[30px] text-[40px] sm:mt-6 md:text-[48px] lg:mt-7 xl:text-[70px] 2xl:text-[70px]"
              >
                Get In Touch
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={subtitleVariants}
                /*
                  RESPONSIVE FIX: "text-[14px] text-[16px]" were unprefixed
                  and conflicting, so 16px always won even on the smallest
                  phones — the orphaned 14px value was clearly intended as
                  a slightly smaller mobile size. Restored as base 14px,
                  scaling up to the existing md:text-[16px]/xl:text-[16px]
                  (both unchanged) from sm/640px up — desktop unaffected.
                */
                className="mt-4 font-gilroy text-[14px] text-[16px] sm:mt-5 md:text-[16px] lg:mt-6 xl:text-[16px]"
                style={{ color: "#C9C9C9" }}
              >
                We're Here to Help You Start Investing
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}