import React, { useState } from "react";
import Activity from "./Activity";
import ImagesSlide from "./ImagesSlide";
import { Select, MenuItem } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ImportExportTwoToneIcon from "@mui/icons-material/ImportExportTwoTone";
import Box from "@mui/material/Box";
import VideoCard from "./VideoCard";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FeedTwoToneIcon from "@mui/icons-material/FeedTwoTone";
import "./Advertise.css";

function Advertise() {
  const [video, setVideo] = useState(0);

  const handleChangeVideo = (event) => {
    setVideo(event.target.value);
  };

  return (
    <div className="Advertise">
      <div className="container__top">
        <div className="container__left">
          <div
            className="Loo"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "50px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FeedTwoToneIcon className="test__icon" />
              <h2>ข่าวประชาสัมพันธ์</h2>
            </div>
            <button
              className="button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjD-pGR4fn9AhWMSmwGHTlkDxsQPAgI";
              }}
            >
              ดูทั้งหมด
            </button>
          </div>
        </div>

        <div className="container__right">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "50px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <CalendarMonthTwoToneIcon className="icon__Calender" />
              <h2>ปฎิทินกิจกรรม</h2>
            </div>
            <button
              className="button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjD-pGR4fn9AhWMSmwGHTlkDxsQPAgI";
              }}
            >
              ดูทั้งหมด
            </button>
          </div>
        </div>
      </div>

      <div className="Box__center">
        <div className="image">
          <ImagesSlide />
          <h2>อบรม หลักสูตร "เจาะน้ำบาดาล" ระดับ 1 รุ่นที่ 26</h2>
        </div>
        <div className="list">
          <Activity />
        </div>
      </div>

      <div className="filter__box">
        <div className="filter__title">
          <MenuBookTwoToneIcon className="test__icon" />
          <h2>บทเรียนทั้งหมด</h2>
        </div>

        <div className="Select">
          <ImportExportTwoToneIcon className="test__icon__below" />
          <h2>เรียงตาม</h2>
          <Box className="Manu">
            <Select
              fullWidth
              value={video}
              onChange={handleChangeVideo}
              sx={{
                width: "160px",
                height: "45px",
              }}
            >
              <MenuItem value={0}>วิดีโอล่าสุด </MenuItem>
              <MenuItem value={10}>item 1 </MenuItem>
              <MenuItem value={20}>item 2 </MenuItem>
              <MenuItem value={30}>item 3 </MenuItem>
            </Select>
          </Box>
        </div>
      </div>
      <div>
        <hr />
        <VideoCard />
      </div>
    </div>
  );
}

export default Advertise;
