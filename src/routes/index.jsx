import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/homepage";
import CartPage from "../views/CartPage";
import WearsPage from "../views/wearsPage";
import SupplementsPage from "../views/supplementsPage";
import SingleWearPage from "../views/wearsPage/singleItem";
import SingleSupplementsPage from "../views/supplementsPage/singleSupplementPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="products/wears" element={<WearsPage />} />
        <Route path="products/supplements" element={<SupplementsPage />} />
        <Route path="products/wears/:wearID" element={<SingleWearPage />} />
        <Route
          path="products/supplements/:supplementID"
          element={<SingleSupplementsPage />}
        />
      </Routes>
    </>
  );
};

export default Router;
