import "./login.css";
import { useState } from "react";
import { createUser, login } from "../../utils";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [bool, setBool] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (bool) {
      login(username, password, setUser);
    } else if (email && email.includes("@")) {
      //setUser({ username: username, email: email, password: password });
      createUser(username, email, password, setUser);
    }
  };

  return (
    <div className="login-form">
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
          <button className="form-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      {bool ? (
        <button onClick={() => setBool(!bool)}>Need to sign up?</button>
      ) : (
        <button onClick={() => setBool(!bool)}>Need to log in?</button>
      )}
    </div>
  );
};
