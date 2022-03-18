import "../profile/profile.css";
import { useState } from "react";
import { tokenizedFetch } from "../../utils";

export const DeleteUser = ({ user, clearUserHandler }) => {
  const [username, setUsername] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === user) {
      const data = await tokenizedFetch(`user/${user}`, null, "DELETE");

      if (data.err) {
        setDeleteSuccess(data.err);
      } else {
        clearUserHandler();
      }
    } else {
      setDeleteSuccess("Username does not match!");
    }
  };

  return (
    <div className="profile-form">
      <form onSubmit={handleSubmit}>
        <h3>DELETE USER - Cannot be undone!</h3>
        <div className="profile-inputs">
          <input
            placeholder="username"
            type="text"
            name="username"
            maxlength="15"
            value={username && username.toLowerCase()}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="form-submit" type="submit">
            Delete User
          </button>
        </div>
      </form>
      <h3>{deleteSuccess}</h3>
    </div>
  );
};
