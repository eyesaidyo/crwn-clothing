import { useSelector, useDispatch } from "react-redux/es/exports";
import Button from "../button/button.component";
import "./product-card.styles.jsx";
import { addItemToCart } from "../../store/cart/cart.action";
import { Footer, Name, Price, ProductCardContainer } from "./product-card.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, price, imageUrl } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
