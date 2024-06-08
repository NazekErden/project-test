import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const Users = ({ people, editPermissions, deleteUser }) => {
  return (
    <>
      <div className="px-5">
        <div className="">
          <ul role="list" className="py-4">
            {people.map((person) => (
              <li
                key={person.email}
                className="mb-3 flex justify-between w-full"
              >
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={person.image}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                      <span className="pl-2 font-normal text-gray-400">
                        {person.email}
                      </span>
                    </h3>
                    <p className="text-xs">
                      {person.permissions.map((permission, index) => (
                        <span
                          key={index}
                          className="border text-gray-400 px-2 py-1 mr-2 inline-block rounded-lg"
                        >
                          {permission}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="dropdown dropdown-left">
                  <button
                    tabIndex={0}
                    role="button"
                    className="float-right mt-4 m-1"
                  >
                    <HiDotsHorizontal color="#bbb" />
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a onClick={() => editPermissions(person)}>
                        Изменить право доступа
                      </a>
                    </li>
                    <li>
                      <a>Отправить код повторно</a>
                    </li>
                    <li>
                      <a onClick={() => deleteUser(person.email)}>Удалить</a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Users;
