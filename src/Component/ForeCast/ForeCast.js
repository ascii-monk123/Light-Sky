import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ForeCastCard from '../UI/ForeCastCard/ForeCastCard';

const ForeCast = (props) => {
  const weather = props.dataList.map((data, index) => (
    <div className="item" key={index}>
      <h1>{data.main}</h1>
    </div>
  ));
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      center={true}
      margin={10}
      items={1}
      nav
      responsive={{
        400: {
          items: 1,
          dotsEach: 3,
        },
        600: {
          items: 2,
          dotsEach: 3,
        },
        1000: {
          items: 3,
          dotsEach: 3,
        },
      }}
    >
      {weather}
    </OwlCarousel>
  );
};

export default ForeCast;
