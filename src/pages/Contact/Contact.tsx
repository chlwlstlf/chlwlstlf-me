import React from "react";
import EmailForm from "../../components/EmailForm/EmailForm";
import "./Contact.css";

import githubIcon from "../../assets/Github.svg";
import gmailIcon from "../../assets/gmail.png";
import jinsillogo from "../../assets/jinsillogo.png";
import resumeIcon from "../../assets/resume.png";

const Contact = () => (
  <section
    id="contact"
    className="contact"
  >
    <h2 className="contact-title">&lt;Contact /&gt;</h2>

    <p className="contact-note">
      쌓아온 <span className="highlight">기록</span>과 <span className="highlight">빠른 실행력</span>으로
      <br />첫 코드부터 바로 <strong>팀에 도움이 되겠습니다</strong>! 🚀
    </p>

    <div className="contact-list">
      <a
        href="https://github.com/chlwlstlf"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button unified"
      >
        <img
          src={githubIcon}
          alt="GitHub 로고"
          width="24"
          height="24"
        />
        <span>GitHub</span>
      </a>

      <a
        href="https://chlwlstlf.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button unified"
      >
        <img
          src={jinsillogo}
          alt="블로그 로고"
          width="24"
          height="24"
        />
        <span>Blog</span>
      </a>

      <a
        href="mailto:chl378900@naver.com"
        className="contact-button unified"
      >
        <img
          src={gmailIcon}
          alt="이메일 로고"
          width="24"
          height="24"
        />
        <span>Email</span>
      </a>

      <a
        href="/resume.pdf"
        download="최진실_이력서.pdf"
        className="contact-button unified"
      >
        <img
          src={resumeIcon}
          alt="이력서 아이콘"
          width="24"
          height="24"
        />
        <span>Resume</span>
      </a>
    </div>

    <br></br>

    <EmailForm />
  </section>
);

export default Contact;
