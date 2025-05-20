// src/pages/Stacks/Stacks.tsx
import React from "react";
import "./Stacks.css";

import jsIcon from "../../assets/JavaScript.svg";
import tsIcon from "../../assets/TypeScript.svg";
import reactIcon from "../../assets/React.svg";
import nextIcon from "../../assets/NextJS.svg";
import tanstackQueryIcon from "../../assets/TanStackQuery.svg";
import styledIcon from "../../assets/StyledComponents.svg";
import gitIcon from "../../assets/Github.svg";

const TECH_STACK = [
  { icon: jsIcon, label: "JavaScript" },
  { icon: tsIcon, label: "TypeScript" },
  { icon: reactIcon, label: "React" },
  { icon: nextIcon, label: "Next.js" },
  { icon: tanstackQueryIcon, label: "TanStack-Query" },
  { icon: styledIcon, label: "styled-components" },
  { icon: gitIcon, label: "GitHub" },
];

export default function Stacks() {
  return (
    <section
      id="stacks"
      className="stacks"
    >
      <h2 className="stacks-title">&lt;Stacks /&gt;</h2>

      <div className="stacks-card">
        <div className="stacks-grid">
          {TECH_STACK.map(({ icon, label }) => (
            <div
              key={label}
              className="stacks-item"
            >
              <img
                src={icon}
                alt={label}
                className="stacks-icon"
              />
              <span className="stacks-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
