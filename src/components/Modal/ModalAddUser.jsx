import React, { useState } from "react";
import "./Modal.css";
import ModalSuccessfully from "./ModalSuccessfully";

const ModalAddUser = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState([]);

  const handlePermissionChange = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      permissions,
      image: "user.png",
    };
    addUser(newUser);
    setName("");
    setEmail("");
    setPermissions([]);
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-3xl mb-4">Отправьте приглaшение</h3>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-3">
            <input
              type="email"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
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
              ].map((permission) => (
                <label key={permission} className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked={permissions.includes(permission)}
                    onChange={() => handlePermissionChange(permission)}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">{permission}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="btn btn-green w-full mt-3" onClick={handleSubmit}>
            Отправить приглашение
          </button>
          <ModalSuccessfully />
        </div>
      </dialog>
    </>
  );
};

export default ModalAddUser;
