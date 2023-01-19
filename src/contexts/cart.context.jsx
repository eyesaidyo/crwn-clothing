import { createContext, useReducer } from "react";
import createAction from '../utils/reducer/reducer.utils';
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  cartCount: 0,
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  cartTotal: 0,
});
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART_OPEN: 'TOGGLE_CART_OPEN'
}
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      return new Error(`Invalid action type in ${type}`)
  }
}
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const { isCartOpen, cartItems, cartCount, cartTotal } = state


  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: 'SET_CART_ITEMS', payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount
      }
    })
  }
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen = (bool) => {
    dispatch({ type: 'TOGGLE_CART_OPEN', payload: bool })
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    addCartItem,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
