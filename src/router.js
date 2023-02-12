import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Three from "./Component/Three";
import Slide from "./Component/Slide";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/slide"
          element={<Slide photos={[<h3>1</h3>, <h3>2</h3>, <h3>3</h3>]} />}
        />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
