import React from "react";

import "./ProjectDetailModal.css";
import type { ProjectData } from "../../pages/Projects/data/projectsData";
import Modal from "../Modal/Modal";

interface Props {
  project: ProjectData;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: Props) {
  return (
    <Modal>
      <Modal.Overlay onClick={onClose} />
      <Modal.Content className="detail-modal-content">
        <header className="detail-header">
          <h2>{project.title}</h2>
          <p className="detail-subtitle">{project.subtitle}</p>
          <p className="detail-period">{project.period}</p>
        </header>
        <section className="detail-meta">
          <p>
            <strong>👩‍💻 팀 구성:</strong> {project.team}
          </p>
          <p>
            <strong>🔍 기여도:</strong> {project.contribution}
          </p>
          <p>
            <strong>💻 Skills:</strong>
            {project.skills.length > 0 && (
              <p className="detail-skills">
                {project.skills.map((s) => (
                  <span
                    key={s}
                    className="detail-skill"
                  >
                    {s}
                  </span>
                ))}
              </p>
            )}
          </p>
          <p>
            <strong>🔗 Links</strong>
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </p>

          <div className="detail-description">{project.description}</div>
        </section>
      </Modal.Content>
    </Modal>
  );
}
