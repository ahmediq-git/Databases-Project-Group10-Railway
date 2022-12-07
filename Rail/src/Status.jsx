import { useState } from "react";
import './Registration.css';
import FormInput from "./Component/FormInput";

const Status = () => {
  const [values, setValues] = useState({
    id: "",});

  const inputs = [
    {
      id: 1,
      name: "id",
      type: "text",
      placeholder: "Enter ticket ID",
      errorMessage:
        "id  should be 1-4 characters and shouldn't include any special character!",
      label: "id",
      pattern: "^[A-Za-z0-9]{1,4}$",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>check your ticket status</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>check</button>
      </form>
    </div>
  );
};

export default Status;
