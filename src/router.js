import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Component/Home';
import Info from './Component/Info';
import Name from './Component/Name';
import Three from "./Component/Three";
import Slide from "./Component/Slide";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/name" element={<Name />} />
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
