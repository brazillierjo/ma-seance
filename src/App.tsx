import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Commons/Header";
import Agenda from "./pages/Agenda";
import Exercices from "./pages/Exercices";
import Home from "./pages/Home";
import Program from "./pages/Program";
import { DarkModeStateType } from "./types/StateTypes";

function App() {
  const DarkModeState = useSelector((state: DarkModeStateType) => state.darkMode);

  return (
    <div className={`${DarkModeState && "dark"}`}>
      {window.innerWidth > 768 && (
        <div className="mb-12 rounded bg-gray-300 p-2">
          <p className="text-center">
            Cette web app est conçue pour vous accompagner lors de votre entraînement en salle. C'est pour cela que le
            responsive est limitée à la largeur de grands smartphones.
          </p>
        </div>
      )}
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
