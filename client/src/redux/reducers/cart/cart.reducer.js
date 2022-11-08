import {
  GET_CART,
  UPDATE_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREEMENT_QUANTITY,
  DECREEMENT_QUANTITY,
} from "../cart/cart.type";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case INCREEMENT_QUANTITY:
      return {
        ...state,
        cart: action.payload,
      };
    case DECREEMENT_QUANTITY:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default cartReducer;
