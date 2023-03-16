import React from "react";
import "./VideoRow.css";

function VideoRow({ image, title, explain }) {
  return (
    <div className="Video">
      <img src={image} alt="" />     
      <h3>{title}</h3>
      <p>{explain}</p>
    </div>
  );
}

export default VideoRow;
