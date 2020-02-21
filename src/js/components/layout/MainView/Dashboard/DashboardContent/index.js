import React from "react";

import WidgetsAdd from "./WidgetsAdd";
import Notifications from "./Notifications";
import ScheduleOverview from "./ScheduleOverview";

const DashboardContent = () => {
  return (
    <div className="dashboard__content-top">
      <Notifications />
      <WidgetsAdd />
      <div className="dashboard__content-bottom">
        <ScheduleOverview />
      </div>
    </div>
  );
};

export default DashboardContent;
