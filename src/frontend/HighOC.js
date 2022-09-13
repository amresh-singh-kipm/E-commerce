import React from 'react'

function HighOC(props) {
  return (
    <>
    <h2 style={{backgroundColor:"blue"}}><props.component/></h2>
    <h2 style={{textAlign:"center"}} >
      
        <props.component/>Hello World
    </h2>
    </>
  )
}

export default HighOC;  