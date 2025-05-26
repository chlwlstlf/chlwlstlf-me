import github from "../../../../../assets/Github.svg";
import jinsillogo from "../../../../../assets/jinsillogo.png";
import minimap from "../../../../../assets/minimap.png";

const SVGMapContent = () => {
  return (
    <div className="conseat-content">
      <h3>[문제점]</h3>
      <div className="conseat-content-detail">
        <ul>
          <li>
            <code>&lt;Image&gt;</code>로 삽입한 SVG가 비트맵으로 처리되어 클릭 이벤트 바인딩 불가, CSS 필터(밝기·드롭섀도우) 적용 불가
          </li>
          <li>프론트엔드 번들에 SVG 파일이 직접 포함돼 번들 크기 증가</li>
        </ul>
      </div>
      <br></br>
      <h3>[해결 방법]</h3>
      <div className="conseat-content-detail">
        <strong>1) SVG 인라인화</strong>
        <br />
        CloudFront에 호스팅된 SVG를 <code>fetch()</code>로 문자열로 가져와
        <code>dangerouslySetInnerHTML</code>로 삽입 → DOM 제어 가능
      </div>
      <div className="conseat-content-detail">
        <strong>2) 좌석 클릭 로직</strong>
        <br />
        클릭된 좌석 그룹(<code>g[id^="btn"]</code>)에만 클래스 토글 → 하나의 좌석만 밝고 나머지는 어둡게 처리
      </div>
      <div className="conseat-content-detail">
        <strong>3) Pan/Zoom 한계 설정</strong>
        <br />
        <code>clamp()</code> 유틸로 translate 한계 설정 → SVG가 컨테이너 바깥으로 빠지지 않도록 방지
      </div>
      <div className="conseat-content-detail">
        <strong>4) 미니맵 연동</strong>
        <br />
        확대(scale)·이동(offset)을 기반으로 viewport 박스를 산출해 축소판에 렌더링 → 현재 보고 있는 영역을 실시간 시각화
        <details>
          <summary className="conseat-content-details-summary">📍 미니맵 뷰포트 계산 시각화</summary>
          <img
            src={minimap}
            alt="미니맵 뷰포트 계산 다이어그램"
            style={{
              width: "100%",
              maxWidth: 600,
              display: "block",
              border: "1px solid #b7b7b7",
              borderRadius: "15px",
            }}
          />
        </details>
      </div>
      <div className="conseat-content-detail">
        <strong>5) 크로스 브라우저 호환</strong>
        <br />
        SVG 문자열 내 <code>&lt;defs&gt;</code> 필터(밝기+드롭섀도우) 주입 → iOS·Android·데스크톱 모두 동일한 밝기 효과 구현
      </div>
      <br></br>
      <h3>[구현 효과]</h3>
      <ul>
        <li>SVG 내부 요소 완전 제어 → 클릭, 애니메이션, CSS 효과 자유자재</li>
        <li>pan/zoom 안정화 → 컨테이너 밖 노출 차단, 미니맵으로 빠른 위치 파악</li>
        <li>크로스 브라우저 호환성 확보 → 데스크톱·모바일 모두 일관된 UX</li>
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
          href="https://github.com/ConSeat/frontend/pull/55"
          target="_blank"
          rel="noopener noreferrer"
        >
          [feat] 좌석 클릭 기능 추가(#52) #55
        </a>
      </div>
      <div className="conseat-content__link">
        <img
          src={github}
          alt="GitHub 로고"
          width="20"
          height="20"
        />
        <a
          href="https://github.com/ConSeat/frontend/pull/129"
          target="_blank"
          rel="noopener noreferrer"
        >
          [fix] 모바일 좌석 배치도 색상 밝게 안 되는 이슈 해결(#128) #129
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
          href="https://chlwlstlf.github.io/next/stage-view/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [Next.js] 좌석 배치도 만들기
        </a>
      </div>
    </div>
  );
};

export default SVGMapContent;
