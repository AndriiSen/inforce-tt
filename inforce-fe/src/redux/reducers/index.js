import { productsReducer, singleProduct } from "./productsReducer";
import modalReducer from "./modalReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  allProducts: productsReducer,
  selectedProduct: singleProduct,
  modalState: modalReducer,
});
