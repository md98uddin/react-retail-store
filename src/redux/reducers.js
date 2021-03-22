import { PRODUCTS } from "../product_data";
import { CAREERS } from "../careers_list";
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from "./types";

export const initialState = {
  products: PRODUCTS,
  careers: CAREERS,
  user: null,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
