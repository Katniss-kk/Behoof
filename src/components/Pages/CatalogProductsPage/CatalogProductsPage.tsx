import CardCatalog from "@/components/CardCatalog";
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "@/services/store";
import { useDispatch } from "react-redux";
import {
  filterProducts,
  setActiveRangeState,
  setCategoryAndBrand,
  setActiveBrandState, // Добавляем импорт для установки активного бренда
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
  const products = useSelector((state) => state.Products.filteredProducts);
  const categoryProducts = useSelector(
    (state) => state.Products.categoryAndBrandsProducts
  );
  const activeBrand = useSelector((state) => state.Products.activeBrand);

  useEffect(() => {
    dispatch(filterProducts());
  }, [modalOpen, activeBrand, dispatch]);

  useEffect(() => {
    if (category) {
      dispatch(setCategoryAndBrand({ category, brand }));
    }
  }, [category, brand, dispatch]);

  const { minPrice, maxPrice, totalBrands } = useMemo(() => {
    if (!categoryProducts.length) {
      return { minPrice: 0, maxPrice: 0, totalBrands: [] };
    }

    const prices = categoryProducts
      .map((p) => Number(p.price.replace(/\s/g, "")))
      .filter((p) => !isNaN(p));

    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
      totalBrands: [...new Set(categoryProducts.map((p) => p.brand))],
    };
  }, [categoryProducts]);

  useEffect(() => {
    dispatch(setActiveRangeState([minPrice, maxPrice]));
  }, [minPrice, maxPrice]);

  const handleClickFilter = () => setModalOpen(!modalOpen);

  const handleSetActiveBrand = (brand: string | null) => {
    dispatch(setActiveBrandState(brand)); // Устанавливаем бренд в Redux
  };

  if (brand) {
    return (
      <div className="grid gap-5 px-4 pt-5">
        <h1 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-xl font-bold">
          {brand.toUpperCase()}
        </h1>
        <CardCatalog cards={products} />
      </div>
    );
  }

  if (category) {
    const title = products[0]?.type || category;

    return (
      <div className="grid gap-5 px-4 pt-5">
        <h1 className="[font-family:var(--font-family)] text-[var(--text-color-title)] text-xl font-bold">
          {title.toUpperCase()}
        </h1>
        <div>
          <ButtonFilter onClick={handleClickFilter} />
        </div>
        <CardCatalog cards={products} />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <Filters
            minPrice={minPrice}
            maxPrice={maxPrice}
            totalBrands={totalBrands}
            activeBrand={activeBrand}
            setActiveBrand={handleSetActiveBrand}
          />
        </Modal>
      </div>
    );
  }

  return null;
}
