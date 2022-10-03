import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import CustomHooks from "./CustomHooks";
import Search from "./Search";

function Detail() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const id = search.get("id");

  const itemId = sessionStorage.getItem("itemID");

  const [dataValue, setDataValue] = useState("");

  const [query,setQuery] = useState("")

  const [data, error] = CustomHooks(
    `https://jsonplaceholder.typicode.com/posts`
  );

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
      .then((resp) => resp.json())
      .then((data) => setDataValue(data))
      .catch((error) => console.log(error));
  }, []);


  const scrollSomewhere = () => {
    setTimeout(() => {
      document
        .getElementById(itemId)
        .scrollIntoView({ behavior: "smooth", block: "center" });
        document.getElementById(itemId).style.background = "#20c997";
      // document.getElementById(itemId).classList.add("anyClass");
      document.getElementById(itemId).style.color = "#fff";

    }, 200);
  };

  useEffect(() => {
    scrollSomewhere();
  
  }, []);

  const wheelFuction = () => {
      document.getElementById(itemId).style.background = "none";
      document.getElementById(itemId).style.color = "#000";
      console.log("mouse is scrolled");
  };


return (
  <div className="container" id="container">
         
      <h2>
        {dataValue && dataValue.id}
        <hr />
        {dataValue && dataValue.body}
        <hr />
      </h2>

      <div onWheel={wheelFuction}>
     
      {/* {data &&
        data.map((item) => {
          return (
            <p id={item.id} key={item.id} className="detail-page">
              {item.body}
              </p>
            
              );
        })} */}
      </div>
      {data&&<Search search={data}/>}
            
    </div>
  );
}

export default Detail;
