import React, { useState } from "react";
import Cookies from "js-cookie";

const HelloYourName = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Cookies.set("username", name, { expires: 365 }); // set a cookie with the user's name
    onSubmit(name); // call the onSubmit function passed as a prop
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HelloYourName;
