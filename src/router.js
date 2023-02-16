import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./Component/Info";
import Name from "./Component/Name";
import Test from "./Component/Test";
import HomePage from "./Component/HomePage";
import SelectTamplate from "./Component/SelectTamplate";
import Share from "./Component/Share";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/name" element={<Name />} />
        <Route path="/info" element={<Info />} />
        <Route path="/test" element={<Test />} />
        <Route path="/select-template" element={<SelectTamplate />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
