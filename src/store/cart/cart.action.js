import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";
export const setCartItems = cartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
export const toggleCartOpen = bool => createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, bool)