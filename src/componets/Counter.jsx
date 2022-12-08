// React documentation reference
// https://beta.reactjs.org/apis/react/useState#usestate

// We need to import the useState hook from React
import { useState } from "react";

function Counter() {
  // Here we are setting the state with an initial value of 10
  // We also grab the return value and destructure that into two variables,
  // [ theState, functionToUpdateThatState ] = useState(initialValue)
  const [ count, setCount ] = useState(10)

  return (
    <div>
      {/* Now we can use it inside our JSX */}
      <h1>Count: {count}</h1>

      {
        /* Here we are creating a onClick anonymous function and calling the setState function
         * Since we want to create a new state based on the old state we need to pass it a function
         * Not doing it this way can lead to bugs.
        **/
      }
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>Increment</button>
    </div>
  )
}

export default Counter;