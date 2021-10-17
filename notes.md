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
