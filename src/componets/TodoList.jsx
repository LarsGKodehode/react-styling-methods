// React documentation reference
// https://beta.reactjs.org/apis/react/useState#usestate

// We need to import the useState hook from React
import { useState } from "react";

/**
 * This component showcases a more advanced form of useState
 * where we are using a JavaScript Array instead of
 * one of the JavaScript primitive types (bool, number, string)
 */
function TodoList() {
  // Initialize the state as a empty array
  const [ todoes, setTodos ] = useState([])

  /**
   * The logic for updating the state here
   * is a bit more complex so we are
   * defining it out here instead of
   * writing it as an inline anonymous function (arrow function)
   */
  function addTodo() {
    // To keep the example simple we are using a hardcoded value to add
    const newTodo = "another todo"

    // To avoid difficult to track down bugs we are
    // creating a new list instead of mutating (changing) the old one
    setTodos((oldList) => {
      return [
        ...oldList,
        newTodo,
      ]
    })

    // If you want to learn more as to the why
    // read https://www.geeksforgeeks.org/why-is-immutability-so-important-in-javascript/

    // The short answer is that due to JavaScript asynchronous nature
    // somwhere in your application there might be some code in the middle of
    // using that variable and expects it to remain the same
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>

      <ul>
        {todoes.map((todo, index) => {
          return (
            <li key={index}>{todo}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList;