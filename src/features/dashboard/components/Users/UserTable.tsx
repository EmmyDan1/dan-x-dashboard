import { useState } from "react";
import { FiArrowDown, FiEdit2, FiSave, FiX } from "react-icons/fi";

import { ProgressBar } from "./ProgressBar";
import { StatusBadge } from "./StatusBadge";
import { AvatarGroup } from "./AvatarGroup";
import type { User } from "../../../../data/usersData";

type UserTableProps = {
  users: User[];
  setUsers: (users: User[]) => void;
};

export const UserTable: React.FC<UserTableProps> = ({ users, setUsers }) => {
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

  return (
    <div className="mt-6 bg-primary text-gray-400 rounded-xl shadow-lg border border-white/10 overflow-hidden">
      <div className="md:hidden p-4 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-white/5 rounded-lg border border-white/10"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex flex-col gap-2">
                <div className="border w-12  border-white/15 bg-black/30 backdrop-blur-md shadow-inner p-2 rounded-full md:w-0">
                  <user.groupIcon className="text-xl mx-auto " />
                </div>
                {editingId === user.id ? (
                  <input
                    value={editedData.group || ""}
                    onChange={(e) => handleChange("group", e.target.value)}
                    className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white"
                  />
                ) : (
                  <div>
                    <p className="text-white font-medium">{user.group}</p>
                    <p className="text-sm text-gray-400">{user.title}</p>
                  </div>
                )}
              </div>

              {editingId === user.id ? (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleCancel()}
                    className="text-gray-400 hover:text-red-400"
                  >
                    <FiX />
                  </button>
                  <button
                    onClick={() => handleSave(user.id)}
                    className="text-gray-400 hover:text-green-400"
                  >
                    <FiSave />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleEditClick(user)}
                  className="text-gray-400 hover:text-blue-400"
                >
                  <FiEdit2 />
                </button>
              )}
            </div>
            <div className="mb-3">
              <p className="text-sm text-gray-400 mb-1">Subscription</p>
              {editingId === user.id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={editedData.subscription || 0}
                    onChange={(e) =>
                      handleChange("subscription", Number(e.target.value))
                    }
                    className="bg-white/10 border border-white/20 rounded px-2 py-1 w-16 text-white"
                  />
                  <span>%</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <ProgressBar value={user.subscription} />
                  <span className="text-sm whitespace-nowrap">
                    {user.subscription}%
                  </span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Status</p>
                {editingId === user.id ? (
                  <select
                    value={editedData.status?.label || ""}
                    onChange={(e) =>
                      handleChange("status", {
                        ...user.status,
                        label: e.target.value,
                      })
                    }
                    className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white w-full"
                  >
                    <option value="intuitive">intuitive</option>
                    <option value="magnetic">magnetic</option>
                    <option value="dynamic">dynamic</option>
                    <option value="innovative">innovative</option>
                    <option value="collaborative">collaborative</option>
                    <option value="supportive">supportive</option>
                  </select>
                ) : (
                  <StatusBadge
                    label={user.status.label}
                    color={user.status.color}
                  />
                )}
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Users</p>
                <AvatarGroup
                  avatars={user.avatars}
                  overflow={user.overflowCount}
                />
              </div>
            </div>
            <div className="mt-3">
              {editingId === user.id ? (
                <>
                  <input
                    value={editedData.title || ""}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full mb-2 text-white"
                  />
                  <textarea
                    value={editedData.subtitle || ""}
                    onChange={(e) => handleChange("subtitle", e.target.value)}
                    className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full text-sm text-white"
                    rows={2}
                  />
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {user.subtitle}
                  </p>
                </>
              )}
            </div>
          </div>
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
                <tr key={user.id} className="hover:bg-white/5 transition">
                  <td className="px-4 py-4 md:px-6 text-white">
                    <div className="flex items-center gap-2">
                      <div className="border border-white/15 bg-black/30 backdrop-blur-md shadow-inner p-2 rounded-full">
                        <user.groupIcon className="text-xl" />
                      </div>
                      {editingId === user.id ? (
                        <input
                          value={editedData.group || ""}
                          onChange={(e) =>
                            handleChange("group", e.target.value)
                          }
                          className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white"
                        />
                      ) : (
                        <div>
                          <p className="text-white font-medium">{user.group}</p>
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="px-4 py-4 text-white">
                    {editingId === user.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={editedData.subscription || 0}
                          onChange={(e) =>
                            handleChange("subscription", Number(e.target.value))
                          }
                          className="bg-white/10 border border-white/20 rounded px-2 py-1 w-16 text-white"
                        />
                        <span>%</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <ProgressBar value={user.subscription} />
                        <span className="text-sm whitespace-nowrap">
                          {user.subscription}%
                        </span>
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-4">
                    {editingId === user.id ? (
                      <select
                        value={editedData.status?.label || ""}
                        onChange={(e) =>
                          handleChange("status", {
                            ...user.status,
                            label: e.target.value,
                          })
                        }
                        className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white"
                      >
                        <option value="intuitive">intuitive</option>
                        <option value="magnetic">magnetic</option>
                        <option value="dynamic">dynamic</option>
                        <option value="innovative">innovative</option>
                        <option value="collaborative">collaborative</option>
                        <option value="supportive">supportive</option>
                      </select>
                    ) : (
                      <StatusBadge
                        label={user.status.label}
                        color={user.status.color}
                      />
                    )}
                  </td>

                  
                  <td className="px-4 py-4">
                    <AvatarGroup
                      avatars={user.avatars}
                      overflow={user.overflowCount}
                    />
                  </td>

                 
                  <td className="px-4 py-4 text-white">
                    {editingId === user.id ? (
                      <>
                        <input
                          value={editedData.title || ""}
                          onChange={(e) =>
                            handleChange("title", e.target.value)
                          }
                          className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full mb-2 text-white"
                        />
                        <textarea
                          value={editedData.subtitle || ""}
                          onChange={(e) =>
                            handleChange("subtitle", e.target.value)
                          }
                          className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full text-sm text-white"
                          rows={2}
                        />
                      </>
                    ) : (
                      <>
                        <p className="font-medium whitespace-nowrap">
                          {user.title}
                        </p>
                        <p className="text-sm text-gray-400 line-clamp-1">
                          {user.subtitle}
                        </p>
                      </>
                    )}
                  </td>

                  
                  <td className="px-4 py-4 text-right">
                    {editingId === user.id ? (
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={handleCancel}
                          className="text-gray-400 hover:text-red-400 transition"
                        >
                          <FiX />
                        </button>
                        <button
                          onClick={() => handleSave(user.id)}
                          className="text-gray-400 hover:text-green-400 transition"
                        >
                          <FiSave />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEditClick(user)}
                        className="text-gray-400 hover:text-blue-400 transition"
                      >
                        <FiEdit2 />
                      </button>
                    )}
                  </td>
                </tr>
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
