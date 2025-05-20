import React from "react";
import "./ProjectCard.css";

export interface ProjectCardProps {
  thumbnail: string;
  title: string;
  subtitle?: string;
  period?: string;
  skills?: string[];
  team?: string;
  contribution?: string;
  links?: { label: string; href: string }[];
}

export default function ProjectCard({ thumbnail, title, subtitle, period, skills = [], team, contribution, links = [] }: ProjectCardProps) {
  return (
    <div className="project-card">
      {/* 썸네일 */}
      <img
        className="project-img"
        src={thumbnail}
        alt={title}
      />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
      </div>

      {/* 호버했을 때 */}
      <div className="project-overlay">
        <div className="overlay-content">
          <h3>{title}</h3>
          {subtitle && <p className="subtitle">{subtitle}</p>}

          {period && (
            <p>
              <strong>기간:</strong> {period}
            </p>
          )}
          {team && (
            <p>
              <strong>팀 구성:</strong> {team}
            </p>
          )}
          {contribution && (
            <p>
              <strong>기여도:</strong> {contribution}
            </p>
          )}

          {skills.length > 0 && (
            <p className="skills">
              {skills.map((s) => (
                <span
                  key={s}
                  className="skill"
                >
                  {s}
                </span>
              ))}
            </p>
          )}

          <br></br>

          {links.length > 0 && (
            <div className="links">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
