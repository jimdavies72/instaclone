import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/login.js";
import { Home } from "./components/home/home.js";
import { Profile } from "./components/profile/profile.js";
import { Navbar } from "./components/navbar/navbar.js";

const App = () => {
  const [user, setUser] = useState();

  const clearUserHandler = () => {
    setUser(null);
    localStorage.removeItem("m34Token");
  };

  return (
    <div className="app-container">
      <Navbar clearUserHandler={clearUserHandler} user={user} />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} user={user} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              setUser={setUser}
              clearUserHandler={clearUserHandler}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
