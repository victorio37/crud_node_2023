import React from 'react';

const Header = ({ formToggle }) => {
  return (
    <header className="mt-6 lg:mt-10 mb-4 lg:mb-8 w-[90%] max-w-[1100px] py-1 flex flex-wrap justify-between">
      <h1 className="text-2xl lg:hover:animate-pulse lg:text-3xl transition lg:hover:text-[#77777e] lg:hover:cursor-default font-extrabold text-[#0F0F2D]">
        Usuarios
      </h1>
      <button
        onClick={formToggle}
        className="bg-[#555A88] lg:active:animate-pulse shadow shadow-black lg:hover:bg-[#383e7a] lg:hover:scale-105 lg:active:scale-95 transition text-xs py-[6px] px-3 lg:text-base lg:py-2 lg:px-5 text-white rounded-sm"
      >
        <span>+ </span> Crear nuevo usuario
      </button>
    </header>
  );
};

export default Header;
