import "./NetworkErrorContent.css";
// import networkDemo from "../../../../../assets/network-demo.gif"; // TODO 용량 큼
import github from "../../../../../assets/Github.svg";
import jinsillogo from "../../../../../assets/jinsillogo.png";

const NetworkErrorContent = () => {
  return (
    <div className="network-error-content">
      <h3>[문제점]</h3>
      <p>저희 서비스는 오프라인일 때 이용할 수 있는 서비스가 없기 때문에 사용자의 빠른 네트워크 연결을 유도해야 합니다.</p>

      <br></br>

      <h3>[navigator.onLine 문제]</h3>
      <p>
        Chrome 계열 브라우저에서 <code>navigator.onLine</code>이 거짓 네거티브를 반환해, 실제 오프라인 상태인데도 온라인으로 판단되어 잘못된 UX가 발생했습니다.
        <br></br>
        탠스택 쿼리의 <code>onlineManager.ts</code> 코드를 참고하여 useNetwork 훅을 만들었습니다.
      </p>

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
            <td>queries.networkMode</td>
            <td>
              networkMode: "always",
              <br />
              Fallback UI
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
              Toast 한 번,
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
      <p>
        {/* <img
          src={networkDemo}
          alt="네트워크 시연 영상"
          width="100%"
        /> */}
      </p>

      <br></br>
      <br></br>

      <h3>[참고 링크]</h3>
      <div className="network-error-content__link">
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
      <div className="network-error-content__link">
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
