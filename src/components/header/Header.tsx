import * as React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="mb-auto">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="float-md-start mb-0">D3nda</h3>
        <nav className="nav nav-head justify-content-center float-md-end">
          <a className="nav-link active" href="/#">
            Home
          </a>
          <a className="nav-link" href="/#">
            Projects
          </a>
          <a className="nav-link" href="/#">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
