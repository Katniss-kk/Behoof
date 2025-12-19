import FilterSVG from "@/assets/SVG/FilterSVG/FilterSVG";

export default function ButtonFilter({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="grid grid-flow-col justify-center gap-1.5 bg-[var(--bg-card-color)] border border-[var(--border-color-button)] rounded-lg py-4 px-8 w-full">
      <FilterSVG />
      Фильтры
    </button>
  );
}
