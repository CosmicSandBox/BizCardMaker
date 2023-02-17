import Router from "./router.js";
import "./index.css";
import Undermsg from "./Component/Undermsg.js";
import GlobalStyle from "./Component/GlobalStyle.js";
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
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
    </>
  );
}

export default App;
