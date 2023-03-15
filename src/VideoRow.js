import React from "react";

function VideoRow({ image, title, explain }) {
  return (
    <div className="Video">
      <img src={image} alt="" />
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.baanlaesuan.com%2F229711%2Fmaintenance%2Foutdoor%2Fgroundwater&psig=AOvVaw0Uh1bJ8wB3Rswz4vXYuYK5&ust=1678969210180000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDR6Oz13f0CFQAAAAAdAAAAABAE"
        alt=""
      />

      <div className="">
        <h3>{title}</h3>
        <p className="">{explain}</p>
      </div>
    </div>
  );
}

export default VideoRow;
