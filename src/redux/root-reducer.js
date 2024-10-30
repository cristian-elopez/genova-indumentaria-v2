import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import mensProductsReducer from "./products/menProductsSlice";
import womensProductsReducer from "./products/womenProductsSlice";
import itemReducer from "./item/itemSlice";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";
import ordersReducer from "./orders/ordersSlice";
import menuReducer from "./menu/menuSlice";
import themeReducer from "./theme/themeSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  menswear: mensProductsReducer,
  womenswear: womensProductsReducer,
  item: itemReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
  menu: menuReducer,
  theme: themeReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);
export default persistedReducers;
