import React from 'react'
import './itemcard.css'
import { useCart } from 'react-use-cart';
import { useStateValue } from "./StateProvider";

export default function Itemcard(props) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        img: props.img,
        price: props.price,
        rating: props.rating,
        title: props.title,
      },
    });
  };
  return (
   
      <div className='Itemcard'>
        <div className='card1'>
          <img src={props.img} alt='abc' />
          <div className='body'>
            <p>{props.title}</p>
            <p>$ {props.price}</p>
            <p style={{ display: "flex" }}> {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}</p>
            <p>{props.details}</p>
            <button onClick={addToBasket}>Add to cart</button>
          </div>
        </div>
      </div>
  )
}
