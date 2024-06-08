import React from "react";
import DrawerIcons from "./DrawerIcons";
import { IoIosMenu } from "react-icons/io";
import "./Drawer.css";
const Drawer = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open fixed top-0 left-0">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-left p-2 justify-center z-10">
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <IoIosMenu size={40} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-2 w-25 min-h-full text-base-content bg-white">
            <div className="avatar avatar-user mb-2 ">
              <div className="w-16 rounded-full">
                <img src="/logo.png" />
              </div>
            </div>
            <div className="avatar mb-2">
              <div className="w-16 rounded-full">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
            </div>
            <DrawerIcons />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
