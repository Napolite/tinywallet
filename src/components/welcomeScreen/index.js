import React, { useState } from "react";
import "./welcomeStyle.css";
import $, { event } from "jquery";

import image from "../../assets/images/SL_0212121_40670_78.jpg";

const Welcome = () => {
  const handleGetStartedClick = () => {
    $(function () {
      $(".image-div-initial").css({ transition: "2s ease", left: "20%" });
      $(".get-started-button").css({
        transition: "opacity 1s fade",
        opacity: "0",
      });
      $(".left-grid").css({
        animation: "fadeIn 1.5s forwards 1s",
        // animationDelay: "1s",
      });
    });
  };

  const handleShowLogInPage = () => {
    $(".left-grid").css({
      animation: "fadeOut .7s forwards",
      zIndex: 0,
    });

    $(".login-grid").css({
      animation: "fadeIn .8s forwards .8s",
      zIndex: 15,
    });
  };

  const fromLoginBack = () => {
    $(".left-grid").css({
      animation: "fadeIn .8s forwards .8s",
      zIndex: 15,
    });

    $(".login-grid").css({
      animation: "fadeOut .7s forwards",
      zIndex: 0,
    });
  };
  return (
    <div className="welcome-root">
      <div className="welcome-main">
        <div className="image-div-initial">
          <div className="image-grid">
            <img src={image} alt="bitcoin" className="image" />
            <div className="overlay1"></div>
            <div className="overlay2"></div>
          </div>
          <div className="overlay3"></div>
          <div className="overlay4"></div>
        </div>
        <div className="left-grid">
          <button onClick={handleShowLogInPage}>Login</button>
          <button>Create Wallet</button>
        </div>
        <div className="get-started-button">
          <button onClick={handleGetStartedClick}> Get Started</button>
        </div>
        <Login onBack={fromLoginBack} />
      </div>
    </div>
  );
};

const Login = ({ onBack }) => {
  const [password, setPassword] = useState("");
  const onEditPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="login-grid">
      <label>Password</label>
      <input
        type="password"
        className="login-input"
        value={password}
        onChange={onEditPassword}
      />

      <div className="walletrest">
        <button className="login-button" onClick={onBack}>
          Back
        </button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

const CreateAccount = () => {
  const [account, setAccount] = useState({});
  return (
    <div className="create-account">
      <div>
        <div>Create New Account</div>
        <div>
          <div>
            <label>Name</label>
            <input type="text" name="password" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
