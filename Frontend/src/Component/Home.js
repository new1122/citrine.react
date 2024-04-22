import React from 'react'
import './Home.css'
import 'react-slideshow-image/dist/styles.css'
import { FaBath } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GiKitchenTap } from "react-icons/gi";
import { Link } from 'react-router-dom';
import img1 from './image/image-1.png'
import img2 from './image/image-2.png'
import img3 from './image/image-3.png'
import Aboutus from './Aboutus';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useAuth } from '../AuthProvider';

export default function Home() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className='home'>
      <div className='home1'>
      <div className='part1'>
        <h3 className='bestproduct' style={{color:'#27ae60', fontSize:'2.8rem'}}>Our Best Products</h3><br></br>
        <p className="text1">
                        <span></span>
                    </p>
        <h4 style={{color:'#666666 '}}>
          Hi, {
            authUser? authUser.email:"user"
          } &nbsp;
          Citrine Enterprise Is One Of The Best Seller In Accessories Like Bathroom Accessories, Other Hardware Accessories And Kitchen Sink.
        </h4>
        <button className='buttonhome'>For Bathroom Accessories <br></br> Click Here</button>
        <button className='buttonhome'>Other Hardware Accessories <br></br> Click Here</button>
        <button className='buttonhome'>Kitchen Accessories <br></br> Click Here</button>
        <br></br><br></br>
       <h2> Follow us on - </h2>
       <p>
        <FaInstagram style={{cursor:"pointer"}} className='icons' /> &nbsp;&nbsp;&nbsp;&nbsp; 
        <FaFacebook style={{cursor:"pointer"}} className='icons'/> &nbsp;&nbsp;&nbsp;&nbsp; 
        <FaTwitter style={{cursor:"pointer"}} className='icons'/>
        </p>
      </div>
      <div className='part2'>
        <div class="container20">
                    <img class="image20" src={img1} alt='abc'/>
                    <img class="image20" src={img2} alt='abc'/>
                    <img class="image20" src={img3} alt='abc'/>
                </div>
      </div>
    </div>
    <div className='cards'>

      <div className='BathroomAcces card'>
      <FaBath className='bathicon' /><br></br>
          Click Here to Go to the Bathroom Section...
          <br></br>
          <Link to="/Contact">
          <FaArrowRight className='rightarrow' />
          </Link>
        </div>


        <div className='OtherHardware card'>
      <FaScrewdriverWrench className='bathicon' /><br></br>
          Click Here to Go to the Other Hardware Section...
          <br></br>
          <Link to="/Kitchen">
          <FaArrowRight className='rightarrow' />
          </Link>
        </div>


        <div className='Kitchen card'>
      <GiKitchenTap className='bathicon' /><br></br>
          Click Here to Go to the Kitchen Section...
          <br></br>
          <FaArrowRight className='rightarrow' />
        </div>
      </div>


<div className='aboutus'>
  <Aboutus/>
</div>

</div>

    
  )
}
