import "./Contact.css";

const Contact = () => (
  <section
    id="contact"
    className="contact"
  >
    <h2 className="contact-title">&lt;Contact /&gt;</h2>

    <div className="contact-list">
      <button className="contact-button">
        <a
          href="https://github.com/chlwlstlf"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </button>

      <button className="contact-button">
        <a href="mailto:chl378900@naver.com">email</a>
      </button>

      <button className="contact-button">
        <a
          href="https://chlwlstlf.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </button>

      <button className="contact-button">
        <a
          href="/resume.pdf"
          download="최진실_이력서.pdf"
        >
          이력서 Download PDF
        </a>
      </button>
    </div>

    <p className="contact-note">협업 문의나 프로젝트 제안은 언제든 환영합니다!</p>
  </section>
);

export default Contact;
