import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/page/Home";
import { RecetasList } from "./page/RecetasList";
import { Navigation } from "./components/Navigation";
import { Crear } from "./page/Crear";
import { Footer } from "./components/Footer";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { NoFound } from "./page/NoFound";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Register" element={<RegisterAndLogout />} />
        <Route path="/RecetasList" element={<RecetasList />} />
        <Route path="/Recetas-add" element={<Crear />} />
        <Route path="/recetas/:id" element={<Crear />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
