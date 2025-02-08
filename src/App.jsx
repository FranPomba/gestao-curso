
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import CursosPage from './pages/CursosPage';
import VisualizarGrelhaCurricularPage from './pages/VisualizarGrelhaCurricularPage';
import CadastrarDisciplinaPage from './pages/CadastrarDisciplinaPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/cursos" element={<CursosPage />} />
          <Route path="/cursos/cadastrar" element={<CursosPage />} />

          <Route
            path="/grelha-curricular/visualizar"
            element={<VisualizarGrelhaCurricularPage />}
          />
          <Route
            path="/grelha-curricular/cadastrar-disciplina"
            element={<CadastrarDisciplinaPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;