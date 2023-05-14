import React from 'react';

const UserCard = ({
  user,
  handleDelete,
  setShownForm,
  setEditingMode,
  setUserEditing,
  deleteUserToggle,
}) => {
  const changeToEdit = () => {
    setEditingMode(true);
    setShownForm(true);
    setUserEditing({
      id: user.id,
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      birthday: user.birthday,
    });
  };

  return (
    <article className="user-card transition lg:hover:scale-105 h-[270px] w-[290px] lg:w-[340px] px-2 py-3 border-[1px] border-[#E5E5E5] flex flex-col gap-2 relative">
      <h2 className="text-lg lg:text-xl font-semibold text-[#0F0F2D] flex gap-[3px]">
        <span>{user.first_name}</span>
        <span>{user.last_name}</span>
      </h2>
      <div className="w-full my-[6px] mx-auto border-[0.5px] border-[#E5E5E5]"></div>
      <ul className="flex flex-col gap-[2px]">
        <li className="text-[#E5E5E5] text-[13px]">CORREO</li>
        <li className="text-[15px]">{user.email}</li>
        <li className="text-[#E5E5E5] text-[13px]">CUMPLEAÑOS</li>
        <div className="flex gap-1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARxJREFUSEvtleFtwjAQhb9MABtAJ2i7AWwAEwATtBtQNoAJ6AaFDdoJ2g2gG3QD0JPOkZ3YkQyJ+FEsRUp87+69u/M5BR2vouP4NBFMgBdgBOyAFfBjgp6AJSDMJ7AxTE1vikCOHxX0HzAGjsAB6Ffs0xhJikBKH031GtAzM7W/9v5lGbxaNvpWtsFKEZwM5exSK+U9z/vB9rRVxZewFIHKoWDPXt3fTKmc96Ze7+rHN6DMhk0ZKL1tDJR50pTpwsoZnCIZBpnBUnDFUgkDgmQdvSjZGL8H2c4J+UEcn8A1to0qlQ33CdTk9xb6oODzWJOd8qZSZdtic5AdxJRF/e4E/on7RyW6ZuBqN2rsFF06cMGAuebc9Kffxp3EGV38RxlRFzPlAAAAAElFTkSuQmCC"
            alt="gift"
          />
          <li className="text-[15px]">{user.birthday}</li>
        </div>
      </ul>
      <div className="w-full my-[6px] mx-auto border-[0.5px] border-[#E5E5E5]"></div>
      <div className="mr-4 mb-6 flex gap-4 absolute bottom-0 right-0">
        <button
          onClick={() => deleteUserToggle(user.first_name, user.last_name, user.id)}
          className="py-2 lg:active:animate-pulse px-3 rounded-[4px] bg-[#D85D5D] lg:hover:bg-[#8b2222] transition border-[1px] border-[#D93F3F] text-[#FFFFFF] text-lg"
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button
          onClick={changeToEdit}
          className="py-2 px-3 lg:active:animate-pulse rounded-[4px] transition bg-[#F6F6F6] lg:hover:bg-[#888585] border-[1px] border-[#BDBDBD] text-[#D3D3D3] text-lg"
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
