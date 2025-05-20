import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import coreaThumb from "../../assets/corea-thumb.png";
import conseatThumb from "../../assets/conseat-thumb.png";

const Projects = () => (
  <section
    id="projects"
    className="projects"
  >
    <span className="projects-title">&lt;Projects /&gt;</span>

    <div className="projects-list">
      <ProjectCard
        thumbnail={coreaThumb}
        title="코레아 (CoReA)"
        subtitle="코드 리뷰 매칭 플랫폼"
        period="2024.07.01 ~ 2024.11.29"
        team="Frontend 3명, Backend 4명"
        contribution="20%"
        skills={["React", "TypeScript", "Storybook", "Jest", "TanStack Query", "styled-components", "MSW"]}
        links={[
          { label: "Demo", href: "https://code-review-area.com" },
          { label: "GitHub", href: "https://github.com/woowacourse-teams/2024-corea" },
        ]}
      />
      <ProjectCard
        thumbnail={conseatThumb}
        title="콘시트 (CON:SEAT)"
        subtitle="콘서트 자리별 시야 확인 서비스"
        period="2025.03 ~ 진행중"
        team="PM 1명, 디자이너 1명, Frontend 2명, Backend 2명"
        contribution="20%"
        skills={["Next.js", "TypeScript", "SCSS", "TanStack Query"]}
        links={[
          { label: "Demo", href: "https://concertseat.site" },
          { label: "GitHub", href: "https://github.com/ConSeat/frontend" },
        ]}
      />
    </div>
  </section>
);

export default Projects;
