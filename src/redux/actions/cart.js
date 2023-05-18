import { cartTypes } from "../types";

export function addToCart(id) {
  return function (dispatch) {
    dispatch({
      type: cartTypes.ADD_TO_CART,
      payload: { id },
    });
  };
}

export function removeFromCart(id) {
  return function (dispatch) {
    dispatch({
      type: cartTypes.REMOVE_FROM_CART,
      payload: { id },
    });
  };
}
