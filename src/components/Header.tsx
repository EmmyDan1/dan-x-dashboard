import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Button from "./Button";
import { useSidebar } from "../hooks/useSidebar";
import { useAuth } from "../context/AuthContext";

type HeaderProps = {
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  setShowAddItemModal?: (open: boolean) => void;
  onAddUser: () => void;
};

const Header: React.FC<HeaderProps> = ({
  isEditing,
  setIsEditing,
  onAddUser,
}) => {
  const [activeBar, setActiveBar] = React.useState("Home");
  const { isOpen } = useSidebar();
  const { user } = useAuth();

  return (
    <section
      className={`w-full flex-col text-ivory p-6 flex justify-between items-center md:flex-row ${
        isOpen ? "md:pr-22" : "md:pl-12"
      } `}
    >
      <div className="md:w-2/3 w-full">
        <ul className="flex items-center space-x-2 md:space-x-2">
          <button
            id="home-button"
            className={activeBar === "Home" ? "text-blue" : "text-gray-400"}
            onClick={() => setActiveBar("Home")}
          >
            Home
            <FiChevronRight className="inline-block text-lg " />
          </button>
          <button
            id="settings-button"
            className={activeBar === "Settings" ? "text-blue" : "text-gray-400"}
            onClick={() => setActiveBar("Settings")}
          >
            Settings
            <FiChevronRight className="inline-block text-lg " />
          </button>
          <button
            id="general-button"
            className={activeBar === "General" ? "text-blue" : "text-gray-400"}
            onClick={() => setActiveBar("General")}
          >
            General
          </button>
        </ul>
        <h1 className="text-3xl font-semibold mt-4">
          Hey here, {user?.name || "Demo User"}
        </h1>
        <p className="text-gray-400 mt-2">
          Welcome to your dashboard. Here you can manage your settings and
          preferences.
        </p>
      </div>
      <div className=" md:w-1/3  flex justify-end mt-4 md:mt-0">
        <Button
          onClick={() => setIsEditing(!isEditing)}
          className="mr-2 px-4 py-2 bg-primary text-sm rounded-md "
        >
          {isEditing ? "Save Layout" : "Edit Section"}
        </Button>
        <Button
          onClick={onAddUser}
          className="px-4 py-2 bg-blue text-sm text-white rounded-md"
        >
          Add Item
        </Button>
      </div>
    </section>
  );
};

export default Header;
