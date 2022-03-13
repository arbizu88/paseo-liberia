import React from "react";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container my-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
              exact="true"
              to="/activities"
            >
              Actividades
            </NavLink>

            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
              exact="true"
              to="/contact"
            >
              Contáctenos
            </NavLink>

            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
              }
              exact="true"
              to="/profile"
            >
              Perfil
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
