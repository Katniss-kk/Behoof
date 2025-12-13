import { ICardCarousel } from "@/types/types";
import ProductsCardCarouselUI from "../UI/ProductsCardCarouselUI";
import ProductGradeCard from "@/constants/TestsData/ProductGradeCard/ProductGradeCard";

export default function ProductsCardCarousel() {
      const CarouselProops: ICardCarousel = {
        children: <></>,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          320: {
            slidesPerGroup: 1,
            slidesPerView: 1.2,
            spaceBetween: 10
          }
        }
      }

  return <ProductsCardCarouselUI CarouselProops={CarouselProops} Products={ProductGradeCard}/>;
}
