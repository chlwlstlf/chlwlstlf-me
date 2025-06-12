import React from "react";

const ConseatEtcContent = () => {
  return (
    <div className="conseat-content">
      <h3>[Sentry 기반 에러 알림 체계 개선]</h3>
      <ul>
        <li>Sentry Discord 알림 기능이 유료 제한된 상황에서 Next.js serverless function으로 Webhook endpoint 구현, Discord 운영 알림 체계 직접 구성해 비용 없이 유지</li>
        <li>
          Sentry <code>setTag</code>로 API 정보, 환경 정보를 tagging하고 알림 메시지에 포함, 소스맵 적용으로 오류 맥락과 위치 파악 정확도 개선
        </li>
      </ul>

      <br />

      <h3>[공통 API 설계]</h3>
      <ul>
        <li>
          <strong>getAccessToken</strong> 하나로 SSR/CSR 토큰 획득 통합
        </li>
        <li>serverApi / clientApi → universalApi로 합쳐 휴먼 에러 방지</li>
      </ul>

      <br />

      <h3>[React Query 모듈화]</h3>
      <ul>
        <li>
          도메인별로<span> </span>
          <code>*.api.ts</code> (요청 함수) / <code>*.query.ts</code> (queryKey·queryFn) / <code>useFetch…</code> 훅을 일관된 구조로 분리
        </li>
        <li>
          <code>createPrefetchedQueryClient</code> 로 SSR prefetch &amp; hydration 자동화
        </li>
        <li>
          전역 <code>QueryClient</code> 설정: CSR은 싱글톤, SSR은 인스턴스 분리로 캐시 충돌 방지
        </li>
      </ul>

      <br />

      <h3>[로그인 & 세션 최적화]</h3>
      <ul>
        <li>Middleware로 비회원 접근 차단 → 비로그인 시 자동 리다이렉트</li>
        <li>CSR 세션 호출 횟수 대폭 감소 (Promise 캐싱 – TTL 5분 설정 + SSR 초기 주입)</li>
        <li>Public vs Secure API 분리로 불필요한 토큰 검증 제거</li>
      </ul>

      <br />

      <h3>[useFunnel 커스텀 훅]</h3>
      <ul>
        <li>
          <code>children</code>를 배열로 처리 → <code>Funnel.Step</code> 중 <code>currentStep</code>과 일치하는 하나만 렌더링
        </li>
        <li>
          <code>isStepElement</code> 타입 가드로 타입 안전성 확보
        </li>
      </ul>

      <br />

      <h3>[성능 최적화]</h3>
      <ul>
        <li>
          <code>Link</code> 태그 prefetch 속성에 조건 추가 → <code>/home</code> 페이지의 <code>_rsc</code> 요청 5→2건 60% 절감
        </li>
        <li>
          이미지 첫 요소에 <code>priority</code> 부여 → LCP 8.1s→3.0s 단축
        </li>
      </ul>

      <br />

      <h3>[DelayLoading 컴포넌트]</h3>
      <ul>
        <li>
          비동기 데이터 호출 후 <strong>0.5초 지연</strong> 후 로딩 컴포넌트 표시 → 깜빡임 최소화
        </li>
        <li>빠른 네트워크 환경에서 발생하는 레이아웃 시프트(layout shift) 해결</li>
      </ul>
    </div>
  );
};

export default ConseatEtcContent;
