import CategoryInfo from "@/constants/TestsData/CategoryInfo/Category";
import CategoryCarouselUI from "@components/UI/CategoryCarouselUI";
import { ICardCarousel } from "@/types/types";

export default function CategoryCarousel() {
  const CarouselProops: ICardCarousel = {
    children: <></>,
    slidesPerGroup: 3,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 3.3,
        spaceBetween: 10
      }
    }
  }

  return <CategoryCarouselUI CarouselProops={CarouselProops} Products={CategoryInfo}/>;
}