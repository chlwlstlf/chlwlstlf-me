import "./TokenRefreshContent.css";
import refreshToken1 from "../../../../../assets/refresh-token1.png";
import refreshToken2 from "../../../../../assets/refresh-token2.png";

const TokenRefreshContent = () => {
  return (
    <div className="token-refresh-content">
      <h3>[문제점]</h3>
      <p>
        ※ refreshAccessToken에 임의로 <code>await new Promise((resolve) ={">"} setTimeout(resolve, 3000));</code> 코드를 추가하여 3초 delay를 시켜 Race Condition 이슈가 없는지 확인해보았습니다.
        <br></br>
        🔥 Access Token이 만료된 상태에서 여러 API 요청이 거의 동시에 발생할 때, 각각의 요청이 독립적으로 <code>refreshAccessToken()</code>을 호출하며 <strong>Race Condition</strong>이 일어나고, 불필요한 중복 갱신 요청이 발생합니다.
      </p>
      <img
        src={refreshToken1}
        alt="리프레시 토큰 이전 화면"
        width="100%"
      />

      <br></br>

      <h3>[원인]</h3>
      <p>
        1) 각 요청마다 401 응답을 받으면 곧바로 토큰 갱신을 시도
        <br></br>
        2) <code>refreshAccessToken()</code>이 끝나기 전에도 다른 요청이 갱신 로직을 실행
        <br></br>
        3) localStorage에 새 토큰을 쓰는 타이밍이 엇갈리며 중복 호출
      </p>

      <br></br>

      <h3>[해결방법]</h3>
      <p>
        전역 <code>isRefreshing</code> 플래그와 <code>failedQueue</code>를 도입하여
        <br></br>
        1) 최초 401 응답 시 <code>isRefreshing = true</code>로 설정하고
        <code>refreshAccessToken()</code>을 한 번만 실행
        <br></br>
        2) 추가 요청은 <code>failedQueue</code>에 resolve/reject 콜백으로 대기
        <br></br>
        3) 갱신 완료 후 <code>processQueue(null, newToken)</code> 호출로 대기 중인 요청들에 새 토큰을 전달하여 한꺼번에 재실행
      </p>
      <img
        src={refreshToken2}
        alt="리프레시 토큰 이후 화면"
        width="100%"
      />
    </div>
  );
};

export default TokenRefreshContent;
