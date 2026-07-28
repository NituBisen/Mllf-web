import React from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Linkedin, MessageCircle, X } from "lucide-react";


import bgMain from "../../assets/ContactUs/join-community-bg.png";

const SOCIAL_LINKS = [
  { name: "Telegram", href: "#", icon: Send },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Discord", href: "#", icon: MessageCircle },
  { name: "Twitter/X", href: "#", icon: X },
];

// ----------------------------------------------------------------------------
// Animation variants
// ----------------------------------------------------------------------------
const bannerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const buttonItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ----------------------------------------------------------------------------
// SocialButton — reusable
// ----------------------------------------------------------------------------
function SocialButton({ name, href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      aria-label={`Join our community on ${name}`}
      variants={buttonItemVariants}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex items-center gap-3 px-5 h-14 w-full max-w-[320px] w-[210px] rounded-[14px] transition-colors duration-300 ease-out focus-visible:border-[#D6AA39] focus-visible:shadow-[0_0_20px_-4px_rgba(214,170,57,0.5)] outline-none group border hover:border-[#D6AA39] hover:shadow-[0_0_20px_-4px_rgba(214,170,57,0.5)] sm:h-13 lg:w-[220px]"
      style={{
        backgroundColor: "rgba(0,0,0,0.65)",
        borderColor: "rgba(214,170,57,0.2)",
      }}
    >
      <Icon
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
        style={{ color: "#D6AA39" }}
        strokeWidth={2}
      />
      <span className="text-base text-white sm:text-[16px] lg:text-[16px]">
        {name}
      </span>
    </motion.a>
  );
}

// ----------------------------------------------------------------------------
// Main section
// ----------------------------------------------------------------------------
export default function JoinCommunity() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto px-6 py-2 max-w-[1550px] sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={bannerVariants}
          className="overflow-hidden relative w-full h-[360px] rounded-[24px] border sm:h-[420px] md:h-[500px] lg:h-[500px] xl:h-[500px]"
          style={{
  borderColor: "rgba(214,170,57,0.25)",
  backgroundColor: "#000",
  backgroundImage: `url(${bgMain})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  
}}
        >
          {/* Dark overlay for text readability */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.50), rgba(0,0,0,0.35), rgba(0,0,0,0.15))",
            }}
          />

          {/* Content */}
          <div className="z-10 relative flex items-center justify-center px-5 px-10 h-full w-full sm:px-6 md:justify-start lg:px-12 xl:px-12">
            <div className="flex flex-col items-center w-full max-w-[420px] text-center text-left md:items-start">
              <motion.h2
                variants={headingVariants}
                className="font-cinzel text-[#F6F6F6] leading-[110%] tracking-wide text-[28px] sm:text-[30px] md:text-[36px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px]"
              >
                Join Our Community
              </motion.h2>

              <motion.nav
  variants={buttonsContainerVariants}
  className="grid grid-cols-1 gap-y-1 gap-x-20 w-fit font-gilroy sm:grid-cols-2 lg:gap-y-6"
>
                {SOCIAL_LINKS.map((link) => (
                  <SocialButton key={link.name} {...link} />
                ))}
              </motion.nav>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}