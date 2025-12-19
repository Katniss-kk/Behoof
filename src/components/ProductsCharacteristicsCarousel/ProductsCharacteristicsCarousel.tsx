import { ICardCarousel } from "@/types/types";
import ProductsCardCarouselUI from "../UI/ProductsCharacteristicsCarouselUI";
import { useSelector } from "@/services/store";

export default function ProductsCharacteristicsCarousel() {
  const Products = useSelector(state => state.Products.products)

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

  return <ProductsCardCarouselUI CarouselProops={CarouselProops} Products={Products}/>;
}
