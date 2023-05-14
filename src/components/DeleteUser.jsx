import React from 'react';

const DeleteUser = ({
  deleteUserToggle,
  deleteUserName,
  deleteUserLastName,
  deleteUserId,
  avoidDeleting,
}) => {
  return (
    <div className="h-full w-full bg-gradient-to-t from-[#212121] via-transparent to-[#212121] absolute flex justify-center items-center z-10">
      <div className="rounded-md delete-user p-4 w-[310px] lg:w-[350px] bg-[#FFFFFF] relative flex flex-col gap-3">
        <button
          onClick={avoidDeleting}
          className="pt-1 pr-2 text-2xl absolute top-0 right-0"
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        <h2 className="font-bold text-xl lg:text-2xl text-center text-[#0F0F2D]">
          Eliminar Usuario
        </h2>
        <p className="text-sm lg:text-base  text-center">
          si desea eliminar el usuario: <br />
          <span className="font-bold">{deleteUserName} </span>
          <span className="font-bold">{deleteUserLastName}</span> presione "Aceptar"
        </p>
        <div className="w-full flex justify-center">
          <button
            onClick={deleteUserToggle}
            className="py-2 rounded-sm w-4/5 bg-[#555A88] shadow shadow-black lg:hover:bg-[#383e7a] lg:hover:scale-105 lg:active:scale-95 transition lg:text-base lg:py-2 lg:px-5 text-white"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
