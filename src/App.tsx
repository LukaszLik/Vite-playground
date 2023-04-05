import { useState } from "react";
import "./App.css";
import StringLink from "./components/StringLink";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <StringLink />
    </div>
  );
}

export default App;
