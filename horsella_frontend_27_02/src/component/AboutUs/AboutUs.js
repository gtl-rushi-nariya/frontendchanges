import React from 'react';
import './AboutUs.css';
import imageName from '../../assets/img/horse2.jpg';

const AboutUs = () =>{
    return(
        <div className="ab">
          <div style={{backgroundColor:"#1bbd36",padding:"10px",overflow:"hidden"}}>
            <h2><b style={{color:"white"}}>ABOUT US</b></h2>
          </div>
            <br/>
            <main id="main">
              <section id="about-us" className="about-us">
                <div className="container" >

                  <div className="row content">
                    <div className="row" style={{paddingBottom: "20px"}}>
                      <div className="col-lg-12" >
                        <img src={imageName} className="imageAboutUs"/>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-lg-12 pt-4 pt-lg-0" >
                        <p>
                          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <ul>
                          <li><i className="fa fa-thumbs-up"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                          <li><i className="fas fa-thumbs-up"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                          <li><i className="fas fa-thumbs-up"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                        </ul>
                        <p className="font-italic">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <br/>
            <br/>
          </div>
        
    )
}
export default AboutUs;