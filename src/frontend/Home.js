import React, { useContext, useState } from "react";

import Navbar from "./Navbar";

import {cartContext} from '../index'


function Home() {
const products = useContext(cartContext)
 
  const [cartItems, setCartItems] = useState([]);
  console.log("CART ITEMS:", cartItems);
  
  return (
    <div className="row">
      <Navbar />
      {products &&
        products.map((item) => (
          <div className="col-lg-4">
            <img src={item.image} alt="Show text if  not shown" />
            <p className="item-name"  > {item.title} </p>
            <p className="item-name"> The cost is ${item.price}</p>
          
            <button
              className="btn btn-primary"
              onClick={() => {
                
                setCartItems([
                  ...cartItems,
                  {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity :item.quantity
                  },
                 
                   
                ]);
                localStorage.setItem("name",JSON.stringify(cartItems))
                
              }}
            >
              Buy Now
            </button>
          
          </div>
        ))}
       
          </div>
  );
}

export default Home;
