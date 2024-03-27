import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slides = [
  {
    img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8403a0f8d48613a5.png?q=20",
    alt: "First image description",
  },
  {
    img: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/611e77220cd10cee.png?q=20",
    alt: "Second image description",
  },
  // ...add more slides as needed
];

const Header = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section>
      <Slider ref={setSliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.img}
              alt={slide.alt}
              style={{ width: "100%", display: "block" }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

export default Header;
