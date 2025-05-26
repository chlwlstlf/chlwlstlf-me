import React, { useState } from "react";
import "./ConseatDescription.css";
import ConseatScreenContent from "./ConseatScreenContent/ConseatScreenContent";
import DropdownContent from "./DropdownContent/DropdownContent";
import ReviewPageContent from "./ReviewPageContent/ReviewPageContent";
import SVGMapContent from "./SVGMapContent/SVGMapContent";
import ConseatEtcContent from "./ConseatEtcContent/ConseatEtcContent";

// 탭 설정 배열
const tabs = [
  { label: "화면 이미지", Component: ConseatScreenContent },
  { label: "1. SVG 좌석 맵 구현", Component: SVGMapContent },
  { label: "2. 리뷰 작성 UX 개선", Component: ReviewPageContent },
  { label: "3. Dropdown 통합 설계", Component: DropdownContent },
  { label: "4. 그 외", Component: ConseatEtcContent },
];

const ConseatDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="conseat-detail-tabs">
      <nav className="conseat-tabs-nav">
        {tabs.map(({ label }, index) => (
          <button
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="conseat-tab-content">{tabs.map(({ Component }, index) => activeTab === index && <Component key={index} />)}</div>
    </div>
  );
};

export default ConseatDescription;
