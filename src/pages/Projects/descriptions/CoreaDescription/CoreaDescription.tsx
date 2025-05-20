import React, { useState } from "react";
import TokenRefreshContent from "./TokenRefreshContent/TokenRefreshContent";
import BlurUIContent from "./BlurUIContent/BlurUIContent";
import ErrorHandlingContent from "./ErrorHandlingContent/ErrorHandlingContent";
import "./CoreaDescription.css";
import NetworkErrorContent from "./NetworkErrorContent/NetworkErrorContent";

const CoreaDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="detail-tabs">
      <nav className="tabs-nav">
        <button
          className={activeTab === 0 ? "active" : ""}
          onClick={() => setActiveTab(0)}
        >
          1. 토큰 재발급 구조 설계
        </button>
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          2. 블러 처리 UI
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => setActiveTab(2)}
        >
          3. 전역 에러 핸들링
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => setActiveTab(3)}
        >
          4. 네트워크 에러 잡기
        </button>
      </nav>
      <div className="tab-content">
        {activeTab === 0 && <TokenRefreshContent />}
        {activeTab === 1 && <BlurUIContent />}
        {activeTab === 2 && <ErrorHandlingContent />}
        {activeTab === 3 && <NetworkErrorContent />}
      </div>
    </div>
  );
};

export default CoreaDescription;
