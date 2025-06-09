import React from "react";

function App() {
  const [color, setColor] = React.useState("");
  function handleClick(color) {
    setColor(color);
  }

  return (
    <div id="app">
      <h1 className={color}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={handleClick("highlight-green")}>Yes</button>
        </li>
        <li>
          <button onClick={handleClick("highlight-red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
