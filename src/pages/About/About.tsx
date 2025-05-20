import React, { useState, useEffect } from "react";
import "./About.css";

const fullText = "프론트엔드 개발자 최진실입니다.";

const About = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, count + 1));
        setCount(count + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <section
      id="about"
      className="about"
    >
      <div className="wave-container">
        <div className="wave wave--one" />
        <div className="wave wave--two" />
        <div className="wave wave--three" />
      </div>

      <span className="title">&lt;AboutMe /&gt;</span>
      <h1 className="main-title">
        {text}
        <span className="blink">|</span>
      </h1>

      <div className="info">
        <div className="item">Name : 최진실</div>
        <div className="item">Birth : 2000.10.10</div>
        <div className="item">Edu : 세종대학교 데이터사이언스학과</div>
        <div className="item">Email : chl378900@naver.com</div>
      </div>

      <div className="details">
        <h2>이슈를 기록하고 공유하는 습관</h2>
        <ul>
          <li>문제를 해결하면 끝내지 않고, 기술 블로그로 정리해 팀에 공유하는 습관이 있습니다.</li>
          <li>
            직접{" "}
            <a
              href="https://github.com/user-attachments/assets/6f210460-cc19-419b-8d32-ff93a4305874"
              target="_blank"
              rel="noopener noreferrer"
            >
              팀 기술 블로그 공간
            </a>{" "}
            을 제안하고 꾸준히 작성해 지식 자산을 만들어가고 있습니다.
          </li>
        </ul>

        <h2>주도적으로 UX 개선</h2>
        <ul>
          <li>
            불편을 느낄 때마다 Figma에{" "}
            <a
              href="https://github.com/user-attachments/assets/65b54b95-dd87-4360-8479-c59112130b97"
              target="_blank"
              rel="noopener noreferrer"
            >
              코멘트
            </a>
            를 남겼습니다.
          </li>
          <li>
            프로토타입 전/후 비교 영상으로{" "}
            <a
              href="https://github.com/ConSeat/frontend/pull/114"
              target="_blank"
              rel="noopener noreferrer"
            >
              시연
            </a>
            하며 즉시 피드백을 주고받았습니다.
          </li>
          <li>“UX 걱정 없이 완벽하게 구현된 프로젝트는 처음이에요”라는 동료 피드백을 받았습니다.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
