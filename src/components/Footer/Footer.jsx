import "./Footer.css";

import { motion } from "framer-motion";

import {

    FaLinkedinIn,
    FaGithub,
    FaEnvelope,
    FaFacebookF,
    FaPhoneAlt

} from "react-icons/fa";

const navigationLinks = [

    {
        title:"Home",
        href:"#home"
    },

    {
        title:"Experience",
        href:"#experience"
    },

    {
        title:"Projects",
        href:"#recent-projects"
    },

    {
        title:"About",
        href:"#about"
    }

];

const socialLinks = [

    {

        icon: <FaLinkedinIn />,

        href: "https://linkedin.com",

        label: "LinkedIn"

    },

    {

        icon: <FaGithub />,

        href: "https://github.com",

        label: "GitHub"

    },

    {

        icon: <FaEnvelope />,

        href: "mailto:your@email.com",

        label: "Email"

    },

    {

        icon: <FaFacebookF />,

        href: "https://facebook.com",

        label: "Facebook"

    },

    {

        icon: <FaPhoneAlt />,

        href: "tel:+639000000000",

        label: "Phone"

    }

];

function Footer() {

    return (

        <footer

            id="footer"

            className="footer"

        >

            <div className="footer-container">
                              {/* ==========================
                    LEFT COLUMN
                ========================== */}

                <motion.div

                    className="footer-content"

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

                    {/* LEFT */}

                    <div className="footer-about">

                        <h4 className="footer-name">

                            John Matthew Malabanan

                        </h4>

                        
                        <p className="footer-description">

                            Passionate about building modern web applications,
                            solving real-world problems, and continuously
                            improving my skills in full stack web development.

                        </p>

                    </div>
                                        {/* ==========================
                        NAVIGATION
                    ========================== */}

                    <div className="footer-links">

                        <h3 className="footer-heading">

                            Quick Links

                        </h3>

                        <ul>

                            {navigationLinks.map((link)=>(

                                <li key={link.title}>

                                    <a href={link.href}>

                                        {link.title}

                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ==========================
                        SOCIAL LINKS
                    ========================== */}

                    <div className="footer-social">

                        <h3 className="footer-heading">

                            Connect with Me

                        </h3>

                        <div className="social-icons">

                            {socialLinks.map((social)=>(

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

                        © {new Date().getFullYear()} John Matthew
                        Malabanan. All rights reserved.

                    </p>

                    <p>

                        Built with React, Vite & Framer Motion.

                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;