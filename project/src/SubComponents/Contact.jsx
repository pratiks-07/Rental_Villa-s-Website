import React from 'react'
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";


const Contact = () => {
    return (
        <>
            <section id='contact_Mini'>
                <div className="super_container">
                    <div className="container_1">
                        <h3>Let's Connect</h3>
                        <div>
                            <p>Mobile</p>
                            <span>+918485096660</span>
                        </div>
                        <div>
                            <p>Email</p>
                            <span>Pratik7@gmail.com</span>
                        </div>
                        <div>
                            <p>Address</p>
                            <span>House No 45 Sector B-7 Mumbai</span>
                        </div>
                        <ul>
                            <Link to={"/facebook"} target="blank"><RiFacebookBoxLine/></Link>
                            <Link to={"/Instagram"} target="blank"><RiInstagramLine/></Link>
                            <Link to={"/Twitter"} target="blank"><RiTwitterLine/></Link>
                        </ul>

                    </div>

                    <div className="container_2">
                        <h3>We'd love to hear from you</h3>
                        <form >
                            <div>
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <textarea rows="4" placeholder='Feedback'></textarea>
                            <button type='submit'>SEND</button>
                        </form>
                    </div>

        
                </div>
            </section>
        </>
    )
}

export default Contact