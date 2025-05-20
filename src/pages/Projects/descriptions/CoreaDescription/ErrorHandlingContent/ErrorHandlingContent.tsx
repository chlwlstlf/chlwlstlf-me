import "./ErrorHandlingContent.css";
import errorTypes from "../../../../../assets/error-type.png";
import getError from "../../../../../assets/get-error.png";
import restError from "../../../../../assets/rest-error.png";

const ErrorHandlingContent = () => {
  return (
    <div className="error-handling-content">
      <h3>[문제점]</h3>
      <p>
        401 인증 오류 시 단순 alert 처리로 인해 사용자에게 재로그인 유도 흐름이 연결되지 않고 <strong>UX 단절</strong>이 발생했습니다.
      </p>

      <br></br>

      <h3>[원인 분석 - 에러 종류 파악]</h3>
      <img
        src={errorTypes}
        alt="에러 종류"
        width="70%"
      />

      <br></br>

      <h3>[아키텍처 흐름]</h3>
      <p>
        <strong>GET 요청</strong>
        <br></br>
        <img
          src={getError}
          alt="get 에러 흐름"
          width="70%"
        />
      </p>

      <br></br>

      <p>
        <strong>POST, PUT, DELETE 요청</strong>
        <br></br>
        <img
          src={restError}
          alt="나머지 에러 흐름"
          width="70%"
        />
      </p>

      <br></br>

      <h3>[해결방법]</h3>
      <p>
        1) <strong>CustomError 전략 패턴</strong> 도입 → Toast / Modal / Redirect / Fallback 역할 분리
        <br></br>
        2) <strong>AuthorizationError</strong> 발생 시 “자동 로그인 모달”로 처리
        <code>onConfirm</code>: 재로그인, <code>onCancel</code>: 홈 이동
        <br></br>
        3) <strong>TanStack Query networkMode</strong> +<strong> 네트워크 감지 훅</strong> 활용 → 오프라인 toast 안내, 온라인 복귀 시 자동 재시도
      </p>

      <br></br>

      <h3>[성과]</h3>
      <p>401 인증 후 재로그인 흐름 50% 개선</p>
    </div>
  );
};

export default ErrorHandlingContent;
