import React, { useState, useEffect } from "react";
import "./About.css";
import { useModal } from "../../hooks/useModal";
import blogImg from "../../assets/blog.png";
import figmaCommentImg from "../../assets/figma-comments.png";
import ImageModal from "../../components/ImageModal.tsx/ImageModal";
import { IconType } from "react-icons";
import { FiExternalLink as _FiExternalLink } from "react-icons/fi";

const FiExternalLink = _FiExternalLink as IconType;

const fullText = "꼼꼼히 기록하고, 빠르게 실행하는 프론트엔드 개발자 최진실입니다.";

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
      }, 100);
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
        <h2>원인을 깊이 분석해 문제를 해결하고, 그 과정에서 배우고 나누는 것을 좋아합니다.</h2>
        <ul>
          <li>
            가설을 세우고{" "}
            <a
              className="link-button"
              href="https://chlwlstlf.github.io/woowacourse/woowacourse-level5-isComposing/#%EB%8B%A4%EC%96%91%ED%95%9C-os%EC%99%80-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C%EC%9D%98-ime"
              target="_blank"
              rel="noopener noreferrer"
            >
              직접 실험과 디버깅
              <FiExternalLink
                style={{ marginLeft: "0.1em" }}
                aria-hidden="true"
              />
            </a>
            으로 문제의 근본 원인을 찾는 과정을 즐깁니다.
          </li>
          <li>구조를 이해해야 근본적으로 해결할 수 있다고 생각하며, 결과를 글로 정리해 팀원들과 공유하고 기술적인 토론을 나눕니다.</li>
        </ul>

        <h2>협업의 가치를 중요하게 생각하며, 팀 내 소통과 개발 협업 흐름을 원활하게 만들기 위해 노력합니다.</h2>
        <ul>
          <li>
            팀원들로부터 “밝고 책임감 있는 동료” 라는{" "}
            <a
              className="link-button"
              href="https://www.notion.so/20fa9d0cebf7808896bdd85b6dfc2a57?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              피드백
              <FiExternalLink
                style={{ marginLeft: "0.1em" }}
                aria-hidden="true"
              />
            </a>
            을 가장 많이 받았으며, 편하게 협업할 수 있는 분위기와 유연한 소통을 주도했습니다.
          </li>

          <li>
            <a
              className="link-button"
              href="https://github.com/ConSeat/frontend/wiki/%EA%B0%9C%EB%B0%9C-%E2%80%90-api-%EC%B6%94%EA%B0%80-%EB%B0%A9%EB%B2%95"
              target="_blank"
              rel="noopener noreferrer"
            >
              개발 가이드
              <FiExternalLink
                style={{ marginLeft: "0.1em" }}
                aria-hidden="true"
              />
            </a>
            에 휴먼 에러가 발생하기 쉬운 지점을 정리하여 기능 확장 시 실수를 줄일 수 있도록 도왔습니다.
          </li>
          <li>에러 트래킹 알림에 유의미한 정보를 추가해 에러 대응 속도와 팀 내 정보 공유 흐름을 향상시켰습니다.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
