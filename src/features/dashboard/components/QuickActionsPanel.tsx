
import { FiTrash2 } from "react-icons/fi";
import type { Action } from "../../../data/Actions";
import toast from "react-hot-toast";
interface QuickActionsPanelProps {
  editMode: boolean;
  setIsEditing: (editing: boolean) => void;
  actions: Action[];
  setActions: React.Dispatch<React.SetStateAction<Action[]>>;
}

const QuickActionsPanel: React.FC<QuickActionsPanelProps> = ({
  editMode,
  actions,
  setActions,
}) => {
  const deleteSection = (id: number) => {
    setActions((prev) => prev.filter((action) => action.id !== id));
    toast.success("Section deleted!", {
      icon: "🗑️",
      style: {
        borderRadius: "8px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="mt-4">
      {actions.map((action) => (
        <div
          key={action.id}
          className="relative flex items-center justify-around gap-4 bg-primary p-4 rounded-lg 
           hover:shadow-lg transition-shadow duration-300 mb-4 border border-white/20 bg-white/5 backdrop-blur-md shadow-inner cursor-pointer"
        >
          <div className="bg-primary p-2 border border-white/20 bg-white/5 backdrop-blur-md shadow-inner rounded-md">
            <action.icon className="text-white text-2xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{action.title}</h3>
            <p className="text-sm text-gray-500">{action.text}</p>
          </div>
          <div>
            <action.icon2 className="text-gray-500 text-lg" />
          </div>

          {editMode && (
            <button
              onClick={() => deleteSection(action.id)}
              className="absolute top-2 right-2 text-ivory hover:text-red-600"
            >
              <FiTrash2 />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuickActionsPanel;
