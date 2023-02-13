import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Info from "./Component/Info";
import Name from "./Component/Name";
import HomePage from "./Component/HomePage";
import SelectTamplate from "./Component/SelectTamplate";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/name" element={<Name />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/select-template" element={<SelectTamplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
