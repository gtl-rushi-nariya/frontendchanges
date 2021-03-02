import React from "react";
import { Route, NavLink } from "react-router-dom";

function HeaderDashboard() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a class="sidebar-brand d-flex align-items-center justify-content-center">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-horse-head"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Horsella</div>
      </a>

      <hr class="sidebar-divider my-0" />

      

      <hr class="sidebar-divider my-0" />

      <li className="nav-item">
        <NavLink to="/dashboard/register" className="nav-link Navlink" exact>
        <i class="fab fa-wpforms"></i>
          <span>Registration</span>
        </NavLink>
      </li>

      <hr class="sidebar-divider my-0" />

      <li className="nav-item">
        <NavLink to="/dashboard/news" className="nav-link Navlink" exact>
        <i class="fas fa-rss-square"></i>
          <span>News</span>
        </NavLink>
      </li>

      <hr class="sidebar-divider my-0" />

      <li className="nav-item">
        <NavLink to="/dashboard/training" className="nav-link Navlink" exact>
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Training</span>
        </NavLink>
      </li>

      <hr class="sidebar-divider my-0" />

      <li className="nav-item">
        <NavLink to="/dashboard/breeding" className="nav-link Navlink" exact>
        <i class="fas fa-warehouse"></i>
          <span>Breeding</span>
        </NavLink>
      </li>

      <hr class="sidebar-divider my-0" />

      <li className="nav-item">
        <NavLink to="/dashboard/races" className="nav-link Navlink" exact>
        <i class="fas fa-flag-checkered"></i>
          <span>Races</span>
        </NavLink>
      </li>

      <hr class="sidebar-divider my-0" />

      <li className="nav-item">
        <NavLink to="/logout" className="nav-link Navlink" exact>
        <i class="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </NavLink>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />

      <div class="text-center d-none d-md-inline">
        <button class="fas fa-circle-left border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default HeaderDashboard;
