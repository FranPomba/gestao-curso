import React from 'react';

function GrelhaCurricularTable({ disciplinas }) {
    const agruparDisciplinas = (disciplinas) => {
        const agrupadas = {};

        disciplinas.forEach((disciplina) => {
            const { ano, semestre } = disciplina;
            const chave = `Ano ${ano} - Semestre ${semestre}`;

            if (!agrupadas[chave]) {
                agrupadas[chave] = [];
            }

            agrupadas[chave].push(disciplina);
        });

        return agrupadas;
    };

    const disciplinasAgrupadas = agruparDisciplinas(disciplinas);

    return (
        <div className="overflow-x-auto">
            {Object.entries(disciplinasAgrupadas).map(
                ([chave, disciplinas]) => (
                    <div key={chave} className="mb-8">
                        <h2 className="text-xl font-bold mb-4">{chave}</h2>
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border border-gray-200">
                                        Nome
                                    </th>
                                    <th className="py-2 px-4 border border-gray-200">
                                        T
                                    </th>
                                    <th className="py-2 px-4 border border-gray-200">
                                        TP
                                    </th>
                                    <th className="py-2 px-4 border border-gray-200">
                                        P
                                    </th>
                                    <th className="py-2 px-4 border border-gray-200">
                                        HS
                                    </th>
                                    <th className="py-2 px-4 border border-gray-200">
                                        HSem
                                    </th>
                                    <th className="py-2 px-4 border border-gray-200">
                                        Nuclear
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {disciplinas.map((disciplina, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="py-2 px-4 border border-gray-200">
                                            {disciplina.nome}
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200 text-center">
                                            {disciplina.T}
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200 text-center">
                                            {disciplina.TP}
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200 text-center">
                                            {disciplina.P}
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200 text-center">
                                            {disciplina.HS}
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200 text-center">
                                            {disciplina.HSem}
                                        </td>
                                        <td className="py-2 px-4 border border-gray-200 text-center">
                                            {disciplina.nuclear ? 'Sim' : 'Não'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ),
            )}
        </div>
    );
}

export default GrelhaCurricularTable;
