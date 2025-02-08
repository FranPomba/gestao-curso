import React, { useState } from 'react';

function CadastrarDisciplinaPage() {
    const [disciplina, setDisciplina] = useState({
        nome: '',
        ano: '',
        semestre: '',
        T: '',
        TP: '',
        P: '',
        HS: '',
        HSem: '',
        nuclear: false,
        cursoId: '',
    });

    
    const cursos = [
        { id: 1, nome: 'Engenharia Industrial' },
        { id: 2, nome: 'Ciência da Computação' },
        { id: 3, nome: 'Engenharia Eletronica' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // chamar a routa de cadastrar disciplina da api 
        console.log('Disciplina Cadastrada:', disciplina);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cadastrar Disciplina</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Curso
                        </label>
                        <select
                            value={disciplina.cursoId}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    cursoId: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="">Selecione um curso</option>
                            {cursos.map((curso) => (
                                <option key={curso.id} value={curso.id}>
                                    {curso.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            value={disciplina.nome}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    nome: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Ano
                        </label>
                        <input
                            type="number"
                            value={disciplina.ano}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    ano: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Semestre
                        </label>
                        <input
                            type="number"
                            value={disciplina.semestre}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    semestre: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Horas Teóricas (T)
                        </label>
                        <input
                            type="number"
                            value={disciplina.T}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    T: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Horas Teórico-Práticas (TP)
                        </label>
                        <input
                            type="number"
                            value={disciplina.TP}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    TP: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Horas Práticas (P)
                        </label>
                        <input
                            type="number"
                            value={disciplina.P}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    P: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Horas Semanais (HS)
                        </label>
                        <input
                            type="number"
                            value={disciplina.HS}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    HS: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Horas Semestrais (HSem)
                        </label>
                        <input
                            type="number"
                            value={disciplina.HSem}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    HSem: e.target.value,
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Nuclear
                        </label>
                        <select
                            value={disciplina.nuclear}
                            onChange={(e) =>
                                setDisciplina({
                                    ...disciplina,
                                    nuclear: e.target.value === 'true',
                                })
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value={true}>Sim</option>
                            <option value={false}>Não</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    Cadastrar Disciplina
                </button>
            </form>
        </div>
    );
}

export default CadastrarDisciplinaPage;
