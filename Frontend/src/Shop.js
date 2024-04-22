import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useStateValue } from './StateProvider';

export default function Shop() {
    const [{ basket }] = useStateValue();
    return (
        <Link to="/checkout" style={{ textDecoration: "none", color: "black" }}>
         
        <div>
                <div className="nav__itemBasket">
                     <FaCartShopping />
                    <span className="nav__itemLineTwo nav__basketCount" style={{color:"black"}}>{basket.length}</span>
                    
                </div>
        </div>
            </Link>
    )
}
