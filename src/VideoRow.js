import React from "react";
import "./VideoRow.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfTwoToneIcon from "@mui/icons-material/StarHalfTwoTone";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
function VideoRow({ image, title, explain }) {
  return (
    <div className="Video">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{explain}</p>
      <hr />
      <div className="ster">
        <StarRoundedIcon className="ster" />
        <StarRoundedIcon className="ster" />
        <StarRoundedIcon className="ster" />
        <StarRoundedIcon className="ster" />
        <StarHalfTwoToneIcon className="ster" />
        (4.5)
        <ShareRoundedIcon className="shar" />
      </div>
    </div>
  );
}

export default VideoRow;
