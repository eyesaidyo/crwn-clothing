import { CartIconContainer, ShoppingIconWrap, ItemCount } from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux/es/exports.js";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { toggleCartOpen } from "../../store/cart/cart.action.js";
const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)
  const toggleIsCartOpen = () => {

    dispatch(toggleCartOpen(isCartOpen ? false : true))
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconWrap />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
