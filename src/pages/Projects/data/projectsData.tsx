// CoReA
import coreaLogo from "../../../assets/corea-logo.png";
import coreaThumb from "../../../assets/corea-thumb.png";
import CoreaDescription from "../descriptions/CoreaDescription/CoreaDescription";

// CON:SEAT
import conseatLogo from "../../../assets/conseat-logo.png";
import conseatThumb from "../../../assets/conseat-thumb.png";
import ConseatDescription from "../descriptions/ConseatDescription/ConseatDescription";
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
  role?: string;
  skills: string[];
  links: { label: string; href: string }[];
  description: React.ReactNode;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "conseat",
    logo: conseatLogo,
    thumbnail: conseatThumb,
    title: "콘시트 (CON:SEAT)",
    subtitle: "콘서트 자리별 시야 확인 서비스",
    introduction: "K-POP 팬들을 위한 콘서트 자리별 시야 확인 서비스",
    period: "2025.03 ~ 진행중",
    team: "PM1 · 디자이너1 · Frontend2 · Backend2",
    contribution: "20%",
    role: "인터랙티브 SVG 좌석 맵 기능, React Query 모듈화, 공통 컴포넌트·커스텀 훅, Metadata 관리",
    skills: ["Next.js", "TypeScript", "SCSS", "TanStack Query"],
    links: [
      { label: "Demo", href: "https://concertseat.site" },
      { label: "GitHub", href: "https://github.com/ConSeat/frontend" },
    ],
    description: <ConseatDescription />,
  },
  {
    id: "corea",
    logo: coreaLogo,
    thumbnail: coreaThumb,
    title: "코레아 (CoReA)",
    subtitle: "코드 리뷰 매칭 플랫폼",
    introduction: "리뷰어, 리뷰어를 구하는 과정을 자동화하여, 참여 즉시 리뷰어, 리뷰이를 자동 매칭하고 PR 및 코멘트 링크를 제공하는 서비스",
    users: "운영 기간 DAU 250명, 총 사용자 310명",
    period: "2024.07 ~ 2025.03",
    team: "Frontend3 · Backend4",
    contribution: "20%",
    role: "깃허브 OAuth 로그인·토큰 재발급, 인증·오프라인 에러 핸들링 시스템, 성능 최적화, 웹 접근성 강화",
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
];
