import HeroSection from '../component/HeroSection/HeroSection';
import ProductShowCase from '../component/ProductShowCase/ProductShowCase';
import Header from '../component/common/Header/Header';

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />;
      <ProductShowCase />
    </>
  );
};

export default Homepage;
