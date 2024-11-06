import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/page/Home";
import { RecetasList } from "./page/RecetasList";
import { Navigation } from "./components/Navigation";
import { LogIn } from "./page/LogIn";
//import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/RecetasList" element={<RecetasList />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
