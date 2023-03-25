import React from "react";
import { Slide } from "react-slideshow-image";
// import "..public/images/logo.jpg";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url:"images/logo.jpg"
  },
  {
    url:"images/logo1.jpg"
  },
  {
    url:"images/logo2.jpg"
  },
  {
    url:"images/logo3.jpg"
  },
  {
    url:"images/logo4.jpg"
  }
];

const ImagesSlide = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImagesSlide;
