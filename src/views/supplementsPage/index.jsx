import { useContext, useEffect } from "react";
import SupplementsBottom from "../../components/supplements/supplementsBottom";
import SupplementsMiddle from "../../components/supplements/supplementsMiddle";
import SupplementsTop from "../../components/supplements/supplementsTop";
import { productsContext } from "../../App";

const SupplementsPage = () => {
  const products = useContext(productsContext);

  useEffect(() => {
    products.getSupplementData();
  }, [products]);
  return (
    <main>
      <SupplementsTop />
      <SupplementsMiddle />
      <SupplementsBottom />
    </main>
  );
};

export default SupplementsPage;
