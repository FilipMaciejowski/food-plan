import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBarApp from "./NavBarApp";
import SideBar from "./SideBar";
import Schedules from "./Schedules";
import Dashboard from "./Dashboard";
import Recipes from "./Recipes";

const MainView = () => {
  return (
    <div className="main__dashboard">
      <NavBarApp />
      <div className="main__dashboard-container">
        <SideBar />
        <div className="main__dashboard-content">
          <Switch>
            <Route path="/foodplan/dashboard" component={Dashboard} />
            <Route path="/foodplan/recipes" component={Recipes} />
            <Route path="/foodplan/schedules" component={Schedules} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MainView;
