import { Route, Routes } from "react-router-dom";
import Header from "./components/Commons/Header";
import Agenda from "./pages/Agenda";
import Home from "./pages/Home";
import { Program } from "./pages/Program";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Program />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </>
  );
}

export default App;
