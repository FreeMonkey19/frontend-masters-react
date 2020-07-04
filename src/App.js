import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
      <Pet name="Ginger" animal="Dog" breed="Springer Spaniel" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
