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

  var nestedArray = [
    {
      id: "101",
      firstName: "John",
      lastName: "Smith",
      age: 25,
      countryName: "US",
      subjectDetails: [
        {
          subjectId: "Java-101",
          subjectName: {
            theory: [{ subject: "sst" }, { subject: "science" }],
            practical: "chemistry",
          },
        },
      ],
    },
    {
      uniqueId: "details_10001",
    },
    {
      id: "102",
      firstName: "morgan",
      lastName: "Smith",
      age: 25,
      countryName: "US",
      subjectDetails: [
        {
          subjectId: "Java-102",
          subjectName: {
            theory: [{ subject: "german" }, { subject: "geography" }],
            practical: "biology",
          },
        },
      ],
    },
    {
      uniqueId: "details_10001",
    },
    {
      id: "103",
      firstName: "anna",
      lastName: "Smith",
      age: 25,
      countryName: "US",
      subjectDetails: [
        {
          subjectId: "Java-103",
          subjectName: {
            theory: [{ subject: "hindi" }, { subject: "english" }],
            practical: "Physics",
          },
        },
      ],
    },
    {
      uniqueId: "details_10001",
    },
  ];

  nestedArray.forEach((nestedData) => {
    // console.log("first", nestedData);

    nestedData?.subjectDetails?.forEach((nestedSubjectDetails) => {
      nestedSubjectDetails?.subjectName?.theory.forEach((subjects) => {
        console.log("subject is", subjects);
      });
      // console.log("nested data is :::", nestedSubjectDetails?.subjectName.theory);
    });
  });

  useEffect(() => {
    serDataValue(compareArray(arr1, arr2));
    // console.log("this is 3rd array data", arr3);
    sortArray();
    // console.log(sortArray(array))
  }, []);

  const compareArray = (array1, array2) => {
    return array2.filter((item) => {
      return array1.some((element) => {
        if (element === item.greeting) {
          arr3.push(item);
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
  const array = [12, 13, 0, 9, 38, 4, 55555, 12, 3424523, 33];
  const sortArray = () => {
    return array.sort((a, b) => a - b);
  };

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
  const name = [
    { name: "mobile", id: "mobile", isChecked: false },
    { name: "zipcode", id: "zipcode", isChecked: false },
    { name: "sumsung", id: "sumsung", isChecked: false },
    { name: "phone", id: "phone", isChecked: false },
  ];

  const type = { name: "checkbox" };

  const validate = true;

  const useAs = { name: "mobile" };

  return (
    <>
      <div id="parent">
        <div></div>
        <div></div>
        <div></div>
        <div>
          <div></div>
          <div>
            <div id="grandDiv">hello</div>
            <div></div>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="container">
        <h2>Count is::{count}</h2>
        {/* <h2>{Multiply}</h2> */}
        <button onClick={() => increasement()}>Increase Count value</button>
        <h2>Item is::{items}</h2>
        <button onClick={() => increaseitem()}>Increase Item value</button>
        <Input type={type} validate={validate} useAs={useAs} name={name} />
      </div>
    </>
  );
}

export default ParentCallback;
