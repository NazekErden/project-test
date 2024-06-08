import React, { useState, useEffect } from "react";
import "./Modal.css";

const ModalEditUser = ({ user, updateUser }) => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    if (user) {
      setPermissions(user.permissions);
    }
  }, [user]);

  const handlePermissionChange = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      permissions,
    };
    updateUser(updatedUser);
    document.getElementById("my_modal_edit").close();
  };

  return (
    <dialog id="my_modal_edit" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-3xl mb-4">Изменить право доступа</h3>
        <div className="dropdown w-full">
          <button
            className="w-full flex justify-between border px-4 py-3 items-center rounded-xl mt-3 text-gray-400"
            type="button"
            role="button"
          >
            Выберите право доступа{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="dropdown-content modal-check">
            {[
              "Администратор",
              "Блог",
              "Аналитика",
              "Акции",
              "Модерация объявлений",
              "Тех. поддержка",
              "Обращение клиентов",
            ].map((permission, index) => (
              <label key={index} className="block">
                <input
                  type="checkbox"
                  checked={permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                {permission}
              </label>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <button className="btn btn-green" onClick={handleSubmit}>
            Сохранить
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ModalEditUser;
