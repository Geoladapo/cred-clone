import CredExprerience from '../component/CredExperience/CredExprerience';
import FeelSpecial from '../component/FeelSpecial/FeelSpecial';
import HeroSection from '../component/HeroSection/HeroSection';
import ProductShowCase from '../component/ProductShowCase/ProductShowCase';
import Header from '../component/common/Header/Header';

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <CredExprerience />
    </>
  );
};

export default Homepage;
