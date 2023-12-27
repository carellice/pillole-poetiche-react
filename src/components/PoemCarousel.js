// PoemCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PoemCard from './PoemCard';

const PoemCarousel = ({ poems }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings} className="custom-slick">
      {poems.map((poem, index) => (
        <PoemCard key={index} title={poem.title} poem={poem.poem} author={poem.author} />
      ))}
    </Slider>
  );
}

export default PoemCarousel;
