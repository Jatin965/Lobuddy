import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.product,
      };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: {} };

    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload.product,
      };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_REQUEST:
      return { loading: true };

    case USER_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case USER_ADD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
