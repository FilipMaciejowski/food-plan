import React from "react";
import { Link } from "react-router-dom";

const NavBarApp = () => {
  return (
    <div className="navbar__dashboard-container">
      <div className="navbar__dashboard-content">
        <Link to="/">
          <h1 className="navbar__title">
            Zaplanuj
            <span className="navbar__alttitle">Jedzonko</span>
          </h1>
        </Link>
        <div className="avatar__container">
          <span className="avatar__name">Name</span>
          <svg
            className="avatar__image"
            viewBox="0 0 385 385"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="192.5"
              cy="192.5"
              r="183.5"
              stroke="#FF6600"
              stroke-width="18"
            />
            <circle cx="192.499" cy="138.665" r="74.2267" fill="#FF6600" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M192.402 233.693C171.626 233.692 152.844 226.611 139.371 215.198C97.5125 197.446 57 292.327 57 317.109C57 353.536 146.548 368.347 192.402 369V233.693Z"
              fill="#FF6600"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M192.403 233.693C213.179 233.692 231.961 226.611 245.434 215.198C287.293 197.446 327.805 292.327 327.805 317.109C327.805 353.536 238.257 368.347 192.403 369V233.693Z"
              fill="#FF6600"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBarApp;
