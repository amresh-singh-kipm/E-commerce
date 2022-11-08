import React, { useState } from "react";
import Parent from "./Parent";

function Accordion() {
  const p = {
    fontSize: "4rem",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
  };

  const [show, setShow] = useState(false);

  const accordionData = [
    {
      id: 1,
      children: [
        {
          id: 2,
          children: [
            {
              id: 6,
              children: [{ id: 22 }, { id: 23 }, { id: 25 }, { id: 26 }],
            },
            { id: 7 },
            { id: 8 },
            { id: 9 },
          ],
        },
        {
          id: 3,
          children: [{ id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }],
        },
        {
          id: 4,
          children: [{ id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }],
        },
        {
          id: 5,
          children: [{ id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }],
        },
      ],
    },
  ];

  const handleParent = () => {
    setShow(!show);
  };

  return (
    <div>
      {accordionData?.map((item, index) => {
        return (
          <div key={index}>
            <div style={p} onClick={handleParent}>
              {item.id}
            </div>
            <Parent accordionData={item.children} show={show} />
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
