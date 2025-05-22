import useImageSlide from "../../../../../hooks/useImageSlide";
import ImageSlide from "../../../../../components/ImageSlide/ImageSlide";
import "./CoreaScreenContent.css";

import corea0 from "../../../../../assets/corea0.png";
import corea1 from "../../../../../assets/corea1.png";
import corea2 from "../../../../../assets/corea2.png";
import corea3 from "../../../../../assets/corea3.png";
import corea4 from "../../../../../assets/corea4.png";
import corea5 from "../../../../../assets/corea5.png";

const COREA_IMAGES = [
  { label: "메인 페이지", image: corea0 },
  { label: "방 상세 페이지", image: corea1 },
  { label: "피드백 작성&수정 페이지", image: corea2 },
  { label: "마이 페이지", image: corea3 },
  { label: "피드백 모아보기 페이지 - 받은 피드백", image: corea4 },
  { label: "피드백 모아보기 페이지 - 쓴 피드백", image: corea5 },
];

const CoreaScreenContent = () => {
  const { imageIndex, handleClickNext, handleClickPrev } = useImageSlide({
    initialIdx: 0,
    totalImageNumber: COREA_IMAGES.length,
  });

  const images = COREA_IMAGES.map((item) => item.image);

  return (
    <div className="corea-screen-content">
      <p className="corea-screen-content_label">[{COREA_IMAGES[imageIndex].label}]</p>
      <ImageSlide
        imageSrcArray={images}
        currentIndex={imageIndex}
        onNext={handleClickNext}
        onPrev={handleClickPrev}
      />
      <div className="corea-screen-content_imageNumber">
        {imageIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default CoreaScreenContent;
