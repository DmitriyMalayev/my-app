```js
import React from "react";
// finds the folder named react in node_modules folder
```

React Component
Can be a Function or Class
Products HTML to show the User => Using JSX
Handles Feedback from the User => Using Event Handlers

JSX
Special dialect of JavaScript (which is not HTML)
Browsers don't understand code that is written in JSX.
We write JSX and then run tools to turn it into normal JavaScript.
It is very similar in form and function to HTML with a couple of differences.

JSX vs. HTML
Adding custom styling to an element uses different syntax
Adding a class to an element uses different syntax
JSX can reference JavaScript variables

```html
<div>
  <label class="label" for="name">Enter name:</label>
  <input id="name" type="text" />
  <button style="background-color:blue; color: white;">Submit</button>
  <button style={{ backgroundColor: "blue", color: "white" }}>Submit</button>

</div>
```


class vs. className
  class is a JavaScript keyword
  We use className to prevent collision 



```js
// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";


function getButtonText() {
  return "Click Me"
}
// Create a React component
const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
        {/* This is not a JS Object, it's a syntax to a JS variable  */}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

```


`Error:  Objects are not valid as a React child.` 
We are not allowed to take a JS object and reference it inside of JSX specifically where we would put text. 
const buttonText = {text: "Click Me"}


# Communicating With Props

Component Nesting
  A component can be shown inside of another component
Component Reusability
  Making components that can be reusable throughout our application
Component Configuration
  Ability to configure a component upon creation























