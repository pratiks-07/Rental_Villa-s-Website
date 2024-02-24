import React, { useState } from 'react';
import {RxHamburgerMenu} from 'react-icons/rx';
import{Link,useNavigate} from 'react-router-dom' // useNavigate used for directly come back to home page from any page

const Navbar = () => {
    const[navHeight,setNavHeight]=useState(false);
    const navigate = useNavigate(); // useNavigate function
    const gotoHome = ()=>{
        navigate('/');
    }
    
    return (
        <>
            <nav className={navHeight ? "show nav" : "nav"}>
                <div className='logo' onClick={()=> gotoHome()}>LUXARY RENTAL</div>
                <ul>
                    <li>
                        <Link to="/aboutus">ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/villas">VILLAS</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    
                </ul>
                <RxHamburgerMenu className='hamburger' onClick={()=> setNavHeight( !navHeight )}/> 
            </nav>
        </>
    )
}

export default Navbar