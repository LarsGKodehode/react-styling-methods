import { useState } from 'react'

function StyledWithGlobalCSS() {
  // Call useState with some initial state
  // grabbing the return vaule
  const [ pointerInside, setPointerInside ] = useState(false)

  // You can have multiple useState calls in a single component,
  // keep in mind that whenever one of those states changes, this function here will be re run
  const [ hasBeenClicked, setHasBeenClicked ] = useState(false)

  return (
    <div
    // Here we are keeping track of wheter the pointer is inside the element or not
    // Since we do not care for the previous state we set it explicitly
      onMouseEnter={() => setPointerInside(true)}
      onMouseLeave={() => setPointerInside(false)}
      onClick={() => setHasBeenClicked(true)}
      className={"container" + (hasBeenClicked ? " hasBeenClicked" : "")}
    >
      <h2 className="title-font">This has state now</h2>
      <p>{pointerInside ? "true" : "false"}</p>
      {pointerInside ? <h3>State is true</h3> : <h1>The state is false</h1>}
    </div>
  )
}

export default StyledWithGlobalCSS;