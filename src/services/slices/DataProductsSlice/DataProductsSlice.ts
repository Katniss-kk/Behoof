import { IProduct } from "@/types/types";
import ProductGradeCard from "@/constants/TestsData/ProductGradeCard/ProductGradeCard";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IProductState {
  products: IProduct[];
  categoryAndBrandsProducts: IProduct[];
  filteredProducts: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: IProductState = {
  products: [],
  categoryAndBrandsProducts: [],
  filteredProducts: [],
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
      action: PayloadAction<{ category: string; brand: string }>
    ) => {
      const { category, brand } = action.payload;
      state.categoryAndBrandsProducts = state.products.filter(
        (product) =>
          product.type.toLowerCase() === category.toLowerCase() &&
          product.brand.toLowerCase() === brand.toLowerCase()
      );
      state.filteredProducts = state.categoryAndBrandsProducts;
    },
    filterPrice: (state, action: PayloadAction<[number, number]>) => {
      const [min, max] = action.payload;
      state.filteredProducts = state.categoryAndBrandsProducts.filter(
        (product) =>
          Number(product.price) >= min && Number(product.price) <= max
      );
    },
  },
});

export const {
  setData,
  setCategory,
  setCategoryAndBrand,
  setBrands,
  filterPrice,
} = DataProductsSlice.actions;
export const DataProductsReducer = DataProductsSlice.reducer;
