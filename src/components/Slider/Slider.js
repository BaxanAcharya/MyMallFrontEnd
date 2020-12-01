import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

function Silder() {
  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img
            alt=""
            src={
              "https://dokansewa.com/image/cache/catalog/demo/slideshow/home2/id2-slide1-1920x510.jpg"
            }
          />
        </div>
        <div>
          <img
            alt=""
            src={
              "https://dokansewa.com/image/cache/catalog/demo/slideshow/home2/id2-slide2-1920x510.jpg"
            }
          />
        </div>
        <div>
          <img
            alt=""
            src={
              "https://dokansewa.com/image/cache/catalog/demo/slideshow/home2/id2-slide3-1920x510.jpg"
            }
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Silder;
