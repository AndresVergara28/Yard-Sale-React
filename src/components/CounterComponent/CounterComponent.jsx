import React, { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(1);

  return (
    <div
      className="card"
      style={{
        width: "10rem",
      }}
    >
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};

export  {CounterComponent};
