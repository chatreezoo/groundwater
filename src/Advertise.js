import React, { useState } from "react";
import Activity from "./Activity";
import { Select, MenuItem, FormControl } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ImportExportTwoToneIcon from "@mui/icons-material/ImportExportTwoTone";
import Box from "@mui/material/Box";
import VideoCard from "./VideoCard";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FeedTwoToneIcon from "@mui/icons-material/FeedTwoTone";
import "./Advertise.css";

function Advertise() {
  const [news, setNews] = useState("all");
  const [activity, setActivity] = useState("");
  const [video, setVideo] = useState("");

  const handleChangeNews = (event) => {
    setNews(event.target.value);
  };

  const handleChangeActivity = (event) => {
    setActivity(event.target.value);
  };

  const handleChangeVideo = (event) => {
    setVideo(event.target.value);
  };

  return (
    <div className="Advertise">
      <div className="container__top">
        <div className="container__left">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: '50px'
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FeedTwoToneIcon className="test__icon" />
              <h2>ข่าวประชาสัมพันธ์</h2>
            </div>
            <Box style={{ display: "flex" }}>
              <FormControl fullWidth>
                <Select
                  value={news}
                  onChange={handleChangeNews}
                  sx={{
                    background: "yellow",
                    width: "130px",
                    height: "40px",
                    borderRadius: "8px",
                  }}
                >
                  <MenuItem value="all">ดูทั้งหมด </MenuItem>
                  <MenuItem value="lasted">ข่าวล่าสุด </MenuItem>
                  <MenuItem value="oldest">ข่าวเก่า</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div className="container__right">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: '50px'

            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <CalendarMonthTwoToneIcon className="icon__Calender" />
              <h2>ปฎิทินกิจกรรม</h2>
            </div>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormControl fullWidth>
                <Select
                  value={activity}
                  onChange={handleChangeActivity}
                  sx={{
                    background: "yellow",
                    width: "100px",
                    height: "40px",
                  }}
                >
                  <MenuItem value={0}>ดูทั้งหมด </MenuItem>
                  <MenuItem value={10}>item 1 </MenuItem>
                  <MenuItem value={20}>item 2 </MenuItem>
                  <MenuItem value={30}>item 3 </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>

      <div className="Box__img">
        <div className="image">
          <img src="images/logo.jpg" alt="" />
          <h2>อบรม หลักสูตร "เจาะน้ำบาดาล" ระดับ 1 รุ่นที่ 26</h2>
        </div>
        <div className="Box__list">
          <div className="list">
            <div className="Text__list">
              <Activity />
            </div>
          </div>
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
            <FormControl fullWidth>
              <Select
                value={video}
                onChange={handleChangeVideo}
                sx={{
                  background: "yellow",
                  width: "100px",
                  height: "40px",
                }}
              >
                <MenuItem value={0}>ดูทั้งหมด </MenuItem>
                <MenuItem value={10}>item 1 </MenuItem>
                <MenuItem value={20}>item 2 </MenuItem>
                <MenuItem value={30}>item 3 </MenuItem>
              </Select>
            </FormControl>
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
