'use client';

import React from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa6';
import logo from "../../assets/Logo/mllflogo.png"; 
/**
 * LuxuryFooter - Single File Component
 * 
 * Pixel-perfect footer with:
 * - Gold logo with text
 * - Navigation menu (6 links)
 * - 4 social icon buttons
 * - Copyright & legal links
 * - Fully responsive design
 * - Smooth hover animations
 * 
 * Usage:
 * <LuxuryFooter />
 */

const LuxuryFooter = () => {
  // Navigation links array
  const navLinks = [
    'Use MILLF',
    'Learn',
    'Key Pillars',
    'Resources',
    'Media',
    'Company',
  ];

  // Social links array
  const socialLinks = [
    {
      id: 'twitter',
      icon: FaXTwitter,
      href: 'https://twitter.com',
      ariaLabel: 'Twitter',
    },
    {
      id: 'facebook',
      icon: FaFacebook,
      href: 'https://facebook.com',
      ariaLabel: 'Facebook',
    },
    {
      id: 'instagram',
      icon: FaInstagram,
      href: 'https://instagram.com',
      ariaLabel: 'Instagram',
    },
    {
      id: 'github',
      icon: FaGithub,
      href: 'https://github.com',
      ariaLabel: 'GitHub',
    },
  ];

  return (
    <footer className="w-full bg-[#0E0C06] border-t border-[#2B2414]">
      <div className="mx-auto px-5 max-w-[1442px] sm:px-6 lg:px-12 xl:px-16">
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row">
          {/* Left - Logo */}
         <div className="flex justify-start w-full w-auto md:flex-1">
            <div className="flex flex-col items-center md:items-start">
              {/* Logo */}
              <div className="flex flex-col items-center md:items-start">
  <img
    src={logo}
    alt="MLLF Logo"
    className="w-[130px] h-auto md:w-[140px] lg:w-[164px]"
  />

  
</div>
              
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="flex justify-center w-full w-auto md:flex-1">
           <ul className="flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#6B6870] text-[12px] font-gilroy font-normal font-light transition-colors duration-300 hover:text-[#D6A73C] md:text-sm lg:text-[12px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right - Social Icons */}
          <div className="flex justify-end gap-4 w-full w-auto md:flex-1">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="flex items-center justify-center w-11 h-11 h-10 text-white bg-[#5B5957] rounded-full transition-all duration-300 hover:bg-[#D6A73C] hover:text-black hover:scale-105 md:w-10 lg:w-11"
                >
                  <Icon className="w-5 h-5 h-4 md:w-4 lg:w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div
  className="w-full border-t"
  style={{
    borderWidth: "1px",
    borderStyle: "solid",
    borderImage:
      "linear-gradient(90deg, #000000 0%, #E8C96B 43.75%, #000000 100%) 1",
  }}
/>

        {/* Bottom Row */}
        <div className="flex flex-col justify-between items-center gap-6 py-4 md:flex-row lg:py-12">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-[#6B6B70] font-gilroy font-normal text-sm md:text-xs lg:text-sm">
              © 2026 MILLF. All Rights Reserved.
            </p>
          </div>

          {/* Right - Legal Links */}
          <div className="flex justify-center gap-4 gap-6 text-center text-right md:justify-end">
            <a
              href="#"
              className="text-[#6B6870] font-gilroy font-normal text-sm transition-colors duration-300 hover:text-[#D6A73C] md:text-xs lg:text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-[#6B6870] text-sm md:text-xs lg:text-sm">|</span>
            <a
              href="#"
              className="text-[#6B6870] font-gilroy font-normal text-sm transition-colors duration-300 hover:text-[#D6A73C] md:text-xs lg:text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;