import React, { useState } from 'react';
import GrelhaCurricularTable from '../components/GrelhaCurricularTable';

function VisualizarGrelhaCurricularPage() {
    const cursos = [
        {
            id: 1,
            codigo: 'CC',
            nome: 'Ciencias da computação',
            duracao: 4,
            ativo: true,
        },
        {
            id: 2,
            codigo: 'EP',
            nome: 'Ensino Primário',
            duracao: 4,
            ativo: true,
        },
        {
            id: 3,
            codigo: 'EE',
            nome: 'Engenharia Eletronica',
            duracao: 5,
            ativo: false,
        },
    ];

    const disciplinas = [
        {
            id: 1,
            nome: 'Programação I',
            ano: 1,
            semestre: 1,
            T: 30,
            TP: 15,
            P: 15,
            HS: 4,
            HSem: 60,
            nuclear: true,
            cursoId: 1,
        },
        {
            id: 2,
            nome: 'Programação Web',
            ano: 1,
            semestre: 1,
            T: 30,
            TP: 15,
            P: 15,
            HS: 4,
            HSem: 60,
            nuclear: true,
            cursoId: 1,
        },
        {
            id: 3,
            nome: 'Inglês',
            ano: 1,
            semestre: 2,
            T: 30,
            TP: 15,
            P: 15,
            HS: 4,
            HSem: 60,
            nuclear: true,
            cursoId: 1,
        },
        {
            id: 4,
            nome: 'Programação II',
            ano: 1,
            semestre: 2,
            T: 30,
            TP: 15,
            P: 15,
            HS: 4,
            HSem: 60,
            nuclear: true,
            cursoId: 1,
        },
        {
            id: 5,
            nome: 'Ensino da Matemática',
            ano: 1,
            semestre: 1,
            T: 45,
            TP: 0,
            P: 0,
            HS: 3,
            HSem: 45,
            nuclear: true,
            cursoId: 2,
        },
        {
            id: 6,
            nome: 'Banco de Dados',
            ano: 2,
            semestre: 1,
            T: 30,
            TP: 15,
            P: 15,
            HS: 4,
            HSem: 60,
            nuclear: false,
            cursoId: 1,
        },

        {
            id: 8,
            nome: 'Ensino da Lingua Portuguesa',
            ano: 1,
            semestre: 2,
            T: 45,
            TP: 0,
            P: 0,
            HS: 3,
            HSem: 45,
            nuclear: true,
            cursoId: 2,
        },
        {
            id: 9,
            nome: 'Educação Musical',
            ano: 1,
            semestre: 1,
            T: 45,
            TP: 0,
            P: 0,
            HS: 3,
            HSem: 45,
            nuclear: true,
            cursoId: 2,
        },
        {
            id: 10,
            nome: 'Fisica',
            ano: 1,
            semestre: 1,
            T: 45,
            TP: 0,
            P: 0,
            HS: 3,
            HSem: 45,
            nuclear: true,
            cursoId: 3,
        },
        {
            id: 11,
            nome: 'Eletronica',
            ano: 1,
            semestre: 2,
            T: 45,
            TP: 0,
            P: 0,
            HS: 3,
            HSem: 45,
            nuclear: true,
            cursoId: 3,
        },
        {
            id: 7,
            nome: 'Redes de Computadores',
            ano: 2,
            semestre: 2,
            T: 30,
            TP: 15,
            P: 15,
            HS: 4,
            HSem: 60,
            nuclear: true,
            cursoId: 3,
        },
        {
            id: 12,
            nome: 'Circuitos',
            ano: 3,
            semestre: 1,
            T: 45,
            TP: 0,
            P: 0,
            HS: 3,
            HSem: 45,
            nuclear: true,
            cursoId: 3,
        },
        {
            id: 13,
            nome: 'Sistemas Digitais',
            ano: 3,
            semestre: 1,
            T: 45,
            TP: 0,
            P: 0,
            HS: 3,
            HSem: 45,
            nuclear: true,
            cursoId: 3,
        },
        {
            id: 14,
            nome: 'Análise Matematica',
            ano: 1,
            semestre: 1,
            T: 45,
            TP: 0,
            P: 0,
            HS: 3,
            HSem: 45,
            nuclear: true,
            cursoId: 3,
        },
    ];

    const [cursoSelecionado, setCursoSelecionado] = useState('');

    const disciplinasFiltradas = cursoSelecionado
        ? disciplinas.filter(
              (disciplina) => disciplina.cursoId === parseInt(cursoSelecionado),
          )
        : disciplinas;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Grelha Curricular</h1>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                    Buscar por Curso
                </label>
                <select
                    value={cursoSelecionado}
                    onChange={(e) => setCursoSelecionado(e.target.value)}
                    className="mt-1 block w-auto p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Todos os Cursos</option>
                    {cursos.map((curso) => (
                        <option key={curso.id} value={curso.id}>
                            {curso.nome}
                        </option>
                    ))}
                </select>
            </div>

            <GrelhaCurricularTable disciplinas={disciplinasFiltradas} />
        </div>
    );
}

export default VisualizarGrelhaCurricularPage;
