import React, { useState, useEffect } from 'react';

function CursoForm({ adicionarCurso, cursoEditando, editarCurso }) {
    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [duracao, setDuracao] = useState('');
    const [ativo, setAtivo] = useState(true);

    useEffect(() => {
        if (cursoEditando) {
            setCodigo(cursoEditando.codigo);
            setNome(cursoEditando.nome);
            setDuracao(cursoEditando.duracao);
            setAtivo(cursoEditando.ativo);
        }
    }, [cursoEditando]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const curso = { codigo, nome, duracao, ativo };
        if (cursoEditando) {
            editarCurso({ ...curso, id: cursoEditando.id });
        } else {
            adicionarCurso(curso);
        }
        setCodigo('');
        setNome('');
        setDuracao('');
        setAtivo(true);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Código
                    </label>
                    <input
                        type="text"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Nome do Curso
                    </label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Duração
                    </label>
                    <input
                        type="text"
                        value={duracao}
                        onChange={(e) => setDuracao(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Ativo
                    </label>
                    <select
                        value={ativo}
                        onChange={(e) => setAtivo(e.target.value === 'true')}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>
                    </select>
                </div>
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
                {cursoEditando ? 'Atualizar Curso' : 'Adicionar Curso'}
            </button>
        </form>
    );
}
export default CursoForm;
