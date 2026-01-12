import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Test from "./pages/Test"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
