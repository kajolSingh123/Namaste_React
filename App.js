import React, { Component } from "react";
import ReactDOMClient from "react-dom/client";

// React Function Component
const Heading = () => <h1 className="head">Hello world</h1>;

const HeadingComponent = () => (
  <div>
    <h1> react Function Component</h1>
    <Heading/>
  </div>
);
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
