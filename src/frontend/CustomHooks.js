import React, { useState,useEffect } from 'react'


function CustomHooks(url) {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
  useEffect(() => {
    fetch(url)
    .then((resp)=> resp.json())
    .then((resp)=>setData(resp))
    .catch((err)=>setError(err))
  }, [url])
  
  return (
    [data,error]
  )
}

export default CustomHooks