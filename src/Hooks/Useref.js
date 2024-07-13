// Stopwatch
import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10);
    }, 10); // Updated to 10ms intervals
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsActive(false);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(countRef.current);
  }, []);

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">
        <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        {!isActive ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
