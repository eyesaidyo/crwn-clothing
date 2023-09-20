import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import { useEffect, } from "react";
import { setCurrentUserAction } from "./store/user/user.action";
import { useDispatch } from "react-redux/es/exports";
import {
  getCurrentUser,
} from "./utils/firebase/firebase.utils";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getCurrentUser().then(user => console.log(user))
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
