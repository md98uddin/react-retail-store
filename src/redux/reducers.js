import { PRODUCTS } from "../product_data";
import { CAREERS } from "../careers_list";

export const initialState = {
  products: PRODUCTS,
  careers: CAREERS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
