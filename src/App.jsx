import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Router from "./routes";
import mockSupplements from "./JSON/supplements.json";
import mockWears from "./JSON/wears.json";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const productsContext = createContext(null);

function App() {
  const [supplements, setSupplements] = useState(null);
  const [wears, setWears] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const getSupplementData = () => {
    setSupplements(mockSupplements);
  };

  const getWearsData = () => {
    setWears(mockWears);
  };

  const navigateToSingleWear = (wearID) => {
    navigate(`/products/wears/${wearID}`);
  };

  const navigateToSingleSupplement = (supplementID) => {
    navigate(`/products/supplements/${supplementID}`);
  };

  const addToCart = (elem) => {
    setCart([...cart, elem]);
  };

  const removeFromCart = (item) => {
    setCart(
      cart.filter((elem) => {
        return elem !== item;
      })
    );
  };

  return (
    <>
      <productsContext.Provider
        value={{
          cart,
          supplements,
          wears,
          setCart,
          addToCart,
          removeFromCart,
          getWearsData,
          getSupplementData,
          navigateToSingleWear,
          navigateToSingleSupplement,
        }}
      >
        <NavBar />
        <Router />
        <Footer />
      </productsContext.Provider>
    </>
  );
}

export default App;
