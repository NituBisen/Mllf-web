import React from "react";
import { motion } from "framer-motion";

// Local image imports — replace paths with your actual asset locations
import residentialImg from "../../assets/S4/residential.png";
import commercialImg from "../../assets/S4/commercial.png";
import hospitalityImg from "../../assets/S4/hospitality.png";
import mixedUseImg from "../../assets/S4/mixed-use.png";
import goldMeshBg from "../../assets/S4/gold-mesh-bg.png";
const cards = [
  {
    id: "residential",
    image: residentialImg,
    subtitle: "Premium Homes & Villas",
    title: "Residential",
  },
  {
    id: "commercial",
    image: commercialImg,
    subtitle: "Office & Retail Space",
    title: "Commercial",
  },
  {
    id: "hospitality",
    image: hospitalityImg,
    subtitle: "Hotels & Resorts",
    title: "Hospitality",
  },
  {
    id: "mixed-use",
    image: mixedUseImg,
    subtitle: "Integrated Developments",
    title: "Mixed Use",
  },
];

const PropertyClassesSection = () => {
  return (
    <section className="overflow-hidden relative py-20 w-full bg-black md:py-24 lg:py-28">
      {/* Background Image */}
<div
  className="z-0 absolute inset-0 mx-auto max-w-[1440px] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${goldMeshBg})`,
  }}
/>

{/* Overlay */}
<div className="z-[1] absolute inset-0 mx-auto max-w-[1440px] bg-black/60" />

{/* Content */}
<div className="z-10 relative mx-auto max-w-[1440px]">
  {/* Content */}
</div>
      <div className="z-10 relative mx-auto px-6 max-w-[1440px] sm:px-8 lg:px-12">
        {/* Top area */}
        <div className="flex flex-col items-start justify-between gap-8 gap-6 text-center text-left lg:flex-row">
          <div className="lg:max-w-[750px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#FDED9926] rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-[#C9A24B] rounded-full" />
              <span className="text-[#E2BF57] font-gilroy text-[11px] tracking-[0.2em] font-extralight uppercase">
                Purpose-Built for Real Estate
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mx-auto max-w-[793px] text-white font-[ uppercase'Cinzel'] font-light leading-[1.15] tracking-wide text-[32px] sm:text-[40px] md:text-[30px] lg:text-[48px]"
            >
              MLLF Supports a Diverse Range
        
              of Premium Property Classes
            </h2>
          </div>

          {/* Right side paragraph */}
          <p className="text-[#ECECEC] font-['Gilroy',_sans-serif] text-[16px] leading-relaxed max-w-[482px] mx-auto lg:mx-0 lg:mt-2">
            Traditional real estate is slow, illiquid, and restricted by
            capital barriers. MLLF removes every friction point — delivering
            institutional-grade assets to any investor, anywhere, entirely
            on-chain.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-end gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              <motion.div
  className="overflow-hidden relative w-full rounded-[24px] cursor-pointer"
  initial={{ height: 380 }}
  whileHover={{
    height: 450, // same height as your current second card
    y: -8,
  }}
  transition={{
    duration: 0.35,
    ease: "easeInOut",
  }}
>
  <img
    src={card.image}
    alt={card.title}
    className="object-cover w-full h-full"
  />
</motion.div>

              <div className="mt-4 text-center sm:text-left lg:text-left">
               <p className="mb-1 font-['Gilroy',_sans-serif] text-[16px] text-transparent bg-clip-text bg-[linear-gradient(270deg,#C08E22_0%,#FDED99_51.93%,#C08E22_100%)]">
  {card.subtitle}
</p>
                <h3 className="text-white font-['Gilroy',_sans-serif] font-semibold text-[22px]">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyClassesSection;