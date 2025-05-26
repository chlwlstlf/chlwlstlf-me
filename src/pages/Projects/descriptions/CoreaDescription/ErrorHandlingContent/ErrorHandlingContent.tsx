import errorTypes from "../../../../../assets/error-type.png";
import getError from "../../../../../assets/get-error.png";
import restError from "../../../../../assets/rest-error.png";
import authorizationError from "../../../../../assets/authorization-error.png";
import github from "../../../../../assets/Github.svg";
import jinsillogo from "../../../../../assets/jinsillogo.png";

const ErrorHandlingContent = () => {
  return (
    <div className="corea-content">
      <h3>[문제점]</h3>
      <div className="corea-content-detail">
        401 인증 오류 시 단순 alert 처리로 인해 사용자가 직접 로그인 버튼을 클릭해야 하는 <strong>UX 단절</strong> 발생
      </div>

      <br></br>

      <h3>[해결방법]</h3>
      <div className="corea-content-detail">
        <strong>1) 전역 에러 수집</strong>
        <ul>
          <li>
            Context API로 에러를 모아 <code>queryClient</code>의 <code>onError</code>에서 변경
          </li>
          <li>
            등록된 에러는 <code>ErrorManager</code>가 전략에 따라 UI를 노출
          </li>
        </ul>
      </div>

      <div className="corea-content-detail">
        <strong>GET 요청</strong>
        <br></br>
        <img
          src={getError}
          alt="get 에러 흐름"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "700px",
            border: "1px solid #b7b7b7",
            borderRadius: "15px",
          }}
        />
      </div>

      <div className="corea-content-detail">
        <strong>POST, PUT, DELETE 요청</strong>
        <br></br>
        <img
          src={restError}
          alt="나머지 에러 흐름"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "700px",
            border: "1px solid #b7b7b7",
            borderRadius: "15px",
          }}
        />
      </div>

      <br></br>

      <div className="corea-content-detail">
        <strong>2) CustomError로 주요 에러 처리</strong>
        <ul>
          <li>
            <code>Error</code> 클래스를 상속해 전략(strategy)과 HTTP 상태 코드를 포함하는 <code>CustomError</code> 구현
          </li>
          <li>이를 기반으로 `AuthorizationError`, `NetworkError`, `ApiError` 등 주요 에러를 일관된 전략으로 처리</li>
        </ul>
        <details>
          <summary className="corea-content-details-summary">🚦 에러 분류 매트릭스</summary>
          <img
            src={errorTypes}
            alt="에러 종류"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "700px",
              border: "1px solid #b7b7b7",
              borderRadius: "15px",
            }}
          />
        </details>
      </div>

      <br></br>

      <div className="corea-content-detail">
        <strong>3) AuthorizationError 시 모달로 재로그인 유도</strong>
        <ul>
          <li>
            <strong>AuthorizationError</strong> 발생 시 “자동 로그인 모달”로 처리
          </li>
          <li>
            <code>onConfirm</code>: 재로그인, <code>onCancel</code>: 홈 이동
          </li>
        </ul>
        <details>
          <summary className="corea-content-details-summary">🔐 재로그인 유도 모달 화면</summary>
          <img
            src={authorizationError}
            alt="재로그인 유도 화면"
            width="70%"
          />
        </details>
      </div>

      <br></br>

      <h3>[성과]</h3>
      <div className="corea-content-detail">
        <strong>401 인증 후 재로그인 흐름 50% 개선</strong>
        <br></br>
        이전 : 1️⃣ alert 확인 버튼 클릭 → 2️⃣ 로그인 버튼 클릭
        <br></br>
        이후 : 1️⃣ 모달의 로그인하기 버튼 클릭
      </div>

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
          href="https://chlwlstlf.github.io/woowacourse/woowacourse-level5-errorboundary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [우테코] Level5 ErrorBoundary 전략 세우기
        </a>
      </div>
    </div>
  );
};

export default ErrorHandlingContent;
