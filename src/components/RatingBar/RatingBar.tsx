import { IProduct } from "@/types/types";
import RatingBarUI from "../UI/RatingBarUI";

export default function RatingBar({ product }: { product: IProduct }) {
  return <RatingBarUI product={product} />;
}
