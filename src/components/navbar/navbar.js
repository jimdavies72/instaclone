import "./navbar.css";

import { Link } from "react-router-dom";

export const Navbar = ({ user, clearUserHandler }) => {
  return (
    <div className="nav-bar">
      <h1 className="logo">Instaclone</h1>
      <div className="action-btns">
        {user && (
          <Link to="/profile">
            <button className="nav-btn-pri">My Profile</button>
          </Link>
        )}
        {user && (
          <Link to="/">
            <button className="nav-btn-pri" onClick={() => clearUserHandler()}>
              LOGOUT
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
