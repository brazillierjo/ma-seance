import { Route, Routes } from "react-router-dom";
import Header from "./components/Commons/Header";
import Home from "./pages/Home";
import { Program } from "./pages/Program";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Program />} />
      </Routes>
    </>
  );
}

export default App;
