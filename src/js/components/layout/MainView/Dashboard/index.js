import React from 'react';
import UserFirstEntry from './UserFirstEntry';
import DashboardContent from "./DashboardContent";



const Dashboard = () =>{
const userName= "ggg"; 
if(userName === ""){
  return <UserFirstEntry />
}

  return(
    <>
      <DashboardContent />
    </>
  );
};


export default Dashboard;