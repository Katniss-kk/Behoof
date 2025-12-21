import { IFilters } from "@/types/types";
import FiltersUI from "../UI/FiltersUI";

export default function Filters({ totalCounts, totalBrands }: IFilters) {
  const minPrice = Math.min(...totalCounts);
  const maxPrice = Math.max(...totalCounts);

  return (
    <FiltersUI
      totalBrands={totalBrands}
      minPrice={minPrice}
      maxPrice={maxPrice}
    />
  );
}
