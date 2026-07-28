import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/ContactUs/contact-bg.png";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";


const WAVE_IMAGE_URL = bgImage;
const GOLD = "#D6AA39";

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: "Email",
    lines: ["abc123@gmail.com"],
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    lines: ["1234567890"],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["18 Queen Victoria Street, London EC4N 4SA, United Kingdom"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [
      "Monday – Friday: 9:00 AM – 6:00 PM (GMT)",
      "Support: 24/7 Online Assistance",
    ],
  },
];

const FORM_FIELDS = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    as: "input",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    as: "input",
  },
  {
    name: "phone",
    label: "Phone Number (Optional)",
    type: "tel",
    placeholder: "Enter your phone number",
    as: "input",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What is this about?",
    as: "input",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Tell us how we can help you...",
    as: "textarea",
  },
];

// ----------------------------------------------------------------------------
// Animation variants
// ----------------------------------------------------------------------------
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const badgeVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

// ----------------------------------------------------------------------------
// Badge (shared)
// ----------------------------------------------------------------------------
function Badge({ children }) {
  return (
    <motion.div
      variants={badgeVariants}
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full border"
      style={{
        backgroundColor: "#FDED9926",
        
      }}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: GOLD }}
      />
      <span
        className="text-[12px] font-light font-gilroy tracking-[0.18em] uppercase"
        style={{ color: "#E2BF57" }}
      >
        {children}
      </span>
    </motion.div>
  );
}

// ----------------------------------------------------------------------------
// ContactCard — reusable
// ----------------------------------------------------------------------------
function ContactCard({ icon: Icon, title, lines }) {
  return (
    <motion.article
      variants={cardItemVariants}
      tabIndex={0}
      className="flex items-center justify-between gap-4 p-4 rounded-[22px] transition-all duration-300 ease-out outline-none focus-visible:-translate-y-1 focus-visible:shadow-[0_0_24px_-4px_rgba(214,170,57,0.35)] group border hover:-translate-y-1 hover:shadow-[0_0_24px_-4px_rgba(214,170,57,0.35)] sm:p-5 lg:p-6"
      style={{
        backgroundColor: "#0B0B0B",
        borderColor: "rgba(214,170,57,0.18)",
      }}
    >
      <div className="flex items-center gap-4 min-w-0">
        <div
          className="flex items-center justify-center h-11 w-11 w-12 rounded-xl shrink-0 border sm:h-12"
          style={{
            backgroundColor: "rgba(214,170,57,0.08)",
            borderColor: "rgba(214,170,57,0.25)",
          }}
        >
          <Icon
            aria-hidden="true"
            className="h-5 w-5 w-[22px] sm:h-[22px]"
            style={{ color: GOLD }}
            strokeWidth={1.75}
          />
        </div>

        <div className="min-w-0">
          <p
            className="text-[12px] font-light tracking-[0.14em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {title}
          </p>
          <div className="mt-1 space-y-0.5">
            {lines.map((line, i) => (
              <p
                key={i}
                className="text-[14px] font-gilroy font-light leading-snug text-white whitespace-normal truncate sm:text-[14px]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="flex items-center justify-center h-9 w-9 rounded-full transition-colors duration-300 ease-out shrink-0 border group-hover:border-[#D6AA39] group-focus-visible:border-[#D6AA39]"
        style={{ borderColor: "rgba(255,255,255,0.25)" }}
      >
        <ArrowUpRight
          className="h-4 w-4 text-white transition-colors duration-300 ease-out group-hover:text-[#D6AA39] group-focus-visible:text-[#D6AA39]"
          strokeWidth={2}
        />
      </span>
    </motion.article>
  );
}

// ----------------------------------------------------------------------------
// InputField — reusable (renders <input> or <textarea>)
// ----------------------------------------------------------------------------
function InputField({
  as = "input",
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  const sharedClasses =
    "w-full rounded-[18px] font-gilroy border bg-[#050505] px-5 text-[14px] sm:text-[15px] text-white placeholder-[#575757] outline-none transition-all duration-300 ease-out focus:border-[#D6AA39] focus:shadow-[0_0_0_4px_rgba(214,170,57,0.15)]";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[12px] font-gilroy font-light tracking-[0.14em] text-[#FFFFFF] uppercase"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className={`${sharedClasses} h-[120px] sm:h-[130px] lg:h-[140px] py-4 resize-none`}
          style={{ borderColor: "rgba(214,170,57,0.18)" }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${sharedClasses} h-[52px] sm:h-[56px] lg:h-[70px]`}
          style={{ borderColor: "rgba(214,170,57,0.18)" }}
        />
      )}
    </div>
  );
}

// ----------------------------------------------------------------------------
// Main section
// ----------------------------------------------------------------------------
export default function ContactSection({ waveImageUrl = WAVE_IMAGE_URL }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your API / email service of choice.
    console.log("Contact form submitted:", formData);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="overflow-hidden relative w-full bg-black"
    >
      {/* Decorative gold wave — purely decorative, never overlaps content */}
     <div
  aria-hidden="true"
  className="z-0 absolute inset-0 mx-auto max-w-[1550px] pointer-events-none"
  style={{
    backgroundImage: `url(${waveImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.2,
  }}
/>

<div className="z-0 absolute inset-0 mx-auto max-w-[1550px] bg-gray-500/10 pointer-events-none" />

      <div className="z-10 relative mx-auto px-6 max-w-[1550px] sm:px-8 md:px-10 lg:py-20 px-12 xl:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[46%_54%]">
          {/* ---------------------------------------------------------- */}
          {/* LEFT COLUMN — Contact Information                          */}
          {/* ---------------------------------------------------------- */}
          <div className="flex flex-col items-center order-1 font-light font-gilroy text-center text-left lg:items-start">
            <Badge>Reach Us Directly</Badge>

            <motion.div
              variants={cardsContainerVariants}
              className="flex flex-col gap-4 mt-8 w-full sm:gap-5"
            >
              {CONTACT_CARDS.map((card) => (
                <ContactCard key={card.title} {...card} />
              ))}
            </motion.div>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* RIGHT COLUMN — Contact Form                                */}
          {/* ---------------------------------------------------------- */}
          <div className="flex flex-col items-center order-2 text-center text-left lg:items-start">
            <Badge>Send Us A Message</Badge>

            <motion.form
              variants={formVariants}
              onSubmit={handleSubmit}
              className="mt-8 p-6 w-full rounded-[24px] border sm:p-8 lg:p-10"
              style={{
                backgroundColor: "#080808",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex flex-col gap-6">
                {FORM_FIELDS.map((field) => (
                  <InputField
                    key={field.name}
                    as={field.as}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -2, filter: "brightness(1.08)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center gap-2 mt-8 h-14 w-full font-gilroy font-semibold text-black rounded-xl sm:w-[250px]"
                style={{
                  background: "linear-gradient(90deg, #C79622, #F2D16B)",
                }}
              >
                Send Message
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}