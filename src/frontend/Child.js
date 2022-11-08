import React, { useState } from "react";

function Child({ accordionData }) {
  const [accordionChildData, setAccordionChildData] = useState(accordionData);

  const pGrandChild = {
    fontSize: "4rem",
    cursor: "pointer",
    backgroundColor: "yellow",
    margin: "10px 150px",
  };

  return (
    <div className="hideChild">
      {accordionChildData.map((grandChild) => {
        return (
          <p style={pGrandChild} key={grandChild.id}>
            {grandChild.id}
          </p>
        );
      })}
    </div>
  );
}

export default Child;
