import "./RecentProjects.css";

import { useState } from "react";
import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolio from "../../assets/images/portfolio.png";
import capstone from "../../assets/images/capstone.png";
import dacs from "../../assets/images/dacs.png";

const projects = [
  {
    id: 1,

    category: "PERSONAL PROJECT",

    title: "Personal Portfolio Website",

    description:
      "A modern portfolio website built using React and Vite to showcase my skills, projects, experience, and technical expertise with a clean and responsive interface.",

    image: portfolio,

    tech: ["React", "Vite", "CSS", "Framer Motion", "GitHub"],

    github: "#",

    demo: "#",
  },

  {
    id: 2,

    category: "CAPSTONE PROJECT",

    title: "QR Code-Based Gate Entrance Monitoring System",

    description:
      "A campus entrance monitoring system using QR Code authentication and SMS notifications for real-time attendance monitoring and campus security.",

    image: capstone,

    tech: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Raspberry Pi",
      "QR Code",
      "SIM800L",
      "Scanner ",
    ],

    github: "#",

    demo: "#",
  },

  {
    id: 3,

    category: "INTERNSHIP PROJECT",

    title: "Document Administration & Control System",

    description:
      "A document tracking and routing system developed during my internship at Makati City OM-ICTO for managing government documents.",

    image: dacs,

    tech: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],

    github: "#",

    demo: "#",
  },
];

function RecentProjects() {
  const [activeProject, setActiveProject] = useState(null);
  return (
    <section id="recent-projects" className="recent-projects">
      <div className="recent-projects-container">
        <motion.div
          className="recent-projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="recent-section-subtitle">FEATURED WORK</p>

          <h2 className="recent-section-title">Recent Projects</h2>
        </motion.div>

        <div
          className={`recent-projects-grid ${
            activeProject !== null ? "has-active" : ""
          }`}
        >
          {projects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              className={`recent-project-card ${
                activeProject === project.id ? "active" : ""
              }`}
              onClick={() =>
                setActiveProject((current) =>
                  current === project.id ? null : project.id,
                )
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                scale:
                  activeProject === null
                    ? 1
                    : activeProject === project.id
                      ? 1
                      : 0.92,

                opacity:
                  activeProject === null
                    ? 1
                    : activeProject === project.id
                      ? 1
                      : 0.65,

                y: activeProject === project.id ? -18 : 0,
              }}
              transition={{
                layout: {
                  duration: 0.6,
                  type: "spring",
                  stiffness: 140,
                  damping: 18,
                },
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              {/* ================= IMAGE ================= */}

              <motion.div layout className="recent-project-image">
                <img src={project.image} alt={project.title} />
              </motion.div>

              {/* ================= CONTENT ================= */}

              <motion.div layout className="recent-project-content">
                <span className="recent-project-category">
                  {project.category}
                </span>

                <div className="recent-project-title">{project.title}</div>

                <p className="recent-project-description">
                  {project.description}
                </p>

                {/* ================= TECH STACK ================= */}

                <div className="recent-tech-stack">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {/* ================= LINKS ================= */}

                <div className="recent-project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />

                    <span>GitHub</span>
                  </a>

                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />

                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
