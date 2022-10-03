import React, {  useState } from "react";

function Input({ type, validate, name, useAs }) {
  const [formData, setFormData] = useState(name);

  const [error, setError] = useState("");

  const arr = [];

  //validation for all type of input field is started here

  const validation = () => {
    let inputType = type.name;

    let inputUse = useAs.name;

    if (validate) {
      //validtion for field type useAs  mobile

      if (inputType === "number" && inputUse.match("mobile")) {
        if (!formData.mobile.trim()) {
          setError("number is required");
          return;
        }
        if (formData.mobile.length !== 10) {
          setError("Mobile number should be 10 digit");
          return;
        } else {
          setError("");
        }
      }

      //validtion for field type useAs zipCode

      if (inputType === "number" && inputUse.match("zipCode")) {
        if (!formData.mobile.trim()) {
          setError("zipCode is required");
          return;
        }
        if (formData.mobile.length !== 6) {
          setError("Zipcode length should be 6");
          return;
        } else {
          setError("");
        }
      }

      //validation for text field

      if (inputType === "text") {
        if (!formData.mobile.trim()) {
          setError("Provide your details");
          return;
        }
        if (!isNaN(formData.mobile)) {
          setError("Number is not accepted");
          return;
        }
        if (formData.mobile.length < 3 || formData.mobile.length > 15) {
          setError("data length should be between 3-15");
          return;
        } else {
          setError("");
        }
      }

      //validation for checkbox field

      let valid = false;

      if (inputType === "checkbox") {
        formData.forEach((element) => {
          if (element.isChecked === true) {
            valid = true;
            arr.push(element);
            return;
          }
          if (!valid) {
            arr.pop(element);
          }
        });
        if (valid) {
          setError("")
        }
        if (!valid) {
          setError("Please select at least one box")
          return false;
        }
      }

      //validtion for radio field

      if (inputType === "radio") {
        let x = document.getElementsByName("mobile");
        for (let i = 0; i < x.length; i++) {
          if (x[i].checked) {
            valid = true;
            break;
          }
        }
        if (valid) {
          setError("")
        } else {
          setError("select only one box")
          return false;
        }
      }
    }
  };

  //Ending of validation here

  //onChange function for input type text/number

  const handleChangeForText = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //onChange function for checkbox

  const handleChangeForCheckbox = (e) => {
    const targetItem = e.target;
    formData &&
      formData.forEach((item) => {
        if (item.name === targetItem.name) {
          if (item.isChecked) {
            item.isChecked = false;
            return;
          } else {
            item.isChecked = true;
          }
        }
      });
  };

  // submit function

  const submit = (e) => {
    e.preventDefault();
    validation();
  };  
  // console.log(formData)

  return (
    <div>
      {arr &&
        arr.map((item) => {
          return <h1> {item.name}</h1>;
        })}
      <form className="from">
        {formData &&
          formData.map((item, index) => {
            return (
              <div className="" key={index}>
                <input
                  type={type.name}
                  name={item.name}
                  id={item.id}
                  onChange={handleChangeForCheckbox}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            );
          })}
        <button onClick={submit}>Submit</button>
      </form>
          <span className=" alert-danger">{error&&error}</span>
    </div>
  );
}

export default Input;
