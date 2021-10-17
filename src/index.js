// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

const buttonText = { text: "Click Me" };
const labelText = "Enter name";

// Create a React component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
