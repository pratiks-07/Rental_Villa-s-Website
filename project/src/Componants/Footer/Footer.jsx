import React from 'react'
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';


const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
  return (
    <>
        <footer className={isHomePage ? 'homepage_footer otherPage_footer' : "otherPage_footer"}>
        <div className='container'>
            <h4>LUXARY RENTALS</h4>
            <p>Luxury Rentals offers a variety of luxury villas and houses for all types of travelers. Our team ensures a smooth and enjoyable rental experience. Contact us for more information.</p>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/termsandconditions"}>Terms&Conditions</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>

        </div>

        <div className='container'>
            <h4>Connect with us</h4>
            <p>+918485096660</p>
            <p>Pratik7@gmail.com</p>
            <p>© All Rights Reserved By PPLGroup</p>
        </div>

        </footer>
    </>
  )
}

export default Footer