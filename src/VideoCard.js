import React from "react";
import VideoRow from "./VideoRow";
import "./VideoCard.css";

function VideoCard() {
  return (
    <div className="VideoCard">
      <VideoRow
        title="aSDFGH"
        image="https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg"
        explain="ASDFGH"
      />
    </div>
  );
}

export default VideoCard;
