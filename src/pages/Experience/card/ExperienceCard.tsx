import React from "react";
import "./card.css";
import sejong from "../../../assets/sejong.png";
import umc from "../../../assets/umc.png";
import woowacourse from "../../../assets/woowacourse.png";

const TECH_STACK = [
  { icon: woowacourse, label: "우아한테크코스 6기 FE", period: "2024.02 ~ 2024.11" },
  { icon: umc, label: "세종대 UMC 2기 Web", period: "2022.03 ~ 2022.08" },
  { icon: sejong, label: "세종대학교 데이터사이언스학과", period: "2019.03 ~ 2024.02" },
];

const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <div className="experience-grid">
        {TECH_STACK.map(({ icon, label, period }) => (
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

export default ExperienceCard;
