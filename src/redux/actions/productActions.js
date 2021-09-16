import axios from "axios";
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

const BASE_URL = "http://127.0.0.1:8000/api/";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`${BASE_URL}products`);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const detailProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${BASE_URL}productDetail/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addUser = (name, email, phone) => async (dispatch) => {
  try {
    dispatch({ type: USER_ADD_REQUEST });

    const { data } = await axios.post(`${BASE_URL}add-user/`, {
      name: name,
      email: email,
      phone: phone,
    });

    console.log(data);
    dispatch({
      type: USER_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ADD_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
