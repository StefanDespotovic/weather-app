/**
A React component that allows the user to enter their name and submits it to a function passed as a prop.
@param {function} onSubmit - The function to be called when the form is submitted, with the user's name as an argument.
@return {JSX.Element} The HelloYourName component.
*/
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./HelloYourName.css";

const HelloYourName = ({ onSubmit }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const username = Cookies.get("username");
    if (username) {
      setName(username);
      onSubmit(username);
    } // eslint-disable-next-line
  }, []);

  /**
A function that handles changes to the name input field.
It capitalizes the first letter of the name entered and sets it as the component state.
@param {Object} event - The input change event object.
*/
  const handleChange = (event) => {
    const capitalized =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setName(capitalized);
  };

  /**
A function that handles the submission of the form.
It sets a cookie with the user's name and calls the onSubmit function passed as a prop.
@param {Object} event - The form submission event object.
*/
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
