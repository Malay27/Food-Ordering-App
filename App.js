import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>(
    <h1 id="title">Tasty Trek</h1>
);

const HeadingComponents = () => {
  return (
    <div>
      {Title()}
      <h2>Namaste React Functional Components</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponents />);
