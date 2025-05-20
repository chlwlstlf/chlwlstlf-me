import React, { useState, useEffect } from "react";
import "./Header.css";

const sections = [
  { id: "about", label: "About Me" },
  { id: "stacks", label: "Stacks" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const opts: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 절반 이상 보일 때 콜백
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, opts);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <nav className="menu">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`menu-item${active === id ? " active" : ""}`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
