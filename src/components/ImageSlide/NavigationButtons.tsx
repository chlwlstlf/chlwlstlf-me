import "./ImageSlide.css";
import prevArrow from "../../assets/prev-arrow.svg";
import nextArrow from "../../assets/next-arrow.svg";

interface NavigationButtonsProps {
  total: number;
  currentIndex: number;
  hasPrev?: boolean;
  hasNext?: boolean;
  onNext: () => void;
  onPrev: () => void;
}

const NavigationButtons = ({ total, currentIndex, hasPrev, hasNext, onPrev, onNext }: NavigationButtonsProps) => (
  <>
    <button
      className="prev"
      onClick={onPrev}
      aria-label="이전 슬라이드"
      disabled={!hasPrev}
    >
      <img
        src={prevArrow}
        alt="이전 버튼"
      />
    </button>
    <button
      className="next"
      onClick={onNext}
      aria-label="다음 슬라이드"
      disabled={!hasNext}
    >
      <img
        src={nextArrow}
        alt="다음 버튼"
      />
    </button>
  </>
);

export default NavigationButtons;
