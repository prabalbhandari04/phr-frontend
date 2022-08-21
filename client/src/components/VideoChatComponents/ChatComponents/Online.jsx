import axios from "axios";
import { useEffect, useState } from "react";
import "./online.css";

export default function Online() {
  

  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend" >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://i.imgur.com/Q9xQ8.png"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Online John</span>
        </div>
    </div>
  );
}