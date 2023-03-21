import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Uvi = ({ uviData }) => {
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

  const uvIndexSPF = {
    Low: "10 SPF",
    Moderate: "15 SPF",
    High: "25 SPF",
    Veryhigh: "40 SPF",
    Extreme: "50 SPF",
  };

  const progressbarClassName = `progressbar-${uvDescription}`;

  return (
    <div>
      <p>
        {uvDescription} UV Index: {Math.round(uviData.value * 10) / 10}
      </p>
      <p>Time to sunburn: {uvIndexSunburn[uvDescription]}</p>
      <p>{uvIndexSPF[uvDescription]}</p>
      <div style={{ width: "110px" }}>
        <CircularProgressbar
          value={uviData.value * 10}
          text={`${Math.round(uviData.value * 10) / 10}`}
          strokeWidth={12}
          styles={{
            path: {
              stroke: uvIndexColor[uvDescription],
            },
          }}
          className={progressbarClassName}
        />
      </div>
    </div>
  );
};

export default Uvi;
