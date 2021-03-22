import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./types";

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
