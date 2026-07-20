'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Swap these for your actual local assets.
import sectionBg from "../../assets/S3.Solve/section-bg.png";
import officeImg from '../../assets/S3.Solve/simplified-ownership.png';
import villaImg from '../../assets/S3.Solve/verified-transparent.png';
import resortImg from '../../assets/S3.Solve/built-to-reward.png';

const FEATURES = [
  {
    id: 1,
    image: officeImg,
    title: 'Simplified Ownership',
    description:
      'A native fractional ownership model that removes legal and financial complexity.',
  },
  {
    id: 2,
    image: villaImg,
    title: 'Verified & Transparent',
    description:
      'Every property and transaction is recorded on-chain — fully transparent and verifiable.',
  },
  {
    id: 3,
    image: resortImg,
    title: 'Built to Reward',
    description:
      'Earn through rental income, staking, and long-term appreciation — built into the model.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SolveLimitations = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="overflow-hidden relative mt-0 w-full min-h-screen bg-black"
    >
    {/* Background Image */}
<div className="z-0 overflow-hidden absolute inset-0">
  <img
    src={sectionBg}
    alt=""
    className="mx-auto max-w-[1332px] h-"
  />
</div>

{/* Overlay */}
<div className="z-[1] absolute inset-0 mx-auto max-w-[1332px] bg-[#0F0F0F]/90" />



{/* Content */}
<div className="z-10 relative mx-auto px-4 max-w-[1332px]">
  {/* Your section content */}
</div>

      <div className="z-10 relative mx-auto px-4 w-full max-w-[1332px] sm:px-6 lg:px-10">
        {/* ---------------- TOP LAYOUT ---------------- */}
        <div className="flex flex-col items-center gap-4 mt-4 lg:flex-row">
          {/* LEFT COLUMN — ~40% */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-center w-full w-[0%] text-center text-left lg:items-start"
          >
            <p className="max-w-[482px] font-gilroy font-light text-[16px] leading-relaxed text-[#C9C9C9] md:text-[16px]">
              Traditional real estate is slow, illiquid, and restricted by capital barriers.
              MLLF removes every friction point — delivering institutional-grade assets to any
              investor, anywhere, entirely on-chain.
            </p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
              className="flex flex-col items-center gap-4 mt-6 w-full w-auto sm:flex-row"
            >
              {/* Whitepaper button */}
              <motion.button
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.2 }}
  className="relative p-[1px] bg-[linear-gradient(270deg,#C08E22_0%,#FDED99_51.93%,#C08E22_100%)] rounded-sm group"
>
  <div className="flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-sm transition-all duration-300 group-hover:bg-transparent">
    <span className="font-gilroy text-sm font-semibold text-transparent bg-[linear-gradient(270deg,#C08E22_0%,#FDED99_51.93%,#C08E22_100%)] bg-clip-text transition-all duration-300 group-hover:text-black group-hover:bg-none">
      Whitepaper
    </span>

    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="transition-all duration-300"
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
        stroke="url(#goldGradient)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        className="group-hover:stroke-black"
      />
      <path
        d="M14 2v6h6"
        stroke="url(#goldGradient)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        className="group-hover:stroke-black"
      />

      <defs>
        <linearGradient
          id="goldGradient"
          x1="0"
          y1="0"
          x2="24"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C08E22" />
          <stop offset="0.5193" stopColor="#FDED99" />
          <stop offset="1" stopColor="#C08E22" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</motion.button>

              {/* Invest Now button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 px-6 py-3 w-full font-gilroy text-sm font-semibold text-black bg-gradient-to-r from-[#FFE9A8] via-[#E2BF57] to-[#C9962E] rounded-sm shadow-[0_10px_30px_rgba(226,191,87,0.15)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(226,191,87,0.35)] hover:brightness-105 sm:w-auto"
              >
                Invest now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="black"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

         {/* RIGHT COLUMN */}
<motion.div
  variants={fadeUp}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex flex-col items-center w-full lg:w-[100%]"
>
  {/* Badge */}
  <div className="mb-6 lg:self-end">
    <div
      className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-gilroy font-extralight tracking-[0.2em] text-[#E2BF57] rounded-full uppercase"
      style={{ backgroundColor: "#FDED9926" }}
    >
      <span className="h-1.5 w-1.5 bg-[#FFD666] rounded-full" />
      Institutional-grade trust, investor-friendly access
    </div>
  </div>

  {/* Heading */}
  <motion.h2
  variants={fadeUp}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
  className="w-full max-w-[646px] text-right font-cinzel font-light leading-[1.5] text-[#EDE8DF] uppercase"
  style={{
    fontSize: "48px",
    letterSpacing: "-0.02em",
  }}
>
  MLLF IS DESIGNED TO SOLVE
  REAL ESTATE&apos;S BIGGEST 
  LIMITATIONS
</motion.h2>
</motion.div>
</div>

        {/* ---------------- BOTTOM LAYOUT — FEATURE CARDS ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.15 }}
          className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:mt-4 lg:grid-cols-3"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ y: -10 }}
              className={`group flex flex-col ${
                i === FEATURES.length - 1 ? 'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[376px] lg:col-span-1 lg:mx-0 lg:max-w-none' : ''
              }`}
            >
              <div className="overflow-hidden w-[376px] h-[379px] rounded-[24px]">
  <motion.img
    src={feature.image}
    alt={feature.title}
    className="object-cover w-full h-full"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
  />
</div>

              <h3 className="mt-4 font-gilroy text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-[286px] font-gilroy text-base font-light leading-relaxed text-[#C9C9C9]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolveLimitations;