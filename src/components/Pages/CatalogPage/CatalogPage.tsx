import CatalogButton from "@/components/Buttons/CatalogButton";
import CatalogButtonsInfo from "@/constants/CatalogButtonsInfo/CatalogButtonsInfo";
import { useLocation, useNavigate } from "react-router-dom";
import TypeCatalogNoteBook from "@/constants/CatalogButtonsInfo/TypeCatalogNoteBook";
import TypeCatalogSmartPhone from "@/constants/CatalogButtonsInfo/TypeCatalogSmartPhone";
import TypeCatalogTablets from "@/constants/CatalogButtonsInfo/TypeCatalogTablets";

export default function CatalogPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const category = pathSegments[1];

  let catalogData;

  switch (category) {
    case ":phones":
    case ":smartphones":
      catalogData = TypeCatalogSmartPhone;
      break;
    case ":notebooks":
    case ":laptops":
      catalogData = TypeCatalogNoteBook;
      break;
    case ":tablets":
      catalogData = TypeCatalogTablets;
      break;
    default:
      catalogData = CatalogButtonsInfo;
  }

  const isRootCatalog = location.pathname === "/catalog" || 
                        location.pathname === "/catalog/" || 
                        pathSegments.length <= 1;

  const handleClickBack = isRootCatalog ? undefined : () => navigate(-1);

  return (
    <CatalogButton 
      onBack={handleClickBack}
      proops={catalogData}
    />
  );
}