import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("token");
    navigate('/login');
  }
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mynotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/name"? "active": ""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about"?"active": ""}`} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/contact"?"active": ""}`} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token")?<form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">login</Link>
            <Link className="btn btn-primary mx-1" to="/Signup" role="button">SignUp</Link>
            </form>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;