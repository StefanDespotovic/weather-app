import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Uvi = ({ uviData }) => {
  let uvDescription = "";
  if (uviData.value <= 2) {
    uvDescription = "low";
  } else if (uviData.value <= 5) {
    uvDescription = "moderate";
  } else if (uviData.value <= 7) {
    uvDescription = "high";
  } else if (uviData.value <= 10) {
    uvDescription = "veryHigh";
  } else {
    uvDescription = "extreme";
  }

  const uvIndexColor = {
    low: "#9ACD32",
    moderate: "#FFFF00",
    high: "#FFA500",
    veryHigh: "#FF4500",
    extreme: "#B22222",
  };

  const progressbarClassName = `progressbar-${uvDescription}`;

  return (
    <div>
      <p>
        UV Index: {Math.round(uviData.value * 10) / 10} ({uvDescription})
      </p>
      <div style={{ width: "110px" }}>
        <CircularProgressbar
          value={uviData.value * 10}
          text={`${Math.round(uviData.value * 10) / 10}`}
          styles={{
            path: {
              stroke: uvIndexColor[uvDescription],
            },
          }}
          className={progressbarClassName}
        >
          <p className="uvi-text">UV Index</p>
        </CircularProgressbar>
      </div>
    </div>
  );
};

export default Uvi;
