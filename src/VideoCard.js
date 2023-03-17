import React from "react";
import VideoRow from "./VideoRow";
import "./VideoCard.css";

function VideoCard() {
  // image, title, explain 
  const data = [
    {
      title : 'วิชาที่ 1 ความรู้เบี้องต้นด้านน้ำบาดาล',
      image:"https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg",
      explain:"วัฏจักของน้ำและความหมายของน้ำบาดาลคุรสมบัติทางชลศาสตร์ของหินอุ้มน้ำ"
    },
    {
      title:"วิชาที่ 2 ความรู้เบี้องต้นด้านน้ำบาดาล",
      image:"https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg",
      explain:"วัฏจักของน้ำและความหมายของน้ำบาดาลคุรสมบัติทางชลศาสตร์ของหินอุ้มน้ำ"
    },
    {
      title:"วิชาที่ 3 ความรู้เบี้องต้นด้านน้ำบาดาล",
      image:"https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg",
      explain:"วัฏจักของน้ำและความหมายของน้ำบาดาลคุรสมบัติทางชลศาสตร์ของหินอุ้มน้ำ"
    },
    {
      title:"วิชาที่ 4 ความรู้เบี้องต้นด้านน้ำบาดาล",
      image:"https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg",
      explain:"วัฏจักของน้ำและความหมายของน้ำบาดาลคุรสมบัติทางชลศาสตร์ของหินอุ้มน้ำ"
    },
    {
      title:"วิชาที่ 5 ความรู้เบี้องต้นด้านน้ำบาดาล",
      image:"https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg",
      explain:"วัฏจักของน้ำและความหมายของน้ำบาดาลคุรสมบัติทางชลศาสตร์ของหินอุ้มน้ำ"
    },
    {
      title:"วิชาที่ 6 ความรู้เบี้องต้นด้านน้ำบาดาล",
      image:"https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg",
      explain:"วัฏจักของน้ำและความหมายของน้ำบาดาลคุรสมบัติทางชลศาสตร์ของหินอุ้มน้ำ"
    },
    {
      title:"วิชาที่ 7 ความรู้เบี้องต้นด้านน้ำบาดาล",
      image:"https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg",
      explain:"วัฏจักของน้ำและความหมายของน้ำบาดาลคุรสมบัติทางชลศาสตร์ของหินอุ้มน้ำ"
    },
    {
      title:"วิชาที่ 8 ความรู้เบี้องต้นด้านน้ำบาดาล",
      image:"https://www.technologychaoban.com/wp-content/uploads/2018/01/%E0%B8%AA%E0%B8%81%E0%B8%B9%E0%B9%8A%E0%B8%9B-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9A%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A5.jpg",
      explain:"วัฏจักของน้ำและความหมายของน้ำบาดาลคุรสมบัติทางชลศาสตร์ของหินอุ้มน้ำ"
    }

  ]
  return (
    <div className="VideoCard">
      <div className="Card">
        {data?.map((item, index) => ((
          <VideoRow className="image"  key={index} image={item.image} title={item.title} explain={item.explain}   />
        )))}
      </div>
    </div>
  );
}

export default VideoCard;
