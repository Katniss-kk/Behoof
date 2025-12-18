import CardCatalog from "@/components/CardCatalog";
import ProductGradeCard from "@/constants/TestsData/ProductGradeCard/ProductGradeCard";

import { IProduct } from "@/types/types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function CatalogProductsPage() {
  const location = useLocation();
  const [cards, setCards] = useState<IProduct[]>([]);

  useEffect(() => {
    if (location.pathname.startsWith("/catalog/smartphone")) {
      setCards(ProductGradeCard);
    }
    if (location.pathname.startsWith("/catalog/tablet")) {
      setCards(ProductGradeCard);
    }
    if (location.pathname.startsWith("/catalog/notebook")) {
      setCards(ProductGradeCard);
    }
  }, [location.pathname]);

  return (
    <div className="px-4">
      <h1></h1>
      <CardCatalog cards={cards} />
    </div>
  );
}
