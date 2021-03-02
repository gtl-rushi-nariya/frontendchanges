import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>Gateway Group</h3>
              <p>
                B/81, Corporate House,
                <br /> Judges Bunglow Rd, Bodakdev, <br />
                Ahmedabad, Gujarat 380054
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> 079 2685 2554
                <br />
                <strong>Email:</strong> GatewayGroupCorp@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li className="d-flex justify-content-center">
                  <a href="#">Home</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="#">About us</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="#">Contact Us</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="#">Login</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="#">Our Team</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li className="d-flex justify-content-center">
                  <a href="#">Horse Trainig</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="#">Horse Breeding</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="#">Horse Trotting</a>
                </li>
                <li className="d-flex justify-content-center">
                  <a href="#">Ownership</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Horsella Project</h4>
              <div className="social-links text-center pt-3 pt-md-0">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-3">
        <div className="m-md-auto text-center text-md-center">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Horsella</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/company-free-html-bootstrap-template/ --> */}
            Designed by{" "}
            <a href="https://bootstrapmade.com/" style={{ color: "#1bbd36" }}>
              Team Horsella
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
