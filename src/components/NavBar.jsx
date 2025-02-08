import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Universidade App</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/cursos" className="hover:text-blue-200">
                            Cursos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/grelha-curricular"
                            className="hover:text-blue-200"
                        >
                            Grelha Curricular
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
