
import React, { useState } from 'react';
import CursoForm from '../components/CursoForm';
import CursoList from '../components/CursoList';

function CursosPage() {
  const [cursos, setCursos] = useState([
    { id: 1, codigo: 'CC', nome: 'Ciencias da computação', duracao: 4, ativo: true },
    { id: 2, codigo: 'EP', nome: 'Ensino Primário', duracao: 4, ativo: true },
    { id: 3, codigo: 'EE', nome: 'Engenharia Eletronica', duracao: 5, ativo: false },
  ]);

  const [cursoEditando, setCursoEditando] = useState(null);
  
  const adicionarCurso = (curso) => {
    setCursos([...cursos, { ...curso, id: Date.now(), ativo: true }]);
  };

  
  const editarCurso = (cursoAtualizado) => {
    setCursos(cursos.map(curso => curso.id === cursoAtualizado.id ? cursoAtualizado : curso));
    setCursoEditando(null);
  };

  const eliminarCurso = (id) => {
    setCursos(cursos.filter(curso => curso.id !== id));
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestão de Cursos</h1>

      <div className="mb-6">
      </div>

      <CursoForm
        adicionarCurso={adicionarCurso}
        cursoEditando={cursoEditando}
        editarCurso={editarCurso}
      />

      <CursoList
        cursos={cursos}
        editarCurso={setCursoEditando}
        eliminarCurso={eliminarCurso}
      />
    </div>
  );
}

export default CursosPage;