import ArticlesCarousel from "@/components/ArticlesCarousel";
import ButtonCompare from "@/components/Buttons/ButtonCompare";
import ButtonInBasket from "@/components/Buttons/ButtonInBasket";
import RatingBar from "@/components/RatingBar";
import RatingProduct from "@/components/RatingProduct";
import { useSelector } from "@/services/store";
import { useParams } from "react-router-dom";

export default function ProductCardSelectedPage() {
  const { productId } = useParams<{
    productId: string;
  }>();

  const product = useSelector((state) =>
    state.Products.products.find((product) => product.id === Number(productId))
  );

  if (product !== undefined) {
    return (
      <div className="px-4 py-8 mb-14">
        <div className="grid justify-center p-3 border border-[var(--border-filter-button)] rounded-xl">
          <div className="grid gap-3 grid-flow-row justify-center">
            <img
              src={product?.img}
              alt={product?.title}
              className="justify-self-center w-full h-full"
            />
            <h1>{product?.title}</h1>
            <div className="grid gap-2">
              <RatingProduct />
              <RatingBar product={product} />
            </div>
            <div className="grid gap-2">
              <h2>{product.price} ₽</h2>
              <div className="grid grid-flow-col gap-2">
                <ButtonInBasket />
                <ButtonCompare />
              </div>
            </div>
          </div>
        </div>
          <ArticlesCarousel />
      </div>
    );
  }
}
