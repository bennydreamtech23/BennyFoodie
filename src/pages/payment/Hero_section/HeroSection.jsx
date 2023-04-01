import HeaderSection from "../../../components/headerSection/HeaderSection";
import Styles from "../paystack/Paystack.module.scss";
const HeroSection = () => {
  return (
    <section>
      <HeaderSection className={Styles.Title} title="Payment with Paystack" />
    </section>
  );
};

export default HeroSection;
