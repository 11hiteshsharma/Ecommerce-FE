import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Features/Cart/cartSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
    },
    devTools: true,
  });
};
