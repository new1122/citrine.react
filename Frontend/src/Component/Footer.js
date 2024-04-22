import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="box-container" id="footers">
            <div className="box">
                <h3>Locations</h3>
                <a>Ahmedabad</a>
                <a>Surendranagar</a>
                <a>Bhavnagar</a>
            </div>

            <div className="box">
                <h3>Quick Links</h3>
                <a>Home</a>
                <a>Product</a>
                <a>About</a>
                <a>List</a>
            </div>

            <div className="box">
                <h3>Contact Info</h3>
                <a>+91 94*** *****</a>
                <a>+91 94*** *****</a>
                <a>*********@gm**l.com</a>
                <a>Surendranagar, <br></br> Gujarat-000000</a>
            </div>


            <div className="box">
                <h3>Follo Us on</h3>
                <a>Facebook</a>
                <a>Instagram</a>
                <a>Twitter</a>
                <a>Whatsapp</a>
            </div>
        </div>

        <div className="credit">Copyright @2023 by <span>Acharya Web Technologies</span></div>

    </div>
  )
}
