import {
  FavoriteButton,
  ComparisonButton,
} from "@/constants/MobileMenuButtons";
import { addProduct } from "@/services/slices/BasketSlice/BasketSlice";
import { useDispatch, useSelector } from "@/services/store";
import { IProduct } from "@/types/types";

export default function CardsButtons({ product }: { product: IProduct }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Basket.products);

  if (!product) {
    return null;
  }

  const productId = product.id;
  
  if (!productId) {
    return null;
  }

  const isInBasket = products.some((item) => item.id === productId);

  const handleClickBasket = () => {
    if (product) {
      dispatch(addProduct(product));
    }
  };

  return (
    <div className="grid grid-flow-col gap-0">
      <button
        onClick={handleClickBasket}
        className={`grid items-center justify-center w-10 h-10 border-solid border-[var(--border-color-button)] border rounded-4xl ${
          isInBasket
            ? "bg-[var(--active-button-color)]"
            : "bg-[var(--bg-carousel-color)]"
        }`}
      >
        <FavoriteButton
          fill={
            isInBasket ? "var(--button-text-color)" : "var(--menu-button-color)"
          }
        />
      </button>
      <button className="grid items-center justify-center w-10 h-10 border-solid border-[var(--border-color-button)] border rounded-4xl bg-[var(--bg-carousel-color)]">
        <ComparisonButton fill="var(--menu-button-color)" />
      </button>
    </div>
  );
}