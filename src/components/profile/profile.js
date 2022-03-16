import "./profile.css";
import { Navigate } from "react-router-dom";

import { UpdateProfile } from "../updateProfile/updateProfile";
import { UpdatePassword } from "../updatePassword/updatePassword";
import { DeleteUser } from "../deleteUser/deleteUser";

export const Profile = ({ user, setUser, clearUserHandler }) => {
  return (
    <div className="profile-page">
      {!user && <Navigate to="/" />}

      <h2>{user}'s Profile Page</h2>

      <UpdateProfile user={user} setUser={setUser} />
      <UpdatePassword user={user} setUser={setUser} />
      <DeleteUser user={user} clearUserHandler={clearUserHandler} />
    </div>
  );
};
