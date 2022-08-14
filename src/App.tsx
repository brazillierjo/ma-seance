import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Commons/Header";
import Agenda from "./pages/Agenda";
import Exercices from "./pages/Exercices";
import Home from "./pages/Home";
import Program from "./pages/Program";

function App() {
  const DarkModeState = useSelector((state: any) => state.darkMode);

  return (
    <div className={DarkModeState && "dark"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Program />} />
        <Route path="/exercices" element={<Exercices />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </div>
  );
}

export default App;
