import React from "react";
import { motion } from "framer-motion";
import bannerBg from "../../assets/Tokenomics/banner-bg.png";
import coinImg from "../../assets/Tokenomics/stacks-poker-chips 1.png";

const BinanceSection = () => {
  return (
    <section className="py-16 bg-black md:py-20 lg:py-24">
      <div className="mx-auto px-5 max-w-[1550px] sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden relative rounded-[24px] border-[#D6AA394D] border"
        >
          {/* Background Image */}
          <img
            src={bannerBg}
            alt=""
            className="object-cover absolute inset-0 h-[430px] w-full"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/86" />

          {/* Coins Image */}
         <motion.img
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  src={coinImg}
  alt="Binance Coins"
  className="object-contain absolute right-0 hidden w-[35%] pointer-events-none sm:block w-[35%] md:w-[40%] lg:w-[45%] xl:w-[45%]"
/>
          {/* Content */}
          <div
            className="z-10 relative flex items-center px-6 h-[240px] h-[300px] h-[360px] h-[430px] h-[400px] sm:px-8 md:px-12 lg:px-16 xl:px-20"
          >
            <div className="max-w-[470px]">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-cinzel font-light text-white leading-[110%] tracking-wide text-[28px] sm:text-[36px] md:text-[48px] lg:text-[48px] xl:text-[48px]"
              >
                Built on Binance
            
                Smart Chain
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 font-gilroy text-white text-[20px] sm:mt-6 md:text-lg lg:mt-8"
              >
                Fast. Secure. Low-Cost. Scalable.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BinanceSection;