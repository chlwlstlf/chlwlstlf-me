import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import "./EmailForm.css";

const EmailForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    sendForm("service_leh43zy", "template_dzbufis", formRef.current, "ICkBSCbKUsIpNnnSq")
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="email-form"
    >
      <div className="email-row">
        <label
          htmlFor="name"
          className="email-field"
        >
          <span className="email-label">이름 / 소속</span>
          <input
            id="name"
            type="text"
            placeholder="☁︎ ☁︎ ☁︎"
            name="user_name"
            autoComplete="name"
            required
            className="email-input"
          />
        </label>

        <label
          htmlFor="email"
          className="email-field"
        >
          <span className="email-label">이메일</span>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            name="user_email"
            autoComplete="email"
            required
            className="email-input"
          />
        </label>
      </div>

      <label
        htmlFor="message"
        className="email-field"
      >
        <span className="email-label">내용</span>
        <textarea
          id="message"
          name="message"
          rows={10}
          placeholder="궁금한 내용이 있다면 작성해 주세요 :)"
          required
          className="email-textarea"
        />
      </label>

      <button
        type="submit"
        className="email-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "전송 중…" : status === "success" ? "전송 완료!" : status === "error" ? "다시 시도" : "메일 보내기"}
      </button>

      {status === "success" && <p className="email-success">메일이 정상적으로 전송되었습니다 🎉</p>}
      {status === "error" && <p className="email-error">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>}
    </form>
  );
};

export default EmailForm;
