import React from 'react';
import UserFirstEntry from './UserFirstEntry';
import DashboardContent from "./DashboardContent";



const Dashboard = () =>{

const userName= "fff"; 

if(userName === ""){
  return <UserFirstEntry />
}

  return(
    <div>
      <DashboardContent />
    </div>
  );
};


export default Dashboard;