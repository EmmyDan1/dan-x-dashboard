import React, { useState } from "react";
import type { User } from "../../../../data/usersData";



const statusColors: Record<string, string> = {
  intuitive: "bg-orange-500",
  magnetic: "bg-blue",
  dynamic: "bg-purple-500",
  innovative: "bg-green",
  collaborative: "bg-pink-500",
  supportive: "bg-yellow-500",
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
};

 const AddUserModal: React.FC<Props> = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState({
    group: "",
    subscription: 0,
    status: "intuitive",
    title: "",
    subtitle: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {

    if (
      !form.group ||
      form.subscription <= 0 ||
      !form.title ||
      !form.subtitle
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      group: form.group,
      groupIcon: "FaRegBuilding",
      subscription: Number(form.subscription),
      status: {
        label: form.status,
        color: statusColors[form.status],
      },
      avatars: [
        "/avatars/avatar1.png",
        "/avatars/avatar2.png",
        "/avatars/avatar3.png",
      ],
      overflowCount: 4,
      title: form.title,
      subtitle: form.subtitle,
    };

    onSave(newUser);
  };



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-black text-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Group</h2>
        <input
          value={form.group}
          onChange={(e) => handleChange("group", e.target.value)}
          placeholder="Group"
          className=" text-gray-400 w-full p-2 mb-2 border border-white/5 bg-white/5 backdrop-blur-md shadow-inner "
        />
        <input
          type="number"
          value={form.subscription}
          onChange={(e) => handleChange("subscription", e.target.value)}
          placeholder="Subscription %"
          className="text-gray-400  w-full p-2 mb-2 border border-white/5 bg-white/5 backdrop-blur-md shadow-inner"
        />
        <select
          value={form.status}
          onChange={(e) => handleChange("status", e.target.value)}
          className="text-gray-400 w-full p-2 mb-2 border border-white/5 bg-white/5 backdrop-blur-md shadow-inner"
        >
          {Object.keys(statusColors).map((status) => (
            <option
              key={status}
              value={status}
              className="border border-white/5 bg-black backdrop-blur-md shadow-inner "
            >
              {status}
            </option>
          ))}
        </select>
        <input
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Title"
          className=" w-full p-2 mb-2 border border-white/5 bg-white/5 backdrop-blur-md shadow-inner"
        />
        <input
          value={form.subtitle}
          onChange={(e) => handleChange("subtitle", e.target.value)}
          placeholder="Subtitle"
          className=" w-full p-2 mb-2 border border-white/5 bg-white/5 backdrop-blur-md shadow-inner"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-gray-500">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
