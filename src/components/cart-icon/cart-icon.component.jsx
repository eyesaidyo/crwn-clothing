import { CartIconContainer, ShoppingIconWrap, ItemCount } from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconWrap />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
