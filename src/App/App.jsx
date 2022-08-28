import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Landing/Landing";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
