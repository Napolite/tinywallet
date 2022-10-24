import React from "react";
import "./main.css";
import icon from "assets/images/icon-sidebar.svg";

import image from "assets/images/SL_0212121_40670_78.jpg";
const Main = () => {
  return (
    <div>
      <div className="mainRoot">
        <div className="sidebar-parent">
          <div className="sideBar">
            <div>
              <div>
                <img src={image} alt="" />
              </div>
            </div>
            <div className="main-icons">
              <img src={icon} alt="" />
            </div>
            <div className="main-icons">
              <img src={icon} alt="" />
            </div>
            <div className="main-icons">
              <img src={icon} alt="" />
            </div>
            <div className="main-icons">
              <img src={icon} alt="" />
            </div>
            <div className="main-icons">
              <img src={icon} alt="" />
            </div>
            <div className="main-icons">
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
        <div className="mainScreen">
          <div className="assets">
            <div> main asset price</div>
            <div>other assets price</div>
          </div>
          <div className="transactions">
            <div>chart to usd</div>
            <div> transaction list</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
