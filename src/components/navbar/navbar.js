import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = ({ user, clearUserHandler }) => {
  const [bool, setBool] = useState(false);

  return (
    <div className="nav-bar">
      <h1 className="logo">Instaclone</h1>
      <div className="action-btns">
        {user &&
          (!bool ? (
            <Link to="/profile">
              <button onClick={() => setBool(!bool)} className="nav-btn-pri">
                My Profile
              </button>
            </Link>
          ) : (
            <Link to="/home">
              <button onClick={() => setBool(!bool)} className="nav-btn-pri">
                Home
              </button>
            </Link>
          ))}
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
