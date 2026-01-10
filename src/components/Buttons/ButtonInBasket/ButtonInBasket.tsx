import { FavoriteButton } from "@/constants/MobileMenuButtons";
import { addProduct } from "@/services/slices/BasketSlice/BasketSlice";
import { useDispatch, useSelector } from "@/services/store";
import { IProduct } from "@/types/types";

export default function ButtonInBasket({ product }: { product: IProduct }) {
  const products = useSelector((state) => state.Basket.products);

  const productId = product.id;
  const isInBasket = products.some((item) => item.id === productId);
  const dispatch = useDispatch();

  const handleClick = (product: IProduct) => {
    dispatch(addProduct(product));
  };
  return (
    <button
      onClick={() => handleClick(product)}
      className={`grid grid-flow-col items-center gap-2.5 py-2.5 px-2 [font-family:var(--font-family)] text-base font-normal text-center rounded-lg
        ${
          isInBasket
            ? `bg-[var(--active-button-color)] text-[var(--bg-color-buttonCard)]`
            : `bg-[var(--bg-color-buttonCard)] text-[var(--button-bg-color)]`
        }`}
    >
      <FavoriteButton
        fill={
          isInBasket ? "var(--bg-color-buttonCard)" : "var(--button-bg-color)"
        }
      />{" "}
      В корзину{" "}
    </button>
  );
}
