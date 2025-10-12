import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "Parent" },
  [React.createElement(
    "div",
    { id: "Child1" },
    [React.createElement("h1", {}, "Hello h1 from React"),React.createElement("h2", {}, "Hello h2 from React")]
  ),React.createElement(
    "div",
    { id: "Child2" },
    [React.createElement("h1", {}, "Hello h1 from React"),React.createElement("h2", {}, "Hello h2 from React")]
  )]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)
