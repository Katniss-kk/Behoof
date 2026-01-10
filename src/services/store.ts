import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { DataProductsReducer } from "./slices/DataProductsSlice/DataProductsSlice";
import userReducer from "./slices/ProfileUserSlice/ProfileUserSlice";
import basketReducer from "./slices/BasketSlice/BasketSlice";

const rootReducer = {
  Products: DataProductsReducer,
  User: userReducer,
  Basket: basketReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
export { rootReducer };
