import React from "react";
import Activity from "./Activity";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import ImportExportTwoToneIcon from "@mui/icons-material/ImportExportTwoTone";
import Box from "@mui/material/Box";
import VideoCard from "./VideoCard";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FeedTwoToneIcon from "@mui/icons-material/FeedTwoTone";
import "./Advertise.css";

function Advertise() {
  const [news, setNews] = React.useState(0);
  const [activity, setActivity] = React.useState("");
  const [video, setVideo] = React.useState("");
  const handleChange = (event) => {
    setNews(event.target.value);
    setActivity(event.target.value);
    setVideo(event.target.value);
  };

  return (
    <div className="Advertise">
      <div className="Box__Top">
        <FeedTwoToneIcon className="test__icon" />
        <h2>ข่าวประชาสัมพันธ์</h2>

        <Box className="Manu">
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={news}
              onChange={handleChange}
              sx={{
                background: "yellow",
                width: "150px",
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

        <CalendarMonthTwoToneIcon className="icon__Calender" />
        <h2>ปฎิทินกิจกรรม</h2>
        <Box className="Manu">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">ดูทั้งหมด</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={activity}
              label="ดูทั้งหมด"
              onChange={handleChange}
              sx={{
                background: "yellow",
                width: "100px",
                height: "40px",
              }}
            >
              <MenuItem value={10}>item 1 </MenuItem>
              <MenuItem value={20}>item 2 </MenuItem>
              <MenuItem value={30}>item 3 </MenuItem>
            </Select>
          </FormControl>
        </Box>
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

      <div className="Box__below">
        <div className="below__header">
          <MenuBookTwoToneIcon className="test__icon" />
          <h2>บทเรียนทั้งหมด</h2>
        </div>
        <div className="Select">
          <ImportExportTwoToneIcon className="test__icon__below" />
          <h2>เรียงตาม</h2>
          <Box className="Manu">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                วิดีโอล่าสุด
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={video}
                label="วิดีโอล่าสุด"
                onChange={handleChange}
                sx={{
                  background: "yellow",
                  width: "100px",
                  height: "40px",
                }}
              >
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
