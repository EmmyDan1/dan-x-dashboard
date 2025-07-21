import React, { useState } from "react";
import { FiArrowDown } from "react-icons/fi";

import type { User } from "../../../../data/usersData";
import UserMobile from "./UserMobile";
import UserDesktop from "./UserDesktop";

type UserTableProps = {
  users: User[];
  setUsers: (users: User[]) => void;
};

const UserTable: React.FC<UserTableProps> = ({ users, setUsers }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<Partial<User>>({});

  const handleEditClick = (user: User) => {
    console.log(`[DEBUG] Starting edit for row ${user.id}`);

    setEditingId(null);
    setEditedData({});

    const timer = setTimeout(() => {
      console.log(`[DEBUG] Applying edit state for row ${user.id}`);
      setEditingId(user.id);
      setEditedData({
        group: user.group,
        subscription: user.subscription,
        status: user.status,
        title: user.title,
        subtitle: user.subtitle,
      });
    }, 10);

    return () => clearTimeout(timer);
  };

  const handleSave = (id: number) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...editedData } : user))
    );
    setEditingId(null);
    alert(`Changes saved for user ${id}`);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleChange = (
    field: keyof User,
    value: string | number | { label: string; color: string }
  ) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  function handleDelete(id: number) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="mt-6 bg-primary text-gray-400 rounded-xl shadow-lg border border-white/10 overflow-hidden">
      <div className="md:hidden p-4 space-y-4">
        {users.map((user) => (
          <UserMobile
            key={user.id}
            user={user}
            editingId={editingId}
            editedData={editedData}
            handleSave={handleSave}
            handleCancel={handleCancel}
            handleChange={handleChange}
            handleEditClick={handleEditClick}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="hidden md:block">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-sm editable-table">
            <thead className="text-left border-b border-white/10">
              <tr>
                <th className="px-4 py-3 md:px-6 min-w-[150px]">
                  <div className="flex items-center">
                    Group
                    <FiArrowDown className="text-gray-400 ml-1" />
                  </div>
                </th>
                <th className="px-4 py-3 whitespace-nowrap min-w-[180px]">
                  Subscription
                </th>
                <th className="px-4 py-3 min-w-[120px]">Status</th>
                <th className="px-4 py-3 min-w-[120px]">Users</th>
                <th className="px-4 py-3 min-w-[160px]">Info</th>
                <th className="px-4 py-3 text-right min-w-[80px]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {users.map((user) => (
                <UserDesktop
                  key={user.id}
                  user={user}
                  setUsers={setUsers}
                  editingId={editingId}
                  editedData={editedData}
                  handleSave={handleSave}
                  handleCancel={handleCancel}
                  handleChange={handleChange}
                  handleEditClick={handleEditClick}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 p-4 text-sm text-gray-400 border-t border-white/10">
        <span>Page 1 of 8</span>
        <button className="text-blue-400 hover:underline">Next</button>
      </div>
    </div>
  );
};
export default UserTable;
