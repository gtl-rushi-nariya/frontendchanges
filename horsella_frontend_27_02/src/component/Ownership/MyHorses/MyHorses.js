import React from "react";

function MyHorses() {
  return (
    <div>
      <div style={{ backgroundColor: "#1bbd36", padding: "10px" }}>
        <h2>
          <b style={{ color: "white" }}>My Horses</b>
        </h2>
      </div>

      {records.data}
    </div>
  );
}

export default MyHorses;
