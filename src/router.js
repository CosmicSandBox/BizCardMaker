import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Component/Home';
import Info from './Component/Info';
import Name from './Component/Name';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/name" element={<Name />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;