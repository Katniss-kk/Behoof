import CardCatalogUI from "@/components/UI/CardCatalogUI";
import { IProduct } from "@/types/types";
import { useLocation } from "react-router-dom";

export default function CardCatalog({ cards }: { cards: IProduct[] }) {
  const location = useLocation();
  const link = location.pathname;

  return <CardCatalogUI cards={cards} link={link} />;
}
