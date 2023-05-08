import React from "react";
import BtnDarkMode from '../components/BtnDarkMode/BtnDarkMode';
import { Route, NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong> Freelancer </strong> portfolio
            </NavLink>
            <BtnDarkMode/>
            <ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/Projects"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Projects
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/Skills"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Skills
							</NavLink>
						</li>
            <li className="nav-list__item">
							<NavLink
								to="/Contacts"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Contacts
							</NavLink>
						</li>
					</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
