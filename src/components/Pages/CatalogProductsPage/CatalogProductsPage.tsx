import CardCatalog from "@/components/CardCatalog";
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
    if (brand !== undefined && category !== undefined) {
      dispatch(setCategoryAndBrand({ category, brand }));
    } else if (category !== undefined && brand === undefined) {
      dispatch(setCategory(category));
    }
  }, [category, brand, dispatch]);

  const products = useSelector((state) => state.Products.filteredProducts);

  if (brand !== undefined && category !== undefined) {
    return (
      <div className="grid gap-5 px-4 pt-5">
        <h1 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-xl font-bold">
          {brand.toLocaleUpperCase()}
        </h1>
        <CardCatalog cards={products} />
      </div>
    );
  }

  if (category !== undefined && brand === undefined) {
    const totalCounts = products.map((product) =>
      Number(product.price.split(" ").join(""))
    );

    const totalBrands = [
      ...new Set(products.map((category) => category.brand)),
    ];

    const handleClickFilter = () => {
      setModalOpen(!modalOpen);
    };

    const firstProduct =
      products && products.length > 0 ? products[0].type : "";

    return (
      <div className="grid gap-5 px-4 pt-5">
        <h1 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-xl font-bold">
          {firstProduct.toLocaleUpperCase()}
        </h1>
        <div>
          <ButtonFilter onClick={handleClickFilter} />
        </div>
        <CardCatalog cards={products} />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <Filters totalCounts={totalCounts} totalBrands={totalBrands} />
        </Modal>
      </div>
    );
  }
  if (category === undefined && brand === undefined) {
    return null;
  }
}
