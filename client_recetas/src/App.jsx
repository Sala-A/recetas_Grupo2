import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/page/Home";
import { RecetasList } from "./page/RecetasList";
import { Navigation } from "./components/Navigation";
import { Crear } from "./page/Crear";
import { Footer } from "./components/Footer";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { NoFound } from "./page/NoFound";
import { DetallesReceta } from "./page/DetallesReceta";
import { Ingredientes } from "./page/Ingredientes";
import { CalificacionForm } from "./page/CalificacionForm";
import { Calificacion } from "./page/Calificacion";
import { Pasos } from "./page/Pasos";
import { ProtectedRoute } from "./components/ProtectedRoute";

import "./style/index.css";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <div id="pagina">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Register" element={<RegisterAndLogout />} />
          <Route path="/RecetasList" element={<RecetasList />} />
          <Route path="/Recetas-add" element={<Crear />} />
          <Route path="/recetas/:id" element={<Crear />} />
          <Route path="/Calificacion" element={<Calificacion />} />
          <Route path="/CalificacionForm" element={<CalificacionForm />} />
          <Route path="/Calificacion/:id" element={<CalificacionForm />} />
          <Route
            path="/DetallesReceta/:id_receta"
            element={<DetallesReceta />}
          />
          <Route path="/Ingredientes/:id_receta" element={<Ingredientes />} />
          <Route path="/Pasos/:id_receta" element={<Pasos />} />
          <Route path="*" element={<NoFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
{
  <Route
    path="/"
    element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }
  />;
}
