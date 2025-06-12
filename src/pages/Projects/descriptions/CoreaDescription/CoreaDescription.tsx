import React, { useState } from "react";
import TokenRefreshContent from "./TokenRefreshContent/TokenRefreshContent";
import BlurUIContent from "./BlurUIContent/BlurUIContent";
import ErrorHandlingContent from "./ErrorHandlingContent/ErrorHandlingContent";
import NetworkErrorContent from "./NetworkErrorContent/NetworkErrorContent";
import CoreaScreenContent from "./CoreaScreenContent/CoreaScreenContent";
import CoreaEtcContent from "./CoreaEtcContent/CoreaEtcContent";
import "./CoreaDescription.css";

const tabs = [
  { label: "화면 이미지", Component: CoreaScreenContent },
  { label: "1. 토큰 재발급 구조 설계", Component: TokenRefreshContent },
  { label: "2. 전역 에러 핸들링", Component: ErrorHandlingContent },
  { label: "3. 네트워크 에러 처리", Component: NetworkErrorContent },
  { label: "4. 블러 처리 UI", Component: BlurUIContent },
  { label: "5. 그 외", Component: CoreaEtcContent },
];

const CoreaDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="corea-detail-tabs">
      <nav className="corea-tabs-nav">
        {tabs.map(({ label }, idx) => (
          <button
            key={label}
            className={activeTab === idx ? "active" : ""}
            onClick={() => setActiveTab(idx)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="corea-tab-content">{tabs.map(({ Component }, idx) => activeTab === idx && <Component key={idx} />)}</div>
    </div>
  );
};

export default CoreaDescription;
