import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducer,
  productDetailReducer,
  addUserReducer,
  productSearchReducer,
  mostViewReducer,
} from "./reducers/productReducers";

const reducers = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  productSearch: productSearchReducer,
  mostView: mostViewReducer,

  userAdd: addUserReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
