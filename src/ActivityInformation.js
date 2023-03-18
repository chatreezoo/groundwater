import React from "react";
import "./ActivityInformation.css";

function ActivityInformation({ title, explain }) {
  return (

    <div>
    <div className="col">
      <h1>{title}</h1>
      <h3>{explain}</h3>
      <hr/>
    </div>
    
    </div>
    
  );
}

export default ActivityInformation;
