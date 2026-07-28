import React from "react";
import { motion } from "framer-motion";
import propertyImage from "../../assets/About/why-we-built.png";

/**
 * WhyWeBuiltMLLF — EXACT DESIGN + FULLY RESPONSIVE
 * -----------------------------------------------------------------------
 * Premium "Why We Built MLLF" section matching design specifications.
 * Stack: React + Tailwind CSS + Framer Motion.
 *
 * LAYOUT STRUCTURE:
 * • Desktop (lg): 2-column layout with specific proportions
 *   - Left: Badge + Description text (40% width)
 *   - Right: Main heading (60% width)
 *   - Below: Image (65%) + Supporting text (35%)
 *
 * • Tablet (md): Adjusted spacing, text still 2-column
 * • Mobile (sm & xs): Fully stacked, single column
 *
 * FULLY RESPONSIVE:
 * ✓ Typography scales with screen size (clamp values)
 * ✓ Spacing adapts for all breakpoints
 * ✓ Image maintains aspect ratio and overflow prevention
 * ✓ Badge styling optimized for mobile
 * ✓ Background effects scale appropriately
 * ✓ Heading breaks at correct points on all screens
 * -----------------------------------------------------------------------
 */

const PROPERTY_IMAGE = propertyImage;

/* ============ ANIMATION VARIANTS ============ */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

/* ============ SECTION BADGE ============ */

function SectionBadge({ children }) {
  return (
    <motion.div variants={fadeDown} className="inline-block">
      <div
        className="inline-flex items-center gap-2 px-3 py-2 py-2.5 rounded-full sm:px-4 md:gap-2.5"
        style={{
          background: "rgba(253, 237, 153, 0.15)",
          
        }}
      >
        {/* Pulsing dot */}
        <div className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full rounded-full animate-pulse"
            style={{ backgroundColor: "#E2BF57" }}
          />
          <span
            className="relative inline-flex h-full w-full rounded-full"
            style={{ backgroundColor: "#E2BF57" }}
          />
        </div>

        {/* Badge text */}
        <span
          className="text-xs tracking-wider font-light uppercase sm:text-sm"
          style={{
            color: "#E2BF57",
            fontFamily: "'Gilroy', 'Segoe UI', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          {children}
        </span>
      </div>
    </motion.div>
  );
}

/* ============ IMAGE CARD ============ */

function ImageCard({ src, alt }) {
  return (
    <motion.div
      variants={slideInLeft}
      className="overflow-hidden w-full rounded-lg sm:rounded-xl md:rounded-2xl"
      style={{
        aspectRatio: "16 / 9",
        backgroundImage:
          "linear-gradient(135deg, #C08E22 0%, #FDED99 50%, #C08E22 100%)",
        padding: "1px",
      }}
    >
      <div className="overflow-hidden w-full h-full bg-black rounded-lg sm:rounded-xl md:rounded-2xl">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

/* ============ MAIN COMPONENT ============ */

export default function WhyWeBuiltMLLF() {
  return (
    <section
      aria-labelledby="why-we-built-heading"
      className="overflow-hidden relative py-16 mx-auto max-w-[1550px] bg-black sm:py-20 md:py-24 lg:py-32"
    >
      {/* ============ BACKGROUND EFFECTS ============ */}
      <div className="absolute inset-0 pointer-events-none">
        

        

        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 0%, transparent 40%, rgba(0, 0, 0, 0.5) 100%)",
          }}
        />
      </div>

      {/* ============ MAIN CONTAINER ============ */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto px-4 max-w-[1550px] sm:px-6 md:px-8 lg:px-12"
      >
        {/* ============ TOP SECTION: Badge + Description + Heading ============ */}
        <div className="flex flex-col items-start justify-between gap-8 mb-12 mb-20 sm:mb-14 md:mb-16 lg:flex-row">
          {/* Left: Badge + Description */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 sm:gap-6 lg:w-[40%]"
          >
            {/* Badge */}
            <SectionBadge>Why We Built MLLF</SectionBadge>

            {/* Description Text */}
            <motion.p
              variants={fadeUp}
              className="max-w-[475px] text-sm leading-relaxed leading-7 sm:text-base md:text-base"
              style={{
                color: "#E5E5E5",
                fontFamily: "'Gilroy', 'Segoe UI', sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              MLLF bridges the timeless value of real estate with the innovation
              of blockchain technology. By tokenizing premium properties into
              secure digital assets, we make investing more transparent,
              accessible, and borderless—empowering investors to own a share of
              world-class real estate with confidence.
            </motion.p>
          </motion.div>

          {/* Right: Main Heading */}
          <motion.div variants={slideInRight} className="lg:w-[60%]">
            <h2
              id="why-we-built-heading"
              className="text-center text-[30px] leading-tight sm:text-[30px] md:text-[48px] lg:text-right xl:text-[70px]"
              style={{
                color: "#EDE8DF",
                fontFamily: "'Cinzel', 'Playfair Display', serif",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              Where Real Estate
              <br />
              Meets Blockchain
            </h2>
          </motion.div>
        </div>

        {/* ============ BOTTOM SECTION: Image + Supporting Text ============ */}
        <div className="flex flex-col items-end justify-between gap-8 sm:gap-10 md:gap-12 lg:flex-row">
          {/* Left: Image Card */}
          <div className="w-full lg:w-[65%]">
            <ImageCard
              src={PROPERTY_IMAGE}
              alt="Modern luxury home at dusk representing an MLLF tokenized property"
            />
          </div>

          {/* Right: Supporting Description */}
          <motion.div
            variants={slideInRight}
            className="flex items-center lg:w-[50%]"
          >
            <p
              className="max-w-[313px] text-sm leading-relaxed leading-7 sm:text-base md:text-base"
              style={{
                color: "#E5E5E5",
                fontFamily: "'Gilroy', 'Segoe UI', sans-serif",
                lineHeight: "1.8",
                letterSpacing: "0.3px",
                textAlign: "left",
              }}
            >
              MLLF bridges traditional real estate with cutting-edge blockchain
              technology, transforming premium properties into secure digital
              assets. This approach enhances transparency, simplifies ownership,
              and provides global investors with seamless access to high-value
              real estate opportunities.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}