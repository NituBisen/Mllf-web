'use client';
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import bgWave from "../../assets/S2.EX/bg-wave.png";
import exploreImg from "../../assets/S2.EX/explore-property.png";
import investImg from "../../assets/S2.EX/invest-mllf.png";
import stakeImg from "../../assets/S2.EX/stake-mllf.png";

const RealEstateHero = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const cards = [
    {
      id: 1,
      title: "Explore Properties",
      description: "Discover premium tokenized properties across residential, commercial, and hospitality real estate.",
      image: exploreImg,
      watermark: "Ecosystem",
      position: "left",
      delay: 0.2,
    },
    {
      id: 2,
      title: "Invest in MLLF",
      description: "Buy fractional shares of real estate directly through your wallet – no paperwork, no delays.",
      image: investImg,
      watermark: "Ecosystem",
      position: "center",
      delay: 0.4,
    },
    {
      id: 3,
      title: "Stake MLLF",
      description: "Lock your tokens to earn additional rewards and support long-term ecosystem growth.",
      image: stakeImg,
      watermark: "Ecosystem",
      position: "right",
      delay: 0.6,
    },
  ];
useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  handleResize(); // Set initial value

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  useEffect(() => {
  if (isPaused || !isDesktop) return;

  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, 3000);

  return () => clearInterval(interval);
}, [isPaused, isDesktop]);
 const getCardPosition = (index) => {
  const diff = (index - activeIndex + cards.length) % cards.length;

  if (diff === 0) {
    return {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
    };
  }

  if (diff === 1) {
    return {
      x: 360,
      y: 80,
      scale: 0.88,
      opacity: 0.6,
      zIndex: 10,
    };
  }

  return {
    x: -360,
    y: 80,
    scale: 0.88,
    opacity: 0.6,
    zIndex: 10,
  };
};

  const CardComponent = ({ card }) => {
    return (
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className={`
          relative overflow-hidden rounded-[28px] border border-[rgba(255,214,102,0.3)] 
          backdrop-blur-sm will-change-transform h-[520px] group
          ${card.position === 'left' ? 'md:w-[440px] md:h-[322px]' : ''}
          ${card.position === 'center' ? 'w-full md:w-[440px] md:h-[322px]' : ''}
          ${card.position === 'right' ? 'md:w-[440px] md:h-[322px]' : ''}
        `}
      >
        {/* Background Image - Covers entire card */}
        <div
          className="absolute inset-0 transition-transform duration-300 will-change-transform group-hover:scale-108"
        >
          <img
            src={card.image}
            alt={card.title}
            className="object-cover mx-auto w-full h-full"
          />
        </div>

        {/* Dark Overlay - Adjustable on hover */}
        <div
          className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55"
        />

        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Watermark Text - Top Background Text */}
        <div className="overflow-hidden absolute inset-0 flex items-start justify-center pt-4 opacity-[0.08] pointer-events-none">
          <span className="text-6xl font-light text-white whitespace-nowrap select-none">
            {card.watermark}
          </span>
        </div>

        {/* Content - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-15 md:p-15">
          <h3
            className="mb-0 text-[22px] font- text-white tracking-wide font-gilroy font-semibold md:text-[22px]"
          >
            {card.title}
          </h3>

          <p
            className="text-sm text-[#C9C9C9] leading-relaxed font-gilroy font-light md:text-base"
          >
            {card.description}
          </p>
        </div>

        {/* Hover Shadow Effect */}
        <div
          className="absolute inset-0 rounded-[28px] transition-shadow duration-300 pointer-events-none group-hover:shadow-[0_30px_70px_rgba(192,142,34,0.18)]"
          style={{ boxShadow: '0 30px 70px rgba(192, 142, 34, 0)' }}
        />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative w-full min-h-screen bg-black"
      style={{ paddingTop: '90px', paddingBottom: '120px' }}
    >
      {/* Animated Wave Background */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ zIndex: 0 }}
      >
        <img
          src={bgWave}
          alt="Background Wave"
          className="object-cover mx-auto w-full max-w-[1400px] h-full opacity-80"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="z-10 relative mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 md:mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-gilroy font-extralight tracking-widest text-[#E2BF57] rounded-full uppercase"
            style={{
              backgroundColor: '#FDED9926',
              color: '#E2BF57',
            }}
          >
            <span className="inline-block w-1.5 h-1.5 bg-[#ffd666] rounded-full" />
            Explore, Invest, or Stake
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="mb-6 text-2xl font-cinzel text-[#EDE8DF] leading-18 font-light sm:text-5xl md:text-6xl lg:text-[48px]"
          style={{ maxWidth: '1150px', letterSpacing: '-0.00em' }}
        >
          EVERYTHING YOU NEED TO START BUILDING YOUR REAL ESTATE PORTFOLIO, IN ONE ECOSYSTEM
        </h1>

        {/* Subheading */}
        <p
          className="mb-20 text-base text-[#C9C9C9] font-gilroy font-light text-lg md:mb-32"
          style={{ maxWidth: '665px' }}
        >
          Everything you need to start building your real estate portfolio, in one ecosystem
        </p>

        {/* Cards Container */}
       {isDesktop ? (
  <div className="relative mx-auto h-[520px] w-full max-w-[1300px]">
    {cards.map((card, index) => (
      <motion.div
        key={card.id}
        animate={getCardPosition(index)}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-1/2 -translate-x-1/2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <CardComponent card={card} />
      </motion.div>
    ))}
  </div>
) : (
  <div className="flex flex-col gap-6">
    {cards.map((card) => (
      <div key={card.id}>
        <CardComponent card={card} />
      </div>
    ))}
  </div>
)}
      </div>
    </div>
  );
};

export default RealEstateHero;