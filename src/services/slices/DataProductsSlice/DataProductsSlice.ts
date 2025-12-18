import { IProduct } from "@/types/types";
import ProductGradeCard from "@/constants/TestsData/ProductGradeCard/ProductGradeCard";
import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: IProductState = {
  products: [],
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
  },
});

export const { setData } = DataProductsSlice.actions;
export const DataProductsReducer = DataProductsSlice.reducer;
