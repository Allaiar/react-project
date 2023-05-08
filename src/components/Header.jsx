import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-wrapper">
          <h1 className="header-title">
            <strong>
              Hi, my name is <span>Yuria </span>
            </strong>
            <br />
            <span className="subtitle">a frontend developer</span>
          </h1>
          <p className="header-text">with passion for learning and creating.</p>
          <a href="#" className="header-btn">
            Download CV
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
