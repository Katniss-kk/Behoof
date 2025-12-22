import { IProduct } from "@/types/types";
import ProductGradeCard from "@/constants/TestsData/ProductGradeCard/ProductGradeCard";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IProductState {
  products: IProduct[];
  categoryAndBrandsProducts: IProduct[];
  filteredProducts: IProduct[];
  range: [number, number];
  activeBrand: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: IProductState = {
  products: [],
  categoryAndBrandsProducts: [],
  filteredProducts: [],
  range: [0, 0],
  activeBrand: null,
  loading: false,
  error: null,
};

const ProductsFakeData = ProductGradeCard;

const DataProductsSlice = createSlice({
  name: "DataProducts",
  initialState,
  reducers: {
    setData: (state) => {
      state.products = ProductsFakeData;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.categoryAndBrandsProducts = state.products.filter(
        (product) => product.type.toLowerCase() === action.payload.toLowerCase()
      );
      state.filteredProducts = state.categoryAndBrandsProducts;
    },

    setBrands: (state, action: PayloadAction<string>) => {
      state.categoryAndBrandsProducts = state.products.filter(
        (product) =>
          product.brand.toLowerCase() === action.payload.toLowerCase()
      );
      state.filteredProducts = state.categoryAndBrandsProducts;
    },

    setCategoryAndBrand: (
      state,
      action: PayloadAction<{ category: string; brand: string | undefined }>
    ) => {
      const { category, brand } = action.payload;
      if (brand === undefined) {
        state.categoryAndBrandsProducts = state.products.filter(
          (product) =>
            product.type.toLocaleLowerCase() === category.toLocaleLowerCase()
        );
      } else {
        state.categoryAndBrandsProducts = state.products.filter(
          (product) =>
            product.type.toLowerCase() === category.toLowerCase() &&
            product.brand.toLowerCase() === brand.toLowerCase()
        );
      }
      state.filteredProducts = state.categoryAndBrandsProducts;
    },
    setActiveBrandState: (state, action: PayloadAction<string | null>) => {
      state.activeBrand = action.payload;
    },
    setActiveRangeState: (state, action: PayloadAction<[number, number]>) => {
      state.range = action.payload;
    },
    filterProducts: (state) => {
      const brand = state.activeBrand;
      const minPrice = state.range[0];
      const maxPrice = state.range[1];
      if (brand !== null && minPrice !== 0 && maxPrice !== 0) {
        state.filteredProducts = state.categoryAndBrandsProducts.filter(
          (product) =>
            product.brand.toLocaleLowerCase() === brand?.toLocaleLowerCase() &&
            Number(product.price.replace(/\s/g, "")) >= minPrice &&
            Number(product.price.replace(/\s/g, "")) <= maxPrice
        );
      }
      if (brand === null) {
        state.filteredProducts = state.categoryAndBrandsProducts.filter(
          (product) =>
            Number(product.price.replace(/\s/g, "")) >= minPrice &&
            Number(product.price.replace(/\s/g, "")) <= maxPrice
        );
      }
      if (minPrice === 0 && maxPrice === 0) {
        state.filteredProducts = state.categoryAndBrandsProducts.filter(
          (product) =>
            product.brand.toLocaleLowerCase() === brand?.toLocaleLowerCase()
        );
      }
    },
    // filterPrice: (state, action: PayloadAction<[number, number]>) => {
    //   const [min, max] = action.payload;
    //   state.filteredProducts = state.categoryAndBrandsProducts.filter(
    //     (product) =>
    //       Number(product.price.replace(/\s/g, "")) >= min &&
    //       Number(product.price.replace(/\s/g, "")) <= max
    //   );
    // },
    // filterBrands: (state, action: PayloadAction<string | null>) => {
    //   if (action.payload === null) {
    //     return;
    //   } else {
    //     const brand = action.payload?.toLocaleLowerCase();
    //     state.filteredProducts = state.categoryAndBrandsProducts.filter(
    //       (product) => product.brand.toLocaleLowerCase() === brand
    //     );
    //   }
    // },
  },
});

export const {
  setData,
  setCategory,
  setCategoryAndBrand,
  setBrands,
  filterProducts,
  setActiveBrandState,
  setActiveRangeState,
  // filterPrice,
  // filterBrands,
} = DataProductsSlice.actions;
export const DataProductsReducer = DataProductsSlice.reducer;
