import type { User } from "../data/usersData";

export type SideBarType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  userList: User[];
};
