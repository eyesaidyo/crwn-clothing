import { Outlet, } from "react-router-dom";
import { Fragment, } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { NavLink, NavLinksContainer, NavigationContainer, LogoContainer } from "./navigation.styles.jsx";
//import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux/es/exports";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
function Navigation() {
  const currentUser = useSelector(state => state.user.currentUser);
  const isCartOpen = useSelector(selectIsCartOpen)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
export default Navigation;
