
import {
  FaRegBuilding,
  FaRocket,
  FaUserFriends,
  FaCity,
  FaIndustry,
} from "react-icons/fa";
import { MdAddModerator, MdAccountTree } from "react-icons/md";

export const iconMap: Record<string, React.ElementType> = {
  FaRegBuilding,
  FaRocket,
  FaUserFriends,
  FaCity,
  FaIndustry,
  MdAddModerator,
  MdAccountTree,
};

export default iconMap;

export interface User {
  id: number;
  group: string;
  groupIcon: string;
  subscription: number;
  status: {
    label: string;
    color: string;
  };
  avatars: string[];
  overflowCount: number;
  title: string;
  subtitle: string;
}

export const users: User[] = [
  {
    id: 1,
    group: "Grand Rapids",
    groupIcon: "FaRegBuilding",
    subscription: 75,
    status: { label: "intuitive", color: "bg-orange-500" },
    avatars: [
      "/avatars/avatar1.png",
      "/avatars/avatar2.png",
      "/avatars/avatar3.png",
    ],
    overflowCount: 3,
    title: "Technician",
    subtitle: "Coordinator",
  },
  {
    id: 2,
    group: "Bell Gardens",
    groupIcon: "FaCity",
    subscription: 50,
    status: { label: "magnetic", color: "bg-blue" },
    avatars: [
      "/avatars/avatar4.png",
      "/avatars/avatar5.png",
      "/avatars/avatar6.png",
    ],
    overflowCount: 8,
    title: "Representative",
    subtitle: "Facilitator",
  },
  {
    id: 3,
    group: "San Diego",
    groupIcon: "FaIndustry",
    subscription: 100,
    status: { label: "dynamic", color: "bg-green" },
    avatars: [
        "/avatars/avatar1.png",
      "/avatars/avatar2.png",
      "/avatars/avatar3.png",
    ],
    overflowCount: 5,
    title: "Manager",
    subtitle: "Supervisor",
  },
  {
    id: 4,
    group: "Los Angeles",
    groupIcon: "FaRocket",
    subscription: 40,
    status: { label: "innovative", color: "bg-purple-500" },
    avatars: [
      "/avatars/avatar4.png",
      "/avatars/avatar5.png",
      "/avatars/avatar6.png",
    ],
    overflowCount: 2,
    title: "Director",
    subtitle: "Leader",
  },
  {
    id: 5,
    group: "New York",
    groupIcon: "FaUserFriends",
    subscription: 90,
    status: { label: "collaborative", color: "bg-yellow" },
    avatars: [
        "/avatars/avatar1.png",
      "/avatars/avatar2.png",
      "/avatars/avatar3.png",
    ],
    overflowCount: 4,
    title: "Executive",
    subtitle: "Strategist",
  },
  {
    id: 6,
    group: "Chicago",
    groupIcon: "MdAddModerator",
    subscription: 60,
    status: { label: "supportive", color: "bg-pink-500" },
    avatars: [
      "/avatars/avatar4.png",
      "/avatars/avatar5.png",
      "/avatars/avatar6.png",
    ],
    overflowCount: 1,
    title: "Analyst",
    subtitle: "Advisor",
  },
  {
    id: 7,
    group: "Houston",
    groupIcon: "MdAccountTree",
    subscription: 80,
    status: { label: "dynamic", color: "bg-blue" },
    avatars: [
      "/avatars/avatar1.png",
      "/avatars/avatar2.png",
      "/avatars/avatar3.png",
    ],
    overflowCount: 6,
    title: "Coordinator",
    subtitle: "Facilitator",
  },
];
