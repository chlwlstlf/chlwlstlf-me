import React from "react";
import "./card.css";
import elp from "../../../assets/elp.png";
import adsp from "../../../assets/adsp.png";
import sqld from "../../../assets/sqld.png";

const CERTIFICATE_STACK = [
  { icon: elp, label: "정보처리기사", period: "2023.06.09" },
  { icon: adsp, label: "ADsP", period: "2022.03.25" },
  { icon: sqld, label: "SQLD", period: "2021.12.17" },
];

const CertificateCard = () => {
  return (
    <div className="experience-card">
      <div className="experience-grid">
        {CERTIFICATE_STACK.map(({ icon, label, period }) => (
          <div
            key={label}
            className="experience-item"
          >
            <img
              src={icon}
              alt={label}
              className="experience-icon"
            />
            <div className="experience-content">
              <span className="experience-label">{label}</span>
              <span className="experience-period">{period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateCard;
