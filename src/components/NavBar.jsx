import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ title, links }) => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => setMenuAberto(!menuAberto);

    return (
        <li className="relative">
            <button
                className="hover:text-blue-200 focus:outline-none"
                onClick={toggleMenu}
            >
                {title}
            </button>
            {menuAberto && (
                <ul
                    className="absolute bg-white text-gray-800 mt-2 py-2 w-48 rounded-lg shadow-lg"
                    onMouseEnter={() => setMenuAberto(true)}
                    onMouseLeave={() => setMenuAberto(false)}
                >
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                className="block px-4 py-2 hover:bg-blue-100"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Pagina Inicial</h1>
                <ul className="flex space-x-4">
                    <DropdownMenu
                        title="Cursos"
                        links={[
                            { to: '/cursos', label: 'Listar Cursos' },
                            {
                                to: '/cursos/cadastrar',
                                label: 'Cadastrar Curso',
                            },
                        ]}
                    />
                    <DropdownMenu
                        title="Grelha Curricular"
                        links={[
                            {
                                to: '/grelha-curricular/visualizar',
                                label: 'Visualizar Grelha Curricular',
                            },
                            {
                                to: '/grelha-curricular/cadastrar-disciplina',
                                label: 'Cadastrar Disciplina',
                            },
                        ]}
                    />
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
