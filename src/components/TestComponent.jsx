import React, { useState, useEffect } from 'react';

export const TestComponent = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputValue, setInputValue] = useState('');

function generateRandomNumber() {
    return Math.floor(Math.random() * 9000) + 1000; // Random 4-digit number
  }

  useEffect(() => {
    setRandomNumber(generateRandomNumber());
  }, []); // Run once when the component mounts

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log("TEst component loaded!!!");

  return (
    <div>
      <p>Random Number: {randomNumber}</p>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <p>Input Value: {inputValue}</p>
      <button onClick={()=>setInputValue(inputValue+1)}>click me</button>
    </div>
  );
};

