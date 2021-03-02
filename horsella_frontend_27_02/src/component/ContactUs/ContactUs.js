import React from 'react'
import  './ContactUs.css';

const ContactUs = () =>{
    return(
        <div class="con">
            <div style={{backgroundColor:"#1bbd36",padding:"10px"}}>
            <h2><b style={{color:"white"}}>CONTACT US</b></h2>
          </div><br/>
        <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                    </div>

                </div>
                </section>
                <div className="map-section">
                <iframe style={{border:"0", width: "100%", height: "350px",marginBottom:"100px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.597839130263!2d72.51057131496803!3d23.038533884945007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cc0f98b79bb%3A0x93964e2d29f45f40!2sGateway%20Group%20-%20Software%20Engineering%20Services%20%26%20Solutions!5e0!3m2!1sen!2sin!4v1613033667464!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
                </div>

            <section id="contact" className="contact">
                <div className="container">

                    <div className="row justify-content-center" >

                    <div className="col-lg-10">

                        <div className="info-wrap">
                        <div className="row">
                            <div className="col-lg-4 info">
                            <i className="fa fa-map-marker"></i>
                            <h4>Location:</h4>
                            <p>
                            B/81, Corporate House,
                            <br /> Judges Bunglow Rd, Bodakdev, <br />
                            Ahmedabad, Gujarat 380054
                            </p>
                            </div>

                            <div className="col-lg-4 info mt-4 mt-lg-0">
                            <i className="fa fa-envelope"></i>
                            <h4>Email:</h4>
                            <p>GatewayGroupCorp@gmail.com</p>
                            </div>

                            <div className="col-lg-4 info mt-4 mt-lg-0">
                            <i className="fa fa-phone"></i>
                            <h4>Call:</h4>
                            <p>+91 79 2685 2554</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <br/><br/>

                    </div>

                    <div className="row mt-5 justify-content-center">
                    <div class="col-lg-10">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="form-row">
                            <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate"></div>
                            </div>
                            <div className="col-md-6 form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div className="validate"></div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
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
export default ContactUs;