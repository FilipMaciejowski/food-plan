import React from "react";

import WidgetsAdd from "./WidgetsAdd";
import Notifications from "./Notifications";
import ScheduleOverview from "./ScheduleOverview";

const DashboardContent = () => {
  return (
    <div className="dashboard__content-top">
      <Notifications />
      <WidgetsAdd />
      <ScheduleOverview />
    </div>
  );
};

export default DashboardContent;
