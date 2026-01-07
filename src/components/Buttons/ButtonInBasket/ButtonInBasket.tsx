import { FavoriteButton } from "@/constants/MobileMenuButtons";

export default function ButtonInBasket() {
  return (
    <button className="grid grid-flow-col items-center gap-2.5 py-2.5 px-2 [font-family:var(--font-family)] text-[var(--button-bg-color)] text-base font-normal text-center bg-[var(--bg-color-buttonCard)] rounded-lg">
      <FavoriteButton fill="var(--button-bg-color)"/> В корзину
    </button>
  );
}
