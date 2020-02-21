import React from 'react';
import WidgetsAdd from './WidgetsAdd';
import Notifications from './Notifications';


const DashboardContent = () => {
  return (
    <div className="dashboard__content-top">
      <Notifications />
      <WidgetsAdd />
    </div>

  );
};


export default DashboardContent;