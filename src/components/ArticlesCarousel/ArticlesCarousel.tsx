import ArticlesInfo from "@constants/TestsData/ArticlesInfo/ArticlesInfo";
import ArticlesCarouselUI from "../UI/ArticlesCarouselUI";
import { ICardCarousel } from "@/types/types";

export default function ArticlesCarousel() {
  const CarouselProops: ICardCarousel = {
    children: <></>,
    slidesPerGroup: 1,
    slidesPerView: 1.5,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
    },
  };

  return (
    <ArticlesCarouselUI
      CarouselProops={CarouselProops}
      Articles={ArticlesInfo}
    />
  );
}
