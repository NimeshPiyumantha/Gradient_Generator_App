import React, { useEffect, useState } from "react";
import randomColor from "randomcolor";

const Gradient = () => {
  const [color1, setColor1] = useState(randomColor());
  const [color2, setColor2] = useState(randomColor());

  useEffect(() => {
    const gradient = `linear-gradient(to right,${color1},${color2})`;
    document.body.style.background = gradient;
  }, [color1, color2]);

  return (
    <div className="gradient">
      <h1>Create You Own Gradient!</h1>
      <div className="colorPicker">
        <input type="color" name="color1" value={color1} />
        <input type="color" name="color2" value={color2} />
      </div>
    </div>
  );
};

export default Gradient;
