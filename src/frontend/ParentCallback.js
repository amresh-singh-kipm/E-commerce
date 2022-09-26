import React, { useState, useCallback, useEffect } from "react";
import Input from "./Input";
import Navbar from "./Navbar";

function ParentCallback() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(0);
  const arr1 = ["hi", "hello", "hey"];
  const arr2 = [
    { greeting: "hi" },
    { greeting: "hello" },
    { greeting: "hesy" },
    { greeting: "you" },
    { greeting: "this" },
    { greeting: "hi" },
    { greeting: "hello" },
  ];
  const arr3 = [];
  const [dataValue, serDataValue] = useState(null);
  // console.log(arr2.greeting)
  useEffect(() => {
    serDataValue(compareArray(arr1, arr2));
    console.log("this is 3rd array data", arr3);
    sortArray();
    console.log(sortArray(array))
  }, []);

  const compareArray = (array1, array2) => {
    return array2.filter((item) => {
      return array1.some((element) => {
        if(element === item.greeting){
          arr3.push(item)
        }
      });
    });
    // array2.forEach(element => {
    //   const item = element.greeting;
    //   array1.forEach(data => {
    //     if(data.match(item)){
    //       arr3.push(element)
    //     }
    //   });
    // })
  };
  const array=[12,13,0,9,38,4,55555,12,3424523,33]
  const sortArray = () =>{
   return array.sort((a,b)=>a-b)
    }
    
  const increasement = useCallback(() => {
    console.log("count is clicked");
    setCount(count + 1);
  }, [count]);
  // const Multiply = useMemo( function hello()
  //    {
  //     console.log("Count is multiply ");
  //     return count*2;
  //   },
  //   [count],
  // )
  //
  const increaseitem = () => {
    setItems(items + 1);
    console.log("Item is clicked");
    return;
  };
const name = {mobile:""}

const type = {name:"text"}

const validate = true;

const useAs  = {name:"mobile"}



  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Count is::{count}</h2>
        {/* <h2>{Multiply}</h2> */}
        <button onClick={() => increasement()}>Increase Count value</button>
        <h2>Item is::{items}</h2>
        <button onClick={() => increaseitem()}>Increase Item value</button>
      <Input type={type} validate={validate} useAs={useAs} name ={name}/>
      </div>
    </>
  );
}

export default ParentCallback;
