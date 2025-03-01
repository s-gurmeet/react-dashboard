import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "../styles/Counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const colorIntensity = count * 10;
    setBgColor(`rgb(${colorIntensity}, ${colorIntensity}, ${255 - colorIntensity})`);
  }, [count]);

  return (
    <div className="counter-container" style={{ backgroundColor: bgColor }}>
      <h1>{count}</h1>
      <div className="button-group">
        <Button onClick={() => setCount(count + 1)} variant="contained" color="primary">
          Increment
        </Button>
        <Button onClick={() => setCount(count - 1)} variant="contained" color="secondary">
          Decrement
        </Button>
        <Button onClick={() => setCount(0)} variant="contained" color="error">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
