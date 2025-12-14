import {
  FavoriteButton,
  ComparisonButton,
} from "@/constants/MobileMenuButtons";

export default function CardsButtons() {
  return (
    <div className="grid grid-flow-col gap-0">
      <button className="grid items-center justify-center w-10 h-10 border-solid border-[var(--border-color-button)] border rounded-4xl bg-[var(--bg-carousel-color)]">
        <FavoriteButton fill="var(--menu-button-color)" />
      </button>
      <button className="grid items-center justify-center w-10 h-10 border-solid border-[var(--border-color-button)] border rounded-4xl bg-[var(--bg-carousel-color)]">
        <ComparisonButton fill="var(--menu-button-color)" />
      </button>
    </div>
  );
}
