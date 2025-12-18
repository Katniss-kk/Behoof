import CatalogButton from "@/components/Buttons/CatalogButton";
import CatalogButtonsInfo from "@/constants/CatalogButtonsInfo/CatalogButtonsInfo";
import TypeCatalogNoteBook from "@/constants/CatalogButtonsInfo/TypeCatalogNoteBook";
import TypeCatalogSmartPhone from "@/constants/CatalogButtonsInfo/TypeCatalogSmartPhone";
import TypeCatalogTablets from "@/constants/CatalogButtonsInfo/TypeCatalogTablets";
import { useState } from "react";

export default function CatalogPage() {
  const [buttons, setButtons] = useState(CatalogButtonsInfo);

  const handleButtonClick = (category: string) => {
    switch (category) {
      case "smartphones":
        setButtons(TypeCatalogSmartPhone);
        break;
      case "notebooks":
        setButtons(TypeCatalogNoteBook);
        break;
      case "tablets":
        setButtons(TypeCatalogTablets);
        break;
      default:
        setButtons(CatalogButtonsInfo);
    }
  };

  const isRootCatalog = buttons === CatalogButtonsInfo;
  const handleClickBack = isRootCatalog
    ? undefined
    : () => setButtons(CatalogButtonsInfo);

  return (
    <CatalogButton
      onBack={handleClickBack}
      buttons={buttons}
      onButtonClick={handleButtonClick}
    />
  );
}
