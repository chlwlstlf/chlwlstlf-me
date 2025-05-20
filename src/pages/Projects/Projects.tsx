import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectDetailModal from "../../components/ProjectDetailModal/ProjectDetailModal";
import { PROJECTS, type ProjectData } from "./data/projectsData";

export default function Projects() {
  const [active, setActive] = useState<ProjectData | null>(null);

  return (
    <section
      id="projects"
      className="projects"
    >
      <h2 className="projects-title">&lt;Projects /&gt;</h2>

      <div>{active?.title}</div>

      <div className="projects-list">
        {PROJECTS.map((p) => (
          <ProjectCard
            key={p.id}
            thumbnail={p.thumbnail}
            title={p.title}
            subtitle={p.subtitle}
            period={p.period}
            team={p.team}
            contribution={p.contribution}
            skills={p.skills}
            links={p.links}
            onClick={() => setActive(p)}
          />
        ))}
      </div>

      {active && (
        <ProjectDetailModal
          project={active}
          isOpen={true}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
