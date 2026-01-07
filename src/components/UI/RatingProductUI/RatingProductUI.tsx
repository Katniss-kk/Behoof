export default function RatingProductUI() {
  return (
    <div className="grid grid-flow-col gap-1">
      <span className="[font-family:var(--font-family)] text-[var(--color-reviews)] text-xs font-normal px-2 py-1 border border-[var(--border-menu-color)] rounded-xl w-max">
        4.4 средняя оценка
      </span>
      <span className="[font-family:var(--font-family)] text-[var(--text-title-productColor)] text-xs font-normal px-2 py-1 border border-[var(--border-menu-color)] rounded-xl w-max">
        447 отзывов
      </span>
    </div>
  );
}
