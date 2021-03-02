import React, { useState } from "react";

import "./App.css";
import Header from "./component/Common/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./component/Common/Footer/Footer";

import AboutUs from "./component/AboutUs/AboutUs";
import ContactUs from "./component/ContactUs/ContactUs";
import Login from "./component/Login/Login";
import Breeding from "./component/Breeding/Breeding";
import Trotting from "./component/Trotting/Trotting";
import Training from "./component/Training/Training";
import Ownership from "./component/Ownership/Ownership";
import Home from "./component/Home/Home";
import useToken from "./customHook/useToken";

import { Provider } from "react-redux";
import store from "./Redux/store";
import { connect } from "react-redux";
import Logout from "./component/Logout/Logout";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import { setClient, unsetClient, setToken } from "./Redux/Index";
import TrainingCenterDetails from "./component/Training/TrainingCenterDetails";
import AddParticipate from "./component/Trotting/AddParticipate";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

function App({ token, setToken }) {
  // const { token, setToken } = useToken();

  // const token = getToken();
  // const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  if (token) {
    console.log("token : " + token);
  }
  const previousToken = sessionStorage.getItem("token");
  // console.log("rushi :" + previousToken);
  // const res = {
  //   token: previousToken,
  //   email: null,
  // };
  if (previousToken) {
    setToken(previousToken);
  }

  return (
    // <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        {!token ? <Header /> : null}
        <Route path="/dashboard" component={Dashboard} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/breeding" exact component={Breeding} />
          <Route path="/trotting" exact component={Trotting} />
          <Route path="/training" exact component={Training} />
          <Route path="/ownership" exact component={Ownership} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/training/:id" exact component={TrainingCenterDetails} />
          <Route path="/add" exact component={AddParticipate} />
          {/* <Route path="/horse/:id" exact component={BuyHorse} /> */}
        </Switch>
        {!token ? <Footer /> : null}
      </div>
    </BrowserRouter>
    // </Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
