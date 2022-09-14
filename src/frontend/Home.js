import React, { useContext, useEffect, useState } from "react";
import HighOC from "./HighOC";
import Navbar from "./Navbar";
import ParentCallback from "./ParentCallback";
import { cartContext } from "../index";
import CustomHooks from "./CustomHooks";
import Form from "./Form";

function Home() {
  const formData = [
    {
      name: "Name",
      type: "text",
      className: { inputClass: "form-control", lableClass: "form-group" },
    },
    {
      name: "Email",
      type: "email",
      className: { inputClass: "form-control", lableClass: "form-group" },
    },
    {
      name: "Password",
      type: "password",
      className: { inputClass: "form-control", lableClass: "form-group" },
    },
    {
      name: "Confirm-Password",
      type: "password",
      className: { inputClass: "form-control", lableClass: "form-group" },
    },
    {
      name: "month",
      type: "month",
      className: { inputClass: "form-control", lableClass: "form-group" },
    },
  ];
  const formHeaderClass = "form-section";

 

  const products = useContext(cartContext);

  const [data, error] = CustomHooks(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("this is custom hook data", data);
  const [cartItems, setCartItems] = useState([]);
  console.log("CART ITEMS:", cartItems);
  console.log("if error", error);

  function cartItem() {
    localStorage.setItem("cartproduct", JSON.stringify(products));
    if (!localStorage.getItem("cartValue")) {
      localStorage.setItem("cartValue", "[]");
    }
  }
  let cartproducts = JSON.parse(localStorage.getItem("cartproduct"));
  let cartItemValue = JSON.parse(localStorage.getItem("cartValue"));

  function addItemToCart(id) {
    let item = cartproducts.find((item) => item.id === id);
    if (cartItemValue.length === 0) {
      cartItemValue.push(item);
    } else {
      let resp = cartItemValue.find((product) => product.id === id);
      if (resp === undefined) {
        cartItemValue.push(item);
      }
    }
    localStorage.setItem("cartValue", JSON.stringify(cartItemValue));
  }
  useEffect(() => {
    cartItem();
  }, []);

  return (
    <>
      <div className="row">
        <Navbar />
        {/* {data && data.map((item,i)=>{
        
        return(<p key={i}>
        {item.body}
        
        </p>)
      })} */}
        {products &&
          products.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <img src={item.image} alt="Show text if  not shown" />
              <p className="item-name"> {item.title} </p>
              <p className="item-name"> The cost is ${item.price}</p>

              <button
                className="btn btn-primary"
                onClick={() => addItemToCart(item.id)}
              >
                Buy Now
              </button>
            </div>
          ))}
      </div>{" "}
      <div>
        <Form name={formData} formHeaderClass={formHeaderClass} />
        {/* <HighOC component={ParentCallback}/> */}
      </div>
    </>
  );
}

export default Home;
