import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import journeyBg from "../../assets/S5/journey-bg.png";

const InvestmentJourney = ({ backgroundImageUrl }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Timeline data
  const timelineItems = [
    {
      number: '1',
      title: 'Tokenize',
      description: 'Real property is converted into secure digital tokens on the blockchain.',
    },
    {
      number: '2',
      title: 'Invest',
      description: 'Purchase MLLF tokens using any BEP-20 compatible wallet.',
    },
    {
      number: '3',
      title: 'Earn',
      description: 'Receive rental income rewards and staking returns.',
    },
    {
      number: '4',
      title: 'Grow',
      description: 'Benefit from long-term property value appreciation.',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
   <section
  ref={sectionRef}
  className="overflow-hidden relative mx-auto w-full max-w-[1550px] min-h-[631px]"
  style={{
    backgroundImage: `url(${journeyBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 max-w-[1550px] bg-black/60" />

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />

      {/* Content Container */}
      <div className="z-10 relative mx-auto px-6 py-5 w-full h-full max-w-[1440px] lg:px-12">
        {/* Main Grid Layout */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 items-start items-center gap-12 gap-20 h-full lg:grid-cols-2"
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-start lg:justify-center">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div
                className="inline-flex mb-12 px-6 py-3 w-fit rounded-full lg:mb-16"
                style={{
                 
                }}
              >
                
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#C9A24B]/10 rounded-full">
  <span className="h-1.5 w-1.5 bg-[#C9A24B] rounded-full" />

  <span className="font-['Gilroy',_sans-serif] text-[11px] font-light uppercase tracking-[0.2em] text-[#E2BF57]">
    From Property to Portfolio
  </span>
</div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="mb-8 text-[26px] font-light text-white leading-tight sm:text-[28px] lg:mb-9 xl:text-[48px]"
              style={{
                fontFamily: 'Cinzel, serif',
                maxWidth: '535px',
              }}
            >
              A Simple, Four-Step Investment Journey
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] font-light leading-relaxed sm:text-[14px] lg:text-[16px]"
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: '482px',
                fontFamily: 'Gilroy, sans-serif',
              }}
            >
              Turn real estate into a diversified digital portfolio in four simple steps—tokenize assets, invest securely, earn ecosystem rewards, and grow long-term wealth.
            </motion.p>
          </div>

          {/* RIGHT CONTENT - TIMELINE */}
         {/* RIGHT CONTENT */}
<motion.div
  variants={itemVariants}
  className="relative flex justify-end w-full"
>
  {/* Vertical Line */}
  <div
  className="absolute left-[18px] top-5 bottom-5 w-[4px]"
  style={{
    background:
      "linear-gradient(180deg, #000000 0%, #4A4A4A 52.76%, #000000 113.13%)",
  }}
/>

  <div className="flex flex-col w-full">
    {timelineItems.map((item, index) => (
      <motion.div
        key={item.number}
        variants={timelineItemVariants}
        whileHover="hover"
        className={`grid grid-cols-[36px_1fr] gap-8 ${
          index !== timelineItems.length - 1 ? "mb-20" : ""
        }`}
      >
        {/* Circle */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="z-10 flex items-center justify-center h-9 w-9 bg-white rounded-full"
        >
          <span className="font-['Gilroy'] text-[18px] font-medium text-black">
            {item.number}
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          whileHover={{ x: 6 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="mb-2 font-['Gilroy'] text-[20px] font-semibold leading-none text-[#ECECEC]">
            {item.title}
          </h3>

          <p className="max-w-[430px] font-['Gilroy'] text-[16px] leading-[30px] text-[#ECECEC]">
            {item.description}
          </p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentJourney;