import React from "react";
import EventCalendar from "./EventCalendar";
import Alllessons from "./Alllessons";
import VideoCard from "./VideoCard";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FeedTwoToneIcon from "@mui/icons-material/FeedTwoTone";
import HeightTwoToneIcon from "@mui/icons-material/HeightTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import "./Advertise.css";

function Advertise() {
  return (
    <div>
      <div className="Advertise">
        <FeedTwoToneIcon />
        ข่าวประชาสัมพันธ์
        <EventCalendar />
        <CalendarMonthTwoToneIcon />
        ปฏิทินกิจกรรม
        <EventCalendar />
      </div>

      <div>
        <MenuBookTwoToneIcon />
        บทเรียนทั้งหมด
        <HeightTwoToneIcon />
        เรียงตาม
        <Alllessons />
      </div>
      <div>
        <VideoCard/>
      </div>
    </div>
  );
}

export default Advertise;
