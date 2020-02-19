import React from "react";

const NavBarApp = () => {
  return (
    <div className="navbar__dashboard-container">
      <div className="navbar__dashboard-content">
        <h1 className="navbar__title">
          Zaplanuj <span className="header__nav__alttitle">Jedzonko</span>
        </h1>
        <div className="avatar__container">
          <span className="avatar__name">Name</span>
         <svg
            version="1.2"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            className="avatar__image"
            style={{
              width: "50px",
              height: "50px"
            }}
          >
            <defs />
            <circle cx="236" cy="236" r="224" stroke="#F60" stroke-width="24" />
            <circle cx="236" cy="170" r="91" fill="#F60" />
            <path
              fill="#F60"
              fill-rule="evenodd"
              d="M236 269.696c-25.471 0-48.497-9.479-65.015-24.755C119.667 221.182 70 348.177 70 381.346c0 48.757 109.785 68.581 166 69.455V269.696zM236 269.696c25.471 0 48.497-9.479 65.015-24.755C352.333 221.182 402 348.177 402 381.346c0 48.757-109.785 68.581-166 69.455V269.696z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBarApp;
