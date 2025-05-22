const CoreaEtcContent = () => {
  return (
    <div className="corea-content">
      <h3>[방 생성 페이지]</h3>
      <p>
        • 깃허브 저장소 링크 입력 시, <strong>5단계 유효성 검사</strong> 추가로 사용자 입력 오류 방지
        <br></br>• 키워드 입력 시 <strong>IME(입력기) 조합 문제 해결</strong> → 조합이 완료되었을 때만 이벤트 실행
      </p>

      <br></br>

      <h3>[성능 최적화]</h3>
      <p>
        <strong>Lighthouse 49점 → 96점, LCP 3.1s → 1.1s</strong>
        <br></br>• png 이미지를 webp로 변경하여 페이지 로딩 속도 개선
        <br></br>• React.memo 및 Lazy Loading 적용
      </p>

      <br></br>

      <h3>[웹 접근성 개선]</h3>
      <p>• ARIA 속성 추가 및 Screen Reader 지원 향상</p>
    </div>
  );
};

export default CoreaEtcContent;
