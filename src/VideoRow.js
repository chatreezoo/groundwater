import React from "react";
import "./VideoRow.css";

function VideoRow({ image, title, explain }) {
  return (
    <div className="">
      <img src={image} alt="" />
      <div className="">
        <h3>{title}</h3>
        <p className="">{explain}</p>
      </div>
    </div>
  );
}

export default VideoRow;
