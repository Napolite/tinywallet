import React, { useState } from "react";
import "./welcomeStyle.css";

import image from "../../assets/images/SL_0212121_40670_78.jpg";

const Welcome = () => {
  return (
    <div className="welcome-root">
      <div className="welcome-main">
        <div className="image-div-initial">
          <div className="image-grid">
            <img src={image} alt="bitcoin" className="image" />
            <div class="overlay1"></div>
            <div class="overlay2"></div>
          </div>
          <div class="overlay3"></div>
          <div class="overlay4"></div>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const [password, setPassword] = useState("");
  const onEditPassword = (e) => {
    setPassword({ password: e.target.value });
  };
  return (
    <div className="login-grid">
      <div className="welcome-header">Welcome Hodler</div>
      <label>Password</label>
      <input
        type="password"
        className="login-input"
        value={password}
        onChange={onEditPassword}
      />
      <button className="login-button">Login</button>
      <div>
        <div>
          If you have forgotten your password, you can reset it by restoring
          your wallet
        </div>
      </div>
      <div className="walletrest">
        <button className="login-button">Create Wallet</button>
        <button className="login-button">Restore Wallet</button>
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
