import refreshToken1 from "../../../../../assets/refresh-token1.png";
import refreshToken2 from "../../../../../assets/refresh-token2.png";
import github from "../../../../../assets/Github.svg";
import jinsillogo from "../../../../../assets/jinsillogo.png";

const TokenRefreshContent = () => {
  return (
    <div className="corea-content">
      <h3>[문제점]</h3>
      <p>
        ※ 토큰 갱신 API 요청 함수에 <code>await new Promise((resolve) ={">"} setTimeout(resolve, 3000));</code> 코드를 추가하여 Race Condition 이슈가 없는지 확인해보았습니다.
        <br></br>
        🔥 Access Token이 만료된 상태에서 여러 API 요청이 거의 동시에 발생할 때, 각각의 요청이 독립적으로 토큰 갱신 API를 호출하여 <strong>Race Condition</strong>이 일어나고, 불필요한 중복 요청이 발생합니다.
      </p>
      <img
        src={refreshToken1}
        alt="리프레시 토큰 이전 화면"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      />

      <br></br>

      <h3>[원인]</h3>
      <p>
        1) 각 요청마다 401 응답을 받으면 곧바로 토큰 갱신 시도
        <br></br>
        2) 토큰 갱신 API 응답이 오기 전에도 다른 요청이 갱신 로직을 실행
        <br></br>
        3) localStorage에 새 토큰을 쓰는 타이밍이 엇갈리며 중복 호출
      </p>

      <br></br>

      <h3>[해결방법]</h3>
      <p>
        전역 <code>isRefreshing</code> 플래그와 <code>failedQueue</code>를 도입하여
        <br></br>
        1) 최초 401 응답 시 <code>isRefreshing = true</code>로 설정하고 토큰 갱신 요청을 한 번만 실행
        <br></br>
        2) 추가 요청은 <code>failedQueue</code>에 resolve/reject 콜백으로 대기
        <br></br>
        3) 갱신 완료 후 <code>processQueue(null, newToken)</code> 호출로 대기 중인 요청들에 새 토큰을 전달하여 한꺼번에 재실행
      </p>
      <img
        src={refreshToken2}
        alt="리프레시 토큰 이후 화면"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      />

      <br></br>
      <br></br>

      <h3>[참고 링크]</h3>
      <div className="corea-content__link">
        <img
          src={github}
          alt="깃허브 로고"
          width="24px"
        />
        <a
          href="https://github.com/woowacourse-teams/2024-corea/pull/239"
          target="_blank"
          rel="noopener noreferrer"
        >
          [FE] 깃허브 로그인 추가(#150) #239
        </a>
      </div>
      <div className="corea-content__link">
        <img
          src={jinsillogo}
          alt="진블로그 로고"
          width="24px"
        />
        <a
          href="https://chlwlstlf.github.io/woowacourse/woowacourse-level3-refresh-token/#%EC%B2%98%EC%9D%8C-%EC%9E%91%EC%84%B1%ED%96%88%EB%8D%98-%EC%9E%98%EB%AA%BB%EB%90%9C-%EC%BD%94%EB%93%9C"
          target="_blank"
          rel="noopener noreferrer"
        >
          [우테코] Level3 Refresh Token
        </a>
      </div>
    </div>
  );
};

export default TokenRefreshContent;
