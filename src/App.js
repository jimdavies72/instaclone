import "./App.css";
import { useState } from "react";
import { Login } from "./components/login/login.js";
import { Home } from "./components/home/home.js";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="app-container">
      {user && <h1>{user}</h1>}
      {user ? <h1>{user}</h1> : <h2>Please Login</h2>}

      {!user ? <Login setUser={setUser} /> : <Home />}
    </div>
  );
};

export default App;
