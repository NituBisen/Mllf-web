import React from "react";
import { motion } from "framer-motion";

// Replace these with your actual image imports
import resortImage from "../../assets/Read/resort.jpg";
import villaImage from "../../assets/Read/villa.jpg";

/* -------------------------------------------------------------------------- */
/*  Reveal.jsx — generic scroll/mount reveal wrapper                          */
/* -------------------------------------------------------------------------- */
const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}) => {
  const variants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    scale: {
      hidden: { opacity: 0, scale: 0.96 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*  FloatingCircle.jsx — rotating badge with circular text + arrow            */
/* -------------------------------------------------------------------------- */
const FloatingCircle = () => {
  const text = "MY LUXURIES LIFE • MY LUXURIES LIFE • ";

  return (
    <motion.div
      className="z-20 absolute flex items-center justify-center h-[170px] w-[170px] bg-black rounded-full -top-10 -left-10 md:h-[170px]"
      style={{ border: "1.5px solid #C08E22" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      whileHover={{ boxShadow: "0 0 40px rgba(192,142,34,0.55)" }}
    >
      {/* rotating text ring */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 170 170" className="h-full w-full">
          <defs>
            <path
              id="circlePath"
              d="M 85,85 m -65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
            />
          </defs>
          <text fill="#F5EFE7" fontSize="10.5" letterSpacing="2">
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* center arrow */}
      <motion.div
        className="z-10 relative flex items-center justify-center h-11 w-11 bg-black rounded-full border-[#C08E22]/60 border"
        whileHover={{ x: 4, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F5EFE7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*  OpportunitySection.jsx — main section                                     */
/* -------------------------------------------------------------------------- */
const OpportunitySection = () => {
  return (
    <section className="mx-auto w-full max-w-[1500px] bg-black">
      <div
        className="mx-auto px-6 pt-[80px] pb-[80px] pb-[100px] pt-[100px] pb-[120px] max-w-[1500px] sm:px-10 md:pt-[100px] lg:px-12"
      >
        <div className="flex flex-col items-center items-start gap-16 gap-[56px] lg:flex-row">
          {/* ---------------------------------------------------------------- */}
          {/* LEFT SIDE                                                        */}
          {/* ---------------------------------------------------------------- */}
          <div className="w-full text-center text-left lg:w-[160%]">
            {/* Badge */}
            <Reveal direction="down">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(192,142,34,0.12)",
                  border: "1px solid rgba(192,142,34,0.30)",
                }}
              >
                <span
                  className="h-[6px] w-[6px] rounded-full"
                  style={{ backgroundColor: "#C08E22" }}
                />
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Gilroy', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    color: "#C08E22",
                  }}
                >
                  Why Real Estate Needs Blockchain
                </span>
              </span>
            </Reveal>

            {/* Heading */}
            <Reveal direction="up" delay={0.1}>
              <h2
                className="mt-6 max-w-[880px] text-[34px] sm:text-[48px] lg:text-[70px] xl:text-[70px]"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 300,
                  color: "#F5EFE7",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                The Opportunity We're Solving
              </h2>
            </Reveal>

            {/* Image + floating circle */}
            <div className="relative flex justify-center mt-10 lg:justify-start">
              <Reveal
                direction="scale"
                delay={0.2}
                className="relative w-full max-w-[680px]"
              >
                <motion.svg
                  viewBox="0 0 608 406"
                  className="h-auto w-full"
                  whileHover="hover"
                >
                  <defs>
                    <pattern
                      id="resortPattern"
                      patternUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <image
                        href={resortImage}
                        width="608"
                        height="406"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </pattern>
                  </defs>

                  <motion.path
                    d="M587 0C598.598 0 608 9.403 608 21.001V384.118C608 395.716 598.598 405.118 587 405.118H21C9.40218 405.118 0.000263899 395.716 0 384.118V225.502C0 198.483 37.9812 180.001 65 180.001C118.019 180.001 161 135.229 161 80.001C161 49.8965 184.35 0 214.455 0H587Z"
                    fill="url(#resortPattern)"
                    variants={{ hover: { scale: 1.03 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.svg>

                {/* Floating circle overlapping the top-left of the image */}
                <FloatingCircle />
              </Reveal>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* RIGHT SIDE                                                       */}
          {/* ---------------------------------------------------------------- */}
        <div className="w-full text-center lg:w-[100%]">
            <Reveal direction="scale" delay={0.3}>
              <div className="h-[380px] w-full sm:h-[520px] lg:h-[606px]">
                <motion.svg
                  viewBox="0 0 630 606"
                  className="h-full w-full"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ transformOrigin: "center" }}
                >
                  <defs>
                    <pattern
                      id="villaPattern"
                      patternUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <image
                        href={villaImage}
                        width="630"
                        height="606"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </pattern>
                  </defs>

                  <path
                    d="M608.521 0C620.119 0 629.521 9.40202 629.521 21V585C629.521 596.598 620.119 606 608.521 606H456.842C450.398 606 445.826 596.444 445.826 590V439C445.826 426.85 435.976 417 423.826 417H39C17.4609 417 0 399.539 0 378V135C0 113.461 17.4609 96 39 96H190.594C202.744 96 212.594 86.1503 212.594 74V39C212.594 17.4609 230.055 0 251.594 0H608.521Z"
                    fill="url(#villaPattern)"
                  />
                </motion.svg>
              </div>
            </Reveal>

            {/* Bottom description card */}
            <Reveal
              direction="up"
              delay={0.4}
              className="z-10 relative mx-auto w-[200px] sm:w-[85%] lg:w-[410px]"
            >
              <div
               
              >
                {/* curved cut-out corner accent */}
                <div
                  
                />
                <p
                  style={{
                    fontFamily: "'Gilroy', sans-serif",
                    color: "#D0D0D0",
                    fontSize: "16px",
                    lineHeight: 1.8,
                  }}
                >
                  Real estate is a valuable asset, but high costs, complex
                  processes, and low liquidity limit access. MLLF solves
                  these challenges through blockchain, enabling fractional
                  ownership, transparent transactions, and global real
                  estate investment.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;