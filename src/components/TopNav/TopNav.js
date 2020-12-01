import React from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
const TopNav = () => {
  return (
    <div className="topNav">
      <div className="topNav__date">
        <Typography variant="subtitle1" style={{ marginLeft: "50px" }}>
          {new Date().toDateString()}
        </Typography>
      </div>
      <div className="topNav__link">
        <a
          href="https://www.worldometers.info/coronavirus"
          target="_blank"
          rel="noreferrer"
          className="topNav__linkAnchor"
        >
          Get the latest Covid-19 updates
        </a>
      </div>
    </div>
  );
};

export default TopNav;
