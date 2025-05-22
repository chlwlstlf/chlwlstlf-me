// CoReA
import coreaLogo from "../../../assets/corea-logo.png";
import coreaThumb from "../../../assets/corea-thumb.png";
import CoreaDescription from "../descriptions/CoreaDescription/CoreaDescription";

import conseatThumb from "../../../assets/conseat-thumb.png";
export interface ProjectData {
  id: string;
  logo?: string;
  thumbnail: string;
  title: string;
  subtitle: string;
  introduction: string;
  users?: string;
  period: string;
  team: string;
  contribution: string;
  skills: string[];
  links: { label: string; href: string }[];
  description: React.ReactNode;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "corea",
    logo: coreaLogo,
    thumbnail: coreaThumb,
    title: "코레아 (CoReA)",
    subtitle: "코드 리뷰 매칭 플랫폼",
    introduction: "리뷰어, 리뷰어를 구하는 과정을 자동화하여, 참여 즉시 리뷰어, 리뷰이를 자동 매칭하고 PR 및 코멘트 링크를 제공하는 서비스",
    users: "운영 기간 DAU 250명, 총 사용자 310명",
    period: "2024.07.01 ~ 2024.11.29",
    team: "Frontend3 · Backend4",
    contribution: "20%",
    skills: ["React", "TypeScript", "Storybook", "Jest", "TanStack Query", "styled-components", "MSW"],
    links: [
      { label: "Demo", href: "https://code-review-area.com" },
      {
        label: "GitHub",
        href: "https://github.com/woowacourse-teams/2024-corea",
      },
      {
        label: "Storybook",
        href: "https://6698ad394f6053ff8ecdce0c-agwknksrue.chromatic.com/",
      },
    ],
    description: <CoreaDescription />,
  },
  {
    id: "conseat",
    logo: coreaLogo,
    thumbnail: conseatThumb,
    title: "콘시트 (CON:SEAT)",
    subtitle: "콘서트 자리별 시야 확인 서비스",
    introduction: "K-POP 팬들을 위한 콘서트 자리별 시야 확인 서비스",
    period: "2025.03 ~ 진행중",
    team: "PM1 · 디자이너1 · Frontend2 · Backend2",
    contribution: "20%",
    skills: ["Next.js", "TypeScript", "SCSS", "TanStack Query"],
    links: [
      { label: "Demo", href: "https://concertseat.site" },
      { label: "GitHub", href: "https://github.com/ConSeat/frontend" },
    ],
    description: <CoreaDescription />,
  },
];
