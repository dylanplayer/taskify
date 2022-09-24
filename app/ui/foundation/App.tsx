import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>up</button>
      <h1>{count}</h1>
    </div>
  );
}
