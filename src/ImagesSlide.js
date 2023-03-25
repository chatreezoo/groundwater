import React from "react";
import { Slide } from "react-slideshow-image";
// Use lib https://www.npmjs.com/package/react-slideshow-image
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
  width:  "100%"
};
const slideImages = [
  {
    url: "images/logo.jpg",
  },
  {
    url: "images/logo1.jpg",
  },
  {
    url: "images/logo2.jpg",
  },
  {
    url: "images/logo3.jpg",
  },
  {
    url: "images/logo4.jpg",
  },
];

const ImagesSlide = () => {
  return (
    
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    
  );
};

export default ImagesSlide;
