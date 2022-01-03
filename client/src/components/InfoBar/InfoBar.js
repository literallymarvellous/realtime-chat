import React from "react";
import { Link } from "react-router-dom";
import "./InfoBar.css";
import { HiStatusOnline, HiX } from "react-icons/hi";

export const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <HiStatusOnline style={{ color: "green", marginRight: "10px" }} />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <Link to="/">
          <HiX />
        </Link>
      </div>
    </div>
  );
};
