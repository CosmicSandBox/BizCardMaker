import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./page/InfoPage";
import Name from "./page/NamePage";
import HomePage from "./page/HomePage";
import SelectTamplatePage from "./page/SelectTamplatePage";
import Share from "./page/SharePage";
import ResultPage from "./Component/ResultPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/name" element={<Name />} />
        <Route path="/info" element={<Info />} />
        <Route path="/select-template" element={<SelectTamplatePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
