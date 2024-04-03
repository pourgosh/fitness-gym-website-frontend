import { Route, Routes } from "react-router-dom";
import LandingPage from "../views/homepage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default Router;
