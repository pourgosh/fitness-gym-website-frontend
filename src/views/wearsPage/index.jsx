import WearsTop from "../../components/wears/wearsTop";
import { productsContext } from "../../App";
import { useContext, useEffect } from "react";
import WearsMid from "../../components/wears/wearsMid";

const WearsPage = () => {
  const products = useContext(productsContext);

  useEffect(() => {
    products.getWearsData();
  }, [products]);

  return (
    <main>
      <WearsTop />
      <WearsMid />
    </main>
  );
};

export default WearsPage;
