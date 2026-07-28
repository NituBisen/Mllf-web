'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import teamImage from "../../assets/About/team.png";


/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 */
const animationVariants = {
  containerFadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },
  badgeFadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  headingFadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  },
  descriptionFadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  },
  gridStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  },
  cardItem: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
};

/**
 * TeamBadge Component
 * Reusable badge with glowing dot, matches "MEET THE TEAM" pill in the design
 */
const TeamBadge = () => (
  <motion.div
    variants={animationVariants.badgeFadeDown}
    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDED9926] rounded-full"
  >
    <div className="w-1.5 h-1.5 bg-[#E2BF57] rounded-full shadow-[0_0_6px_rgba(226,191,87,0.6)]" />
    <span
      className="text-[12px] font-light tracking-[0.08em] text-[#E2BF57] uppercase"
      style={{
        fontFamily: 'Gilroy, sans-serif',
      }}
    >
      Meet The Team
    </span>
  </motion.div>
);

/**
 * Team Member Data Array
 * Central data source for all team members
 */
const teamMembers = [
  {
    name: "Romil",
    role: "Founder & CEO",
    description: "Leading MLLF's overall vision and strategy.",
    image: teamImage,
  },
  {
    name: "Shiv",
    role: "Blockchain Head",
    description: "Building secure smart contract architecture.",
    image: teamImage,
  },
  {
    name: "Ramaya",
    role: "Real Estate Advisor",
    description: "Managing property sourcing & legal compliance.",
    image: teamImage,
  },
  {
    name: "Samayak",
    role: "Growth & Marketing Head",
    description: "Driving community and global expansion.",
    image: teamImage,
  },
  {
    name: "Revera",
    role: "Technology Lead",
    description: "Platform development & system scalability.",
    image: teamImage,
  },
  {
    name: "Samay",
    role: "Partnerships Head",
    description: "Building strategic partnerships.",
    image: teamImage,
  },
];

/**
 * TeamMemberCard Component
 * Reusable card component for each team member
 */
const TeamMemberCard = ({ name, role, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <motion.div
  variants={animationVariants.cardItem}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
  whileHover={{ y: -8, scale: 1.02 }}
  className="overflow-hidden relative p-9 bg-black rounded-[20px]"
  style={{
    maxWidth: "clamp(100%,100%,470px)",
    boxShadow: isHovered
      ? "0 0 24px rgba(157,122,27,0.4), 0 8px 32px rgba(157,122,27,0.15)"
      : "0 4px 12px rgba(157,122,27,0.1)",
  }}
>
  {/* Gradient Border */}
  <div
    className="absolute inset-0 rounded-[20px] pointer-events-none"
    style={{
      padding: "1px",
      background:
        "linear-gradient(290.99deg, rgba(192,142,34,0.42) 0%, rgba(253,237,153,0.7) 48.68%, rgba(192,142,34,0.42) 97.37%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    }}
  />
      {/* Card Content */}
       <div className="z-10 relative flex flex-col items-center gap-8 h-full md:flex-row">
        {/* Profile Image */}
       <div
  className="p-[1px] rounded-full"
  style={{
    background:
      "linear-gradient(290.99deg, rgba(192,142,34,0.42) 0%, rgba(253,237,153,0.7) 48.68%, rgba(192,142,34,0.42) 97.37%)",
  }}
>
  <div className="p-[2px] bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full">
    <img
      src={image}
      alt={name}
      className="object-cover w-28 h-28 rounded-full"
    />
  </div>
</div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-start gap-3 text-center md:text-left">
          {/* Name */}
          <h3
            className="text-[#E5E3DF] font-semibold"
            style={{
              fontSize: '24px',
              fontFamily: 'Gilroy, sans-serif',
              fontWeight: 600,
            }}
          >
            {name}
          </h3>

          {/* Role */}
          <p
            className="text-[#E5E3DF]"
            style={{
              fontSize: '14px',
              fontFamily: 'Gilroy, sans-serif',
              opacity: 0.9,
            }}
          >
            - {role}
          </p>

          {/* Description */}
          <p
            className="text-[#E5E3DF] leading-[170%]"
            style={{
              fontSize: '15px',
              fontFamily: 'Gilroy, sans-serif',
              opacity: 0.75,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * TeamSection Component
 * Premium "People Building MLLF" section with team member cards
 * Fully responsive across all screen sizes
 */
export default function TeamSection() {
  return (
    <motion.section
      variants={animationVariants.containerFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden relative py-16 w-full bg-black sm:py-20 md:py-28 lg:py-36 xl:py-44"
    >
      {/* Subtle Background Glow */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(157,122,27,0.2), transparent)',
        }}
      />

      {/* Main Container */}
      <div className="z-10 relative mx-auto px-5 max-w-[1600px] w-full sm:px-8 md:px-12 lg:px-20">
        {/* TOP SECTION - Heading and Description */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Desktop Layout - Flex with space-between */}
          <div className="hidden justify-between items-start gap-12 mb-16 mb-24 mb-32 md:flex lg:gap-20">
            {/* Left Column - Badge + Heading */}
            <div className="flex flex-col items-start gap-6 sm:gap-8">
              <TeamBadge />
              <motion.h1
                variants={animationVariants.headingFadeUp}
                className="font-light leading-[100%] text-[#EDE8DF]"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '70px',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  maxWidth: '600px',
                }}
              >
                THE PEOPLE
                <br />
                BUILDING
                <br />
                MLLF
              </motion.h1>
            </div>

            {/* Right Column - Description */}
            <motion.p
              variants={animationVariants.descriptionFadeUp}
              className="text-[#C9C9C9] leading-[170%] text-right"
              style={{
                fontSize: '16px',
                fontFamily: 'Gilroy, sans-serif',
                maxWidth: '410px',
                opacity: 0.75,
              }}
            >
              To break the barriers of traditional real estate investment through tokenization,
              giving everyday investors genuine access to premium, income-generating assets.
            </motion.p>
          </div>

          {/* Tablet & Mobile Layout - Stacked */}
          <div className="flex flex-col items-center gap-8 mb-12 mb-16 text-center sm:gap-10 md:hidden">
            {/* Badge */}
            <TeamBadge />

            {/* Heading */}
            <motion.h1
              variants={animationVariants.headingFadeUp}
              className="font-light leading-[100%] text-white"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(28px, 8vw, 48px)',
                fontWeight: 300,
                maxWidth: '506px',
                letterSpacing: '0.02em',
              }}
            >
              THE PEOPLE
        
              BUILDING
              <br />
              MLLF
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={animationVariants.descriptionFadeUp}
              className="max-w-[500px] text-white leading-[170%]"
              style={{
                fontSize: 'clamp(14px, 2.5vw, 16px)',
                fontFamily: 'Gilroy, sans-serif',
                opacity: 0.75,
              }}
            >
              To break the barriers of traditional real estate investment through tokenization,
              giving everyday investors genuine access to premium, income-generating assets.
            </motion.p>
          </div>
        </motion.div>

        {/* TEAM GRID SECTION */}
        <motion.div
          variants={animationVariants.gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          style={{
            rowGap: 'clamp(24px, 5vw, 44px)',
            columnGap: 'clamp(24px, 4vw, 32px)',
          }}
        >
          {/* Render Team Members using map() */}
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}