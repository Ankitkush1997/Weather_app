import React from "react";
import Weather from "../Weather/Weather";
import "./cloud.css";

const Clouds = () => {
  return (
    <div >
      <div class="background-container">
      
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
      />
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      
    </div>
    <Weather/>
    </div>
    
  );
};

export default Clouds;
