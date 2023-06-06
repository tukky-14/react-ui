import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        React UI
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
