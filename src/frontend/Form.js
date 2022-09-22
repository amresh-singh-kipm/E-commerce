import React, { useState } from "react";


function Form({ name, formHeaderClass, url }) {
  const [formState, setFormState] = useState(name);
  console.log("url is", url);
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleChange2 = (name) => (e) =>{
      e.preventDefault();
      setForm({...form,[name]:e.target.value})
  }

  console.log("form data is ::", form);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className={formHeaderClass}>
        {formState &&
          formState.map((item, index) => {
            return (
              <div className={item.className.lableClass} key={index}>
                <label>{item.name}</label>
                <input
                  name={item.name}
                  type={item.type}
                  className={item.className.inputClass}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            );
          })}
        <button
          onClick={onSubmit}
          className="btn btn-danger d-grid"
          style={{ width: "100%" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
