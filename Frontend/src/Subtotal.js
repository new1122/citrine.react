import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {  StateContext, useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import axios from 'axios'

function Checkdata(){
    const [alldatainarray] = useStateValue(StateContext)
    console.log(alldatainarray);
}
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();






    // const ShopStore = async (basket) => {
    //     const ShopStores = {
    //       title:basket.title,
    //       price:basket.price
    //     }
    //     await axios.post("http://localhost:8080/user/checkout", ShopStores)
    //     .catch((err) => {
    //         if(err.response){
    //         console.log("Error : " + err)
    //         alert("Error : " + err.response.basket.message)
    //         }
    //       });
    //       // console.log(data);
    //     }
















    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                
            />
                {/* <input name='title' id='title' value={basket.length}/> */}
            <button onCanPlay={Checkdata()}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal