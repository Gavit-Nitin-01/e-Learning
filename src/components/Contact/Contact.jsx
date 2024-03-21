import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <>
            <h1 className="contactus">Contact us</h1>
            <div className="container">
                <div className="box1">
                    <p>Need to get in touch with us? Either fill out the details with your inquiry
                        find the department phone, email you'd like to contact below.
                    </p>
                    <img src="images/e_learing.png" alt="" />

                </div>
            </div>
            <div className="contactitem">
                <div className="location"><i className="fa-solid fa-location-dot"></i>
                    <h3>Location</h3>
                    <a
                        href="https://www.google.co.in/maps/place/Ganpat+University+(GUNI),+India/@23.5292875,72.4551614,654m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395c476c5013fd03:0xa1fe01d9ab30482!8m2!3d23.5292875!4d72.4577363!16s%2Fm%2F025vckw?hl=en&entry=ttu">University</a>
                </div>
                <div className="email"><i className="fa-solid fa-envelope"></i>
                    <h3>Email</h3>
                    <a href="">elearning@gmail.com</a>
                </div>
                <div className="phone"><i className="fa-solid fa-mobile-screen-button"></i>
                    <h3>Phone</h3>
                    <a href="">9106312616</a>
                </div>

            </div>
        </>
    )
}
