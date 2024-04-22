import React from 'react'
import logo1 from './image/LOGO-FILE.mp4'
import './Aboutus.css'


export default function Aboutus() {
    return (
        <div className='about'>
            <h3 className="sub-heading">About Us</h3>
            <h1 className="heading">Why Choose Us and our Products...?</h1>

            <div className="row">
                <div className="image1">
                    <video className="logo1" autoPlay muted loop>
                        <source src={logo1} />
                    </video>
                </div>

                <div className="image2">
                    <h3>Best Product in the country</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum mollitia nobis deleniti! Nulla
                        cumque nobis, voluptas ad voluptatem praesentium!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ad quidem debitis explicabo sapiente
                        dolorum.</p>
                </div>
                {/* 
                <div className="icon-container">
                    <div className="icons">
                        <i className="fas fa-shipping-fast"></i>
                        <span>Free Delivery</span>
                    </div>

                    <div className="icons">
                        <i className="fas fa-rupee-sign"></i>
                        <span>Easy Payments</span>
                    </div>

                    <div className="icons">
                        <i className="fas fa-headset"></i>
                        <span>24 * 7 Service</span>
                    </div>
                </div>
                <a href="#contact" className="btn">Learn More</a>
            </div> */}
            </div>
        </div>
    )
}
