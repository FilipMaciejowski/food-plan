import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="header__nav">
      <div className="nav__content">
        <h1 className="header__nav__title">
          Zaplanuj <span className="header__nav__alttitle">Jedzonko</span>
        </h1>
        <ul className="header__nav__list">
          <li className="header__nav__list_item">
            <NavLink to="/" activeClassName="active">
              Zaplanuj posiłki!
            </NavLink>
          </li>
          <li className="header__nav__list_item">
            <NavLink to="/aaa" activeClassName="active">
              Dlaczego Warto?
            </NavLink>
          </li>
          <li className="header__nav__list_item">
            <NavLink to="/aaa" activeClassName="active">
              O mnie
            </NavLink>
          </li>
          <li className="header__nav__list_item">
            <NavLink to="/aaa" activeClassName="active">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
