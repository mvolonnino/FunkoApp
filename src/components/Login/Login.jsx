import React, { useEffect, useState } from "react";

import "./Login.css";
import wavingPikachu from "../../img/waving-pikachu.png";
import thorEndgame from "../../img/thor-endgame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [elementsObj, setElementsObj] = useState({});
  console.log({ elementsObj });
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");

  const addSignUpMode = () => {
    elementsObj.container.classList.add("sign-up-mode");
  };

  const remSignUpMode = () => {
    elementsObj.container.classList.remove("sign-up-mode");
  };

  useEffect(() => {
    setElementsObj({
      container: document.querySelector(".login"),
    });
  }, []);
  return (
    <div className="login">
      <div className="forms-container">
        <div className="signin-signup">
          {/* sign in */}
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" value="Login" className="button">
              Login
            </button>
            {/* social sign in */}
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
          </form>
          {/* sign up */}
          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" value="Sign up" className="button">
              Sign Up
            </button>
            {/* social sign up */}
            <p className="social-text">Or Sign Up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here?</h3>
            <p>Sign up for everything Funko.</p>
            <button
              className="button transparent"
              id="sign-up-btn"
              onClick={addSignUpMode}
            >
              Sign Up
            </button>
          </div>
          <img src={wavingPikachu} alt="waving funko" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in for everything Funko.</p>
            <button
              className="button transparent"
              id="sign-in-btn"
              onClick={remSignUpMode}
            >
              Sign In
            </button>
          </div>
          <img src={thorEndgame} alt="waving funko" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
