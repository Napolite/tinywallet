import React, { useState } from "react";
import "./welcomeStyle.css";
import $, { event } from "jquery";

import image from "../../assets/images/SL_0212121_40670_78.jpg";

const Welcome = () => {
  const [loggedIn, setLoggedIn] = useState(true);
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

  const onLoginClick = () => {
    $(".login-grid").css({
      animation: "fadeOut .7s forwards",
      zIndex: 0,
    });
    $(".image-div-initial").css({ transition: "2s ease .7s", left: "45%" });

    setTimeout(() => {
      if (loggedIn === false) {
        $(".image-div-initial").css({
          transition: "none",
          boxShadow: "0px 0px 30px #ff000d",
          borderColor: "#ff000d",
        });
        $(".image-grid").css({
          boxShadow: "0px 0px 20px #ff000d",
          borderColor: "#ff000d",
        });
        setTimeout(() => {
          $(".image-grid").css({
            boxShadow: "0px 0px 20px rgba(178, 255, 255, 255)",
            borderColor: "rgba(178, 255, 255, 255)",
            transition: "2s ease",
          });
          $(".image-div-initial").css({
            transition: "2s ease",
            left: "20%",
            boxShadow: "0px 0px 30px rgba(178, 255, 255, 255)",
            borderColor: "rgba(178, 255, 255, 255)",
          });
          $(".login-grid").css({
            animation: "fadeIn .8s forwards .8s",
            zIndex: 15,
          });
        }, 700);
      } else {
        $(".image-div-initial").css({
          transition: "none",
          boxShadow: "0px 0px 30px #32cd32",
          borderColor: "#32cd32",
        });
        $(".image-grid").css({
          transition: "none",
          boxShadow: "0px 0px 20px #32cd32",
          borderColor: "#32cd32",
        });
        $(".overlay1,.overlay2, .overlay3, .overlay4").css({
          animation: "none",
        });
        setTimeout(() => {
          $(".image").css({ animation: "fadeOut .5s forwards" });
          $(".image-div-initial").css({
            transition: "2s",
            opacity: 0,
            //   display: "none",
          });
        }, 700);
      }
    }, 3000);
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
        <Login onBack={fromLoginBack} onLogin={onLoginClick} />
      </div>
    </div>
  );
};

const Login = ({ onBack, onLogin }) => {
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
        <button className="login-button" onClick={onLogin}>
          Login
        </button>
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
