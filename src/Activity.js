import React from "react";
import ActivityInformation from "./ActivityInformation";
import "./Activity.css";

function Activity() {
  const data = [
    {
      title: "23 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
    {
      title: "24 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
    {
      title: "25 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
    {
      title: "26 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
    {
      title: "27 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
    {
      title: "28 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
    {
      title: "28 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
    {
      title: "28 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
    {
      title: "28 ม.ค.66",
      explain: "อบรม หลักสูตร ช่างเจาะบาดาล ระดับ 1 รุ่นที่ 26",
    },
  ];
  return (
    <div className="Act">
      {data?.map((item) => (
        <ActivityInformation title={item.title} explain={item.explain} />
      ))}
    </div>
  );
}

export default Activity;
