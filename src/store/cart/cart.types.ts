import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES{
  SET_CART_ITEMS= 'cart/SET_CART_ITEMS',
  TOGGLE_CART_OPEN= 'cart/TOGGLE_CART_OPEN',
  SET_CART_COUNT= 'cart/SET_CART_COUNT',
  SET_CART_TOTAL= 'cart/SET_CART_TOTAL'
}
export type CartItem= CategoryItem & {
  quantity:number,
}