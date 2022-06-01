import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loaderSlice from "entities/loader/redux/loaderSlice";
import pizzaSlice from "entities/pizza/redux/pizzaSlice";
import cartSlice from "entities/cart/redux/cartSlice";

const authPersistConfig = {
  key: "cart", // localStorage key name
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  [loaderSlice.name]: loaderSlice.reducer,
  [pizzaSlice.name]: pizzaSlice.reducer,
  [cartSlice.name]: persistReducer(authPersistConfig, cartSlice.reducer),
});

export default rootReducer;
