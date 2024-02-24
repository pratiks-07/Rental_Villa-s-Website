import React from "react";

const About = () => {
    return (
        <>
            <section id="aboutUs_Mini">
                <div className="first_container">
                    <div className="content">
                        <h1>ABOUT US</h1>
                        <p>
                            At Luxary Rentals, we are dedicated to providing our clients with high-quality, comfortable, and affordable housing solutions. With years of experience in the real estate industry, we have the expertise and knowledge to help you find the perfect home.
                        </p>
                        <p>
                            Our team of experienced professionals is committed to understanding your unique needs and preferences, and we will work tirelessly to find a housing solution that meets those needs. We believe that everyone deserves a place to call home, and we are dedicated to making that a reality for our clients.
                        </p>
                        <p>
                            In addition to our commitment to quality and customer service, we also believe in giving back to the community. That's why we are proud to support a number of local charities and organizations through volunteer work and financial contributions.
                        </p>
                        <p>
                            Thank you for considering Luxary Rentals for your housing needs. We look forward to the opportunity to serve you and help you find the perfect home.
                        </p>
                    </div>
                    <button>We strive to offer you best possible homes to stay!</button>
                </div>
                <div className="second_container">
                    <div className="image_1">
                        <img src="/people.jpg" alt="people" />
                    </div>
                    <div className="image_2">
                        <img src="people2.jpg" alt="people2" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
