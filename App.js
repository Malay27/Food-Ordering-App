import React from "react";
import ReactDOM from "react-dom/client";

const title = ()=>(
    <h1 id="title">Namaste React</h1>
);

const HeadingComponents = () => {
  return (
    <div>
      {title}
      <h2>Namaste React Functional Components</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponents />);
