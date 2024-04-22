import React from 'react'
import Product from './Product';
import './Contact.css'
import Itemcard from './IterCard';
import data from './dataforOtherHardWare'
import Shop from './Shop';

export default function OtherHardWare() {
  return (
    
      <div className="home">
     
      <div className='Div2'>
    <p className='h2tag'> CITRINE ENTERPRISE ITEMS</p> 
         {data.productData.map((item,index)=>{
             return (               
                 <cartProvider>
                    <Itemcard img={item.img} rating={item.rating} price={item.price} title={item.title} item={item} details={item.details} key={index}/>
                </cartProvider>
              )
          })}
          </div>
      <div className='shoppingIcon'>
      <Shop />
      </div>

  </div> 
);
}
