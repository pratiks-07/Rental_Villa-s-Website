import React from "react";
import About from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>We understand the importance of a healthy and safe environment for your family. That's why we prioritize your peace of mind. Our team of professionals is dedicated to providing the best possible care for your loved ones.</p>
          <p>Our team of professionals is committed to providing compassionate care to your loved ones. We understand the unique needs of each individual and strive to meet those needs with the utmost care and compassion.</p>
          <p>We believe in providing personalized care to each individual. Our team of professionals is trained to assess the unique</p>
        </div>
      </div>
      <About />
    </section>
  );
};

export default AboutUs;