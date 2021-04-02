import React from "react";
import { Link } from "react-router-dom";
import { routesPages } from "../../routesPages";
import { Logo } from "../atoms/Logo";

export const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
       <Logo/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {routesPages.map((route, i) => (
            <Link key={i} activeclassname="active" className="nav-link" to={route.path}>
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </nav>
);
