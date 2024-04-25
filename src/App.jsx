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

  return (
    <>
      <productsContext.Provider
        value={{
          supplements,
          wears,
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
