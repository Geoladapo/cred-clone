import Button from '../common/Button/Button';
import './heroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>pay credit bill. earn guaranteed $20 back.</div>
        <div className="claim-anchor">
          claim now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
          />
        </div>
      </div>
      <div className="flex absolute-center flex-col hero-section max-width">
        <h1 className="hero-heading">rewards for paying credit card bills.</h1>
        <p className="hero-subheading">
          Join 7.5M+ members who win rewards and cashbacks everyday
        </p>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
};

export default HeroSection;
