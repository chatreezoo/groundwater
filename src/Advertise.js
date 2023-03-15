import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import VideoCard from "./VideoCard";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FeedTwoToneIcon from "@mui/icons-material/FeedTwoTone";
import SyncTwoToneIcon from "@mui/icons-material/SyncTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import "./Advertise.css";

function Advertise() {
  const [add, setAdd] = React.useState("");

  const handleChange = (event) => {
    setAdd(event.target.value);
  };

  return (
    <div>
      <div className="Advertise">
        <FeedTwoToneIcon className="test__icon" />
        ข่าวประชาสัมพันธ์
        <Box sx={{ background: "yellow", minHeight: 50, minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">ดูทั้งหมด</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={add}
            label="ดูทั้งหมด"
            onChange={handleChange}
          >
            <MenuItem value={10}>item 1 </MenuItem>
            <MenuItem value={10}>item 2 </MenuItem>
            <MenuItem value={10}>item 3  </MenuItem>
          </Select>
        </FormControl>
      </Box>

        <CalendarMonthTwoToneIcon className="test__icon" />
        ปฏิทินกิจกรรม
        <Box sx={{ background: "yellow", minHeight: 50, minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">ดูทั้งหมด</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={add}
            label="ดูทั้งหมด"
            onChange={handleChange}
          >
            <MenuItem value={10}>item 1 </MenuItem>
            <MenuItem value={10}>item 2 </MenuItem>
            <MenuItem value={10}>item 3  </MenuItem>
          </Select>
        </FormControl>
      </Box>
      </div>

      <div>
        <MenuBookTwoToneIcon className="test__icon" />
        บทเรียนทั้งหมด
        <SyncTwoToneIcon className="test__icon" />
        เรียงตาม
        <Box sx={{ background: "yellow", minHeight: 50, minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">ดูทั้งหมด</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={add}
            label="ดูทั้งหมด"
            onChange={handleChange}
          >
            <MenuItem value={10}>item 1 </MenuItem>
            <MenuItem value={10}>item 2 </MenuItem>
            <MenuItem value={10}>item 3  </MenuItem>
          </Select>
        </FormControl>
      </Box>
      </div>
      <hr/>
      <div>
        <VideoCard />
      </div>
    </div>
  );
}

export default Advertise;
