import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import heroBg from "../../assets/Hero/herobg.png";
import Reveal from "../common/Reveal";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const statVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="overflow-hidden relative pt-4 w-full min-h-screen bg-black sm:pt-20 lg:pt-16">
      {/* Mobile-only background (desktop image is md:flex below and untouched) */}
      <div className="z-0 absolute inset-0 flex justify-center md:hidden">
        <img
          src={heroBg}
          alt="Hero"
          className="object-cover object-top w-full h-full opacity-40"
        />
       <div className="absolute inset-0 hidden bg-gradient-to-b from-black/60 via-black/70 to-black lg:block" />
      </div>

      {/* Background Image */}
<div className="z-0 absolute inset-0 hidden justify-center md:flex">
  <img
    src={heroBg}
    alt="Hero"
    className="object-contain object-bottom w-full max-w-[1550px] h-[790px] translate-y-8"
  />

  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

  <div
    className="z-10 absolute inset-x-0 top-0 h-130"
    style={{
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 100%)",
    }}
  />
</div>


      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 relative mx-auto px-4 pb-5 px-8 max-w-6xl sm:px-6 md:pb-24 lg:pb-30"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDED9926] rounded-full border sm:px-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            <span className="text-[#E2BF57] text-[12px] font-gilroy font-extralight tracking-widest uppercase sm:text-[12px]">
              Next-Generation Real Estate Assets
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-center font-light text-[20px] text-[#EDE8DF] leading-tight sm:text-[24px] md:text-[40px] lg:text-[70px]"
          style={{
            fontFamily: 'cinzel',
            letterSpacing: '0.02em',
          }}
        >
          THE BLOCKCHAIN BUILT{' '}
          <br className="hidden sm:block" />
          FOR LUXURY REAL ESTATE
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
         className="mx-auto px-2 mb-5 max-w-[840px] text-center font-gilroy text-[#C9C9C9] text-[13px] text-[16px] sm:text-[14px] md:text-[15px] lg:mb-6"
        >
          MLLF transforms premium real estate into secure, tradable digital tokens — giving investors fractional ownership, real rental income, and true liquidity, all on-chain.
        </motion.p>

       <motion.div
  variants={buttonVariants}
  className="flex flex-wrap items-center justify-center gap-3 px-2 px-4 mb-20 sm:gap-5 md:gap-2 lg:gap-2"
>
  {/* Primary */}
  <button
  onClick={() => navigate("/presale")}
  className="flex items-center justify-center gap-3 px-2 h-10 font-gilroy font-medium text-[14px] text-black text-[16px] bg-[linear-gradient(270deg,_#C08E22_0%,_#FDED99_51.93%,_#C08E22_100%)] rounded-lg transition-all duration-300 group hover:brightness-110"
>
  Invest now
  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>

  {/* Secondary */}
  <div className="inline-block p-[1px] bg-[linear-gradient(270deg,_#C08E22_0%,_#FDED99_51.93%,_#C08E22_100%)] rounded-lg">
  <button
  onClick={() => navigate("/business-plan")}
  className="flex items-center justify-center gap-3 px-4 h-10 bg-[#000000] rounded-lg transition-all duration-300 group hover:bg-[#322815]"
>
  <span className="font-gilroy font-medium text-[14px] text-transparent bg-[linear-gradient(270deg,_#C08E22_0%,_#FDED99_51.93%,_#C08E22_100%)] bg-clip-text sm:text-[16px]">
    Read Business Plan
  </span>

  <FileText
    size={20}
    className="text-[#E3B33A] transition-transform duration-300 group-hover:translate-x-1"
  />
</button>
</div>

  {/* Tertiary */}
  <div className="inline-block p-[1px] bg-[linear-gradient(270deg,_#C08E22_0%,_#FDED99_51.93%,_#C08E22_100%)] rounded-lg">
  <button
  onClick={() => navigate("/tokenomics")}
  className="flex items-center justify-center gap-3 px-4 h-10 bg-[#000000] rounded-lg transition-all duration-300 group hover:bg-[#322815]"
>
  <span className="font-gilroy font-medium text-[14px] text-transparent bg-[linear-gradient(270deg,_#C08E22_0%,_#FDED99_51.93%,_#C08E22_100%)] bg-clip-text sm:text-[16px]">
    Explore Token
  </span>

  <ArrowRight
    size={20}
    className="text-[#E3B33A] transition-transform duration-300 group-hover:translate-x-1"
  />
</button>
</div>
</motion.div>
</motion.div>
{/* Bottom Overlay */}
<div
  className="z-10 absolute inset-x-0 bottom-0 hidden h-50 md:block"
  style={{
    background:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.75) 70%, #000 100%)",
  }}
/>


      {/* Statistics Bar */}
<motion.div className="z-20 relative left-0 mt-0 mt-8 w-full md:absolute lg:py-10 xl:bottom-[-20px]">
  <div className="mx-auto px-6 max-w-[1600px] lg:px-12">
    <div className="grid grid-cols-1 gap-6 gap-0 md:grid-cols-3">
      {/* Stat 1 */}
      <motion.div
        variants={statVariants}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center gap-3 md:justify-start lg:py-8 xl:py-4"
      >
        <h3 className="font-gilroy text-[24px] font-bold text-[#D9A72B] sm:text-[30px]">
          500+
        </h3>

        <p className="font-gilroy font-semibold text-[15px] text-[#C8B58A] sm:text-[18px]">
          Properties Tokenized
        </p>
      </motion.div>

      {/* Stat 2 */}
      <motion.div
        variants={statVariants}
        custom={1}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center gap-3 lg:py-8 xl:py-4"
      >
        <h3 className="font-gilroy text-[24px] font-bold text-[#D9A72B] sm:text-[30px]">
          $12M+
        </h3>

        <p className="font-gilroy font-semibold text-[15px] text-[#C8B58A] sm:text-[18px]">
          Total Value Locked
        </p>
      </motion.div>

      {/* Stat 3 */}
      <motion.div
        variants={statVariants}
        custom={2}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center gap-3 md:justify-end lg:py-8 xl:py-4"
      >
        <h3 className="font-gilroy text-[24px] font-bold text-[#D9A72B] sm:text-[30px]">
          8,000+
        </h3>

        <p className="font-gilroy font-semibold text-[15px] text-[#C8B58A] sm:text-[18px]">
          MLLF Holders
        </p>
      </motion.div>
    </div>
  </div>
</motion.div>
    </div>
  );
};

export default Hero;