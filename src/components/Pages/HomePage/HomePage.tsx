import { AdBanner } from "@/components/AdBanner";
import BannerDownloadApp from "@/components/BannerDownloadApp/BannerDownloadApp";
import BlockInfo from "@/components/BlockInfo";
import { Catalog } from "@/components/CategoryCarousel";
import { lazy } from "react";
import ProductsCharacteristicsCarousel from "@/components/ProductsCharacteristicsCarousel";
const ProductsCardCarousel = lazy(
  () => import("@/components/ProductsCardCarousel")
);
const ArticlesCarousel = lazy(() => import("@/components/ArticlesCarousel"));

export default function HomePage() {
  return (
    <div className="bg-white-100 w-full mt-2 mb-14">
      <div className="px-4">
        <AdBanner />
      </div>
      <div className="bg-[var(--bg-category-color)] ps-4">
        <Catalog />
        <ProductsCharacteristicsCarousel />
      </div>
      <div className="px-4">
        <BlockInfo />
        <BannerDownloadApp />
      </div>
      <div className="ps-4">
        <ProductsCardCarousel />
        <ArticlesCarousel />
      </div>
    </div>
  );
}
