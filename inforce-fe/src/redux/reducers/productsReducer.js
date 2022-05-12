import { ActionTypes } from "../contants/action-types";

const defaultState = {
  products: [],
};

export const productsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const singleProduct = (state = { product: {} }, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_SINGLE_PRODUCTS:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};
