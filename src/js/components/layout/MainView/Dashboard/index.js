import React from "react";
import { useSelector } from "react-redux";

import UserFirstEntry from "./UserFirstEntry";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  const userName = useSelector(state => state.user);

  return (
    <div>{userName === "" ? <UserFirstEntry /> : <DashboardContent />}</div>
  );
};

export default Dashboard;
