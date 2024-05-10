import WearsTop from "../../components/wears/wearsTop";
import { productsContext } from "../../App";
import { useContext, useEffect } from "react";
import WearsMid from "../../components/wears/wearsMid";
import WearsBottom from "../../components/wears/wearsBottom";

const WearsPage = () => {
  const products = useContext(productsContext);

  useEffect(() => {
    products.getWearsData();
  }, []);

  return (
    <main>
      <WearsTop />
      <WearsMid />
      <WearsBottom />
    </main>
  );
};

export default WearsPage;
