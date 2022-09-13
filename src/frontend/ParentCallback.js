import React, { useState,useCallback, useMemo } from 'react'
import Navbar from './Navbar';

function ParentCallback() {
    const[count,setCount] = useState(0);
    const [items,setItems] = useState(0);


    const increasement = useCallback(() => {
        console.log("count is clicked")
        setCount(count+1) ;
      }, [count]);
    // const Multiply = useMemo( function hello()
    //    {
    //     console.log("Count is multiply ");
    //     return count*2;
    //   },
    //   [count],
    // )
    // 
    const increaseitem = () =>{
        setItems(items+1);
        console.log("Item is clicked");
        return;
    }
  return (
   <>
    <Navbar/>
    <div className='container'>
        <h2>Count is::{count}</h2>
        {/* <h2>{Multiply}</h2> */}
        <button onClick={()=>increasement()}>Increase Count value</button>
        <h2>Item is::{items}</h2>
        <button onClick={()=>increaseitem()}>Increase Item value</button>
    </div>
   </>
  )
}

export default ParentCallback