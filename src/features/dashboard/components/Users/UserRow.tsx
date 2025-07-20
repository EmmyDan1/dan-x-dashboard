import type { User } from "../../../../data/usersData";
import { StatusBadge } from "./StatusBadge";
import { ProgressBar } from "./ProgressBar";
import { AvatarGroup } from "./AvatarGroup";
import { FiEdit2 } from "react-icons/fi";

type UserRowProps = {
  user: User;
  onEdit: (id: number) => void;
};

export const UserRow = ({ user, onEdit }: UserRowProps) => {
  const {
    group,
    groupIcon: GroupIcon,
    subscription,
    status,
    avatars,
    overflowCount,
    title,
    subtitle,
    id,
  } = user;

  return (
    <tr className="hover:bg-white/5 transition">
     
      <td className="px-4 py-4 md:px-6 text-white">
        <div className="flex items-center gap-2">
          <div className="border border-white/15 bg-black/30 backdrop-blur-md shadow-inner p-2 rounded-full">
            <GroupIcon className="text-xl" />
          </div>
          <span className="whitespace-nowrap">{group}</span>
        </div>
      </td>

      {/* Subscription */}
      <td className="px-4 py-4 text-white">
        <div className="flex items-center gap-2">
          <ProgressBar value={subscription} />
          <span className="text-sm whitespace-nowrap">{subscription}%</span>
        </div>
      </td>

      {/* Status */}
      <td className="px-4 py-4">
        <StatusBadge label={status.label} color={status.color} />
      </td>

      {/* Avatars */}
      <td className="px-4 py-4">
        <AvatarGroup avatars={avatars} overflow={overflowCount} />
      </td>

      {/* Title & Subtitle */}
      <td className="px-4 py-4 text-white">
        <p className="font-medium whitespace-nowrap">{title}</p>
        <p className="text-sm text-gray-400 line-clamp-1">{subtitle}</p>
      </td>

      {/* Edit Button */}
      <td className="px-4 py-4 text-right">
        <button
          className="text-gray-400 hover:text-blue-400 transition"
          onClick={() => onEdit(id)}
          aria-label={`Edit user ${title}`}
        >
          <FiEdit2 />
        </button>
      </td>
    </tr>
  );
};
