import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store";

// import "./assets/vendor/bootstrap/css/bootstrap.min.css"
// import "./assets/vendor/icofont/icofont.min.css";
// import "./assets/vendor/boxicons/css/boxicons.min.css";
// import "./assets/vendor/animate.css/animate.min.css";
// import "./assets/vendor/venobox/venobox.css";
// import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
// import "./assets/vendor/aos/aos.css";
// import "./assets/vendor/remixicon/remixicon.css";
// import "./assets/vendor/jquery/jquery.min.js";
// import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./assets/vendor/jquery.easing/jquery.easing.min.js";
// import "./assets/vendor/php-email-form/validate.js";
// import "./assets/vendor/jquery-sticky/jquery.sticky.js";
// import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "./assets/vendor/venobox/venobox.min.js";
// import "./assets/vendor/waypoints/jquery.waypoints.min.js";
// import "./assets/vendor/owl.carousel/owl.carousel.min.js";
// import "./assets/vendor/aos/aos.js";
// import "./assets/js/main.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
