import { ActionTypes } from "../contants/action-types";
import productsApi from "../../apis/productsApi";

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    const response = await productsApi.get(`/product/${id}`);
    dispatch({
      type: ActionTypes.FETCH_SINGLE_PRODUCT,
      payload: response.data,
    });
  };
};

export const fetchProduct = () => {
  return async (dispatch) => {
    const response = await productsApi.get("/product");
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};

export const addProduct = (data) => {
  return async (dispatch) => {
    const response = await productsApi.post("/product", data);
    dispatch({
      type: ActionTypes.ADD_PRODUCT,
      payload: response.data,
    });
  };
};

export const removeProduct = (id) => {
  return async (dispatch) => {
    const response = await productsApi.delete(`/product/${id}`);
    dispatch({
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
      payload: response.data,
    });
  };
};

export const updateProduct = (id, data) => {
  return async (dispatch) => {
    const response = await productsApi.put(`/product/${id}`, data);
    dispatch({
      type: ActionTypes.UPDATE_PRODUCT,
      payload: response.data,
    });
  };
};
