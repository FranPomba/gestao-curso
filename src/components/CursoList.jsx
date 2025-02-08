import React from 'react';

function CursoList({ cursos, editarCurso, eliminarCurso }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Lista de Cursos</h2>
            <ul className="space-y-2">
                {cursos.map((curso) => (
                    <li
                        key={curso.id}
                        className="p-4 border border-gray-200 rounded-md"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p>
                                    <strong>Código:</strong> {curso.codigo}
                                </p>
                                <p>
                                    <strong>Nome:</strong> {curso.nome}
                                </p>
                                <p>
                                    <strong>Duração:</strong> {curso.duracao} anos
                                </p>
                                <p>
                                    <strong>Ativo:</strong>{' '}
                                    {curso.ativo ? 'Sim' : 'Não'}
                                </p>
                            </div>
                            <div>
                                <button
                                    onClick={() => editarCurso(curso)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminarCurso(curso.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CursoList;
