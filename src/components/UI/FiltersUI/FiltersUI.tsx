import ButtonFilterBrands from "@/components/Buttons/ButtonFilterBrands";
import { IFiltersUI } from "@/types/types";
import PriceRange from "@/components/PriceRange";

export default function FiltersUI({
  totalBrands,
  minPrice,
  maxPrice,
  activeBrand,
  setActiveBrand,
}: IFiltersUI) {
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
            <ButtonFilterBrands
              totalBrands={totalBrands}
              activeBrand={activeBrand}
              setActiveBrand={setActiveBrand}
            />
          </div>
        </div>
        <div>
          <h3 className="[font-family:var(--font-family)] text-[var(--text-title-color)] text-base font-semibold mb-5">
            Диапазон цены
          </h3>
          <PriceRange minPrice={minPrice} maxPrice={maxPrice} />
        </div>
      </div>
    </div>
  );
}
