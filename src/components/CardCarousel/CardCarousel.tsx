import { IProduct } from "@/types/types";
import CardCarouselUI from "@components/UI/CardCarouselUI";

export default function CardCarousel({Products}: {Products: IProduct[]}) {
  return <CardCarouselUI Products={Products}/>;
}
