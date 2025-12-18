import CardCatalogUI from "@/components/UI/CardCatalogUI";
import { IProduct } from "@/types/types";

export default function CardCatalog({ cards }: { cards: IProduct[] }) {
  return <CardCatalogUI cards={cards} />;
}
