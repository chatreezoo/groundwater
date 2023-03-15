import React from "react";
import "./VideoCard.css";

function VideoCard({ image, title, explain }) {
  return (
    <div className="VideoCard">
      <img className="" src={image} alt="" />
      <div>
        <p>
          {title}
        </p>
        <h1>
        {explain}
        </h1>
      </div>
    </div>
  );
}

export default VideoCard;
