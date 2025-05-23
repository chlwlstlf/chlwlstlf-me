import React, { useState } from "react";
import TokenRefreshContent from "./TokenRefreshContent/TokenRefreshContent";
import BlurUIContent from "./BlurUIContent/BlurUIContent";
import ErrorHandlingContent from "./ErrorHandlingContent/ErrorHandlingContent";
import "./CoreaDescription.css";
import NetworkErrorContent from "./NetworkErrorContent/NetworkErrorContent";
import CoreaScreenContent from "./CoreaScreenContent/CoreaScreenContent";
import CoreaEtcContent from "./CoreaEtcContent/CoreaEtcContent";

const CoreaDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="corea-detail-tabs">
      <nav className="corea-tabs-nav">
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
          1. 토큰 재발급 구조 설계
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => setActiveTab(2)}
        >
          2. 블러 처리 UI
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => setActiveTab(3)}
        >
          3. 전역 에러 핸들링
        </button>
        <button
          className={activeTab === 4 ? "active" : ""}
          onClick={() => setActiveTab(4)}
        >
          4. 네트워크 에러 처리
        </button>
        <button
          className={activeTab === 5 ? "active" : ""}
          onClick={() => setActiveTab(5)}
        >
          5. 그 외
        </button>
      </nav>
      <div className="corea-tab-content">
        {activeTab === 0 && <CoreaScreenContent />}
        {activeTab === 1 && <TokenRefreshContent />}
        {activeTab === 2 && <BlurUIContent />}
        {activeTab === 3 && <ErrorHandlingContent />}
        {activeTab === 4 && <NetworkErrorContent />}
        {activeTab === 5 && <CoreaEtcContent />}
      </div>
    </div>
  );
};

export default CoreaDescription;
