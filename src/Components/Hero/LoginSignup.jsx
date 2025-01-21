import React, { useState } from "react";
import "./LoginSignup.css"; // Ensure your CSS file path matches your project structure
import user from "../../assets/user.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";

const LoginSignup = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  return (
    <section className="forms-section">
      <h1 className="section-title">Login-Sign Up</h1>
      <div className="forms">
        <div className={`form-wrapper ${isLoginActive ? "is-active" : ""}`}>
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => setIsLoginActive(true)}
          >
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login">
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">
                  <img src={email} alt="Email Icon" className="icon" /> E-mail
                </label>
                <input id="login-email" type="email" placeholder="janedoe@gmail.com" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">
                  <img src={password} alt="Password Icon" className="icon" /> Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">
              Login
            </button>
            
          </form>
        </div>
        <div className={`form-wrapper ${!isLoginActive ? "is-active" : ""}`}>
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={() => setIsLoginActive(false)}
          >
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup">
            <fieldset>
              <legend>
                Please, enter your email, password and password confirmation for
                sign up.
              </legend>
              <div className="input-block">
                <label htmlFor="signup-username">
                  <img src={user} alt="User Icon" className="icon" /> Username
                </label>
                <input
                  id="signup-username"
                  type="text"
                  placeholder="username"
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-email">
                  <img src={email} alt="Email Icon" className="icon" /> E-mail
                </label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="janedoe@gmail.com"
                  required
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">
                  <img src={password} alt="Password Icon" className="icon" /> Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="******"
                  required
                />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;
