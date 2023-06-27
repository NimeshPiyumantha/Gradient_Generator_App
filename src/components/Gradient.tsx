import { ChangeEvent, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoCopyOutline } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";
import randomcolor from "randomcolor";

const Gradient = () => {
  const [color1, setColor1] = useState(randomcolor());
  const [color2, setColor2] = useState(randomcolor());
  const [position, setPosition] = useState("to right");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const gradient = `linear-gradient(${position}, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    setOutput(`background: ${gradient}`);
  }, [color1, color2]);

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "color1") {
      setColor1(value);
    } else if (name === "color2") {
      setColor2(value);
    }
  };

  const handleRandomClick = () => {
    setColor1(randomcolor());
    setColor2(randomcolor());
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPosition(event.target.value);
  };

  return (
    <div className="gradient">
      <h1>Create You Own Gradient !</h1>
      <div className="colorPicker">
        <input
          type="color"
          name="color1"
          value={color1}
          onChange={handleChangeColor}
        />
        <input
          type="color"
          name="color2"
          value={color2}
          onChange={handleChangeColor}
        />
        <select value={position} onChange={handleChange}>
          <option value="to right">Select an option</option>
          <option value="to right">Right</option>
          <option value="to left">Left</option>
          <option value="to top">Top</option>
          <option value="to bottom">Bottom</option>
        </select>
      </div>
      <button className="btnRandom" onClick={handleRandomClick}>
        Generate Random Gradient !
      </button>
      <div className="output">
        <SyntaxHighlighter language="css" style={arduinoLight}>
          {output}
        </SyntaxHighlighter>
        <CopyToClipboard text={`background: ${output}`}>
          <IoCopyOutline style={{ cursor: "pointer", fontSize: "25px" }} />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Gradient;
