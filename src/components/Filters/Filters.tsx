import { IFilters } from "@/types/types";
import FiltersUI from "../UI/FiltersUI";

export default function Filters({
  totalBrands,
  minPrice,
  maxPrice,
  activeBrand,
  setActiveBrand,
}: IFilters) {
  return (
    <FiltersUI
      totalBrands={totalBrands}
      minPrice={minPrice}
      maxPrice={maxPrice}
      activeBrand={activeBrand}
      setActiveBrand={setActiveBrand}
    />
  );
}
