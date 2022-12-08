import { useState } from "react";

function Counter() {
  const [ count, setCount ] = useState(10)

  console.log("JavScript here will run every time the state changes")

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>Increment</button>
    </div>
  )
}

export default Counter;