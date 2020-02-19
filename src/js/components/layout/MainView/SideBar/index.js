import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav className="sidebar__nav-container">
      <ul className="sidebar-content">
        <li className="sidebar__item">
          <NavLink to="/foodplan/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/foodplan/recipes" activeClassName="active">
            Recipes
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/foodplan/schedules" activeClassName="active">
            Schedules
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};


export default SideBar;


