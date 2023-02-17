import Router from "./router.js";
import "./index.css";
import Undermsg from "./Component/Undermsg.js";
import GlobalStyle from "./Component/GlobalStyle.js";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",

          position: "relative",
          maxWidth: "31.25rem",
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          overflow: "scroll",

          background: "#fffbee",
        }}
      >
        <Router />
        <Undermsg />
      </div>
    </>
  );
}

export default App;
