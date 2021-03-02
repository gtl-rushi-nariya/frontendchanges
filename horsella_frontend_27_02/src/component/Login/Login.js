import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setClient, unsetClient } from "../../Redux/Index";

import "./Login.css";
import imageName from "../../assets/img/logo_bg.png";
import { loginUser } from "../../api/UserApi";

const Login = ({ setToken, setClient, token, history, email }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser({
      email: username,
      password: password,
    });
    console.log(res);
    setClient(res);
    history.push("/dashboard");
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#1bbd36",
          padding: "10px",
          marginTop: "80px",
        }}
      >
        <h2>
          <b style={{ color: "white" }}>LOGIN</b>
        </h2>
      </div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form
              className="login100-form validate-form p-l-55 p-r-55 p-t-40 p-b-40"
              onSubmit={handleSubmit}
            >
              <div className="logo-container m-b-32">
                <img className="logo" src={imageName} />
              </div>
              <div
                className="wrap-input100 validate-input m-b-16 mx-auto"
                data-validate="Please enter username"
              >
                <input
                  className="input100"
                  type="text"
                  // name="username"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  // autocomplete="off"
                />
                <span className="focus-input100"></span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-40 mx-auto"
                data-validate="Please enter password"
              >
                <input
                  className="input100"
                  type="password"
                  // name="pass"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  // autocomplete="off"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="container-login100-form-btn m-auto">
                <button
                  type="submit"
                  // onClick={handleSubmit}
                  className="login100-form-btn"
                  id="button"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    email: state.user.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setClient: (token) => dispatch(setClient(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
