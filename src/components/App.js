import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu/index.js";
import Users from "./Users/index.js";
import Publications from "./Publications/index.js";

const Tasks = () => {
  return <div>Zadania</div>;
};
const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="margen">
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/zadania" element={<Tasks />} />
          <Route exact path="/publications/:key" element={<Publications/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
