import { AdBanner } from "@/components/AdBanner";
import { Catalog } from "@/components/CategoryCarousel";
import ProductsCardCarousel from "@/components/ProductsCardCarousel";
import { SearchInput } from "@components/SearchInput";

export default function HomePage() {
  return (
    <div className="bg-white-100 w-full mt-2 mb-8">
      <div className="px-4">
        <SearchInput />
        <hr />
        <AdBanner />
      </div>
      <div className="bg-[var(--bg-category-color)] px-4">
        <Catalog />
        <ProductsCardCarousel />
      </div>
    </div>
  );
}
