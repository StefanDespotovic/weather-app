/**
React Component that displays the UV Index and time to sunburn based on the UV Index value
@component
@param {Object} uviData - Object containing the UV Index value
@returns {JSX.Element}
*/
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Uvi.css";

const Uvi = ({ uviData }) => {
  /**

Returns the UV Index description based on the UV Index value
@function
@param {number} value - UV Index value
@returns {string}
*/
  let uvDescription = "";
  if (uviData.value <= 2) {
    uvDescription = "Low";
  } else if (uviData.value <= 5) {
    uvDescription = "Moderate";
  } else if (uviData.value <= 7) {
    uvDescription = "High";
  } else if (uviData.value <= 10) {
    uvDescription = "Veryhigh";
  } else {
    uvDescription = "Extreme";
  }

  const uvIndexColor = {
    Low: "#9ACD32",
    Moderate: "#FFFF00",
    High: "#FFA500",
    Veryhigh: "#FF4500",
    Extreme: "#B22222",
  };

  const uvIndexSunburn = {
    Low: "60 minutes",
    Moderate: "45 minutes",
    High: "25 minutes",
    Veryhigh: "15 minutes",
    Extreme: "10 minutes",
  };

  const progressbarClassName = `progressbar-${uvDescription}`;

  return (
    <div className="uvi-container">
      <div className="UVindex">
        <p>
          {uvDescription} UV Index{" "}
          <div className="UVcircular">
            <CircularProgressbar
              value={uviData.value * 10}
              text={`${Math.round(uviData.value * 10) / 10}`}
              strokeWidth={12}
              styles={{
                path: {
                  stroke: uvIndexColor[uvDescription],
                },
              }}
              className={`progressbarClassName white-background`}
            />
          </div>
        </p>
      </div>
      <div className="UVsunburn">
        <p>
          <i class="bx bx-stopwatch"></i>
          {uvIndexSunburn[uvDescription]}
          <br />
          To sunburn
        </p>{" "}
      </div>
    </div>
  );
};

export default Uvi;
