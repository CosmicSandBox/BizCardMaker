import Router from "./router.js";
import "./index.css";
import { Under } from "../src/styles/basicStyles.js";

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
      <Under>HUFS GLOBAL LIKELION</Under>
    </div>
  );
}

export default App;
