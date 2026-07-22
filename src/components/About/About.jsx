import "./About.css";

import { motion } from "framer-motion";

import Footer from "../Footer/Footer";

const values = [

    {

        title: "Learn Constantly",

        description:
        "Technology evolves every day, so I believe continuous learning is essential. I enjoy exploring new tools, frameworks, and development practices that help me become a better software developer."

    },

    {

        title: "Solve Problems",

        description:
        "I enjoy turning ideas and real-world challenges into practical software solutions. Every project is an opportunity to improve efficiency and create something useful for people."

    },

    {

        title: "Build Quality Software",

        description:
        "I strive to write clean, maintainable, and scalable code while focusing on performance, usability, and creating a great user experience."

    },

    {

        title: "Grow Through Challenges",

        description:
        "Every challenge helps me improve both technically and personally. I see mistakes as learning opportunities that shape me into a more capable developer."

    }

];

const education = [

    {

        level:"Bachelor of Science in Information Technology",

        school:"Romblon State University - San Fernando Campus",

        year:"2021 - 2026",

        location:"San Fernando, Romblon"

    },

    {

        level:"Senior High School",

        school:"Don Carlos M. Mejias Memorial National High School",

        year:"2019 - 2021",

        location:"San Fernando, Romblon"

    },

    {

        level:"Junior High School",

        school:"España National High School",

        year:"2015 - 2019",

        location:"España, San Fernando, Romblon"

    },

    {

        level:"Elementary School",

        school:"España Elementary School",

        year:"2011 - 2015",

        location:"España, San Fernando, Romblon"

    }

];

const journey = [

    {

        title:"Curiosity Started Everything",

        description:
        "My interest in technology began with a simple curiosity about how websites and software were created. The more I explored computers, the more fascinated I became with programming and the endless possibilities of creating something from nothing."

    },

    {

        title:"First Line of Code",

        description:
        "During Grade 11, I wrote my very first line of code in Notepad by displaying 'Hello World'. Around the same time, I was introduced to HTML and CSS, where we built a simple website in class. That small project sparked my interest and motivated me to keep learning web development beyond the classroom."

    },

    {

        title:"Beyond Classroom Learning",

        description:
        "Outside of school, I dedicated time to improving my programming skills by learning HTML, CSS, JavaScript, PHP, MySQL, Python, C#, and C++. I built personal practice projects, watched tutorials, read documentation, and challenged myself to understand how real-world applications work."

    },

    {

        title:"First Complete Project",

        description:
        "One of my earliest projects was a Simple Library Management System built using HTML, CSS, JavaScript, PHP, and MySQL. Through this project, I learned CRUD operations, database design, form validation, and the importance of writing organized code."

    },

    {

        title:"University Journey",

        description:
        "Throughout my Bachelor of Science in Information Technology program, I strengthened my knowledge of software development, databases, networking, systems analysis, and web technologies while continuously applying what I learned through hands-on projects."

    },

    {

        title:"Internship Experience",

        description:
        "During my internship at the City Government of Makati – Office of the Mayor, Information and Communications Technology Office (OM-ICTO), I developed the Document Administration and Control System (DACS), gaining valuable experience in real-world software development, teamwork, documentation, and professional workflows."

    },

    {

        title:"Capstone Project",

        description:
        "As part of our capstone project, I helped design and develop a QR Code-Based Gate Entrance Monitoring System with Parent Notification for Romblon State University. This experience enhanced my skills in full-stack development, database management, UI/UX design, and system implementation."

    },

    {

        title:"Looking Ahead",

        description:
        "As a fresh graduate, I am excited to begin my professional career as a Full Stack Web Developer. I look forward to contributing to meaningful projects, collaborating with experienced developers, and continuously improving my technical and problem-solving skills."

    }

];

function About(){

    return(

        <>

            <section

                id="about"

                className="about"

            >

                <div className="about-container">
                                  {/* ===========================================
                    HERO SECTION
                =========================================== */}

                <section className="about-hero">

                    <motion.div

                        className="hero-left"

                        initial={{
                            opacity:0,
                            x:-50
                        }}

                        whileInView={{
                            opacity:1,
                            x:0
                        }}

                        transition={{
                            duration:.8
                        }}

                        viewport={{
                            once:true
                        }}

                    >

                        <span className="about-tag">

                            ABOUT ME

                        </span>

                        <h1 className="hero-title">

                            Fresh Graduate with a Passion for Building
                            Modern Web Applications.

                        </h1>

                        <p className="hero-description">

                            Hello! I'm <strong>John Matthew R. Malabanan</strong>, a
                            fresh graduate with a Bachelor of Science in
                            Information Technology from Romblon State
                            University – San Fernando Campus.

                        </p>

                        <p className="hero-description">

                            I enjoy designing and developing responsive,
                            user-friendly, and scalable web applications.
                            My primary focus is Full Stack Web Development,
                            where I combine frontend design with backend
                            development to create complete digital
                            solutions. I believe every project is an
                            opportunity to learn something new and become
                            a better developer.

                        </p>

                    </motion.div>

                    <motion.div

                        className="hero-right"

                        initial={{
                            opacity:0,
                            x:50
                        }}

                        whileInView={{
                            opacity:1,
                            x:0
                        }}

                        transition={{
                            duration:.8,
                            delay:.2
                        }}

                        viewport={{
                            once:true
                        }}

                    >

                        <div className="profile-card">

                            <div className="profile-item">

                                <span className="profile-label">

                                    Status

                                </span>

                                <h3>

                                    Fresh Graduate

                                </h3>

                            </div>

                            <div className="profile-item">

                                <span className="profile-label">

                                    Degree

                                </span>

                                <h3>

                                    BS Information Technology

                                </h3>

                            </div>

                            <div className="profile-item">

                                <span className="profile-label">

                                    Specialization

                                </span>

                                <h3>

                                    Full Stack Web Development

                                </h3>

                            </div>

                            <div className="profile-item">

                                <span className="profile-label">

                                    Current Goal

                                </span>

                                <h3>

                                    Build Real-World Software & Grow as a Professional Developer

                                </h3>

                            </div>

                        </div>

                    </motion.div>

                </section>

                {/* ===========================================
                    CORE VALUES
                =========================================== */}

                <section className="values-section">

                    <motion.h2

                        className="section-title"

                        initial={{
                            opacity:0,
                            y:30
                        }}

                        whileInView={{
                            opacity:1,
                            y:0
                        }}

                        transition={{
                            duration:.7
                        }}

                        viewport={{
                            once:true
                        }}

                    >

                        Core Values

                    </motion.h2>

                    <p className="section-description">

                        The principles that guide how I learn, build software,
                        and continuously grow as an aspiring Full Stack Web Developer.

                    </p>

                    <div className="values-grid">

                                        {

                        values.map((value,index)=>(

                            <motion.div

                                key={index}

                                className="value-card"

                                initial={{
                                    opacity:0,
                                    y:40
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                transition={{
                                    duration:.6,
                                    delay:index * .12
                                }}

                                viewport={{
                                    once:true
                                }}

                            >

                                <span className="value-number">

                                    0{index + 1}

                                </span>

                                <h3 className="value-title">

                                    {value.title}

                                </h3>

                                <p className="value-description">

                                    {value.description}

                                </p>

                            </motion.div>

                        ))

                    }

                </div>

            </section>

            {/* ===========================================
                EDUCATIONAL BACKGROUND
            =========================================== */}

            <section className="education-section">

                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:.7
                    }}

                    viewport={{
                        once:true
                    }}

                >

                    <h2 className="section-title">

                        Educational Background

                    </h2>

                    <p className="section-description">

                        My academic journey has provided me with a strong
                        foundation in information technology, software
                        development, and continuous learning.

                    </p>

                </motion.div>

                <div className="education-grid">
                                      {

                        education.map((item,index)=>(

                            <motion.div

                                key={index}

                                className="education-card"

                                initial={{
                                    opacity:0,
                                    y:50
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                transition={{
                                    duration:.6,
                                    delay:index * .12
                                }}

                                viewport={{
                                    once:true
                                }}

                            >

                                <div className="education-year-badge">

                                    {item.year}

                                </div>

                                <div className="education-content">

                                    <h3 className="education-level">

                                        {item.level}

                                    </h3>

                                    <h4 className="education-school">

                                        {item.school}

                                    </h4>

                                    <p className="education-location">

                                        {item.location}

                                    </p>

                                </div>

                            </motion.div>

                        ))

                    }

                </div>

            </section>

            {/* ===========================================
                DEVELOPER JOURNEY
            =========================================== */}

            <section className="journey-section">

                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:.7
                    }}

                    viewport={{
                        once:true
                    }}

                >

                    <h2 className="section-title">

                        My Developer Journey

                    </h2>

                    <p className="section-description">

                        Every step of my journey has contributed to the
                        developer I am today. From writing my first line
                        of code to building real-world systems, each
                        experience strengthened my passion for software
                        development.

                    </p>

                </motion.div>

                <div className="journey-container">

                                    {

                        journey.map((step,index)=>(

                            <motion.div

                                key={index}

                                className={`journey-item ${
                                    index % 2 !== 0 ? "reverse" : ""
                                }`}

                                initial={{
                                    opacity:0,
                                    y:60
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                transition={{
                                    duration:.7,
                                    delay:index * .12
                                }}

                                viewport={{
                                    once:true
                                }}

                            >

                                <div className="journey-marker">

                                    <span>

                                        {String(index + 1).padStart(2,"0")}

                                    </span>

                                </div>

                                <div className="journey-card">

                                    <span className="journey-step">

                                        STEP {String(index + 1).padStart(2,"0")}

                                    </span>

                                    <h3 className="journey-title">

                                        {step.title}

                                    </h3>

                                    <p className="journey-description">

                                        {step.description}

                                    </p>

                                </div>

                            </motion.div>

                        ))

                    }

                </div>

            </section>

            {/* ===========================================
                PERSONAL STATEMENT
            =========================================== */}

            <motion.section

                className="about-closing"

                initial={{
                    opacity:0,
                    y:40
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:.8
                }}

                viewport={{
                    once:true
                }}

            >

                <div className="closing-card">

                    <span className="closing-tag">

                        Ready for My First Professional Opportunity

                    </span>

                    <h2>

                        Building software that creates value while continuously growing as a developer.

                    </h2>

                    <p>

                        I may be at the beginning of my professional career,
                        but I bring curiosity, dedication, adaptability, and
                        a genuine passion for technology. I am excited to
                        contribute to meaningful projects, collaborate with
                        experienced professionals, and continue learning every
                        day as I pursue a long-term career in Full Stack Web
                        Development.

                    </p>

                </div>

            </motion.section>
                        </div>

        </section>

        <Footer />

    </>

);

}

export default About;