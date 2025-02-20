import React from 'react';
import { Navbar } from '@shadcn/ui';

const Header = () => {
  return (
    <Navbar className="bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Criollo Software</h1>
      <div className="flex space-x-4">
        <a href="#inicio" className="hover:text-gray-400">Inicio</a>
        <a href="#servicios" className="hover:text-gray-400">Servicios</a>
        <a href="#casos-exito" className="hover:text-gray-400">Casos de Éxito</a>
        <a href="#contacto" className="hover:text-gray-400">Contacto</a>
      </div>
    </Navbar>
  );
};

export default Header; 