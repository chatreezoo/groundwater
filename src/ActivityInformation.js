import React from "react";
import "./ActivityInformation.css";

function ActivityInformation({ title, explain }) {
  return (
    <div className="col">
      <h2>{title}</h2>
      <h3>{explain}</h3>
    </div>
  );
}

export default ActivityInformation;
