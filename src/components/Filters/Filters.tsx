import { IFilters } from "@/types/types";

export default function Filters({ totalCounts, totalBrands }: IFilters) {
  //   const minPrice = Math.min(...totalCounts);
  //   const maxPrice = Math.max(...totalCounts);
  console.log(totalCounts);
  return (
    <div className="">
      <div className="grid gap-6 bg-[var(--bg-button-color)] py-7 px-6 rounded-xl">
        <h2 className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-lg font-semibold">
          Фильтрация
        </h2>
        <div>
          <h3 className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-base font-semibold mb-5">
            Бренды
          </h3>
          <div className="flex flex-wrap gap-2">
            {totalBrands.map((brand) => (
              <button
                key={brand}
                className="bg-[var(--bg-filter-button)] border border-[var(--bg-filter-button)] rounded-2xl [font-family:var(--font-family)] text-[var(--text-title-color)] text-sm font-medium px-3.5 py-2.5"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
