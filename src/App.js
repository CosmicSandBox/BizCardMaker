import Router from "./router.js";
import "./index.css";
import Undermsg from "./Undermsg";

function App() {
  return (
    <div
      style={{
        maxWidth: "31.25rem",
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      <Router />
      <Undermsg />
    </div>
  );
}

export default App;
