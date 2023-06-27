import React, { useState } from "react";

const Gradient = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  return (
    <div className="app">
      <h1>Create you own gradient!</h1>
      <div className="colorPicker">
        <input type="color" name="color1" value={color1} />
        <input type="color" name="color2" value={color2} />
      </div>
    </div>
  );
};

export default Gradient;
