'use client';

import React, { useState, useEffect } from 'react';
import bgImage from "../../assets/S6/ecosystem-bg.png";
import investorsImg from "../../assets/S6/investors.png";
import referralPartnersImg from "../../assets/S6/referral-partners.png";
import communityImg from "../../assets/S6/community.png";

/**
 * EcosystemSection - Complete Single-File Component
 *
 * ANIMATION CHANGE (this pass):
 * - Removed the Framer Motion floating (infinite y-bounce) animation on cards.
 * - Removed the unused `hoverVariants` (scale/translateY via Framer Motion
 *   variants) since it was never actually wired up correctly — `whileHover="hover"`
 *   pointed at `floatingVariants`, which had no "hover" key, so it did nothing.
 * - Added a real hover effect: the card IMAGE zooms in on hover (scale-110),
 *   clipped by the card's existing `overflow-hidden` + `rounded-[24px]`, using
 *   a plain CSS transition (`transition-transform duration-500`) via Tailwind's
 *   `group`/`group-hover` pattern — no Framer Motion needed for this, so the
 *   `motion` import and `<motion.div>` wrapper on Card were removed since
 *   nothing else in the file used them.
 * - Card is now a plain `<div>` instead of `<motion.div>`; all borders, padding,
 *   gradients, title/description sizing (from the last responsive pass) are
 *   untouched.
 *
 * Everything else (breakpoint logic, TextBlock, Badge, layout per breakpoint,
 * lg/desktop values) is unchanged from the previous responsive pass.
 */

const EcosystemSection = () => {
  const [breakpoint, setBreakpoint] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) setBreakpoint('mobile');
      else if (w < 1024) setBreakpoint('tablet');
      else if (w < 1280) setBreakpoint('laptop');
      else setBreakpoint('desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';
  const isLaptop = breakpoint === 'laptop';

  const cards = [
    {
      id: "investors",
      title: "INVESTORS",
      description:
        "Join a growing global community already earning through tokenized real estate.",
      image: investorsImg,
    },
    {
      id: "referral",
      title: "REFERRAL PARTNERS",
      description: "Earn rewards by helping grow the MLLF ecosystem.",
      image: referralPartnersImg,
    },
    {
      id: "community",
      title: "COMMUNITY",
      description: "Stay connected for the latest updates and announcements.",
      image: communityImg,
    },
  ];

  // UNCHANGED — laptop/desktop absolute position maps, exactly as before.
  const cardLayout = {
    desktop: {
      cardW: 315,
      cardH: 322,
      containerW: 770,
      containerH: 650,
      positions: [
        { top: 0, left: 0 },
        { top: 340, left: 0 },
        { top: 190, left: 330 },
      ],
      columnGap: 0,
    },
    laptop: {
      cardW: 315,
      cardH: 322,
      containerW: 635,
      containerH: 865,
      positions: [
        { top: 0, left: 0 },
        { top: 300, left: 0 },
        { top: 10, left: 335 },
      ],
      columnGap: 0,
    },
  };

  const Badge = ({ className = "" }) => (
    <div className={`w-fit ${className}`}>
      <div
        className="inline-flex items-center gap-1.5 px-3 py-1.5 px-4 py-2 rounded-full border sm:gap-2"
        style={{
          backgroundColor: "rgba(201, 162, 75, 0.08)",
          borderColor: "rgba(201, 162, 75, 0.25)",
          color: "#c9a24b",
          fontFamily: "Gilroy, system-ui, -apple-system, sans-serif",
          fontWeight: 400,
        }}
      >
        <div className="w-2 h-2 bg-[#c9a24b] rounded-full shadow-lg shrink-0" />
        <span className="text-[12px] tracking-[0.15em] whitespace-nowrap tracking-[0.2em] uppercase sm:text-[12px]">
          One Ecosystem. Growing Every Day.
        </span>
      </div>
    </div>
  );

  // CHANGE: plain div instead of motion.div — floating animation removed.
  // Image now zooms on hover via group-hover + CSS transition, clipped by
  // this container's existing overflow-hidden + rounded-[24px].
  const Card = ({ card, style }) => (
    <div
      className="overflow-hidden relative rounded-[24px] cursor-pointer border group"
      style={{
        borderColor: 'rgba(201, 162, 75, 0.45)',
        borderWidth: '1px',
        ...style,
      }}
    >
      {/* CHANGE: added transition-transform + group-hover:scale-110 for the
          zoom-on-hover effect. duration-500/ease-out gives a smooth, non-jerky
          zoom. Image itself still fills the card exactly as before. */}
      <img
        src={card.image}
        alt={card.title}
        className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.9) 100%)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-6 pb-7 pb-8 pb-9 sm:p-7 md:p-8">
        <h3
          className="mb-2 text-[#FFFFFF] leading-tight text-[18px] sm:text-[20px] md:text-[22px]"
          style={{
            fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          {card.title}
        </h3>
        <p
          className="leading-snug text-[13px] sm:text-[14px] md:text-[16px]"
          style={{
            fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
            color: '#C9C9C9',
            fontWeight: 400,
            lineHeight: '1.5',
          }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );

  const TextBlock = ({ align = 'left' }) => (
    <div
      className={`flex flex-col ${
        align === 'center' ? 'items-center text-center' : 'justify-center'
      } space-y-4 sm:space-y-5 lg:space-y-6`}
    >
      <Badge className={align === 'center' ? 'justify-center' : ''} />

      <h1
        className="max-w-[535px] text-white leading-[1.1] text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px]"
        style={{
          fontFamily: 'Cinzel, Georgia, serif',
          fontWeight: 400,
          letterSpacing: '-0.02em',
        }}
      >
        One Ecosystem
        <br />
        Growing Every Day
      </h1>

      <p
        className="max-w-[300px] text-[14px] text-[15px] text-[16px] sm:max-w-[345px] lg:max-w-[345px]"
        style={{
          fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
          color: '#ECECEC',
          fontWeight: 400,
          lineHeight: '1.6',
        }}
      >
        Join a thriving MLLF ecosystem where investors, referral partners,
        and community members connect, participate, earn ecosystem
        rewards, and grow together globally
      </p>
    </div>
  );

  return (
    <section
      className="overflow-hidden relative mx-auto w-full max-w-[1550px] bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-[1] absolute inset-0 bg-black/55" />
      <div
        className="z-[2] absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, rgba(201,162,75,0.18) 0%, transparent 45%)",
        }}
      />
      <div
        className="z-[3] absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      <div
        className="z-[4] absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.35) 35%, transparent 70%)",
        }}
      />

      <div className="z-10 relative mx-auto px-4 max-w-[1400px] sm:px-8 lg:px-12">
        {isMobile ? (
          <div className="flex flex-col gap-8 sm:gap-10">
            <TextBlock align="center" />

            <div className="flex flex-col items-center gap-4 w-full sm:gap-5">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="w-full max-w-[280px] h-[290px] h-[322px] sm:max-w-[315px]"
                >
                  <Card card={card} style={{ width: '100%', height: '100%' }} />
                </div>
              ))}
            </div>
          </div>
        ) : isTablet ? (
          <div className="flex flex-col items-center gap-10 py-14">
            <TextBlock align="center" />

            <div className="relative w-[535px] h-[460px] max-w-full">
              <Card
                card={cards[0]}
                style={{ position: 'absolute', top: 0, left: 0, width: 260, height: 300 }}
              />
              <Card
                card={cards[1]}
                style={{ position: 'absolute', top: 340, left: 0, width: 260, height: 300 }}
              />
              <Card
                card={cards[2]}
                style={{ position: 'absolute', top: 150, left: 275, width: 260, height: 300 }}
              />
            </div>
          </div>
        ) : (
          (() => {
            const L = isLaptop ? cardLayout.laptop : cardLayout.desktop;
            return (
              <div
                className="flex items-center py-12"
                style={{ gap: `${L.columnGap}px` }}
              >
                <div
                  className="relative shrink-0"
                  style={{ width: L.containerW, height: L.containerH }}
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-15 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(201, 162, 75, 0.3) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                    }}
                  />
                  {cards.map((card, idx) => (
                    <Card
                      key={card.id}
                      card={card}
                      style={{
                        position: 'absolute',
                        top: L.positions[idx].top,
                        left: L.positions[idx].left,
                        width: L.cardW,
                        height: L.cardH,
                      }}
                    />
                  ))}
                </div>

                <div className="flex-1">
                  <TextBlock />
                </div>
              </div>
            );
          })()
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Gilroy:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default EcosystemSection;