import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Router from "./routes";
//import mockSupplements from "./JSON/supplements.json";
//import mockWears from "./JSON/wears.json";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const productsContext = createContext(null);

const ORIGIN_URL = import.meta.env.VITE_ORIGN_URL;

function App() {
  const [supplements, setSupplements] = useState(null);
  const [singleItem, setSingleItem] = useState(null);
  const [wears, setWears] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const getSupplementData = async () => {
    try {
      const response = await axios.get(`${ORIGIN_URL}/product`);
      setSupplements(
        response.data.filter((elem) => {
          return elem.productType === "supplement";
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const getSingleItem = async (id) => {
    const response = await axios.get(`${ORIGIN_URL}/product/${id}`);
    const item = response.data;
    setSingleItem(item);
  };
  const getWearsData = async () => {
    try {
      const response = await axios.get(`${ORIGIN_URL}/product`);
      setWears(
        response.data.filter((elem) => {
          return elem.productType === "wear";
        })
      );
    } catch (err) {
      console.error(err);
    }
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
          singleItem,
          setCart,
          addToCart,
          removeFromCart,
          getWearsData,
          getSupplementData,
          navigateToSingleWear,
          navigateToSingleSupplement,
          getSingleItem,
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
