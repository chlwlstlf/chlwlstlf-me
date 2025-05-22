import "./ImageSlide.css";
import prevArrow from "../../assets/prev-arrow.svg";
import nextArrow from "../../assets/next-arrow.svg";

interface NavigationButtonsProps {
  total: number;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const NavigationButtons = ({ total, currentIndex, onPrev, onNext }: NavigationButtonsProps) => (
  <>
    <button
      className="prev"
      onClick={onPrev}
      aria-label="이전 슬라이드"
      disabled={currentIndex === 0}
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
      disabled={currentIndex === total - 1}
    >
      <img
        src={nextArrow}
        alt="다음 버튼"
      />
    </button>
  </>
);

export default NavigationButtons;
