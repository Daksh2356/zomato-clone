// redux types

import {
  GET_CART,
  //   UPDATE_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREEMENT_QUANTITY,
  DECREEMENT_QUANTITY,
} from "../cart/cart.type";

export const getCart = () => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.zomatoCart) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
      cartData.cart = cart;
    }

    return dispatch({ type: GET_CART, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const addToCart = (newFood) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.zomatoCart) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
      cartData.cart = cart;
    }

    cartData.cart.push(newFood);

    localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

    return dispatch({ type: ADD_TO_CART, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const deleteFromCart = (foodId) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.zomatoCart) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
      cartData.cart = cart;
    }

    if (!cartData.cart.length) {
      alert("Cart is empty !!");
      return dispatch({ type: "ERROR", payload: "EMPTY CART !! " });
    }

    cartData.cart = cartData.cart.filter(({ _id }) => _id !== foodId);

    localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

    return dispatch({ type: DELETE_FROM_CART, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const increement_qty = (foodId) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.zomatoCart) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
      cartData.cart = cart;
    }

    cartData.cart = cartData.cart.map((food) =>
      food._id === foodId
        ? {
            ...food,
            totalPrice: food.price * (food.quantity + 1),
            quantity: food.quantity + 1,
          }
        : food
    );

    localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

    return dispatch({ type: INCREEMENT_QUANTITY, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const decreement_qty = (foodId) => async (dispatch) => {
  try {
    let cartData = { cart: [] };

    if (localStorage.zomatoCart) {
      const { cart } = JSON.parse(localStorage.getItem("zomatoCart"));
      cartData.cart = cart;
    }

    cartData.cart = cartData.cart.map((food) =>
      food._id === foodId
        ? {
            ...food,
            totalPrice: food.price * (food.quantity - 1),
            quantity: food.quantity - 1,
          }
        : food
    );

    localStorage.setItem("zomatoCart", JSON.stringify({ cart: cartData.cart }));

    return dispatch({ type: DECREEMENT_QUANTITY, payload: cartData.cart });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
