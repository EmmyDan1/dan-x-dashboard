import React, { useState } from "react";
import SideBar from "./SideBar";
import Header from "../components/Header";
import Dashboard from "../features/dashboard/components/Dashboard";
import { useSidebar } from "../hooks/useSidebar";
import AddItemModal from "../features/dashboard/components/modals/AddItemModal";
import { users as initialUsers } from "../data/usersData";
import type { User } from "../data/usersData";

const AppLayout = () => {
  const { isOpen: sidebarOpen, toggleSidebar } = useSidebar();
  const [isEditingQuickActions, setIsEditingQuickActions] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [userList, setUserList] = useState<User[]>(initialUsers);



  return (
    <div className="flex h-screen bg-secondary w-full max-w-full">
      <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`
            flex-1 flex flex-col transition-all duration-300
            ${sidebarOpen ? "md:ml-[3rem]" : "md:ml-0"}
          `}
      >
        <Header
          isEditing={isEditingQuickActions}
          setIsEditing={setIsEditingQuickActions}
          setShowAddItemModal={setShowAddItemModal}
          onAddUser={() => setShowAddItemModal(true)}
        />
        <main className="flex-1 overflow-y-auto p-4">
          <Dashboard
            isEditing={isEditingQuickActions}
            setIsEditing={setIsEditingQuickActions}
            userList={userList}
            setUserList={setUserList}
            openItemModal={() => setShowAddItemModal(true)}
          />
        </main>
      </div>
      {showAddItemModal && (
        <AddItemModal
          isOpen={showAddItemModal}
          onClose={() => setShowAddItemModal(false)}
          onSave={(newUser ) => {
            setUserList([newUser, ...userList]);
            setShowAddItemModal(false);
          }}
        />
      )}
    </div>
  );
};

export default AppLayout;
