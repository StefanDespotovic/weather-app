import React from "react";

const Uvi = ({ uviData }) => {
  let uvDescription = "";
  if (uviData.value <= 2) {
    uvDescription = "Low";
  } else if (uviData.value <= 5) {
    uvDescription = "Moderate";
  } else if (uviData.value <= 7) {
    uvDescription = "High";
  } else if (uviData.value <= 10) {
    uvDescription = "Very high";
  } else {
    uvDescription = "Extreme";
  }

  return (
    <div>
      <p>
        UV Index: {Math.round(uviData.value)} ({uvDescription})
      </p>
      <p>UV Index: {Math.round(uviData.value)}</p>
    </div>
  );
};

export default Uvi;
