import React, { useEffect } from "react";

import WidgetsAdd from "./WidgetsAdd";
import Notifications from "./Notifications";
import ScheduleOverview from "./ScheduleOverview";
import { getSchedules } from "../../../../../../redux/actions/schedules";
import { useDispatch, useSelector } from "react-redux";

const DashboardContent = () => {
  const schedules = useSelector(state => state.schedules.schedules);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSchedules());
  }, []);

  return (
    <>
    
      <div className="dashboard__content-top">
        <Notifications />
        <WidgetsAdd />
      </div>
      <div className="dashboard__content-bottom">
        <ScheduleOverview
          schedules={schedules}
        />
      </div>
    </>
  );
};

export default DashboardContent;