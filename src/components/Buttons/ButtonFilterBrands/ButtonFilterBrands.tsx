import { setActiveBrandState } from "@/services/slices/DataProductsSlice/DataProductsSlice";
import { useDispatch } from "@/services/store";
import { IButtonFilterBrand } from "@/types/types";

export default function ButtonFilterBrands({
  totalBrands,
  activeBrand,
  setActiveBrand,
}: IButtonFilterBrand) {
  
  const handleClickBrand = (brand: string) => {
    if (activeBrand === brand) {
      setActiveBrand(null);
    } else {
      setActiveBrand(brand);
    }
  };

  return (
    <>
      {totalBrands.map((brand) => (
        <button
          key={brand}
          onClick={() => handleClickBrand(brand)}
          className={`border border-[var(--bg-filter-button)] rounded-2xl [font-family:var(--font-family)] text-[var(--text-title-color)] text-sm font-medium px-3.5 py-2.5
    ${activeBrand === brand ? "bg-[var(--bg-button-filterOpacity)]" : ""}`}
        >
          {brand}
        </button>
      ))}
    </>
  );
}
