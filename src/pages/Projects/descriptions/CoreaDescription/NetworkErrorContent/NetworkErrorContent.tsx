import "./NetworkErrorContent.css";
import networkDemo from "../../../../../assets/network-demo.webm";
import github from "../../../../../assets/Github.svg";
import jinsillogo from "../../../../../assets/jinsillogo.png";

const NetworkErrorContent = () => {
  return (
    <div className="corea-content">
      <h3>[문제점]</h3>
      <ul>
        <li>오프라인 시 서비스가 동작하지 않아 사용자에게 네트워크 복구를 즉시 안내해야 함</li>
        <li>
          Chrome 계열에서 <code>navigator.onLine</code>이 잘못된 값을 반환해 실제 오프라인임에도 온라인 UX가 보여짐
        </li>
      </ul>

      <br></br>

      <h3>[개선 사항]</h3>
      <table className="network-improvements-table">
        <thead>
          <tr>
            <th>개선 항목</th>
            <th>기존</th>
            <th>개선 후</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>네트워크 상태 감지</td>
            <td>
              navigator.onLine 사용
              <br />
              크롬 계열에서 거짓 네거티브 발생
            </td>
            <td>
              window 이벤트 기반 useNetwork 훅 구현
              <br />
              정확한 온라인/오프라인 판별
            </td>
          </tr>
          <tr>
            <td>queries.networkMode</td>
            <td>
              networkMode: "always",
              <br />
              바로 Fallback UI
            </td>
            <td>
              networkMode: "online"
              <br />
              온라인 복귀 시 자동 fetching
            </td>
          </tr>
          <tr>
            <td>오프라인 Toast</td>
            <td>
              한 번만 뜨는 Toast
              <br />
              사용자가 못 보는 이슈
            </td>
            <td>
              무한 Toast(Infinity)
              <br />
              온라인 복귀 시 close + 성공 Toast
            </td>
          </tr>
          <tr>
            <td>Fallback UI</td>
            <td>모든 오류에 Default Fallback</td>
            <td>
              NetworkError일 때<br />
              NetworkFallback UI 제공
            </td>
          </tr>
        </tbody>
      </table>

      <br></br>

      <h3>[시연 영상]</h3>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          display: "block",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <source
          src={networkDemo}
          type="video/webm"
        />
      </video>

      <br></br>

      <h3>[참고 링크]</h3>
      <div className="corea-content__link">
        <img
          src={github}
          alt="깃허브 로고"
          width="24px"
        />
        <a
          href="https://github.com/woowacourse-teams/2024-corea/pull/814"
          target="_blank"
          rel="noopener noreferrer"
        >
          [FE] Errorboundary 전략 세우기, Network에 따른 UI 변경(#813) #814
        </a>
      </div>
      <div className="corea-content__link">
        <img
          src={jinsillogo}
          alt="진블로그 로고"
          width="24px"
        />
        <a
          href="https://chlwlstlf.github.io/woowacourse/woowacourse-level5-network-error/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [우테코] Level5 네트워크 에러 잡기
        </a>
      </div>
    </div>
  );
};

export default NetworkErrorContent;
