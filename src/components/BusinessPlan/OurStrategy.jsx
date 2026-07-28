import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "../../assets/Read/readbg.png";

const stats = [
  { value: "$50M+", label: "Properties Tokenized" },
  { value: "25K+", label: "Projected Investor Base" },
  { value: "Phase 1", label: "Ecosystem Launch Stage" },
];

const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Button = ({ variant = "primary", children, icon: Icon = ArrowRight }) => {
  const base =
    "group inline-flex items-center justify-center gap-2 h-14 rounded-xl px-6 font-gilroy font-medium text-[15px] sm:text-[16px] transition-all duration-300 w-full sm:w-auto";

  const styles =
    variant === "primary"
      ? "text-black bg-[linear-gradient(90deg,#C08E22_0%,#FDED99_50%,#C08E22_100%)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(253,237,153,0.35)]"
      : "text-transparent bg-clip-text bg-[linear-gradient(90deg,#C08E22_0%,#FDED99_50%,#C08E22_100%)] bg-black/40 border border-transparent [background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,#C08E22,#FDED99,#C08E22)_border-box] border-[1.5px] hover:bg-[rgba(192,142,34,0.12)] hover:-translate-y-0.5";

  return (
    <button className={`${base} ${styles}`}>
      {children}
      <Icon
        size={18}
        className={`transition-transform duration-300 group-hover:translate-x-1 ${
          variant === "secondary" ? "text-[#E3B33A]" : ""
        }`}
      />
    </button>
  );
};

const Hero = () => {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto px-4 max-w-[1600px] sm:px-6 lg:px-8 xl:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden relative w-full min-h-[640px] rounded-2xl rounded-[24px] sm:min-h-[680px] md:min-h-[720px] lg:h-[720px] xl:h-[740px]"
        >
          {/* Background image */}
          <img
            src={heroBg}
            alt="Luxury villa"
            className="object-cover object-center absolute inset-0 h-full w-full"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.58)]" />

          {/* Top-to-bottom gradient for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.65) 100%)",
            }}
          />

          {/* Content */}
          <div className="z-10 relative flex flex-col justify-between items-center gap-12 px-6 py-16 h-full md:flex-row lg:px-14 xl:px-16">
            {/* Left content */}
            <div className="flex flex-col items-center max-w-[778px] md:items-start">
              {/* Badge */}
              <motion.div variants={fadeDown} className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDED9926] rounded-full border">
                  <span className="h-1.5 w-1.5 bg-[#E3B33A] rounded-full" />
                  <span className="font-gilroy text-[10px] font-light tracking-[0.15em] text-[#E2BF57] uppercase sm:text-[12px]">
                    Our Strategy – The MLLF Business Plan
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="mb-6 mx-auto max-w-[778px] font-normal leading-[1.3] text-[#F5EFE7] text-[34px] tracking-[-0.01em] md:text-[50px] lg:text-[70px] xl:text-[70px]"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                A Transparent Model Built for Long-Term <br></br>Real Estate Growth
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mb-8 max-w-[754px] font-gilroy text-[16px] leading-[1.7] text-[#C9C9C9] md:text-[17px] lg:text-[16px]"
              >
                MLLF transforms premium real estate into secure, tradable
                digital tokens — giving investors fractional ownership, real
                rental income, and true liquidity, all on-chain.
              </motion.p>

              {/* Buttons */}
              <motion.div
  variants={fadeUp}
  className="flex flex-col gap-4 w-full sm:flex-row"
>
  {/* Read Whitepaper */}
  <button
  className="inline-flex items-center justify-center gap-2 px-5 h-11 w-full text-black font-gilroy font-medium text-[14px] bg-[linear-gradient(270deg,_#C08E22_0%,_#FDED99_51.93%,_#C08E22_100%)] rounded-lg transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(253,237,153,0.35)] sm:w-auto"
>
  Read Whitepaper
  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>

  {/* Explore Token */}
  <button
  className="inline-flex items-center justify-center gap-2 px-5 h-11 w-full bg-black rounded-lg border-transparent transition-all duration-300 group border [background:linear-gradient(#000,#000)_padding-box,linear-gradient(270deg,#C08E22_0%,#FDED99_51.93%,#C08E22_100%)_border-box] hover:-translate-y-1 hover:bg-[#1A1407] hover:shadow-[0_0_30px_rgba(253,237,153,0.25)] sm:w-auto"
>
  <span
    className="font-gilroy font-medium text-[14px] text-transparent bg-clip-text bg-[linear-gradient(270deg,#C08E22_0%,#FDED99_51.93%,#C08E22_100%)]"
  >
    Explore Token
  </span>

  <ArrowRight
    size={16}
    className="text-[#E3B33A] transition-transform duration-300 group-hover:translate-x-1"
  />
</button>
</motion.div>
            </div>

            {/* Right stats panel */}
           <div className="flex flex-col gap-10 w-full w-[250px] md:self-end lg:w-[260px] xl:w-[280px]">
  {stats.map((stat, i) => (
    <motion.div
      key={stat.label}
      custom={i}
      variants={statVariants}
      className="flex flex-col items-center text-center text-left md:items-start"
    >
      <h3 className="font-gilroy text-[32px] font-bold leading-none text-[#C08E22] sm:text-[40px] lg:text-[50px]">
        {stat.value}
      </h3>

      <p className="mt-2 whitespace-nowrap font-gilroy text-[14px] font-semibold text-[#B3A57C] sm:text-[15px] lg:text-[18px]">
  {stat.label}
</p>
    </motion.div>
  ))}
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;