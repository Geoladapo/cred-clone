import AppRating from '../component/AppRating/AppRating';
import BrandsLove from '../component/BrandsLove/BrandsLove';
import CredExprerience from '../component/CredExperience/CredExprerience';
import CredSecurity from '../component/CredSecurity/CredSecurity';
import CredStory from '../component/CredStory/CredStory';
import FeelSpecial from '../component/FeelSpecial/FeelSpecial';
import HeroSection from '../component/HeroSection/HeroSection';
import Mobilescroll from '../component/MobileScroll/Mobilescroll';
import ProductShowCase from '../component/ProductShowCase/ProductShowCase';
import WindowPeak from '../component/WindowPeak/WindowPeak';
import Footer from '../component/common/Footer';
import Header from '../component/common/Header/Header';

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandsLove />
      <CredExprerience />
      <Mobilescroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default Homepage;
