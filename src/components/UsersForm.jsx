import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ handlePost, editingMode, userEditing, formToggle }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const setInputsValue = (data) => {
    setValue('first_name', data.first_name);
    setValue('last_name', data.last_name);
    setValue('email', data.email);
    setValue('password', data.password);
    setValue('birthday', data.birthday);
  };

  useEffect(() => {
    if (editingMode) {
      setInputsValue(userEditing);
    }
  }, [userEditing]);

  return (
    <div className="h-full w-full bg-gradient-to-t from-[#212121] via-transparent to-[#212121] absolute flex justify-center items-center z-10">
      <div className="form-user p-5 bg-white rounded-sm relative">
        <button
          onClick={formToggle}
          className="pt-1 pr-2 text-2xl absolute top-0 right-0"
        >
          <i className="fa-solid fa-circle-xmark rounded-[50px]"></i>
        </button>
        <h2 className="font-bold text-xl lg:text-2xl text-[#0F0F2D]">
          {editingMode ? 'Editar ' : 'Nuevo '}Usuario
        </h2>
        <form
          onSubmit={handleSubmit((data) => handlePost(data))}
          className="flex flex-col"
        >
          {/* Name */}
          <div className="flex flex-col gap-1 my-2">
            <label className="font-medium text-[14px] lg:text-base" htmlFor="first_name">
              Nombre
            </label>
            <input
              className="p-1 border-[1px] border-[#C3C1C1] rounded-sm placeholder:text-[#C3C1C1]"
              type="text"
              placeholder="nombre"
              name="fist_name"
              {...register('first_name', {
                required: {
                  value: true,
                  message: 'obligatorio',
                },
                pattern: {
                  value: /[a-zA-z-Zá-úÁ-ÚñÑ]{4,20}/,
                  message: 'Ingrese un nombre válido',
                },
              })}
            />
            {errors.first_name && (
              <span className="text-red-700 text-xs">{errors.first_name.message}</span>
            )}
          </div>
          {/* Last Name */}
          <div className="flex flex-col gap-1 my-2">
            <label className="font-medium text-[14px] lg:text-base" htmlFor="last_name">
              Apellidos
            </label>
            <input
              className="p-1 border-[1px] border-[#C3C1C1] rounded-sm placeholder:text-[#C3C1C1]"
              type="text"
              placeholder="apellido"
              name="last_name"
              {...register('last_name', {
                required: {
                  value: true,
                  message: 'obligatorio',
                },
                pattern: {
                  value: /[a-zA-z-Zá-úÁ-ÚñÑ]{4,20}/,
                  message: 'ingrese un apellido valido',
                },
              })}
            />
            {errors.last_name && (
              <span className="text-red-700 text-xs">{errors.last_name.message}</span>
            )}
          </div>
          {/* Gmail */}
          <div className="flex flex-col gap-1 my-2">
            <label className="font-medium text-[14px] lg:text-base" htmlFor="email">
              Correo
            </label>
            <input
              className="p-1 border-[1px] border-[#C3C1C1] rounded-sm placeholder:text-[#C3C1C1]"
              type="email"
              placeholder="correo electronico"
              name="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'el campo es requerido',
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: 'error',
                },
              })}
            />
            {errors.email && (
              <span className="text-red-700 text-xs">{errors.email.message}</span>
            )}
          </div>
          {/* Password */}
          <div className="flex flex-col gap-1 my-2">
            <label className="font-medium text-[14px] lg:text-base" htmlFor="password">
              Contraseña
            </label>
            <input
              className="p-1 border-[1px] border-[#C3C1C1] rounded-sm placeholder:text-[#C3C1C1]"
              type="password"
              placeholder="password"
              name="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'obligatorio',
                },
                pattern: {
                  value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                  message:
                    'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula ',
                },
              })}
            />
            {errors.password && (
              <span className="max-w-[230px] text-center text-red-700 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          {/* Bithday */}
          <div className="flex flex-col gap-1 my-2">
            <label className="font-medium text-[14px] lg:text-base" htmlFor="birthday">
              Fecha de nacimiento
            </label>
            <input
              className="p-1 border-[1px] border-[#C3C1C1] rounded-sm placeholder:text-[#C3C1C1]"
              type="date"
              name="birthday"
              {...register('birthday', {
                required: {
                  value: true,
                  message: 'obligatorio',
                },
                pattern: {
                  value:
                    /([0-3])?[0-9]{1}(\/|\-|\.){1}([0-2])?[0-9]{1}(\/|\-|\.){1}[0-9]{2,4}/,
                  message: 'fecha no valida',
                },
              })}
            />
            {errors.birthday && (
              <span className="text-red-700 text-xs">{errors.birthday.message}</span>
            )}
          </div>
          <button className="mt-5 lg:active:animate-pulse py-2 shadow shadow-black lg:hover:bg-[#383e7a] lg:hover:scale-105 lg:active:scale-95 lg:text-base lg:py-2 lg:px-5 transition rounded-sm text-sm text-[#FFFFFF] bg-[#555A88]">
            {editingMode ? 'Guardar cambios' : 'Agregar nuevo Usuario'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UsersForm;
