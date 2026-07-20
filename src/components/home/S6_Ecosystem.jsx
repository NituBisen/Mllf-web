'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgImage from "../../assets/S6/ecosystem-bg.png";
import investorsImg from "../../assets/S6/investors.png";
import referralPartnersImg from "../../assets/S6/referral-partners.png";
import communityImg from "../../assets/S6/community.png";

/**
 * EcosystemSection - Complete Single-File Component
 * 
 * Pixel-perfect React component recreation of "One Ecosystem Growing Every Day" design.
 * Includes responsive design (4 breakpoints), Framer Motion animations, Tailwind CSS.
 * 
 * Usage:
 * <EcosystemSection backgroundImage="/images/background.jpg" />
 * 
 * Props:
 * - backgroundImage: string (path to your background image)
 * 
 * Required images:
 * - /images/investors.jpg
 * - /images/referral-partners.jpg
 * - /images/community.jpg
 */

const EcosystemSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reusable card data
 const cards = [
  {
    id: "investors",
    title: "INVESTORS",
    description:
      "Join a growing global community already earning through tokenized real estate.",
    image: investorsImg,
    delay: 0,
    duration: 6,
  },
  {
    id: "referral",
    title: "REFERRAL PARTNERS",
    description:
      "Earn rewards by helping grow the MLLF ecosystem.",
    image: referralPartnersImg,
    delay: 0.8,
    duration: 7,
  },
  {
    id: "community",
    title: "COMMUNITY",
    description:
      "Stay connected for the latest updates and announcements.",
    image: communityImg,
    delay: 1.5,
    duration: 5,
  },
];

  // Floating animation
  const floatingVariants = (duration, delay) => ({
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: duration,
        delay: delay,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  });

  // Hover effect
  const hoverVariants = {
    hover: {
      scale: 1.03,
      translateY: -8,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Card component
  const Card = ({ card }) => (
    <motion.div
      className="overflow-hidden relative w-full h-full rounded-[24px] cursor-pointer border group"
      style={{
        borderColor: 'rgba(201, 162, 75, 0.45)',
        borderWidth: '1px',
      }}
      variants={floatingVariants(card.duration, card.delay)}
      animate="animate"
      whileHover="hover"
      initial={{ y: 0 }}
    >
      <img
  src={card.image}
  alt={card.title}
  className="object-cover w-full h-full"
/>

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.9) 100%)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className="mb-2 text-[#FFFFFF] leading-tight"
          style={{
            fontFamily: 'Gilroy,system-ui, -apple-system, sans-serif ' ,
            fontSize: '22px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          {card.title}
        </h3>
        <p
          className="leading-snug"
          style={{
            fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
            fontSize: '16px',
            color: '#C9C9C9',
            fontWeight: 400,
            lineHeight: '1.5',
          }}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section
      className="overflow-hidden relative w-full bg-black"
     style={{
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
    >
      {/* Overlay */}
      {/* Dark Overlay */}
<div className="z-[1] absolute inset-0 bg-black/55" />

{/* Gold Glow */}
<div
  className="z-[2] absolute inset-0"
  style={{
    background:
      "radial-gradient(circle at 75% 50%, rgba(201,162,75,0.18) 0%, transparent 45%)",
  }}
/>

{/* Bottom Fade */}
<div
  className="z-[3] absolute inset-0"
  style={{
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.92) 100%)",
  }}
/>

{/* Left Shadow */}
<div
  className="z-[4] absolute inset-0"
  style={{
    background:
      "linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.35) 35%, transparent 70%)",
  }}
/>

      {/* Content */}
      <div className="z-10 relative mx-auto px-6 max-w-[1332px] sm:px-8 lg:px-12">
        {isMobile ? (
          // MOBILE
          <div className="flex flex-col gap-8 py-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#c9a24b] rounded-full shadow-lg" />
                <div
                  className="px-4 py-2 text-[11px] tracking-[0.2em] rounded-full uppercase border"
                  style={{
                    backgroundColor: 'rgba(201, 162, 75, 0.08)',
                    borderColor: 'rgba(201, 162, 75, 0.18)',
                    color: '#c9a24b',
                    fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  One Ecosystem Growing Every Day
                </div>
              </div>

              <h1
                className="w-full text-white"
                style={{
                  fontFamily: 'Cinzel, Georgia, serif',
                  fontSize: '34px',
                  fontWeight: 500,
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                }}
              >
                One Ecosystem
                <br />
                Growing Every Day
              </h1>

              <p
                className="w-full text-base"
                style={{
                  fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  fontSize: '16px',
                }}
              >
                Join a thriving MILLF ecosystem where investors, referral partners, and community members connect, participate, earn ecosystem rewards, and grow together globally
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {cards.map((card) => (
                <div key={card.id} className="w-full h-[300px]">
                  <Card card={card} />
                </div>
              ))}
            </div>
          </div>
        ) : isTablet ? (
          // TABLET
          <div className="grid grid-cols-1 items-start gap-10 py-12 min-h-[700px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2 w-fit">
                <div className="w-2 h-2 bg-[#c9a24b] rounded-full shadow-lg" />
                <div
                  className="px-4 py-2 text-[11px] tracking-[0.2em] rounded-full uppercase border"
                  style={{
                    backgroundColor: 'rgba(201, 162, 75, 0.08)',
                    borderColor: 'rgba(201, 162, 75, 0.18)',
                    color: '#c9a24b',
                    fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  One Ecosystem Growing Every Day
                </div>
              </div>

              <h1
                className="max-w-[520px] text-white"
                style={{
                  fontFamily: 'Cinzel, Georgia, serif',
                  fontSize: '46px',
                  fontWeight: 500,
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
                One Ecosystem
                <br />
                Growing Every Day
              </h1>

              <p
                className="max-w-[390px]"
                style={{
                  fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontWeight: 400,
                  lineHeight: '1.6',
                }}
              >
                Join a thriving MILLF ecosystem where investors, referral partners, and community members connect, participate, earn ecosystem rewards, and grow together globally
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 w-full">
              {cards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`h-[220px] ${idx === 2 ? 'col-start-1' : ''}`}
                >
                  <Card card={card} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // DESKTOP
          <div className="grid grid-cols-2 items-center gap-12 py-12 min-h-[760px] lg:py-0">
            <div className="flex flex-col justify-center col-span-1 space-y-8">
              <div className="flex items-center gap-2 w-fit">
                <div className="w-2 h-2 bg-[#c9a24b] rounded-full shadow-lg" />
                <div
                
                  className="px-4 py-2 text-[11px] tracking-[0.2em] rounded-full uppercase border"
                  style={{
                    backgroundColor: 'rgba(201, 162, 75, 0.08)',
                    borderColor: 'rgba(201, 162, 75, 0.18)',
                    color: '#c9a24b',
                    fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  One Ecosystem Growing Every Day
                </div>
              </div>

              <h1
                className="max-w-[535px] text-white"
                style={{
                  fontFamily: 'Cinzel, Georgia, serif',
                  fontSize: '48px',
                  fontWeight: 500,
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
                One Ecosystem
        
                Growing Every Day
              </h1>

              <p
                className="max-w-[345px]"
                style={{
                  fontFamily: 'Gilroy, system-ui, -apple-system, sans-serif',
                  fontSize: '16px',
                  color: '#ECECEC',
                  fontWeight: 400,
                  lineHeight: '1.6',
                }}
              >
                Join a thriving MILLF ecosystem where investors, referral partners, and community members connect, participate, earn ecosystem rewards, and grow together globally
              </p>
            </div>

            <div className="relative flex items-center justify-center col-span-1 h-[600px]">
              <div className="relative w-full h-full max-w-[450px]">
                <div
                  className="absolute inset-0 rounded-full opacity-15 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(201, 162, 75, 0.3) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                <div className="relative h-full w-full">
                  <div className="absolute top-0 left-0 w-[315px] h-[322px]">
                    <Card card={cards[0]} />
                  </div>

                  <div className="absolute top-[340px] left-0 w-[315px] h-[322px]">
                    <Card card={cards[1]} />
                  </div>

                  <div className="absolute top-[170px] left-[330px] w-[315px] h-[322px]">
                    <Card card={cards[2]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Gilroy:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default EcosystemSection;