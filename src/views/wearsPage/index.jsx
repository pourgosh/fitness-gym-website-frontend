import WearsTop from "../../components/wears/wearsTop";
import { productsContext } from "../../App";
import { useContext, useEffect } from "react";

const WearsPage = () => {
  const products = useContext(productsContext);

  useEffect(() => {
    products.getWearsData();
  }, [products]);

  return (
    <main>
      <WearsTop />
    </main>
  );
};

export default WearsPage;
