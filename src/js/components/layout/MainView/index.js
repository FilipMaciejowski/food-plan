import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBarApp from "./NavBarApp";
import SideBar from "./SideBar";
import Schedules from "./Schedules";
import Dashboard from "./Dashboard";
import Recipes from "./Recipes";
import AddRecipe from "./Dashboard/AddRecipe";

const MainView = () => {
  return (
    <div className="main__dashboard">
      <NavBarApp />
      <div className="main__dashboard-container">
        <SideBar />
        <div className="main__dashboard-content">
          <Switch>
            <Route exact path="/foodplan/dashboard" component={Dashboard} />
            <Route exact path="/foodplan/recipes" component={Recipes} />
            <Route exact path="/foodplan/recipes/add" component={AddRecipe} />
            <Route exact path="/foodplan/schedules" component={Schedules} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MainView;
