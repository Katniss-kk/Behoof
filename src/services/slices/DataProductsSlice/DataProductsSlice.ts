import { IProduct } from "@/types/types";
import ProductGradeCard from "@/constants/TestsData/ProductGradeCard/ProductGradeCard";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IProductState {
  products: IProduct[];
  categoryProducts: IProduct[];
  brandsProducts: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: IProductState = {
  products: [],
  categoryProducts: [],
  brandsProducts: [],
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
      state.categoryProducts = state.products.filter(
        (product) => product.type.toLowerCase() === action.payload.toLowerCase()
      );
    },

    setBrands: (state, action: PayloadAction<string>) => {
      state.brandsProducts = state.products.filter(
        (product) =>
          product.brand.toLowerCase() === action.payload.toLowerCase()
      );
    },

    setCategoryAndBrand: (
      state,
      action: PayloadAction<{ category: string; brand: string }>
    ) => {
      const { category, brand } = action.payload;
      state.brandsProducts = state.products.filter(
        (product) =>
          product.type.toLowerCase() === category.toLowerCase() &&
          product.brand.toLowerCase() === brand.toLowerCase()
      );
    },
    // filterPrice: (state, action) => {},
  },
});

export const {
  setData,
  setCategory,
  setCategoryAndBrand,
  setBrands,
  // filterPrice,
} = DataProductsSlice.actions;
export const DataProductsReducer = DataProductsSlice.reducer;
