import CardCatalog from "@/components/CardCatalog";
import { IProduct } from "@/types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "@/services/store";
import { useDispatch } from "react-redux";
import {
  setCategory,
  setCategoryAndBrand,
} from "@/services/slices/DataProductsSlice/DataProductsSlice";
import ButtonFilter from "@/components/Buttons/ButtonFilter";
import Modal from "@/components/Modal";
import Filters from "@/components/Filters";

export default function CatalogProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const { category, brand } = useParams<{
    category: string;
    brand?: string;
  }>();

  const dispatch = useDispatch();
  useEffect(() => {
    if (category && brand) {
      dispatch(setCategoryAndBrand({ category, brand }));
    }
    if (category && brand === undefined) {
      dispatch(setCategory(category));
    }
  }, [category, brand, dispatch]);

  const brands: IProduct[] = useSelector(
    (state) => state.Products.brandsProducts || []
  );

  const categoryProducts: IProduct[] = useSelector(
    (state) => state.Products.categoryProducts || []
  );

  if (brand !== undefined) {
    return (
      <div className="grid gap-5 px-4 pt-5">
        <h1 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-xl font-bold">
          {brand.toLocaleUpperCase()}
        </h1>
        <CardCatalog cards={brands} />
      </div>
    );
  }

  const hasProducts = categoryProducts.length > 0;
  const firstProductBrand = hasProducts ? categoryProducts[0]?.type : "";

  const handleClickFilter = () => {
    setModalOpen(!modalOpen);
  };

  const totlaCounts = categoryProducts.map((category) =>
    Number(category.price.split(" ").join(""))
  );

  const totalBrands = [
    ...new Set(categoryProducts.map((category) => category.brand)),
  ];

  return (
    <div className="grid gap-5 px-4 pt-5">
      <h1 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-xl font-bold">
        {firstProductBrand.toLocaleUpperCase()}
      </h1>
      <div>
        <ButtonFilter onClick={handleClickFilter} />
      </div>
      <CardCatalog cards={categoryProducts} />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Filters totalCounts={totlaCounts} totalBrands={totalBrands}/>
      </Modal>
    </div>
  );
}
