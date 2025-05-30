import dropdown1 from "../../../../../assets/dropdown1.png";
import dropdown2 from "../../../../../assets/dropdown2.png";
import dropdown3 from "../../../../../assets/dropdown3.png";

import github from "../../../../../assets/Github.svg";
import jinsillogo from "../../../../../assets/jinsillogo.png";

const DropdownContent = () => {
  return (
    <div className="conseat-content">
      <h3>[문제점]</h3>
      <ul>
        <li>Figma에 일반형 · 입력형 · 모달형 등 17개가 넘는 다양한 드롭다운 UI</li>
        <li>개별 구현 시 코드 중복 및 유지보수 비용 증가</li>
      </ul>

      <br></br>

      <h3>[해결방법]</h3>
      <ul>
        <li>Compound Component 패턴으로 공통 로직·스타일 캡슐화</li>
        <li>Trigger·Menu·Item·Modal 컴포넌트 조합으로 다양한 변형 지원</li>
      </ul>

      <div className="conseat-content-detail">
        <strong>1) 기본 Dropdown</strong>
        <img
          src={dropdown1}
          alt="기본 Dropdown"
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

      <div className="conseat-content-detail">
        <strong>2) Dropdown + Input</strong>
        <img
          src={dropdown2}
          alt="인풋 Dropdown"
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

      <div className="conseat-content-detail">
        <strong>3) Dropdown + Modal</strong>
        <img
          src={dropdown3}
          alt="모달 Dropdown"
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

      <br></br>
      <br></br>

      <h3>[성과]</h3>
      <ul>
        <li>
          코드 중복을 제거하고 재사용성을 강화: <strong>약 17개 드롭다운을 하나의 컴포넌트</strong>로 구현
        </li>
        <li>팀원 간 동일한 API 사용으로 개발 속도 향상 및 유지보수 편의성 확보</li>
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
          href="https://github.com/ConSeat/frontend/pull/19"
          target="_blank"
          rel="noopener noreferrer"
        >
          [feat] dropdownInput, dropdown 컴포넌트 생성(#17) #19
        </a>
      </div>
      <div className="corea-content__link">
        <img
          src={jinsillogo}
          alt="진블로그 로고"
          width="24px"
        />
        <a
          href="https://chlwlstlf.github.io/next/dropdown/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [Next.js] 재사용 가능한 Dropdown 컴포넌트 만들기
        </a>
      </div>
    </div>
  );
};

export default DropdownContent;
