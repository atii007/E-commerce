// reducers.js
import {
  SET_AUTH_TOKEN,
  SET_CURRENT_USER,
  SET_ALL_PRODUCTS,
  SET_CART_ITEMS,
  SET_FORM_DATA,
  SET_OPEN,
  RESET_CART,
} from "../actions/actionTypes";

const getDefaultCart = () => {
  let Cart = {};
  for (let index = 0; index < 50 + 1; index++) {
    Cart[index] = 0;
  }
  return Cart;
};

const initialState = {
  authToken: null,
  currentUser: null,
  allProducts: [],
  cartItem: getDefaultCart(),
  formData: { username: "", email: "", password: "" },
  open: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, authToken: action.payload };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case SET_CART_ITEMS:
      return { ...state, cartItem: action.payload };
    case RESET_CART:
      return { ...state, cartItems: {} };
    case SET_FORM_DATA:
      return { ...state, formData: action.payload };
    case SET_OPEN:
      return { ...state, open: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
