import MetricCard from "./MetricCard";
import QuickActionsPanel from "./QuickActionsPanel";
import RevenueLineChart from "./Charts/RevenueLineChart";
import { UserTable } from "./Users/UserTable";
import type { User } from "../../../data/usersData";
import { useState } from "react";
import { ActionsData } from "../../../data/Actions";

type DashboardProps = {
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  userList: User[];
  setUserList: (users: User[]) => void;
  openItemModal: () => void;
};

const Dashboard: React.FC<DashboardProps> = ({
  isEditing,
  setIsEditing,
  userList,
  setUserList,
}) => {
  const [actions, setActions] = useState(ActionsData);
  return (
    <section className="p-4 w-full md:p-6 min-h-screen">
      <MetricCard />

      <div className="flex flex-col xl:flex-row gap-4 md:gap-6 w-full mt-4 md:mt-6">
        <div className="w-full xl:max-w-[350px]">
          <QuickActionsPanel
            editMode={isEditing}
            setIsEditing={setIsEditing}
            actions={actions}
            setActions={setActions}
          />
        </div>

        <div className="flex-1 min-w-0 ">
          <RevenueLineChart />
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto w-full">
          <UserTable users={userList} setUsers={setUserList} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
