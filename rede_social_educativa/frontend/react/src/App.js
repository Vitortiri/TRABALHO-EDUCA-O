import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import PainelAdm from "./pages/PainelAdm";
import PainelAluno from "./pages/PainelAluno";
import PainelProfessor from "./pages/PainelProfessor";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/aluno" element={<PainelAluno />} />
        <Route path="/professor" element={<PainelProfessor />} />
        <Route path="/adm" element={<PainelAdm />} />
      </Routes>
    </Router>
  );
}
