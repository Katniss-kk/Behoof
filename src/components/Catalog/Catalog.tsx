import CardCarousel from "../CardCarousel";
import CatalogInfo from "@/constants/CatalogInfo/CatalogInfo";

export default function Catalog() {
  return (
    <div className="bg-[var(--bg-catalog-color)] mt-3">
      <h2 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-base mb-4 font-semibold">Каталог</h2>
      <CardCarousel Products={CatalogInfo} />
    </div>
  );
}
