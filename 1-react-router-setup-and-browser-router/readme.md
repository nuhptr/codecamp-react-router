# Setup React Router and BrowserRouter

## Important Eslint Code

```json
{
   "rules": {
      "react/prop-types": "off",
      "no-unused-vars": "off"
   }
}
```

## React Router

-  React Router is a collection of navigational components that compose declaratively with your application.
-  React Router is a standard library for routing in React.
-  It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

## BrowserRouter

-  The `<BrowserRouter>` is a `<Router>` that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.
-  It creates a new history object that listens for changes to the URL and keeps your UI in sync with the URL.
-  The `<BrowserRouter>` is the most common router to use in a web application that uses the HTML5 history API for navigation.

## Setup React Router and BrowserRouter

-  First, install the React Router using the following command:

```bash
pnpm install react-router-dom
```

-  Then, import the BrowserRouter and wrap the App component with it in the `index.js` file:

```jsx
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
)
```
