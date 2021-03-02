import { Route, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "./Header.css";
import imageName from "../../../assets/img/logo_bg.png";
import BuyHorse from "../../Ownership/BuyHorse/BuyHorse";
//import classes from './Header.module.css';
import React, { useState } from "react";
import { connect } from "react-redux";
import "./Header.css";

const Header = ({ token }) => {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <a className="navbar-brand" id="ac" href="#">
            <img
              src={imageName}
              style={{ width: "150px", height: "50px" }}
              className="imgHeader"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-link nav-item">
                <NavLink
                  to="/"
                  className="Navlink"
                  activeStyle={{
                    color: "#1bbd36",
                  }}
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-link nav-item">
                <NavLink
                  to="/about-us"
                  className="Navlink"
                  activeStyle={{
                    color: "#1bbd36",
                  }}
                  exact
                >
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    to="/contact-us"
                    className="Navlink"
                    activeStyle={{
                      color: "#1bbd36",
                    }}
                    exact
                  >
                    ContactUs
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    to="/breeding"
                    className="Navlink"
                    activeStyle={{
                      color: "#1bbd36",
                    }}
                    exact
                  >
                    Breeding
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    to="/trotting"
                    className="Navlink"
                    activeStyle={{
                      color: "#1bbd36",
                    }}
                    exact
                  >
                    Trotting
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    to="/training"
                    className="Navlink"
                    activeStyle={{
                      color: "#1bbd36",
                    }}
                    exact
                  >
                    Training
                  </NavLink>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    to="/ownership"
                    className="Navlink"
                    activeStyle={{
                      color: "#1bbd36",
                    }}
                    exact
                  >
                    Ownership
                  </NavLink>
                </a>
              </li> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <NavLink to="/ownership" className="Navlink" exact>
                    Ownership
                  </NavLink>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    <NavLink
                      to="/myhorses"
                      activeStyle={{
                        color: "#1bbd36",
                      }}
                      exact
                    >
                      My Horses
                    </NavLink>
                  </a>
                  <a class="dropdown-item" href="#">
                    <NavLink
                      to="/ownership"
                      className="Navlink"
                      activeStyle={{
                        color: "#1bbd36",
                      }}
                      exact
                    >
                      Market
                    </NavLink>
                  </a>
                </div>
              </li>

              {/* <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Page 1 <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Page 1-1</a>
                  </li>
                  <li>
                    <a href="#">Page 1-1</a>
                  </li>
                  <li>
                    <a href="#">Page 1-1</a>
                  </li>
                </ul>
              </li> */}
              {!token ? (
                <li className="nav-item">
                  <a className="nav-link">
                    <NavLink
                      to="/login"
                      className="Navlink"
                      activeStyle={{
                        color: "#1bbd36",
                      }}
                      exact
                    >
                      Login
                    </NavLink>
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link">
                    <NavLink
                      to="/logout"
                      className="Navlink"
                      activeStyle={{
                        color: "#1bbd36",
                      }}
                      exact
                    >
                      Logout
                    </NavLink>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps, null)(Header);
