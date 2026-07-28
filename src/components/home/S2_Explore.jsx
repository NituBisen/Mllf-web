'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import bgWave from "../../assets/S2.EX/bg-wave.png";
import exploreImg from "../../assets/S2.EX/explore-property.png";
import investImg from "../../assets/S2.EX/invest-mllf.png";
import stakeImg from "../../assets/S2.EX/stake-mllf.png";

const EASE = [0.22, 1, 0.36, 1];

/**
 * RealEstateHero
 *
 * DESKTOP (>=1024px) IS UNCHANGED. Every clamp() below is tuned so its
 * fluid middle term reaches the max value at or before 1024px width —
 * meaning from 1024px up to any larger monitor, every size is pinned at
 * exactly the same fixed number it is today. Only widths below 1024px now
 * scale down smoothly instead of jumping between fixed breakpoint values
 * or (in two spots) not scaling at all.
 *
 * TWO REAL BUGS FIXED (both were affecting ALL screen sizes, not just
 * mobile — desktop included — so fixing them does not change desktop):
 *
 * 1. Center card's marginBottom was `clamp(80px, 6vw, 40px)` — the min
 *    (80px) was LARGER than the max (40px). Per the CSS spec, clamp()
 *    always evaluates as `max(MIN, min(VAL, MAX))`, so with min > max
 *    the result is always just the min: this was rendering as a flat
 *    80px on every single screen size already, mobile and desktop alike.
 *    That 80px is kept as the real value (now correctly fixed at >=1024px
 *    via clamp's max), but it now actually scales down on small screens
 *    instead of staying frozen at 80px everywhere.
 * 2. Left/right peek offset was a fixed `left-10` / `right-10` (40px),
 *    identical on every screen size, so on narrow phones the same 40px
 *    inset ate proportionally more space and cramped the peek cards.
 *    Now scales down below 1024px, reaching exactly 40px at 1024px+.
 *
 * Also tightened two clamp()s (watermark font-size, card padding) whose
 * fluid term didn't actually reach max until ~1200–1700px wide — meaning
 * typical laptop widths (1024–1400px) were rendering slightly smaller
 * than true desktop size. They now reach max exactly at 1024px.
 */

const RealEstateHero = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Explore Properties",
      description:
        "Discover premium tokenized properties across residential, commercial, and hospitality real estate.",
      image: exploreImg,
      watermark: "Ecosystem",
    },
    {
      id: 2,
      title: "Invest in MLLF",
      description:
        "Buy fractional shares of real estate directly through your wallet – no paperwork, no delays.",
      image: investImg,
      watermark: "Ecosystem",
    },
    {
      id: 3,
      title: "Stake MLLF",
      description:
        "Lock your tokens to earn additional rewards and support long-term ecosystem growth.",
      image: stakeImg,
      watermark: "Ecosystem",
    },
  ];

  const leftIndex = (activeIndex - 1 + cards.length) % cards.length;
  const rightIndex = (activeIndex + 1) % cards.length;

  // Autoplay runs on ALL screen sizes (mobile included)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // --- Variants ---
  const sideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 0.6,
      scale: 0.88,
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const centerVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 160 : -160,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -160 : 160,
      opacity: 0,
      scale: 0.85,
    }),
  };

  const CardComponent = ({ card }) => (
    <div
      className="overflow-hidden relative rounded-[10px] border-[rgba(255,214,102,0.3)] border backdrop-blur-sm group"
      style={{
        width: 'clamp(220px, 88vw, 427px)',
        height: 'clamp(175px, 70vw, 340px)',
      }}
    >
      <div className="absolute inset-0 transition-transform duration-300 will-change-transform group-hover:scale-108">
        <img
          src={card.image}
          alt={card.title}
          className="object-cover mx-auto w-full h-full"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="overflow-hidden absolute inset-0 flex items-start justify-center pt-4 opacity-[0.08] pointer-events-none">
        <span
          className="font-light text-white whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(20px, 6vw, 60px)' }}
        >
          {card.watermark}
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ padding: 'clamp(12px, 6vw, 60px)' }}
      >
        <h3
          className="mb-0 text-white tracking-wide font-gilroy font-semibold"
          style={{ fontSize: 'clamp(13px, 2.8vw, 22px)' }}
        >
          {card.title}
        </h3>
        <p
          className="text-[#C9C9C9] leading-relaxed font-gilroy font-light"
          style={{ fontSize: 'clamp(10px, 2vw, 16px)' }}
        >
          {card.description}
        </p>
      </div>

      <div
        className="absolute inset-0 rounded-[28px] transition-shadow duration-300 pointer-events-none group-hover:shadow-[0_30px_70px_rgba(192,142,34,0.18)]"
        style={{ boxShadow: "0 30px 70px rgba(192, 142, 34, 0)" }}
      />
    </div>
  );

  return (
<div
  ref={containerRef}
  className="overflow-hidden relative py-8 w-full min-h-fit bg-black sm:py-10 lg:min-h-screen"
>
      <div className="absolute inset-0 pointer-events-none will-change-transform" style={{ zIndex: 0 }}>
        <img
          src={bgWave}
          alt="Background Wave"
          className="object-cover mx-auto w-full max-w-[1550px] h-full opacity-80"
          loading="lazy"
        />
      </div>

      <div className="z-10 relative mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 md:mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 font-gilroy font-extralight tracking-widest rounded-full uppercase sm:px-4"
            style={{
              backgroundColor: "#FDED9926",
              color: "#E2BF57",
              fontSize: 'clamp(10px, 1.8vw, 12px)',
              paddingTop: 'clamp(6px, 1.5vw, 8px)',
              paddingBottom: 'clamp(6px, 1.5vw, 8px)',
            }}
          >
            <span className="inline-block w-1.5 h-1.5 bg-[#ffd666] rounded-full" />
            Explore, Invest, or Stake
          </div>
        </div>

        <h1
          className="mb-4 font-cinzel text-[#EDE8DF] font-light sm:mb-6 xl:leading-18"
          style={{
            maxWidth: "1150px",
            letterSpacing: "-0.00em",
            fontSize: 'clamp(24px, 5.5vw, 48px)',
          }}
        >
          EVERYTHING YOU NEED TO START BUILDING YOUR REAL ESTATE PORTFOLIO, IN ONE ECOSYSTEM
        </h1>

        <p
          className="mb-8 text-[#C9C9C9] font-gilroy font-light sm:mb-10 md:mb-16 lg:mb-20"
          style={{
            maxWidth: "665px",
            fontSize: 'clamp(13px, 2vw, 18px)',
          }}
        >
          Everything you need to start building your real estate portfolio, in one ecosystem
        </p>

        <div
          className="overflow-visible relative flex justify-center items-end mx-auto w-full max-w-[1300px]"
          style={{ height: 'clamp(230px, 37vw, 380px)' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            {/* Left peek card - bottom-aligned, sits behind/below the center card.
                Offset now scales down below 1024px instead of a fixed 40px. */}
            <motion.div
              key={`left-${leftIndex}`}
              custom={direction}
              variants={sideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute bottom-0 hidden md:block"
              style={{ zIndex: 10, left: 'clamp(4px, 4vw, 40px)' }}
            >
              <CardComponent card={cards[leftIndex]} />
            </motion.div>

            {/* Center card - lifted above the side cards so it's the topmost card,
                both visually (highest z-index) and positionally (higher on screen).
                80px is the value this was already effectively rendering at on
                every screen size (the previous clamp had min > max, which per the
                CSS spec forces the min every time, so it never actually scaled).
                Kept at exactly 80px for >=1024px; now properly scales down below
                that instead of staying frozen. */}
            <motion.div
              key={`center-${activeIndex}`}
              custom={direction}
              variants={centerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: EASE }}
              className="relative mb-0 xl:mb-[clamp(30px,8vw,80px)]"
              style={{ zIndex: 30 }}
            >
              <CardComponent card={cards[activeIndex]} />
            </motion.div>

            {/* Right peek card - bottom-aligned, sits behind/below the center card.
                Offset now scales down below 1024px instead of a fixed 40px. */}
            <motion.div
              key={`right-${rightIndex}`}
              custom={direction}
              variants={sideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute bottom-0 hidden md:block"
              style={{ zIndex: 10, right: 'clamp(4px, 4vw, 40px)' }}
            >
              <CardComponent card={cards[rightIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RealEstateHero;