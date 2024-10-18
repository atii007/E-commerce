import {
  SET_AUTH_TOKEN,
  SET_CURRENT_USER,
  SET_ALL_PRODUCTS,
  SET_CART_ITEMS,
  SET_FORM_DATA,
  SET_OPEN,
  RESET_CART,
} from "./actionTypes";

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const currentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const getAllProducts = (products) => ({
  type: SET_ALL_PRODUCTS,
  payload: products,
});

export const getCartItems = (items) => ({
  type: SET_CART_ITEMS,
  payload: items,
});

export const resetCart = () => ({
  type: RESET_CART,
});

export const setFormData = (formData) => ({
  type: SET_FORM_DATA,
  payload: formData,
});

export const openLoginModal = (isOpen) => ({
  type: SET_OPEN,
  payload: isOpen,
});
