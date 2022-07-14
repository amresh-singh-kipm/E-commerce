import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { cartContext } from "../index";

function ContextCart() {

//created state here

  const data = useContext(cartContext);
  let navigate = useNavigate();
  let item = JSON.parse(localStorage.getItem("name"));
  const [amount, setAmount] = useState(0);
  const [array, setArray] = useState(item);
  const [dataItem, setDataItem] = useState(data);
  const [elementData, setElementData] = useState(null);

 

  //comparing two array and take out the common data

  const showData = (arr1, arr2) => {
    return arr1.filter((item) => {
      return arr2.some((element) => {
        return item?.id === element?.id;
      });
    });
  };
  useEffect(() => {
 
    setElementData(showData(dataItem, array));
  }, []);

  
  //Function for Remove a cart item

  const handleRemove = (elementData_id) => {
  
    const arr = elementData.filter((item) => item.id !== elementData_id);
    setElementData(arr);
   
    console.log("length", elementData.length);
    if (elementData.length === 1) {
      localStorage.clear();
      navigate("/");
    } else {
      navigate("/cart");
    }
  };


  //Function for increasment

  const handleIncreasment = (elementData_id) => {
    setElementData((elementData) =>
      elementData.map((data) =>
        elementData_id === data.id
          ? { ...data, quantity: data.quantity + 1 }
          : data
      )
    );
   if(elementData_id===data.id){
    setAmount(  )
   }
    showData();
  };

  //Function for decreasment

  const handleDeceasment = (elementData_id) => {
  
    setElementData((elementData) =>
      elementData.map((data) =>
        elementData_id === data.id
          ? { ...data, quantity: data.quantity - 1 }
          : data
      )
    );
  };

  return (
    <div>
      {" "}
      <Navbar />
      <div className="container">
        <h3>
          Cart has <span>{array.length}</span> item
        </h3>

        <table className="table">
          <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Title</th>
            <th>Action</th>
            <th></th>
            <th>Button</th>
            <th>Total</th>
          </tr>
          </thead>
          {elementData &&
            elementData.map((data) => {
              return (
                <>
                <tbody>
                  <tr>
                    <td>
                      <img src={data.image} width="100px" height="100px" />
                    </td>
                    <td>
                      <span className="item-detail">${data.price}</span>
                    </td>
                    <td>
                      <span className="cart-item">{data.quantity}</span>
                    </td>
                    <td>
                      <span className="cart-item">{data.title}</span>
                    </td>
                    <td>
                      <button
                        className="add-item"
                        onClick={() => handleIncreasment(data.id)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="remove-item"
                        onClick={() => handleDeceasment(data.id)}
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemove(data.id)}
                      >
                        Remove
                      </button>
                     
                    </td>

                    <td>
                      <span className="cart-item">{data.quantity*data.price}</span>
                    </td>
                  </tr>
                  </tbody>
                </>
              );
            })}
        </table>
      </div>
      
      <span className="cart-item">The Total amount is   $
            { elementData?.slice(0,1).map((item)=>{
          return (<>{elementData.reduce((total, data)=>total+(data.price*data.quantity),0)}</>)
        }
        )}
     
    </span>
    </div>
  );
}

export default ContextCart;
