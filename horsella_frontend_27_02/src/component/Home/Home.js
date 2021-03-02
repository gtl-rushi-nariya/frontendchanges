import React, { useEffect } from "react";
import news1 from "../../assets/img/news1.jpg";
import news2 from "../../assets/img/news2.jpg";
import news3 from "../../assets/img/news3.jpg";
import welfare from "../../assets/img/animal.png";
import training from "../../assets/img/equestrian.png";
import trotting from "../../assets/img/trotting-icon.png";
import breeding from "../../assets/img/horse-icon.png";
import ownership from "../../assets/img/veterinarian.png";
import racing from "../../assets/img/race-horse.png";

import "./Home.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div id="home" className="own">
      <section id="hero">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              // style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>
                    Welcome to <span>Horsella</span>
                  </h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <div className="text-center">
                    <a href="/about" className="btn-get-started">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="carousel-item item2"
              style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}
            >
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp">
                  <h2>Horse Training</h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <div className="text-center">
                    <a href="" className="btn-get-started">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="carousel-item item3"
              style={{ backgroundImage: "url(../../assets/img/breeding.jpg)" }}
            >
              <div className="carousel-container ">
                <div className="carousel-content animate__animated animate__fadeInUp ">
                  <h2>Horse Breeding</h2>
                  <p>
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <div className="text-center">
                    <a href="" className="btn-get-started">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon icofont-simple-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon icofont-simple-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>

          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>
        </div>
      </section>

      <br />
      <br />
      <main id="main">
        <section id="about-us" className="about-us">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>
                <strong>About Us</strong>
              </h2>
            </div>

            <br />
            <div className="row content">
              <div className="col-lg-6" data-aos="fade-right">
                <h2>Eum ipsam laborum deleniti velitena</h2>
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assum perenda sruen jonee trave
                </h3>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li>
                    <i className="fa fa-check-double"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequa
                  </li>
                  <li>
                    <i className="fa fa-check-double"></i> Duis aute irure dolor
                    in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="fa fa-check-double"></i> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in
                  </li>
                </ul>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        <section id="news" data-aos="fade-up">
          <div className="section-title">
            <h2>
              <strong>News</strong>
            </h2>
          </div>
          <br />

          {/* className="d-flex justify-content-center" */}

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div
                className="card"
                style={{ width: "21rem" }}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img
                  className="card-img-top"
                  src={news1}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Don’t Forget Your Mask and Social Distancing at the Barn
                  </h5>
                  <p className="card-text">
                    As a traditionally outdoor sport, horseback riding might
                    seem like one situation where you wouldn’t need to wear a
                    mask or stress over social distancing to prevent the spread
                    of COVID-19.
                  </p>
                  <a
                    href="https://thehorse.com/197299/dont-forget-your-mask-and-social-distancing-at-the-barn/"
                    className="btn btn-primary news-button"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div
                className="card"
                style={{ width: "21rem" }}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  className="card-img-top"
                  src={news2}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Thoracolumbar Pain in Horses: It’s Complicated
                  </h5>
                  <p className="card-text">
                    Back and Spine, Diagnosing Lameness, Diagnostics and
                    Technology, Horse Care, Lameness, Sports Medicine Learn to
                    recognize the signs of equine back pain and what therapies
                    are available.
                  </p>
                  <a
                    href="https://thehorse.com/185297/thoracolumbar-pain-in-horses-its-complicated/"
                    className="btn btn-primary news-button"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div
                className="card"
                style={{ width: "21rem" }}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  className="card-img-top"
                  src={news3}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    A Grumpy Horse in the Stall Is Probably Grumpy When Ridden
                  </h5>
                  <p className="card-text">
                    “Our study has shown that there’s a relationship between
                    poor welfare in a stall and the expression of behaviors,
                    postures, and particular way of moving when the horses are
                    being ridden”
                  </p>
                  <a
                    href="https://thehorse.com/197128/a-grumpy-horse-in-the-stall-is-probably-grumpy-when-ridden/"
                    className="btn btn-primary news-button"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>
                <strong>Services</strong>
              </h2>
              <p>
                Horsella helps you in managing your horse and stable
                efficiently.
              </p>
            </div>
            <br />
            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-blue">
                  <div className="icon">
                    <img src={training} width="80" height="80" />
                  </div>
                  <h4>
                    <a href="">Training</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box iconbox-orange ">
                  <div className="icon">
                    <img src={breeding} width="80" height="80" />
                  </div>
                  <h4>
                    <a href="">Breeding</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <img src={trotting} width="95" height="75" />
                  </div>
                  <h4>
                    <a href="">Trotting</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-yellow">
                  <div className="icon">
                    <img src={ownership} width="80" height="80" />
                  </div>
                  <h4>
                    <a href="">Ownership</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box iconbox-red">
                  <div className="icon">
                    <img src={welfare} width="80" height="80" />
                  </div>
                  <h4>
                    <a href="">Welfare</a>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box iconbox-teal">
                  <div className="icon">
                    <img src={racing} width="80" height="80" />
                  </div>
                  <h4>
                    <a href="">Racing</a>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <br />
      <br />
    </div>
  );
}

export default Home;
