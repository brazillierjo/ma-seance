import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Commons/Header";
import { Exercices } from "./pages/Exercices";
import { Home } from "./pages/Home";
import { Program } from "./pages/Program";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercices" element={<Exercices />} />
        <Route path="/programme" element={<Program />} />
      </Routes>
    </>
  );
}
