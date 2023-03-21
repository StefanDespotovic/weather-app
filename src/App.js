import React, { useState } from "react";
import WeatherSearch from "./components/weatherSearch/WeatherSearch";
import HelloYourName from "./components/helloYourName/HelloYourName";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  const handleUsernameSubmit = (name) => {
    setUsername(name);
  };
  return (
    <>
      {username ? (
        <WeatherSearch />
      ) : (
        <HelloYourName onSubmit={handleUsernameSubmit} />
      )}
    </>
  );
}

export default App;
