'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
          className="object-cover mx-auto max-w-[1550px] w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="z-[1] absolute inset-0 mx-auto max-w-[1550px] bg-[#0F0F0F]/90" />

      <div className="z-10 relative mx-auto px-4 w-full max-w-[1332px] sm:px-6 lg:px-10">
        {/* ---------------- TOP LAYOUT ---------------- */}
        <div className="flex flex-col items-center items-start gap-8 gap-4 mt-4 lg:flex-row">
          {/* LEFT COLUMN — ~40% */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col items-center w-full w-[40%] text-center text-left lg:items-start"
          >
            <p className="max-w-[482px] font-gilroy font-light text-sm leading-relaxed text-[#C9C9C9] sm:text-[16px]">
              Traditional real estate is slow, illiquid, and restricted by capital barriers.
              MLLF removes every friction point — delivering institutional-grade assets to any
              investor, anywhere, entirely on-chain.
            </p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
              className="flex flex-col items-center gap-4 mt-6 w-full w-auto sm:flex-row"
            >
              {/* Buttons */}
<div className="flex flex-col gap-4 sm:flex-row lg:gap-3">
  {/* Whitepaper Button */}
  <motion.button
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    className="relative p-[1px] w-[124px] h-[36px] bg-[linear-gradient(270deg,#C08E22_0%,#FDED99_51.93%,#C08E22_100%)] rounded-[4px] group"
  >
    <div className="flex items-center justify-center gap-2 w-full h-full bg-black rounded-[4px] transition-all duration-300 group-hover:bg-transparent">
      <span className="font-gilroy text-sm font-semibold text-transparent bg-[linear-gradient(270deg,#C08E22_0%,#FDED99_51.93%,#C08E22_100%)] bg-clip-text transition-all duration-300 group-hover:bg-none group-hover:text-black">
        Whitepaper
      </span>

      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 2v6h6"
          stroke="url(#goldGradient)"
          strokeWidth="1.6"
          strokeLinejoin="round"
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

  {/* Invest Now Button */}
  <motion.button
    onClick={() => navigate("/presale")}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    className="flex items-center justify-center gap-2 w-[119px] h-[36px] font-gilroy text-sm font-semibold text-black bg-gradient-to-r from-[#FFE9A8] via-[#E2BF57] to-[#C9962E] rounded-[4px] shadow-[0_10px_30px_rgba(226,191,87,0.15)] transition-all duration-300 hover:brightness-105 hover:shadow-[0_15px_40px_rgba(226,191,87,0.35)]"
  >
    Invest now

    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </motion.button>
</div>           </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full lg:w-[60%]"
          >
            {/* Badge */}
            <div className="mb-6 lg:self-end">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-gilroy font-extralight tracking-[0.2em] text-[#E2BF57] text-center rounded-full uppercase"
                style={{ backgroundColor: "#FDED9926" }}
              >
                <span className="h-1.5 w-1.5 bg-[#FFD666] rounded-full shrink-0" />
                Institutional-grade trust, investor-friendly access
              </div>
            </div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="mx-auto max-w-[646px] text-center font-cinzel font-light text-[#EDE8DF] text-[25px] leading-[1.3] leading-[1.5] uppercase sm:text-[20px] md:text-[38px] lg:text-right xl:text-[48px]"
              style={{
                letterSpacing: "-0.02em",
              }}
            >
              MLLF IS DESIGNED TO SOLVE
              REAL ESTATE'S BIGGEST 
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
          className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:mt-4 lg:grid-cols-3"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ y: -10 }}
              className={`group flex flex-col items-center w-full lg:items-stretch ${
                i === FEATURES.length - 1 ? 'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[376px] lg:col-span-1 lg:mx-0 lg:max-w-none' : ''
              }`}
            >
              <div className="overflow-hidden w-full h-[240px] w-[376px] rounded-[24px] sm:h-[300px] md:h-[340px] lg:h-[379px]">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <h3 className="mt-4 font-gilroy text-lg font-semibold text-white sm:text-xl">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-[286px] font-gilroy text-sm font-light leading-relaxed text-[#C9C9C9] sm:text-base">
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