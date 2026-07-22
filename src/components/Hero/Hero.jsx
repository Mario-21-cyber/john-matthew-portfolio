import "./Hero.css";
import resume from "../../assets/resume/resume.pdf";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
  FaArrowRight,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiRaspberrypi,
  SiXampp,
} from "react-icons/si";

import profile from "../../assets/images/profile.png";
import heroBlob from "../../assets/svg/hero-blob.svg";

const technologies = [
  { name: "HTML5", icon: <FaHtml5 /> },

  { name: "CSS3", icon: <FaCss3Alt /> },

  { name: "JavaScript", icon: <SiJavascript /> },

  { name: "React", icon: <SiReact /> },

  { name: "Node.js", icon: <SiNodedotjs /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss /> },

  { name: "PHP", icon: <SiPhp /> },

  { name: "Laravel", icon: <SiLaravel /> },

  { name: "MySQL", icon: <SiMysql /> },

  { name: "Java", icon: <FaJava /> },

  { name: "Git", icon: <FaGitAlt /> },

  { name: "GitHub", icon: <FaGithub /> },

  { name: "XAMPP", icon: <SiXampp /> },

  { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
];

const socials = [
  {
    icon: <FaLinkedinIn />,

    link: "https://www.linkedin.com/in/john-matthew-royo-0a576341b/",
  },

  {
    icon: <FaGithub />,

    link: "https://github.com/Mario-21-cyber",
  },

  {
    icon: <FaFacebookF />,

    link: "https://www.facebook.com/johnmatthew.royo21",
  },

  {
    icon: <FaEnvelope />,

    link: "mailto:johnmatthewroyo21@gmail.com",
  },

  {
    icon: <FaPhoneAlt />,

    link: "tel:+639764308211",
  },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* ======================================================
                    LEFT SIDE
                ====================================================== */}

        <motion.div
          className="hero-left"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Greeting */}

          <div className="hero-greeting">
            Hello,
            <span>I'm</span>
          </div>

          {/* Name */}

          <div className="hero-name">
            <div className="hero-first-name">John Matthew</div>

            <div className="hero-last-name">Malabanan</div>
          </div>

          {/* Role */}

          <div className="hero-role">Aspiring Full Stack Web Developer</div>

          {/* Description */}

          <div className="hero-description">
            Passionate about building modern, responsive, and user-focused web
            applications while continuously learning new technologies and
            growing as a Full Stack Web Developer.
          </div>

          {/* ======================================================
                        TECH STACK
                    ====================================================== */}

          <div className="hero-tech-wrapper">
            <div className="hero-tech-marquee">
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={index} className="hero-tech">
                  <div className="hero-tech-icon">{tech.icon}</div>

                  <div className="hero-tech-text">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================
                        BUTTONS
                    ====================================================== */}

          <div className="hero-buttons">
            <a
              href={resume}
              download="resume.pdf"
              className="hero-btn primary-btn"
            >
              <FaDownload />

              <span>Download Resume</span>
            </a>

            <Link to="/projects" className="hero-btn secondary-btn">
              <span>See My Projects</span>
              <FaArrowRight />
            </Link>
          </div>

          {/* ======================================================
                        SOCIALS
                    ====================================================== */}

          <div className="hero-socials">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="hero-social"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
        {/* ======================================================
                    RIGHT SIDE
                ====================================================== */}

        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,

            x: 60,
          }}
          animate={{
            opacity: 1,

            x: 0,
          }}
          transition={{
            duration: 0.9,

            delay: 0.2,
          }}
        >
          {/* Purple Background */}

          <div className="hero-background">
            <div className="hero-glow"></div>

            <div className="hero-ring"></div>

            <img
              src={heroBlob}
              alt=""
              className="hero-svg"
              aria-hidden="true"
            />
          </div>

          {/* Decorative Dots */}

          <div className="hero-dots">
            {Array.from({ length: 30 }).map((_, index) => (
              <span key={index}></span>
            ))}
          </div>

          {/* Portrait */}

          <div className="hero-image-wrapper">
            <img
              src={profile}
              alt="John Matthew Malabanan"
              className="hero-profile"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
