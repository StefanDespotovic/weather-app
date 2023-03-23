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
      <div className="container">
        {username ? (
          <WeatherSearch />
        ) : (
          <HelloYourName onSubmit={handleUsernameSubmit} />
        )}
      </div>
    </>
  );
}

export default App;
