import { useState } from "react";
import "./App.css";
// @ts-ignore
import Button from "remoteApp/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Host</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          HA count is {count}
        </button>
      </div>
      <Button />
    </>
  );
}

export default App;
