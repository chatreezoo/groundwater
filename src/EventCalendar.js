import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function EventCalendar() {
  const [add, setAdd] = React.useState("");

  const handleChange = (event) => {
    setAdd(event.target.value);
  };

  return (
    <div>
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
      <div className="receive">รับข้อมูล</div>
    </div>
  );
}
