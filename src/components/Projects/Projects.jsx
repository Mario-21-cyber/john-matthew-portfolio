import "./Projects.css";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import portfolio from "../../assets/images/portfolio.png";
import capstone from "../../assets/images/capstone.png";
import dacs from "../../assets/images/dacs.png";

import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    id: 1,

    title: "Personal Portfolio",

    subtitle: "Personal Project",

    image: portfolio,

    description:
      "A modern developer portfolio built using React and Vite showcasing my experience, projects, certifications, and technical skills through a premium user interface and smooth animations.",

    features: [
      "Responsive User Interface",

      "Modern UI / UX Design",

      "Smooth Page Animations",

      "Reusable React Components",
    ],

    technologies: ["React", "Vite", "JavaScript", "CSS", "Framer Motion"],

    github:
      "https://github.com/Mario-21-cyber/john-matthew-portfolio/tree/main",

    live: "#",
  },

  {
    id: 2,

    title: "QR Code-Based Gate Entrance Monitoring System",

    subtitle: "Capstone Project",

    image: capstone,

    description:
      "A QR Code-based student entrance monitoring system integrated with Raspberry Pi and GSM SMS notification for parents.",

    features: [
      "QR Code Authentication",

      "Parent SMS Notification",

      "Attendance Monitoring",

      "Raspberry Pi Integration",
    ],

    technologies: [
      "PHP",

      "MySQL",

      "JavaScript",

      "HTML",

      "CSS",

      "Raspberry Pi",

      "SIM800L",
    ],

    github: "#",

    live: "#",
  },

  {
    id: 3,

    title: "Document Administration and Control System",

    subtitle: "Internship Project",

    image: dacs,

    description:
      "A production-ready document tracking and routing system developed during my internship at the City Government of Makati.",

    features: [
      "Incoming Documents",

      "Internal Routing",

      "Outgoing Documents",

      "Dashboard Analytics",
    ],

    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],

    github: "https://github.com/Mario-21-cyber/om-icto-dacs",

    live: "#",
  },
];

function Project() {
  return (
    <>
      <section id="projects" className="projects">
        <div className="projects-container">
          {/* ===========================================
                    HEADER
                =========================================== */}

          <motion.div
            className="projects-header"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="projects-subtitle">MY WORK</div>

            <h1 className="projects-title">Featured Projects</h1>

            <p className="projects-description">
              A collection of academic, internship, and personal projects that
              showcase my skills in designing, developing, and deploying modern
              web applications.
            </p>
          </motion.div>

          {/* ===========================================
                    PROJECT LIST
                =========================================== */}

          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.section
                key={project.id}
                className="project-section"
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
              >
                <div
                  className={`project-wrapper ${
                    index % 2 !== 0 ? "reverse" : ""
                  }`}
                >
                  {/* ===========================================
                                        LEFT SIDE
                                    =========================================== */}

                  <motion.div
                    className="project-image-wrapper"
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                  >
                    <div className="project-image-glow"></div>

                    <div className="project-image-card">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    </div>
                  </motion.div>

                  {/* ===========================================
                                        RIGHT SIDE
                                    =========================================== */}

                  <motion.div
                    className="project-content"
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                    }}
                  >
                    <div className="project-badge">{project.subtitle}</div>

                    <h2 className="project-title">{project.title}</h2>

                    <p className="project-description">{project.description}</p>

                    {/* ===========================================
                                            FEATURES
                                        =========================================== */}

                    <div className="project-features">
                      {project.features.map((feature, index) => (
                        <div key={index} className="project-feature">
                          <FaCheckCircle />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* ===========================================
                                            TECHNOLOGIES
                                        =========================================== */}

                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="project-tech">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ===========================================
                                            BUTTONS
                                        =========================================== */}

                    <div className="project-buttons">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn primary"
                      >
                        <FaExternalLinkAlt />

                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn secondary"
                      >
                        <FaGithub />

                        <span>Source Code</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Project;
