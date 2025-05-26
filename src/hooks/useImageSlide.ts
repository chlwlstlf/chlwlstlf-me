import { useState } from "react";

interface UseImageSlideProps {
  initialIdx: number;
  totalImageNumber: number;
}

const useImageSlide = ({ initialIdx, totalImageNumber }: UseImageSlideProps) => {
  const [imageIndex, setImageIndex] = useState(initialIdx);
  const hasPrev = imageIndex > 0;
  const hasNext = imageIndex < totalImageNumber - 1;

  const handleClickPrev = () => {
    if (hasPrev) setImageIndex((i) => i - 1);
  };
  const handleClickNext = () => {
    if (hasNext) setImageIndex((i) => i + 1);
  };

  return { imageIndex, hasPrev, hasNext, handleClickPrev, handleClickNext };
};
export default useImageSlide;
