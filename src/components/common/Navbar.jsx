import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from "../../assets/Logo/mllflogo.png"; // Update path if needed
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [ 'Home', 'About', 'Tokenomics', 'Roadmap', 'Security', 'FAQ'];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    
   <motion.nav
  variants={navVariants}
  initial="hidden"
  animate="visible"
  className="z-50 top-0 relative w-full bg-black/95 backdrop-blur-sm"
>
      <div className="mx-auto px-4 mt-8 max-w-[1480px] w-full sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

         {/* Logo */}
<motion.a
  href="/"
  variants={linkVariants}
  custom={0}
  initial="hidden"
  animate="visible"
  className="flex flex-shrink-0 items-center"
>
  <img
  src={logo}
  alt="MLLF Logo"
  className="object-contain h-12 w-[120px] sm:h-14 md:h-16 lg:h-[55px] xl:h-[60px]"
/>
</motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, i) => (
             <motion.button
  key={link}
  onClick={() => {
    if (link === "Home") {
      navigate("/");
    } else {
      document
        .getElementById(link.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }}
  variants={linkVariants}
  custom={i + 1}
  initial="hidden"
  animate="visible"
  className="text-white font-gilroy text-[15px] font-extralight tracking-wider transition-colors duration-300 hover:text-yellow-400"
>
  {link}
</motion.button>
            ))}
          </div>

          
          {/* Desktop Buy Button */}
<motion.button
  variants={linkVariants}
  custom={navLinks.length + 1}
  initial="hidden"
  animate="visible"
  className="hidden items-center gap-2 px-3 py-2 font-gilroy text-[16px] font-medium text-black bg-[linear-gradient(270deg,_#C08E22_0%,_#FDED99_51.93%,_#C08E22_100%)] rounded-sm shadow-[0_4px_20px_rgba(192,142,34,0.25)] transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_8px_30px_rgba(253,237,153,0.35)] md:flex"
>
  Buy MLLF
  <ArrowRight size={18} strokeWidth={2} />
</motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white transition-colors hover:text-yellow-400 md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 md:hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
  key={link}
  onClick={() => {
    setMobileMenuOpen(false);

    if (link === "Home") {
      navigate("/");
    } else {
      document
        .getElementById(link.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="block py-2 w-full text-left text-white text-sm font-medium transition-colors hover:text-yellow-400"
>
  {link}
</button>
              ))}
              <button className="flex items-center justify-center gap-2 px-6 py-2.5 mt-4 w-full text-black font-semibold text-sm bg-yellow-400 rounded-lg transition-all duration-300 hover:bg-yellow-500">
                Buy MLLF
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;