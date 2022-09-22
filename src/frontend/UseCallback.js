import React, { useEffect, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);

  const [isLogin, setIsLogin] = useState(true);

  const increasement = () => {
    setCount(count + 1);
    console.log("you have clicked:", count);
  };

  const handleLoading = () => {
    handleCheckURL();
    setMessage("Invalid Link");
  };
  
  const handleCheckURL = () => {
    console.log("window", document.getElementById("iframe").contentWindow);
    if (document.getElementById("iframe").contentWindow.length == 0) {
      setLoading(false);
      // setIsLogin(false)
    }
  };

  console.log("message is :::", message);
  
  useEffect(()=>{
    navigator.mediaDevices.getDisplayMedia()
  },[]);
  return (
    <div className="container">
      <h2>{count}</h2>
      {loading ?    <iframe
          onLoad={handleLoading}
          id="iframe"
          src="https://www.youtube.com/embed/T39v5sfd2YU"
          width={1000}
          height={500}
        /> :  <h2> {message}</h2>}
     
      <button onClick={increasement}>Increasement</button>
    </div>
  );
}

export default UseCallback;
