import React, { useState } from "react";

function Input({ type, onChange, limit, validate, name, useAs }) {
  const [formData, setFormData] = useState(name);

  const validation = () => {
    let inputType = type.name;

    let inputUse = useAs.name;
if(validate){

    if (inputType === "number" && inputUse.match("mobile")) {
      if (!formData.mobile.trim()) {
        alert("number is required");
        return;
      }
      if (formData.mobile.length != 10) {
        alert("Mobile number should be 10 digit");
        return;
      } else {
        alert("number is saved");
      }
    }

    if (inputType === "number" && inputUse.match("zipCode")) {
      if (!formData.mobile.trim()) {
        console.log("zipCode is required");
        return;
      }
      if (formData.mobile.length !== 6) {
        console.log("Zipcode length should be 6");
        return;
      } else {
        console.log("Zipcode is saved");
      }
    }

    if (inputType === "text") {
      if (!formData.mobile.trim()) {
        alert("Provide your details");
        return;
      }
      if(!isNaN(formData.mobile)){
        alert("Invalid input")
        return;
      }
      if (formData.mobile.length < 3 || formData.mobile.length > 15) {
        alert("data length should be between 3-15");
        return;
      } else {
        alert("data is saved");
      }
    }
}

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    validation();
  };

  console.log("formData", formData);

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            min={0}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default Input;
