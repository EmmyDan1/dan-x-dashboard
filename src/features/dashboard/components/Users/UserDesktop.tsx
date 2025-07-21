import React from "react";
import type { User } from "../../../../data/usersData";
import { iconMap } from "../../../../data/iconMap";
import { FiEdit2, FiSave, FiDelete, FiX } from "react-icons/fi";
import { ProgressBar } from "./ProgressBar";
import { AvatarGroup } from "./AvatarGroup";
import { StatusBadge } from "./StatusBadge";
import { FaRegBuilding } from "react-icons/fa";

type UserDesktopProps = {
  user: User;
  setUsers: (users: User[]) => void;
  editingId: number | null;
  editedData: Partial<User>;
  handleSave: (id: number) => void;
  handleCancel: () => void;
  handleChange: (
    field: keyof User,
    value: string | number | { label: string; color: string }
  ) => void;
  handleEditClick: (user: User) => void;
  handleDelete: (id: number) => void;
};

const UserDesktop: React.FC<UserDesktopProps> = ({
  user,
  editingId,
  editedData,
  handleSave,
  handleCancel,
  handleChange,
  handleEditClick,
  handleDelete,
}) => {
  const GroupIcon = iconMap[user.groupIcon];
  return (
    <tr key={user.id} className="hover:bg-white/5 transition">
      <td className="px-4 py-4 md:px-6 text-white">
        <div className="flex items-center gap-2">
          <div className="border border-white/15 bg-black/30 backdrop-blur-md shadow-inner p-2 rounded-full">
            {GroupIcon ? (
              <GroupIcon className="text-xl mx-auto" />
            ) : (
              <span className="text-xs text-red-400">
                {" "}
                <FaRegBuilding className="text-xl mx-auto" />{" "}
              </span>
            )}
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
          <StatusBadge label={user.status.label} color={user.status.color} />
        )}
      </td>

      <td className="px-4 py-4">
        <AvatarGroup avatars={user.avatars} overflow={user.overflowCount} />
      </td>

      <td className="px-4 py-4 text-white">
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
            <p className="font-medium whitespace-nowrap">{user.title}</p>
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
            <button
              onClick={() => handleDelete(user.id)}
              className="text-gray-400 hover:text-red-400 transition"
            >
              <FiDelete />
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
  );
};

export default UserDesktop;
