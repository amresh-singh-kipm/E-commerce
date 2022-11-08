import React, { useState } from "react";
import Child from "./Child";

function Parent({ accordionData, show }) {
  const [accordionParentData, setAccordionParentData] = useState(accordionData);

  const pChild = {
    fontSize: "4rem",
    cursor: "pointer",
    backgroundColor: "red",
    marginLeft: "100px",
    marginRight: "100px",
  };

  const handleChild = (e) => {
    const targetItem = [...e.target.children];
    targetItem.forEach((element) => {
      const childClassName = element.classList[0];
      if (childClassName === "hideChild") {
        element.classList.toggle("showChild");
      } else {
        element.classList.toggle("hideChild");
      }
    });
  };

  return (
    <div>
      {show &&
        accordionParentData.map((child) => {
          return (
            <div key={child.id} className="m-5">
              <div style={pChild} onClick={handleChild}>
                {child.id}
                <Child accordionData={child.children} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Parent;
