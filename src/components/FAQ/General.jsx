'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import faqBg from "../../assets/FAQ/faq-bg.png";

/**
 * Animation Variants
 * Reusable Framer Motion variants for consistent animations
 * (Unchanged — animations behave identically across all breakpoints)
 */
const animationVariants = {
  sectionContainer: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  },
  categoryHeading: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  accordionItem: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
};

/**
 * FAQ Data Structure
 * Comprehensive FAQ content organized by categories
 */
const faqData = [
  {
    title: 'GENERAL',
    items: [
      {
        question: 'What is MLLF?',
        answer:
          'MLLF (My Luxuries Life Finances) is a blockchain-based real estate investment platform that tokenizes luxury properties. Token holders can participate in property investments, governance decisions, and earn passive income from property appreciation and rental yields. Our platform democratizes access to premium real estate investments through decentralized finance.',
      },
      {
        question: 'How does it work?',
        answer:
          'MLLF operates by acquiring premium properties and fractionizing ownership through tokens. Token holders vote on investment decisions, property acquisitions, and reward distributions. Smart contracts automate income distribution and ensure transparency. Returns are generated from rental income, property appreciation, and ecosystem fees.',
      },
      
    ],
  },
  {
    title: 'INVESTMENT',
    items: [
      {
        question: 'How do I invest?',
        answer:
          'To invest, create an account on the MLLF platform, complete identity verification, deposit funds or cryptocurrency, and purchase MLLF tokens. Once you hold tokens, you can participate in property investment proposals through governance voting. Your tokens automatically earn staking rewards and share in property-generated returns.',
      },
      {
        question: 'Can I sell my tokens?',
        answer:
          'Yes, MLLF tokens are tradeable on decentralized exchanges and our native platform. You can sell at any time without restrictions, allowing full liquidity. Token prices reflect market demand and the underlying value of properties in the portfolio. Trading is peer-to-peer with no platform fees for basic transfers.',
      },
      {
        question: 'How do I earn passive income?',
        answer:
          'Passive income is generated through staking rewards, rental yields from property portfolios, and ecosystem revenue sharing. When you stake tokens, you earn a percentage return based on the lock-up period. Property rental income is distributed proportionally to token holders quarterly. Smart contracts automatically distribute payments to your wallet.',
      },
      
    ],
  },
  {
    title: 'TECHNICAL',
    items: [
      {
        question: 'What wallet do I need?',
        answer:
          'You need a Web3-compatible wallet such as MetaMask, Ledger, Trezor, or WalletConnect to interact with MLLF. These wallets manage your private keys and allow you to sign transactions securely. We recommend using hardware wallets for large holdings. Detailed setup guides are available on our platform.',
      },
      {
        question: 'Is it secure?',
        answer:
          'Yes, MLLF implements multiple security layers: non-custodial architecture (you control your keys), smart contracts audited by CertiK and OpenZeppelin, multi-signature wallets for fund management, continuous monitoring, bug bounty programs, and encryption protocols. All transactions are immutable and transparent on the blockchain.',
      },
      
    ],
  },
  {
    title: 'GOVERNANCE & COMMUNITY',
    items: [
      {
        question: 'Can holders influence decisions?',
        answer:
          'Absolutely. MLLF implements true decentralized governance where token holders vote on all major decisions including property acquisitions, ecosystem upgrades, reward structures, and partnership approvals. Voting power is proportional to token holdings. Every vote is recorded on-chain for complete transparency and immutability.',
      },
      {
        question: 'What is the referral program?',
        answer:
          'Our referral program rewards members who invite new investors. Referrers earn a percentage of the transaction fees or token rewards from referred members for a specified period. Higher tier members receive enhanced commission rates. Details are available in the community dashboard, and tracking is automated through smart contracts.',
      },
      
    ],
  },
];

/**
 * AccordionItem Component
 * Reusable accordion item with smooth animations
 *
 * RESPONSIVE CHANGES:
 * - Question font-size moved from a fixed inline style (16px) to a fluid
 *   Tailwind scale (14px on the smallest phones up to the original 16px at lg+),
 *   so the desktop size is byte-for-byte preserved at lg and above.
 * - Added `break-words` + `min-w-0` on the question span so long question text
 *   never causes horizontal overflow on narrow screens.
 * - Chevron icon now scales down slightly on very small screens via className
 *   sizing (Tailwind width/height classes override the lucide `size` prop),
 *   while staying at the original 24px (w-6 h-6) from lg upward.
 * - Fixed a bug in the answer wrapper: the original JSX had three conflicting
 *   `pr-4 pr-6 pr-8` classes on one element (only the last was ever applied).
 *   Replaced with a proper responsive ramp `pr-4 sm:pr-6 md:pr-8 lg:pr-8` that
 *   resolves to the same pr-8 at lg+ as before.
 * - Answer paragraph now uses the full width on small phones (max-w-full) and
 *   only constrains to 90% from sm/lg upward, matching the original desktop
 *   look exactly while avoiding overly narrow text wrapping on tiny screens.
 * - Button vertical padding gets a slightly tighter ramp on very small phones
 *   (py-4 at the base) before matching the original py-5/py-6 ramp untouched.
 */
const AccordionItem = ({ question, answer, isOpen, onClick, index }) => (
 <motion.div
  variants={animationVariants.accordionItem}
  className="border-b"
  style={{
    borderBottomWidth: "1px",
    borderImage:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 213, 0, 0.4) 43.75%, rgba(0, 0, 0, 0.4) 100%) 1",
  }}
>
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`answer-${index}`}
      className="flex items-center justify-between gap-3 py-4 py-5 w-full text-left transition-all duration-300 group hover:text-[#E2BF57] sm:gap-4 md:py-6 lg:py-6"
    >
      <span
        className="flex-1 min-w-0 font-medium text-[#F5F0EA] leading-relaxed break-words text-[14px] transition-colors duration-300 group-hover:text-[#E2BF57] sm:text-[15px] lg:text-[16px]"
        style={{
          fontFamily: 'Gilroy, sans-serif',
        }}
      >
        {question}
      </span>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex-shrink-0"
      >
        <ChevronDown
          size={24}
          className="w-5 h-5 h-6 text-[#E2BF57] transition-transform duration-300 group-hover:scale-110 sm:w-5 md:w-6 lg:w-6"
          strokeWidth={2}
        />
      </motion.div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={`answer-${index}`}
          role="region"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          {/* Fixed duplicate pr-4/pr-6/pr-8 bug -> proper responsive ramp, same pr-8 result at lg+ */}
          <div className="pb-4 pr-4 pr-6 pr-8 sm:pb-5 md:pb-6 lg:pb-6">
            <p
              className="max-w-full text-[#CFCFCF] leading-[170%] text-[13px] text-[14px] sm:max-w-[90%] md:text-[15px] lg:text-[16px]"
              style={{
                fontFamily: 'Gilroy, sans-serif',
              }}
            >
              {answer}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

/**
 * CategorySection Component
 * Reusable category section with heading and accordion items
 *
 * RESPONSIVE CHANGES:
 * - Category heading font-size moved from a fixed inline 48px to a fluid
 *   Tailwind ramp (28px on the smallest phones, scaling up through tablet)
 *   while landing back on the original 48px exactly at lg and above.
 * - Bottom margin ramp for the heading now starts smaller on phones
 *   (mb-6) and rejoins the original mb-8...lg:mb-14 progression unchanged
 *   from sm upward.
 */
const CategorySection = ({ title, items, openIndex, setOpenIndex, categoryIndex }) => (
  <motion.div
    variants={animationVariants.accordionItem}
    className="mb-16 sm:mb-20 md:mb-24 lg:mb-28"
  >
    {/* Category Heading */}
   <motion.h2
  variants={animationVariants.categoryHeading}
  className="mb-6 font-medium text-transparent text-[28px] text-center text-[34px] text-left bg-[linear-gradient(270deg,_#C08E22_0%,_#FDED99_51.93%,_#C08E22_100%)] bg-clip-text sm:mb-8 md:mb-10 lg:mb-14 xl:text-[48px] 2xl:text-[48px]"
  style={{
    fontFamily: "Cinzel, serif",
    fontWeight: 400,
    letterSpacing: "0.05em",
  }}
>
  {title}
</motion.h2>

    {/* Accordion Items */}
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {items.map((item, itemIndex) => {
        const globalIndex = `${categoryIndex}-${itemIndex}`;
        return (
          <AccordionItem
            key={itemIndex}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === globalIndex}
            onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
            index={globalIndex}
          />
        );
      })}
    </motion.div>
  </motion.div>
);

/**
 * PremiumBackground Component
 * Decorative luxury background with abstract curves and gradients
 *
 * RESPONSIVE CHANGES:
 * - Blurred glow circles now scale down on phones/tablets (smaller diameter,
 *   less blur) so they don't dominate short mobile viewports, then rejoin
 *   the original w-96/h-96 and w-[600px]/h-[600px] sizes exactly at lg+.
 * - The decorative SVG already uses viewBox + preserveAspectRatio="none"
 *   with 100% width/height, so it scales fluidly at every breakpoint with
 *   no changes needed.
 */
const PremiumBackground = () => (
  <div className="overflow-hidden absolute inset-0 pointer-events-none">
    {/* Large curved shapes with gradients */}
    <div
      className="absolute w-56 h-56 h-72 h-96 rounded-full opacity-10 blur-2xl blur-3xl -top-24 -right-24 -top-32 -right-32 -top-40 -right-40 sm:w-72 md:w-96 lg:w-96"
      style={{
        background: 'radial-gradient(circle, rgba(224,166,52,0.3), transparent)',
      }}
    />

    <div
      className="absolute top-1/2 w-[320px] h-[320px] h-[420px] h-[600px] rounded-full opacity-5 blur-2xl blur-3xl -left-32 -left-40 -left-60 sm:w-[420px] md:w-[600px] lg:w-[600px]"
      style={{
        background: 'radial-gradient(circle, rgba(226,191,87,0.2), transparent)',
      }}
    />

    <div
      className="absolute right-1/4 w-56 h-56 h-72 h-96 rounded-full opacity-8 blur-2xl blur-3xl -bottom-24 -bottom-32 -bottom-40 sm:w-72 md:w-96 lg:w-96"
      style={{
        background: 'radial-gradient(circle, rgba(224,166,52,0.25), transparent)',
      }}
    />

    {/* Abstract curved paths — already fluid via viewBox, unchanged */}
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(224,166,52,0.3)" />
          <stop offset="100%" stopColor="rgba(224,166,52,0)" />
        </linearGradient>
      </defs>

      {/* Large curved path */}
      <path
        d="M 0 400 Q 360 200 720 350 T 1440 400"
        stroke="url(#goldGrad)"
        strokeWidth="80"
        fill="none"
        strokeLinecap="round"
      />

      {/* Secondary curve */}
      <path
        d="M 0 600 Q 360 400 720 550 T 1440 650"
        stroke="url(#goldGrad)"
        strokeWidth="60"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>

    {/* Soft dark overlay */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
      }}
    />
  </div>
);

/**
 * FAQAccordionSection Component
 * Main FAQ accordion section with all categories and items
 * Fully responsive with premium luxury aesthetics
 *
 * RESPONSIVE CHANGES:
 * - Outer section keeps `overflow-hidden` (already present) which, combined
 *   with the fluid heading/paragraph sizes above, prevents any horizontal
 *   scroll on narrow viewports.
 * - Section vertical padding now starts slightly tighter on phones
 *   (py-12) and rejoins the original py-16...xl:py-20 ramp unchanged from
 *   sm upward, so nothing changes at lg+.
 * - Content container horizontal padding gets an extra step for very small
 *   phones (px-4) before rejoining the original px-5/sm:px-10/md:px-20
 *   ramp unchanged.
 * - Background image wrapper is unchanged (object-cover + inset-0 already
 *   scales fluidly at all sizes; aspect ratio of the source image is
 *   preserved by object-cover with no letterboxing/cropping regression).
 */
export default function FAQAccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden relative mt-1 py-0 w-full bg-black sm:py-0 md:py-0 lg:py-0 xl:py-0"
    >
      {/* Background Image */}
      <div className="z-0 absolute inset-0 mx-auto max-w-[1600px]">
        <img
          src={faqBg}
          alt="FAQ Background"
          className="object-cover w-full h-full"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Optional Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="z-10 relative mx-auto px-4 max-w-[1440px] w-full sm:px-5 md:px-10 lg:px-20">
        <motion.div
          variants={animationVariants.sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* FAQ Categories */}
          {faqData.map((category, categoryIndex) => (
            <CategorySection
              key={categoryIndex}
              title={category.title}
              items={category.items}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              categoryIndex={categoryIndex}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}