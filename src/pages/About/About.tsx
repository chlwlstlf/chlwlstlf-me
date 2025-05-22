import React, { useState, useEffect } from "react";
import "./About.css";
import { useModal } from "../../hooks/useModal";
import { ImageModal } from "../../components/ImageModal.tsx/ImageModal";
import blogImg from "../../assets/blog.png";
import figmaCommentImg from "../../assets/figma-comments.png";

const fullText = "프론트엔드 개발자 최진실입니다.";

const About = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const blogModal = useModal();
  const figmaModal = useModal();

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

      <h2 className="about-title">&lt;AboutMe /&gt;</h2>
      <h1 className="main-title">
        {text}
        <span className="blink">|</span>
      </h1>

      <div className="info">
        <div className="item">Edu : 세종대학교 데이터사이언스학과</div>

        <div className="item">
          GitHub :{" "}
          <a
            className="link"
            href="https://github.com/chlwlstlf"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/chlwlstlf
          </a>
        </div>

        <div className="item">
          기술 블로그 :{" "}
          <a
            className="link"
            href="https://github.com/chlwlstlf"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://chlwlstlf.github.io
          </a>
        </div>
      </div>

      <div className="details">
        <h2>개발 과정을 기록하고 팀원과 공유합니다.</h2>
        <ul>
          <li>문제를 해결하면 끝내지 않고, 기술 블로그로 정리해 팀에 공유하는 습관이 있습니다.</li>
          <li>
            직접{" "}
            <button
              className="link-button"
              onClick={blogModal.open}
            >
              팀 기술 블로그 공간
            </button>{" "}
            을 제안하고 꾸준히 작성하면서, 실제로 동료들이 참고할 수 있는 지식 자산을 만들어가고 있습니다.
          </li>
        </ul>

        <h2>UX를 주도적으로 개선합니다.</h2>
        <ul>
          <li>
            직접 사용하며 불편을 느낀 순간마다 Figma에{" "}
            <button
              className="link-button"
              onClick={figmaModal.open}
            >
              코멘트
            </button>
            를 남겼습니다.
          </li>

          <li>
            말로만 설명하기 어려운 부분은 <strong>빠르게</strong> 프로토타입으로 만들어{" "}
            <a
              className="link-button"
              href="https://github.com/ConSeat/frontend/pull/114"
              target="_blank"
              rel="noopener noreferrer"
            >
              전/후 비교 영상
            </a>
            을 제작한 뒤,
            <br></br>
            디자이너, PM과 함께 시연하며 즉시 피드백을 주고받았습니다.
          </li>
          <li>그 결과 “UX 걱정 없이 완벽하게 구현된 프로젝트는 처음이에요”라는 동료 피드백을 받았습니다.</li>
        </ul>
      </div>

      {/* 블로그 모달 */}
      <ImageModal
        isOpen={blogModal.isOpen}
        onClose={blogModal.close}
      >
        <h2>팀 기술 블로그 공간</h2>
        <img
          src={blogImg}
          alt="블로그 스크린샷"
          style={{ width: "80vw", height: "auto" }}
        />
      </ImageModal>

      {/* Figma 모달 */}
      <ImageModal
        isOpen={figmaModal.isOpen}
        onClose={figmaModal.close}
      >
        <h2>Figma 코멘트</h2>
        <img
          src={figmaCommentImg}
          style={{ width: "100%", height: "auto" }}
          alt="Figma 코멘트 예시"
        />
      </ImageModal>
    </section>
  );
};

export default About;
