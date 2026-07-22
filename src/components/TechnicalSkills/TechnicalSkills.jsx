import "./TechnicalSkills.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiLaravel,
  SiMysql,
  SiMariadb,
  SiFramer,
  SiRaspberrypi,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiOpenjdk,
} from "react-icons/si";

const categories = [
  "All",

  "Languages",

  "Frontend",

  "UI & Styling",

  "Backend",

  "Database",

  "Tools",

  "Learning",
];

const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Languages",
  },

  {
    id: 2,
    name: "CSS3",
    icon: <FaCss3Alt />,
    category: "Languages",
  },

  {
    id: 3,
    name: "JavaScript",
    icon: <FaJsSquare />,
    category: "Languages",
  },

  {
    id: 4,
    name: "PHP",
    icon: <FaPhp />,
    category: "Languages",
  },

  {
    id: 5,
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
  },

  {
    id: 6,
    name: "Vite",
    icon: <SiVite />,
    category: "Frontend",
  },

  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "UI & Styling",
  },

  {
    id: 8,
    name: "Framer Motion",
    icon: <SiFramer />,
    category: "UI & Styling",
  },

  {
    id: 9,
    name: "Laravel",
    icon: <SiLaravel />,
    category: "Backend",
  },

  {
    id: 10,
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
  },

  {
    id: 11,
    name: "MySQL",
    icon: <SiMysql />,
    category: "Database",
  },

  {
    id: 12,
    name: "MariaDB",
    icon: <SiMariadb />,
    category: "Database",
  },

  {
    id: 13,
    name: "Git",
    icon: <FaGitAlt />,
    category: "Tools",
  },

  {
    id: 14,
    name: "GitHub",
    icon: <FaGithub />,
    category: "Tools",
  },

  {
    id: 15,
    name: "Figma",
    icon: <FaFigma />,
    category: "Tools",
  },

  {
    id: 16,
    name: "Raspberry Pi",
    icon: <SiRaspberrypi />,
    category: "Tools",
  },

  {
    id: 17,
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Learning",
  },

  {
    id: 18,
    name: "Next.js",
    icon: <SiNextdotjs />,
    category: "Learning",
  },

  {
    id: 19,
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Learning",
  },

  {
    id: 20,
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    category: "Learning",
  },

  {
    id: 21,
    name: "Java",
    icon: <SiOpenjdk />,
    category: "Learning",
  },
];
function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="technical-skills" className="technical-skills">
      <div className="skills-container">
        {/* ================= HEADER ================= */}

        <motion.div
          className="skills-header"
          initial={{
            opacity: 0,

            y: 40,
          }}
          whileInView={{
            opacity: 1,

            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="skills-subtitle">TECHNICAL SKILLS</p>

          <h2 className="skills-title">My Technology Stack</h2>

          <p className="skills-description">
            These are the technologies I currently use for developing modern web
            applications. I continue learning new tools and frameworks to
            strengthen my full stack development skills.
          </p>
        </motion.div>

        {/* ================= CATEGORY TABS ================= */}

        <div className="skills-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "tab-button active" : "tab-button"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= SKILLS GRID ================= */}

        <div className="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                className="skill-card"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              >
                <div className="skill-icon">{skill.icon}</div>

                <div className="skill-name">{skill.name}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
