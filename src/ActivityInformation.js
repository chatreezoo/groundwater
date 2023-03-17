import React from "react";
import "./ActivityInformation.css";

function ActivityInformation({ title, explain }) {
  return (
    <div className="col">
      <h1>{title}</h1>
      <p>{explain}</p>
      <hr/>
    </div>
  );
}

export default ActivityInformation;
