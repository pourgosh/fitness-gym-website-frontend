import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/homepage";
import CartPage from "../views/CartPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default Router;
