import React, { useState } from 'react'

function UseCallback() {
    const[count,setCount] = useState(0)
    const increasement = () =>{
        setCount(count+1);
        console.log("you have clicked:",count)
    }
  return (
    <div className='container'>
        <h2>{count}</h2>
        <button onClick={increasement}>Increasement</button>
    </div>
  )
}

export default UseCallback