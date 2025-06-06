const CoreaEtcContent = () => {
  return (
    <div className="corea-content">
      <h3>[방 생성 페이지]</h3>
      <ul>
        <li>
          깃허브 저장소 링크 입력 시, <strong>5단계 유효성 검사</strong> 추가로 사용자 입력 오류 방지
        </li>
        <li>
          키워드 입력 시 <strong>IME(입력기) 조합 문제 해결</strong> → 조합이 완료되었을 때만 이벤트 실행
        </li>
      </ul>

      <br></br>

      <h3>[반응형 유틸 도입]</h3>
      <ul>
        <li>
          프로젝트 전역에서 반복되던 <code>@media</code> 문을 styled-components 미디어쿼리 유틸로 통합
        </li>
        <li>브레이크포인트 변경 한 곳에서 관리, CSS 가독성·유지보수성 ↑</li>
      </ul>

      <br></br>

      <h3>[성능 최적화]</h3>
      <div className="corea-content-detail">
        <strong>Lighthouse 49점 → 96점, LCP 3.1s → 1.1s</strong>
        <ul>
          <li>png 이미지를 webp로 변경하여 페이지 로딩 속도 개선</li>
          <li>React.memo 및 Lazy Loading 적용</li>
        </ul>
      </div>

      <br></br>

      <h3>[웹 접근성 개선]</h3>
      <ul>
        <li>ARIA 속성 추가 및 Screen Reader 지원 향상</li>
      </ul>
    </div>
  );
};

export default CoreaEtcContent;
