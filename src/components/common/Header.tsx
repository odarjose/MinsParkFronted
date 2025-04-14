"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, User, Pickaxe, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" w-full ">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-24 sm:max-h-28 w-auto" // Ajusta el tamaño del logo en móviles
          />
        </Link>

        {/* Botón del menú hamburguesa para móviles */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-600 hover:text-purple-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Menú de navegación */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:space-x-6 absolute sm:static top-16 lg:top-2 right-0 w-full sm:w-auto  sm:shadow-none p-4 sm:p-0
          `}
        >
          <Link
            to="/"
            className="flex items-center space-x-1 text-gray-800 hover:text-purple-600 p-2 sm:p-0"
          >
            <Home className="w-6 h-6" />
            <span>Inicio</span>
          </Link>

          <Link
            to="/progress"
            className="flex items-center space-x-1 text-gray-800 hover:text-purple-600 p-2 sm:p-0"
          >
            <Pickaxe className="w-6 h-6" />
            <span>Progreso</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center space-x-1 text-gray-800 hover:text-purple-600 p-2 sm:p-0"
          >
            <User className="w-6 h-6" />
            <span>Perfil</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
