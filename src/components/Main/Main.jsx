import React, { useState } from "react";
import "./Main.css";
import Users from "../Users/Users";
import ModalAddUser from "../Modal/ModalAddUser";
import ModalEditUser from "../Modal/ModalEditUser"; 

const Main = () => {
  const [people, setPeople] = useState([
    {
      name: "Артем Иванов",
      email: "artem@gmail.com",
      permissions: ["Блог", "Аналитика"],
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Лена Новикова",
      email: "lenkan@gmail.com",
      permissions: ["Администратор"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Максим Иванов",
      email: "maksiim@gmail.com",
      permissions: ["Акции", "Модерация объявлений", "Тех. поддержка"],
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
    },
    {
      name: "Айжулдыз Кошкинбай",
      email: "aizhzk@gmail.com",
      permissions: ["Обращение клиентов"],
      image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg",
    },
  ]);

  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setPeople([...people, user]);
  };

  const deleteUser = (email) => {
    setPeople(people.filter((person) => person.email !== email));
  };

  const editPermissions = (user) => {
    setCurrentUser(user);
    document.getElementById("my_modal_edit").showModal();
  };

  const updateUser = (updatedUser) => {
    setPeople(
      people.map((person) =>
        person.email === updatedUser.email ? updatedUser : person
      )
    );
    setCurrentUser(null);
  };

  return (
    <div className="h-lvh lg:p-5">
      <div className="main-content lg:bg-white pt-2 sm:pt-5">
        <div className="border-b-[1px] px-3">
          <div className="lg:navbar">
            <div className="flex-1 mb-3 pl-10 sm:pl-0">
              <a className="text-3xl font-bold">Команда</a>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered lg:w-96"
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-green"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Добавить пользователя
                </button>
                <ModalAddUser addUser={addUser} />
                <ModalEditUser
                  user={currentUser}
                  updateUser={updateUser}
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <Users
          people={people}
          editPermissions={editPermissions}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default Main;
