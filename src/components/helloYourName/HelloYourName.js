import React, { useState } from "react";
import Cookies from "js-cookie";
import "./HelloYourName.css";

const HelloYourName = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const capitalized =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setName(event.target.value);
    setName(capitalized);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Cookies.set("username", name, { expires: 365 }); // set a cookie with the user's name
    onSubmit(name); // call the onSubmit function passed as a prop
  };

  return (
    <div className="hello">
      <form onSubmit={handleSubmit}>
        <label>
          Please enter your name:
          <br />
          <input type="text" value={name} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HelloYourName;
