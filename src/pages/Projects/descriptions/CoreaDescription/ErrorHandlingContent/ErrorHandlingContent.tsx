import "./ErrorHandlingContent.css";
import errorTypes from "../../../../../assets/error-type.png";
import getError from "../../../../../assets/get-error.png";
import restError from "../../../../../assets/rest-error.png";
import authorizationError from "../../../../../assets/authorization-error.png";
import github from "../../../../../assets/Github.svg";
import jinsillogo from "../../../../../assets/jinsillogo.png";

const ErrorHandlingContent = () => {
  return (
    <div className="error-handling-content">
      <h3>[문제점]</h3>
      <p>
        401 인증 오류 시 단순 alert 처리로 인해 사용자가 직접 로그인 버튼을 클릭해야 하는 <strong>UX 단절</strong>이 발생했습니다.
      </p>

      <br></br>

      <h3>[해결방법]</h3>
      <p>
        <strong>1) 전역 에러 수집</strong>
        <br></br>
        Context API로 전역 에러를 수집하고, <code>queryClient</code>에 에러를 등록하면 <code>ErrorManager</code>가 트리거 되어 설정된 전략에 따라 적절한 UI를 노출합니다.
      </p>
      <p>
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
      </p>
      <br></br>
      <p>
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
      </p>

      <br></br>

      <p>
        <strong>2) CustomError로 주요 에러 처리</strong>
        <br></br>
        <code>Error</code> 클래스를 상속해 전략(strategy)과 HTTP 상태 코드를 포함하는 <code>CustomError</code>를 구현하고, 이를 기반으로 `AuthorizationError`, `NetworkError`, `ApiError` 등 주요 에러를 일관된 전략으로 처리했습니다.
      </p>
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

      <br></br>

      <p>
        <strong>3) AuthorizationError 시 모달로 재로그인 유도</strong>
        <br></br>
        <strong>AuthorizationError</strong> 발생 시 “자동 로그인 모달”로 처리
        <code>onConfirm</code>: 재로그인, <code>onCancel</code>: 홈 이동
        <br></br>
      </p>
      <img
        src={authorizationError}
        alt="재로그인 유도 화면"
        width="70%"
      />

      <br></br>
      <br></br>

      <h3>[성과]</h3>
      <p>
        <strong>401 인증 후 재로그인 흐름 50% 개선</strong>
        <br></br>
        이전 : 1️⃣ alert 확인 버튼 클릭 → 2️⃣ 로그인 버튼 클릭
        <br></br>
        이후 : 1️⃣ 모달의 로그인하기 버튼 클릭
      </p>

      <br></br>

      <h3>[참고 링크]</h3>
      <div className="error-handling-content__link">
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
      <div className="error-handling-content__link">
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
