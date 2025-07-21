import React from "react";
import type { User } from "../../../../data/usersData";
import { iconMap } from "../../../../data/iconMap";
import { FiEdit2, FiSave, FiDelete, FiX } from "react-icons/fi";
import { ProgressBar } from "./ProgressBar";
import { AvatarGroup } from "./AvatarGroup";
import { StatusBadge } from "./StatusBadge";
import { FaRegBuilding } from "react-icons/fa";

type UserMobileProps = {
  user: User;
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

const UserMobile: React.FC<UserMobileProps> = ({
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
    <div
      key={user.id}
      className="p-4 bg-white/5 rounded-lg border border-white/10"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col gap-2">
          <div className="border w-12  border-white/15 bg-black/30 backdrop-blur-md shadow-inner p-2 rounded-full md:w-0">
            {GroupIcon ? (
              <GroupIcon className="text-xl mx-auto" />
            ) : (
              <span className="text-xs text-red-400"> <FaRegBuilding /> </span>
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
            <button
              onClick={() => handleDelete(user.id)}
              className="text-gray-400 hover:text-red-400"
            >
              <FiDelete />
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
            <StatusBadge label={user.status.label} color={user.status.color} />
          )}
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-1">Users</p>
          <AvatarGroup avatars={user.avatars} overflow={user.overflowCount} />
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
  );
};

export default UserMobile;
