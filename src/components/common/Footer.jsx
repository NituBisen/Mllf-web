'use client';

import React from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa6';
import logo from "../../assets/Logo/mllflogo.png";

/**
 * LuxuryFooter - FULLY RESPONSIVE VERSION (v2)
 *
 * Premium luxury footer with:
 * - Gold logo with responsive sizing
 * - Navigation menu (6 links) - stays in ONE ROW at every breakpoint
 *   (scrolls horizontally on very narrow screens instead of wrapping)
 * - 4 social icon buttons - responsive scaling
 * - Copyright & legal links - responsive layout
 *
 * CHANGES FROM v1:
 * • Removed duplicate/conflicting Tailwind classes (e.g. "px-4 px-6 px-8",
 *   "gap-6 gap-10", "justify-center justify-start", "w-full w-auto") that
 *   were left over from a merge and made layout behavior unpredictable.
 * • Nav <ul> is now flex-nowrap + overflow-x-auto with hidden scrollbar,
 *   and each <li> has whitespace-nowrap, so the 6 links never wrap to a
 *   second line, even on 315px-wide screens.
 * • Font size / gap scale down further on mobile so the row fits without
 *   needing to scroll on most phone widths; scrolling is just the safety
 *   net for the very smallest screens.
 *
 * Usage:
 * <LuxuryFooter />
 */

const LuxuryFooter = () => {
  const navLinks = [
    'Use MILLF',
    'Learn',
    'Key Pillars',
    'Resources',
    'Media',
    'Company',
  ];

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
    <footer className="mx-auto mt-8 w-full max-w-[1550px] bg-[#0E0C06] border-t border-[#2B2414] sm:mt-0 lg:mb-0">
      {/* ============ MAIN FOOTER CONTENT ============ */}
      <div className="mx-auto py-6 px-4 px-6 max-w-[1550px] sm:py-8 md:py-10 lg:px-12 xl:px-16">

        {/* ============ TOP ROW: Logo | Navigation | Social Icons ============ */}
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 md:flex-row lg:gap-12">

          {/* LEFT SECTION: Logo */}
          <div className="flex justify-center justify-start w-full w-auto md:flex-1">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={logo}
                alt="MLLF Logo"
                className="h-auto w-auto"
                style={{
                  width: "clamp(100px, 22vw, 164px)",
                  maxWidth: "164px",
                }}
              />
            </div>
          </div>

          {/* CENTER SECTION: Navigation Menu - always ONE ROW */}
          <nav className="w-full w-auto md:flex-1">
            <ul
              className="overflow-x-auto flex flex-nowrap items-center justify-start gap-3 scrollbar-hide sm:justify-center md:justify-center lg:gap-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {navLinks.map((link) => (
                <li key={link} className="flex-shrink-0 whitespace-nowrap">
                  <a
                    href="#"
                    className="text-[#6B6870] font-gilroy font-light transition-colors duration-300 hover:text-[#D6A73C]"
                    style={{
                      fontSize: "clamp(9px, 1.8vw, 12px)",
                      lineHeight: "1.4",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT SECTION: Social Icons */}
          <div className="flex justify-center justify-end gap-3 w-full w-auto sm:gap-4 md:flex-1 lg:gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="flex items-center justify-center text-white bg-[#5B5957] rounded-full transition-all duration-300 hover:bg-[#D6A73C] hover:text-black hover:scale-105"
                  style={{
                    width: "clamp(36px, 10vw, 44px)",
                    height: "clamp(36px, 10vw, 44px)",
                    minWidth: "36px",
                    minHeight: "36px",
                    maxWidth: "44px",
                    maxHeight: "44px",
                  }}
                >
                  <Icon
                    className="h-auto w-auto"
                    style={{
                      width: "clamp(16px, 4vw, 20px)",
                      height: "clamp(16px, 4vw, 20px)",
                    }}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* ============ DIVIDER WITH GRADIENT ============ */}
        <div
          className="my-4 w-full border-t sm:my-6 md:my-8 lg:my-6"
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderImage:
              "linear-gradient(90deg, #000000 0%, #E8C96B 43.75%, #000000 100%) 1",
          }}
        />

        {/* ============ BOTTOM ROW: Copyright | Legal Links ============ */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 gap-6 gap-8 py-4 sm:flex-col md:flex-row lg:py-6">

          {/* LEFT: Copyright Text */}
          <div className="text-center md:text-left">
            <p
              className="text-[#6B6B70] font-gilroy font-normal"
              style={{
                fontSize: "clamp(12px, 2vw, 14px)",
                lineHeight: "1.5",
              }}
            >
              © 2026 MILLF. All Rights Reserved.
            </p>
          </div>

          {/* RIGHT: Legal Links */}
          <div className="flex flex-col items-center justify-center gap-3 gap-4 text-center text-right sm:flex-row md:gap-6">
            <a
              href="#"
              className="text-[#6B6870] font-gilroy font-normal transition-colors duration-300 hover:text-[#D6A73C]"
              style={{
                fontSize: "clamp(12px, 2vw, 14px)",
                lineHeight: "1.5",
              }}
            >
              Privacy Policy
            </a>
            <span className="hidden text-[#6B6870] sm:block">|</span>
            <a
              href="#"
              className="text-[#6B6870] font-gilroy font-normal transition-colors duration-300 hover:text-[#D6A73C]"
              style={{
                fontSize: "clamp(12px, 2vw, 14px)",
                lineHeight: "1.5",
              }}
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