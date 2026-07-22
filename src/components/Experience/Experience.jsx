import "./Experience.css";
import Footer from "../Footer/Footer";

import { motion } from "framer-motion";

import {
    FaCalendarAlt,
    FaRocket,
    FaCode,
    FaLayerGroup,
    FaBuilding,
    FaGraduationCap,
    FaLaptopCode,
    FaMapMarkerAlt,
    FaCertificate,
    FaExternalLinkAlt
} from "react-icons/fa";

const stats = [

    {
        icon:<FaCalendarAlt />,
        number:"1+",
        title:"Years of Experience",
        subtitle:"Hands-on Experience"
    },

    {
        icon:<FaRocket />,
        number:"3",
        title:"Systems Built",
        subtitle:"Real-world Applications"
    },

    {
        icon:<FaCode />,
        number:"8+",
        title:"Projects Completed",
        subtitle:"Academic & Personal"
    },

    {
        icon:<FaLayerGroup />,
        number:"15+",
        title:"Technologies Used",
        subtitle:"Tools & Frameworks"
    }

];

const experiences = [

    {

    id:1,

    role:"Leader • System Analyst • Head Researcher • Full Stack Developer • UI/UX Designer",

    icon:<FaLaptopCode />,

    category:"CAPSTONE PROJECT",
    period:"AUG 2025 - JAN 2026",

    title:"QR Code-Based Gate System For Students Of Romblon State University",

    company:"Lead Full Stack Developer & Research Leader",
    location:"Romblon State University",

    description:
    "Lead a 4-member capstone team in designing and developing a full-stack QR Code-Based Gate Entrance Monitoring System that replaced manual gate logging with a secure and automated solution. Built the web application using HTML, CSS, JavaScript, PHP, and MySQL, while integrating Raspberry Pi, a USB QR Code Scanner, Monitor Display, and SIM800L GSM Module to provide real-time parent SMS notifications and student attendance monitoring. Responsible for system architecture, database design, UI/UX design, software development, research documentation, testing, and deployment.",

    technologies:[

        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "MySQL",
        

    ]

},

    {

    id:2,

    role:"Frontend Developer • UI/UX Designer • Full Stack Development Support",

    icon:<FaBuilding />,

    category:"INTERNSHIP",

    period:"JAN 2026 - MAR 2026",

    title:"Document Administration and Control System (DACS)",

    company:"Frontend Developer & UI/UX Designer",

    location:"OM - ICTO City Government of Makati",

    description:
    "Collaborated with a fellow developer to design, develop, and deploy the Document Administration and Control System (DACS), a web-based document management solution used by the City Government of Makati. Primarily responsible for frontend development and UI/UX design using HTML, CSS, JavaScript, PHP, and MySQL, while also contributing to backend implementation when needed. Successfully deployed the system to the organization's production server, where it continues to manage real government document records and daily document routing operations.",

    technologies:[

        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "MySQL"

    ]

},

    {

        id:3,

        icon:<FaGraduationCap />,

        category:"CERTIFICATION",

        period:"JUL 2026 - AUG 2026",

        title:"Java Programming NC III",

        company:"TESDA",

        location:"TESDA Training Center",

        description:
        "Completed Java Programming NC III focusing on object-oriented programming, JDBC, database connectivity, and software development best practices.",

        technologies:[
            "Java",
            "OOP",
            "MySQL",
            "JDBC"
        ]

    }

];
const certificates = [

    {

        id:1,

        image:"/certificates/tesda-nc3.jpg",

        title:"Java Programming NC III",

        issuer:"TESDA",

        date:"July 2026"

    },

    {

        id:2,

        image:"/certificates/hackerrank.jpg",

        title:"Problem Solving (Basic)",

        issuer:"HackerRank",

        date:"Coming Soon"

    },

    {

        id:3,

        image:"/certificates/freecodecamp.jpg",

        title:"Responsive Web Design",

        issuer:"freeCodeCamp",

        date:"Coming Soon"

    },

    {

        id:4,

        image:"/certificates/google.jpg",

        title:"Google IT Support",

        issuer:"Google",

        date:"Coming Soon"

    }

];

function Experience(){

    return(

    <>

        <section

            id="experience"

            className="experience"

        >

            <div className="experience-container">

                {/* ===========================================
                    HEADER
                =========================================== */}

                <motion.div

                    className="experience-header"

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                >

                    <div className="experience-subtitle">

                        EXPERIENCE

                    </div>

                    <div className="experience-title">

                        My

                        <span>

                            Professional

                        </span>

                        Journey

                    </div>

                    <div className="experience-description">

                        My internship, academic achievements,
                        and real-world development experience
                        that continue shaping my journey as a
                        Full Stack Web Developer.

                    </div>

                </motion.div>

                {/* ===========================================
                    STATS
                =========================================== */}

                <div className="experience-stats">

                    {

                        stats.map((item,index)=>(

                            <motion.div

                                key={index}

                                className="experience-stat-card"

                                initial={{
                                    opacity:0,
                                    y:35
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                viewport={{
                                    once:true
                                }}

                                transition={{
                                    duration:.5,
                                    delay:index*.15
                                }}

                            >

                                <div className="experience-stat-icon">

                                    {item.icon}

                                </div>

                                <div className="experience-stat-number">

                                    {item.number}

                                </div>

                                <div className="experience-stat-title">

                                    {item.title}

                                </div>

                                <div className="experience-stat-subtitle">

                                    {item.subtitle}

                                </div>

                            </motion.div>

                        ))

                    }

                </div>

                {/* ===========================================
                    TIMELINE
                =========================================== */}

                <div className="experience-timeline">
                                    {

                    experiences.map((item,index)=>(

                        <motion.div

                            key={item.id}

                            className="timeline-item"

                            initial={{
                                opacity:0,
                                y:50
                            }}

                            whileInView={{
                                opacity:1,
                                y:0
                            }}

                            viewport={{
                                once:true
                            }}

                            transition={{
                                duration:.6,
                                delay:index*.15
                            }}

                        >

                            {/* ===========================================
                                TIMELINE LEFT
                            =========================================== */}

                            <div className="timeline-left">

                                <div className="timeline-period">

                                    <span className="timeline-category">

                                        {item.category}

                                    </span>

                                    <span className="timeline-date">

                                        {item.period}

                                    </span>

                                </div>

                                <div className="timeline-line">

                                    <span className="timeline-dot">

                                        {item.icon}

                                    </span>

                                </div>

                            </div>

                            {/* ===========================================
                                EXPERIENCE CARD
                            =========================================== */}

                            <div className="experience-card">

                                <div className="experience-card-header">

                                    <div className="experience-company">

                                        <div className="experience-company-icon">

                                            {item.icon}

                                        </div>

                                        <div className="experience-company-info">

                                            <div className="experience-position">

                                                {item.title}

                                            </div>

                                            <div className="experience-company-name">

                                                {item.company}

                                            </div>

                                            <div className="experience-location">

                                                <FaMapMarkerAlt />

                                                <span>

                                                    {item.location}

                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="experience-card-body">

                                    <p>

                                        {item.description}

                                    </p>

                                </div>

                                <div className="experience-technologies">

                                    {

                                        item.technologies.map((tech,index)=>(

                                            <span

                                                key={index}

                                                className="experience-tech"

                                            >

                                                {tech}

                                            </span>

                                        ))

                                    }

                                </div>

                            </div>

                        </motion.div>

                    ))

                }
                                </div>
                                
                {/* ===========================================
                        CERTIFICATES
                    =========================================== */}

                    <motion.section

                        className="experience-certificates"

                        initial={{
                            opacity:0,
                            y:40
                        }}

                        whileInView={{
                            opacity:1,
                            y:0
                        }}

                        viewport={{
                            once:true
                        }}

                        transition={{
                            duration:.8
                        }}

                    >

                        <div className="certificates-header">

                            <div className="certificates-badge">

                                <FaCertificate />

                                <span>

                                    CERTIFICATES

                                </span>

                            </div>

                            <h2 className="certificates-title">

                                Certifications & Achievements

                            </h2>

                            <p className="certificates-description">

                                Professional certifications and continuous learning
                                milestones that strengthen my technical knowledge
                                and software development skills.

                            </p>

                        </div>

                        <div className="certificates-grid">

                            {

                                certificates.map((certificate)=>(

                                    <motion.div

                                        key={certificate.id}

                                        className="certificate-card"

                                        whileHover={{
                                            y:-10
                                        }}

                                        transition={{
                                            duration:.25
                                        }}

                                    >

                                        <div className="certificate-image">

                                            <img

                                                src={certificate.image}

                                                alt={certificate.title}

                                            />

                                        </div>

                                        <div className="certificate-content">

                                            <div className="certificate-title">

                                                {certificate.title}

                                            </div>

                                            <div className="certificate-issuer">

                                                {certificate.issuer}

                                            </div>

                                            <div className="certificate-date">

                                                {certificate.date}

                                            </div>

                                        </div>

                                        <button

                                            className="certificate-view-btn"

                                        >

                                            <FaExternalLinkAlt />

                                            <span>

                                                View Certificate

                                            </span>

                                        </button>

                                    </motion.div>

                                ))

                            }

                        </div>

                    </motion.section>
                {/* ===========================================
                    BOTTOM CTA
                =========================================== */}

                <motion.div

                    className="experience-footer"

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                >

                    <div className="experience-footer-badge">

                        Always Learning • Always Building

                    </div>

                    <div className="experience-footer-title">

                        Every Experience Helps Me Build Better Software

                    </div>

                    <div className="experience-footer-description">

                        From academic projects to real-world internship
                        experience, I continuously improve my technical
                        skills, problem-solving ability, and passion for
                        developing modern web applications.

                    </div>

                </motion.div>

            </div>

        </section>
         <Footer />

    </>

    );

}

export default Experience;