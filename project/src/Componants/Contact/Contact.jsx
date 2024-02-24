import React from "react";
import { RiFacebookBoxLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>If you have any queries or need assistance, feel free to reach out to us.</p>
      <p>Our team is always available to help you.</p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+918485096660</span>
              </div>
              <div>
                <p>Email</p>
                <span>Pratiks7@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No 45 Sector B-7 Mumbai1</span>
              </div>
              <ul>
                        <Link to={"/facebook"} target="blank"><RiFacebookBoxLine/></Link>
                            <Link to={"/Instagram"} target="blank"><RiInstagramLine/></Link>
                            <Link to={"/Twitter"} target="blank"><RiTwitterLine/></Link>
             
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;