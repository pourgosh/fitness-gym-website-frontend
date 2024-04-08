import About from "../../components/about";
import Benefits from "../../components/benefits";
import Goals from "../../components/goals";
import Header from "../../components/header";
import MembershipForm from "../../components/membershipForm";
import OurProduct from "../../components/ourProduct";
import Partners from "../../components/partners";

const LandingPage = () => {
  return (
    <main>
      <Header />
      <About />
      <Partners />
      <Goals />
      <OurProduct />
      <Benefits />
      <MembershipForm />
    </main>
  );
};
export default LandingPage;
