import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // A function that simulates an expensive calculation
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // Slow loop for simulation
    return num * 2;
  };

  // Memoizing the result of the expensive calculation based on 'count'
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type anything"
      />
    </div>
  );
}

export default ExpensiveCalculationComponent;
