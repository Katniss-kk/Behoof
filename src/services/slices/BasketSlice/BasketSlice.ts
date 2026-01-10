import { IProduct } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketState {
  products: IProduct[];
}

const initialState: BasketState = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const productId = action.payload.id;
      const existingProductIndex = state.products.findIndex(
        (item) => item.id === productId
      );
      if (existingProductIndex === -1) {
        state.products = [...state.products, action.payload];
      } else {
        state.products = state.products.filter((item) => item.id !== productId);
      }
    },
  },
});

export const { addProduct } = basketSlice.actions;
export default basketSlice.reducer;
