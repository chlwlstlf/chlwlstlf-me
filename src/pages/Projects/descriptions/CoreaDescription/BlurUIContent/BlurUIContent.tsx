import blurUI from "../../../../../assets/blur-ui.png";
import github from "../../../../../assets/Github.svg";

const BlurUIContent = () => {
  return (
    <div className="corea-content">
      <h3>[문제점]</h3>
      <p>코드 리뷰 마감일 이전까지만 피드백 작성·수정 가능</p>
      <p>사용자 피드백 예시</p>
      <ul>
        <li>"코드 리뷰 3명 했는데 돌려받은 피드백이 없어요."</li>
        <li>"깜빡하고 못 썼는데 방이 마감됐습니다."</li>
      </ul>

      <br></br>

      <h3>[기획 및 개발]</h3>
      <p>
        <strong>1. 피드백 작성 및 수정 계속 가능</strong>
        <ul>
          <li>마감일 이후에도 작성·수정 기능 확장</li>
          <li>작성 압박 완화, 서비스 유연성↑</li>
        </ul>
      </p>

      <p>
        <strong>2. 피드백 블러 처리</strong>
        <ul>
          <li>상호 피드백 전까지 블러 처리 도입</li>
          <li>적극적인 피드백 교류 유도</li>
        </ul>
        <details>
          <summary className="corea-content-details-summary">🔒 피드백 미작성 시 블러 처리 UI 예시</summary>
          <img
            src={blurUI}
            alt="블러 화면"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          />
        </details>
      </p>

      <br></br>

      <h3>[성과]</h3>
      <p>
        이전: <strong>452건 (49.8%)</strong>
      </p>
      <p>
        이후: <strong>521건 (57.3%)</strong> (+7.5%, +69건)
      </p>

      <br></br>

      <h3>[배운점]</h3>
      <ul>
        <li>사용자 피드백 반영의 즉각적 효과 체감</li>
        <li>마감 기반 UX 유연성 설계 경험</li>
      </ul>

      <br></br>

      <h3>[참고 링크]</h3>
      <div className="corea-content__link">
        <img
          src={github}
          alt="깃허브 로고"
          width="24px"
        />
        <a
          href="https://github.com/woowacourse-teams/2024-corea/pull/706"
          target="_blank"
          rel="noopener noreferrer"
        >
          [FE] 피드백 미작성시 받은 피드백 안보이는 기능 추가(#703) #706
        </a>
      </div>
    </div>
  );
};

export default BlurUIContent;
