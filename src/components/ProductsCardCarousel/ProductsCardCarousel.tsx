import { ICardCarousel } from "@/types/types";
import ProductsCardCarouselUI from "../UI/ProductsCardCarouselUI";
import { useSelector } from "@/services/store";

export default function ProductsCardCarousel() {
  const Products = useSelector((state) => state.Products.products);

  const CarouselProops: ICardCarousel = {
    children: <></>,
    slidesPerGroup: 1,
    slidesPerView: 1.3,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
    },
  };

  return (
    <ProductsCardCarouselUI
      CarouselProops={CarouselProops}
      Products={Products}
    />
  );
}
