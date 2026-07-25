import "./Footer.css";

import { Link, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";

const navigationLinks = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Experience",
    href: "/experience",
  },

  {
    title: "Projects",
    href: "/projects",
  },

  {
    title: "About",
    href: "/about",
  },
];

const socialLinks = [
  {
    icon: <FaLinkedinIn />,

    href: "https://www.linkedin.com/in/john-matthew-royo-0a576341b/",

    label: "LinkedIn",
  },

  {
    icon: <FaGithub />,

    href: "https://github.com/Mario-21-cyber",

    label: "GitHub",
  },

  {
    icon: <FaEnvelope />,

    href: "mailto:johnmatthewroyo21@gmail.com",

    label: "Email",
  },

  {
    icon: <FaFacebookF />,

    href: "https://www.facebook.com/johnmatthew.royo21",

    label: "Facebook",
  },

  {
    icon: <FaPhoneAlt />,

    href: "tel:+639764308211",

    label: "Phone",
  },
];

function Footer() {
  const location = useLocation();
  const handleNavigationClick = (e, href) => {
    if (location.pathname === href) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* ==========================
                    LEFT COLUMN
                ========================== */}

        <motion.div
          className="footer-content"
          initial={{
            opacity: 0,

            y: 40,
          }}
          whileInView={{
            opacity: 1,

            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >
          {/* LEFT */}

          <div className="footer-about">
            <h4 className="footer-name">John Matthew Malabanan</h4>

            <p className="footer-description">
              I build modern web applications with a focus on clean design,
              performance, and user experience while continuously expanding my
              skills as a Full Stack Developer.
            </p>
          </div>
          {/* ==========================
                        NAVIGATION
                    ========================== */}

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>

            <ul>
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavigationClick(e, link.href)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================
                        SOCIAL LINKS
                    ========================== */}

          <div className="footer-social">
            <h3 className="footer-heading">Connect with Me</h3>

            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ==========================
                    FOOTER BOTTOM
                ========================== */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} John Matthew Malabanan. All rights
            reserved.
          </p>

          <p>Built with React, Vite & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
