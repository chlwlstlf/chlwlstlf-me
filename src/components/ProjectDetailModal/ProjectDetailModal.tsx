import React from "react";

import "./ProjectDetailModal.css";
import type { ProjectData } from "../../pages/Projects/data/projectsData";
import Modal from "../Modal/Modal";

interface Props {
  project: ProjectData;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: Props) => {
  return (
    <Modal>
      <Modal.Overlay onClick={onClose} />
      <Modal.Content className="detail-modal-content">
        <header className="detail-header">
          <h2 className="detail-title">
            <img
              src={project.logo}
              alt="코레아 로고"
              width="30px"
            />
            <span>{project.title}</span>
          </h2>
          <p className="detail-subtitle">{project.subtitle}</p>
          <p className="detail-period">{project.period}</p>
        </header>

        <div className="detail-meta">
          <p>
            <strong>💡 소개 :</strong> {project.introduction}
          </p>
          <p>
            <strong>🔥 사용자 수 :</strong> {project.users}
          </p>
          <p>
            <strong>👩‍💻 팀 구성 :</strong> {project.team} | 기여도 : {project.contribution}
          </p>
          <p>
            <strong>💻 Skills :</strong>
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
            <strong>🔗 Links : </strong>
            {project.links.map((l) => (
              <a
                className="detail-link"
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
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default ProjectDetailModal;
