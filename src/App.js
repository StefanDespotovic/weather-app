import React, { useState } from "react";
import WeatherSearch from "./components/weatherSearch/WeatherSearch";
import HelloYourName from "./components/helloYourName/HelloYourName";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <WeatherSearch />
      </div>
    </>
  );
}

export default App;
