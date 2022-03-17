import "./login.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { fetchRequest, tokenizedFetch } from "../../utils";

export const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [bool, setBool] = useState(true);
  const [actionSuccess, setActionSuccess] = useState();
  const [passwordShown, setPasswordShown] = useState(false);

  const tokenFetch = async () => {
    const data = await tokenizedFetch("user", null, "GET");
    setUser(data.user);
  };

  useEffect(() => {
    if (localStorage.key("m34Token")) {
      tokenFetch();
      //tokenLogin(setUser);
    }
  }, [setUser]);

  const submitHandler = async (e) => {
    e.preventDefault();
    let payload;
    let endpoint;
    if (bool && username && password) {
      //Manual Login User

      payload = { username: username, password: password };

      endpoint = "login";
    } else if (username && email && password && email.includes("@")) {
      // Create New User

      payload = { username: username, email: email, password: password };

      endpoint = "user";
    } else {
      setActionSuccess("Required fields are missing");
      return;
    }

    const data = await fetchRequest(endpoint, payload, "POST");

    if (data.err) {
      setActionSuccess(data.err);
    } else {
      setActionSuccess("User registered successfully");
      setUser(data.user);
      localStorage.setItem("m34Token", data.token);
    }
  };

  return (
    <div className="login-form">
      {user && <Navigate to="/home" />}
      {bool ? <h3>Please Login</h3> : <h3>Please Sign Up</h3>}
      <form onSubmit={submitHandler}>
        <div className="login-inputs">
          <input
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
          {!bool && (
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          )}
          <div className="password">
            <input
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              autoComplete="off"
              type={passwordShown ? "text" : "password"}
            />
            {passwordShown ? (
              <i
                onClick={() => setPasswordShown(!passwordShown)}
                className="fas fa-eye-slash"
              ></i>
            ) : (
              <i
                onClick={() => setPasswordShown(!passwordShown)}
                className="fas fa-eye"
              ></i>
            )}
          </div>
          {bool ? (
            <button className="form-submit" type="submit">
              Login
            </button>
          ) : (
            <button className="form-submit" type="submit">
              Sign Up
            </button>
          )}
        </div>
      </form>
      {bool ? (
        <button onClick={() => setBool(!bool)}>Need to sign up?</button>
      ) : (
        <button onClick={() => setBool(!bool)}>Need to log in?</button>
      )}
      <h3 className="action-success">{actionSuccess}</h3>
    </div>
  );
};
