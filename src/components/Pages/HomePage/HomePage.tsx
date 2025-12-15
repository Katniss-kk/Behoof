import { AdBanner } from "@/components/AdBanner";
import ArticlesCarousel from "@/components/ArticlesCarousel";
import BannerDownloadApp from "@/components/BannerDownloadApp/BannerDownloadApp";
import BlockInfo from "@/components/BlockInfo";
import { Catalog } from "@/components/CategoryCarousel";
import ProductsCardCarousel from "@/components/ProductsCardCarousel";
import ProductsCharacteristicsCarousel from "@/components/ProductsCharacteristicsCarousel";

export default function HomePage() {
  return (
    <div className="bg-white-100 w-full mt-2 mb-8">
      <div className="px-4">
        <AdBanner />
      </div>
      <div className="bg-[var(--bg-category-color)] px-4">
        <Catalog />
        <ProductsCharacteristicsCarousel />
      </div>
      <div className="px-4">
        <BlockInfo />
        <BannerDownloadApp />
        <ProductsCardCarousel />
        <ArticlesCarousel />
      </div>
    </div>
  );
}
