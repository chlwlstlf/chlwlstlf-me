import React, { useState } from "react";
import "./ConseatDescription.css";
import DropdownContent from "./DropdownContent/DropdownContent";
import ReviewPageContent from "./ReviewPageContent/ReviewPageContent";
import SVGMapContent from "./SVGMapContent/SVGMapContent";

const ConseatDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="conseat-detail-tabs">
      <nav className="conseat-tabs-nav">
        <button
          className={activeTab === 0 ? "active" : ""}
          onClick={() => setActiveTab(0)}
        >
          화면 이미지
        </button>
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          1. Dropdown 통합 설계
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => setActiveTab(2)}
        >
          2. 리뷰 작성 UX 개선
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => setActiveTab(3)}
        >
          3. SVG 좌석 맵 구현
        </button>
        <button
          className={activeTab === 4 ? "active" : ""}
          onClick={() => setActiveTab(4)}
        >
          4. 네트워크 에러 잡기
        </button>
        <button
          className={activeTab === 5 ? "active" : ""}
          onClick={() => setActiveTab(5)}
        >
          5. 그 외
        </button>
      </nav>
      <div className="conseat-tab-content">
        {activeTab === 0 && <></>}
        {activeTab === 1 && <DropdownContent />}
        {activeTab === 2 && <ReviewPageContent />}
        {activeTab === 3 && <SVGMapContent />}
        {activeTab === 4 && <></>}
        {activeTab === 5 && <></>}
      </div>
    </div>
  );
};

export default ConseatDescription;
