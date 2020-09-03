import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="header__nav">
      <div className="nav__content">
        <h1 className="header__nav__title">
          Food<span className="header__nav__alttitle">Planner</span>
        </h1>
        <ul className="header__nav__list">
          <li className="header__nav__list_item">
            <NavLink to="/" activeClassName="active">
              Plan your diet!
            </NavLink>
          </li>
          <li className="header__nav__list_item">
            <NavLink to="/aaa" activeClassName="active">
              Why?
            </NavLink>
          </li>
          <li className="header__nav__list_item">
            <NavLink to="/aaa" activeClassName="active">
              About me!
            </NavLink>
          </li>
          <li className="header__nav__list_item">
            <NavLink to="/aaa" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
