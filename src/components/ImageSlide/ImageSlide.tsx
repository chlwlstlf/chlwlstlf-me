import useSwipe from "../../hooks/useSwipe";
import NavigationButtons from "./NavigationButtons";
import "./ImageSlide.css";

interface ImageSlideProps {
  imageSrcArray: string[];
  currentIndex: number;
  height?: number | string;
  onNext: () => void;
  onPrev: () => void;
}

const ImageSlide = ({ imageSrcArray, currentIndex, height = "auto", onPrev, onNext }: ImageSlideProps) => {
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(onNext, onPrev);
  const total = imageSrcArray.length;

  return (
    <div
      className="slideContainer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          display: "flex",
          width: `${100 * total}%`,
          transform: `translateX(-${(100 / total) * currentIndex}%)`,
          transition: "transform 0.5s",
        }}
      >
        {imageSrcArray.map((src, idx) => (
          <div
            key={idx}
            className="slideItem"
            style={{
              flex: `0 0 ${100 / total}%`,
              height: typeof height === "number" ? `${height}px` : height,
            }}
          >
            <img
              src={src}
              alt={`slide-${idx}`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <NavigationButtons
        total={total}
        currentIndex={currentIndex}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
};

export default ImageSlide;
