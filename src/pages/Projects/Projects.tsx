import React from "react";
import "./Projects.css";

const Projects: React.FC = () => (
  <section
    id="projects"
    className="projects"
  >
    <h2>Key Project</h2>
    <h3>ConSeat: Concert Seat Review</h3>
    <p>Token Refresh Solution (20% contribution)</p>
    <p>
      <strong>Tech:</strong> React, TanStack Query, CSS
    </p>
    <div>
      <a
        href="https://github.com/your-repo"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://demo-url"
        target="_blank"
        rel="noreferrer"
      >
        Demo
      </a>
    </div>
  </section>
);

export default Projects;
