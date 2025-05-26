import github from "../../../../../assets/Github.svg";
import jinsillogo from "../../../../../assets/jinsillogo.png";

const ReviewPageContent = () => {
  return (
    <div className="conseat-content">
      <h3>[문제점]</h3>
      <ul>
        <li>리뷰 작성은 7단계로 구성</li>
        <li>페이지가 길어질수록 원하는 입력 섹션으로 이동하기 위해 과도한 스크롤·클릭이 필요함</li>
      </ul>

      <br></br>

      <h3>[해결방법]</h3>
      <div className="conseat-content-detail">
        <strong>1) 자동 스크롤</strong>
        <ul>
          <li>
            <strong>useAutoScroll</strong> 커스텀 훅을 구현, 새로운 섹션이 마운트될 때 자동으로 해당 섹션으로 스크롤
          </li>
          <li>dropdown도 새로 마운트될 때 자동으로 열림 동작</li>
        </ul>
        <details>
          <summary className="conseat-content-details-summary">🔄 자동 스크롤 시연 영상: 새 섹션 진입 시 포커스 이동</summary>
          <video
            src="https://github.com/user-attachments/assets/a1e3b760-8cbe-4530-8f73-cb0c8edc18f8"
            controls
            muted
            className="d-block rounded-bottom-2 border-top width-fit"
            style={{ width: "100%", maxWidth: "700px" }}
          />
        </details>
      </div>

      <br></br>

      <div className="conseat-content-detail">
        <strong>2) 유효하지 않은 항목으로 자동 스크롤</strong>
        <ul>
          <li>'작성 완료' 클릭 시 유효성 검사에 실패한 첫 번째 섹션으로 이동</li>
          <li>사용자가 바로 입력을 이어갈 수 있게 개선</li>
        </ul>
        <details>
          <summary className="conseat-content-details-summary">⚠️ 유효성 실패 시 자동 이동 시연 영상</summary>
          <video
            src="https://github.com/user-attachments/assets/1f608aa7-2b56-4ab7-b223-60455584eafe"
            controls
            muted
            className="d-block rounded-bottom-2 border-top width-fit"
            style={{ width: "100%", maxWidth: "700px" }}
          />
        </details>
      </div>

      <br></br>

      <h3>[성과]</h3>
      <ul>
        <li>스크롤 없이 작성 가능</li>
        <li>드롭다운 열림 클릭없이 선택 가능(클릭 약 3회 감소)</li>
      </ul>

      <br></br>

      <h3>[참고 링크]</h3>
      <div className="conseat-content__link">
        <img
          src={github}
          alt="GitHub 로고"
          width="20"
          height="20"
        />
        <a
          href="https://github.com/ConSeat/frontend/pull/114"
          target="_blank"
          rel="noopener noreferrer"
        >
          [feat] 리뷰 후기 작성 auto focusing 추가(#113) #114
        </a>
      </div>
      <div className="conseat-content__link">
        <img
          src={jinsillogo}
          alt="블로그 로고"
          width="20"
          height="20"
        />
        <a
          href="https://chlwlstlf.github.io/next/review-ux/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [Next.js] 리뷰 작성 UX 개선하기
        </a>
      </div>
    </div>
  );
};

export default ReviewPageContent;
