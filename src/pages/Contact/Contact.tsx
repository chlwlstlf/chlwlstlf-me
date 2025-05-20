import React from "react";
import "./Contact.css";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="contact"
  >
    <h2>Contact</h2>
    <p>Email: your.email@example.com</p>
    <p>
      GitHub:{" "}
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noreferrer"
      >
        your-profile
      </a>
    </p>
  </section>
);

export default Contact;
