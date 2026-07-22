import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <p className="section-tag">
        CONTACT
      </p>

      <h2 className="section-title">
        Let's Work Together
      </h2>

      <p className="contact-description">
        I'm currently open to internship opportunities,
        freelance projects, and full-time positions.
      </p>

      <div className="contact-icons">

        <a href="#">
          <FaLinkedin />
        </a>

        <a href="#">
          <FaGithub />
        </a>

        <a href="#">
          <FaEnvelope />
        </a>

        <a href="#">
          <FaFacebook />
        </a>

      </div>

    </section>
  );
}

export default Contact;