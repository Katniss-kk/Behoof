import { IProductsCardCarousel } from "@/types/types";
import RatingBarUI from "../UI/RatingBarUI";

export default function RatingBar({
  product,
}: {
  product: IProductsCardCarousel;
}) {
  return <RatingBarUI product={product} />;
}
