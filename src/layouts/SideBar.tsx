import React, { useState } from "react";
import type { SideBarType } from "../types/Sidebar";

import {
  FiLayers,
  FiSearch,
  FiSidebar,
  FiCalendar,
  FiSettings,
  FiLogOut,
  FiBell,
  FiMessageSquare,
  FiUser,
  FiGrid,
  FiActivity,
  FiUsers,
} from "react-icons/fi";
import { RiBarChartLine } from "react-icons/ri";
import SearchBar from "../components/SearchBar";
import { useAuth } from "../context/AuthContext";

const SideBar: React.FC<SideBarType> = ({ isOpen, toggleSidebar, userList }) => {
  const [displayLogout, setDisplayLogout] = useState(false);
  const { user, logout } = useAuth();

  function handleSignOut() {
    setDisplayLogout((prev) => !prev);
    console.log("clicked");
  }

  return (
    <>
      {isOpen && (
        <div className="fixed  z-40 md:hidden" onClick={toggleSidebar} />
      )}

      <section className="flex h-screen">
        <div
          className={`${
            isOpen ? "fixed inset-y-0 left-0 z-40" : "relative"
          } w-12 bg-primary text-white p-1 shadow-md rounded md:block`}
        >
          <div className="border border-white/5 bg-white/5 backdrop-blur-md shadow-inner flex flex-col justify-between h-full items-center ">
            <ul className="space-y-5 mt-6 text-xl ">
              <button
                onClick={toggleSidebar}
                className="text-white hover:bg-blue-700 p-1 rounded-md"
              >
                <FiGrid className=" text-gray-400" />
              </button>
              <li className="text-white hover:bg-blue-700 p-1 rounded-md cursor-pointer">
                <FiSearch className=" text-gray-400" />
              </li>
              <li className="text-white hover:bg-blue-700 p-1 rounded-md cursor-pointer">
                <FiSidebar className=" text-gray-400" />
              </li>
              <li className="text-white hover:bg-blue-700 p-1 rounded-md cursor-pointer">
                <FiCalendar className=" text-gray-400" />
              </li>
              <li className="text-white hover:bg-blue-700 p-1 rounded-md cursor-pointer">
                <RiBarChartLine className=" text-gray-400" />
              </li>
            </ul>
            <ul className="-translate-y-8 space-y-6 text-xl">
              <li className="text-white hover:bg-blue-700 p-1 rounded-md cursor-pointer">
                <FiSettings className=" text-gray-400" />
              </li>

              <button
                onClick={handleSignOut}
                className="text-white hover:bg-blue-700 p-1 rounded-md"
              >
                <FiLogOut className=" text-gray-400" />
              </button>
            </ul>
          </div>
          {displayLogout && (
            <div className="absolute bottom-8 left-16 z-50 bg-primary border border-white/15 backdrop-blur-md shadow-lg p-6 rounded-xl w-64 space-y-4 text-white">
              <div className="text-sm text-gray-300">Signed in as:</div>
              <div className="font-semibold">
                <FiUser className="inline mr-2 " />
                {user?.email || "user@example.com"}
              </div>

              <ul className="flex flex-col gap-2 items-start">
                <li
                  className="w-full bg-blue-600 hover:bg-blue-700 p-2 transition-colors rounded-md hover:bg-gray-300/10 cursor-pointer"
                >
                  Help
                </li>
                <li
                  onClick={logout}
                  className="w-full  bg-red-600 hover:bg-red-700 transition-colors p-2 rounded-md hover:bg-gray-300/10 cursor-pointer"
                >
                  Log out
                </li>
              </ul>
            </div>
          )}
        </div>
        {isOpen && (
          <div
            className={`
      ${isOpen ? "fixed md:relative" : "hidden"}
      inset-y-0 left-12 z-30 transition-all duration-300
      w-64 bg-primary text-white p-1 rounded-xl
      md:block
    `}
          >
            <div className="border border-white/20 backdrop-blur-md bg-white/5 shadow-inner rounded-lg h-full p-4">
              <h3 className="text-2xl font-semibold mb-8">Your Dashboard</h3>
              <SearchBar className="mb-6 w-full p-2 rounded-md bg-primary text-white shadow" userList={userList} />
              <ul className="pointer-cursor text-ivory">
                <li className="flex items-center  hover:bg-black/10 cursor-pointer p-1 rounded-md space-x-2 mb-4">
                  <FiGrid className="text-xl text-gray-400" />
                  <span className="text-md">General</span>
                </li>
                <li className="flex items-center  hover:bg-black/10 p-1 cursor-pointer rounded-md space-x-2 mb-4">
                  <FiMessageSquare className="text-xl text-gray-400" />
                  <span className="text-md">Messages</span>
                  <span className="bg-blue  w-6 h-6 text-center rounded-full cursor-pointer translate-x-14">
                    6
                  </span>
                </li>
                <li className="flex items-center  hover:bg-black/10 p-1 cursor-pointer rounded-md space-x-2 mb-4">
                  <FiBell className=" text-xl text-gray-400" />
                  <span className="text-md ">Notifications</span>
                </li>
                <li className="flex items-center  hover:bg-black/10 p-1 cursor-pointer rounded-md space-x-2 mb-4">
                  <FiUser className="text-xl text-gray-400" />
                  <span className="text-md">Users</span>
                </li>
                <li className="flex items-center  hover:bg-black/10 p-1 cursor-pointer rounded-md space-x-2 mb-4">
                  <FiActivity className="text-xl text-gray-400" />
                  <span className="text-md">Events and Logs</span>
                </li>
                <li className="flex items-center  hover:bg-black/10 p-1 cursor-pointer rounded-md space-x-2 mb-4">
                  <FiLayers className="text-xl text-gray-400" />
                  <span className="text-md">Organizations</span>
                </li>
                <li className="flex items-center  hover:bg-black/10 p-1 cursor-pointer rounded-md space-x-2 mb-4">
                  <FiUsers className="text-xl text-gray-400" />
                  <span className="text-md">Teams</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SideBar;
