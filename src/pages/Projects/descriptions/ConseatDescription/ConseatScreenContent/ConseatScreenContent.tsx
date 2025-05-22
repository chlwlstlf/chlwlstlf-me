import useImageSlide from "../../../../../hooks/useImageSlide";
import ImageSlide from "../../../../../components/ImageSlide/ImageSlide";
import "./ConseatScreenContent.css";

import conseat0 from "../../../../../assets/conseat0.png";
import conseat1 from "../../../../../assets/conseat1.png";
import conseat2 from "../../../../../assets/conseat2.png";
import conseat3 from "../../../../../assets/conseat3.png";
import conseat4 from "../../../../../assets/conseat4.png";
import conseat5 from "../../../../../assets/conseat5.png";

const CONSEAT_IMAGES = [
  { label: "메인 페이지", image: conseat0 },
  { label: "시야 선택 페이지", image: conseat1 },
  { label: "시야 결과 페이지", image: conseat2 },
  { label: "리뷰 페이지1", image: conseat3 },
  { label: "리뷰 페이지2", image: conseat4 },
  { label: "마이 페이지", image: conseat5 },
];

const ConseatScreenContent = () => {
  const { imageIndex, handleClickNext, handleClickPrev } = useImageSlide({
    initialIdx: 0,
    totalImageNumber: CONSEAT_IMAGES.length,
  });

  const images = CONSEAT_IMAGES.map((item) => item.image);

  return (
    <div className="conseat-screen-content">
      <div className="conseat-screen-image">
        <ImageSlide
          imageSrcArray={images}
          currentIndex={imageIndex}
          height={500}
          onNext={handleClickNext}
          onPrev={handleClickPrev}
        />
      </div>
      <div className="conseat-screen-content_imageNumber">
        {imageIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default ConseatScreenContent;
