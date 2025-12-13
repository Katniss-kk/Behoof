import { AdBanner } from "@/components/AdBanner";
import { Catalog } from "@/components/Catalog";
import { SearchInput } from "@components/SearchInput";

export default function HomePage() {
  return (
    <div className="bg-white-100 w-full px-4 mt-2 mb-8">
      <SearchInput />
      <hr />
      <AdBanner />
      <Catalog />
    </div>
  );
}
