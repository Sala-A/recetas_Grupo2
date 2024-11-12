import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/page/Home";
import { RecetasList } from "./page/RecetasList";
import { Navigation } from "./components/Navigation";
import { Crear } from "./page/Crear";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/RecetasList" element={<RecetasList />} />
        <Route path="/Recetas-add" element={<Crear />} />
        <Route path="/recetas/:id" element={<Crear />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
