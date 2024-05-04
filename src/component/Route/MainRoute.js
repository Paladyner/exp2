import Sider from "antd/lib/layout/Sider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound404 from "../../screens/404";
import Checkout from "../../screens/Checkout";
import ClothesPage from "../Page/Clothes/ClothesPage";
import BodyScreen from "../UI/Body/BodyScreen";
import ProductDetail from "../UI/Product/ProductDetail";
import ScrollToTop from "../UI/Reuseable/ScrollToTop";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import AboutUs from "../UI/About Us/AboutUs";
import MainScreen2 from "../../screens/mainscreen2";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BodyScreen />} />
        <Route path="/:id" element={<PageNotFound404 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/clothes" element={<ClothesPage />} />
        <Route path="/clothes/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mainscreen2" element={<MainScreen2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
