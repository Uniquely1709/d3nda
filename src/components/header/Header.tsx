import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const getClass = (id: string) => {
    if (location.pathname === id) {
      return "nav-link active";
    } else return "nav-link";
  };

  return (
    <header className="mb-auto">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="float-md-start mb-0">D3nda</h3>
        <nav className="nav nav-head justify-content-center float-md-end">
          <Link className={getClass("/")} to={"/"}>
            Home
          </Link>
          <Link className={getClass("/projects")} to={"projects"}>
            Projects
          </Link>
          <Link className={getClass("/contact")} to={"contact"}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
