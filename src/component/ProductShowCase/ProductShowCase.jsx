import { useEffect, useRef, useState } from 'react';
import './productShowCase.css';

const ProductShowCase = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    treshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return (
    <div
      className={`product-showcase  ${showAnimation ? 'scale-up-bottom' : ''}`}
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            className="showcase-ui showcase-mockup-1"
            alt=""
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            className="showcase-ui showcase-mockup-2"
            alt=""
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            className="showcase-ui showcase-mockup-3"
            alt=""
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            className="showcase-ui showcase-mockup-4"
            alt=""
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            className="showcase-ui showcase-mockup-5"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowCase;
