import "../profile/profile.css";
import { useState } from "react";
import { fetchRequest } from "../../utils";

export const UpdateProfile = ({ user }) => {
  const [email, setEmail] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      filterKey: "username",
      filterVal: user,
      updateKey: "email",
      updateVal: email,
    });

    const data = await fetchRequest("user", payload, "PUT");
    if (data.err) {
      setUpdateSuccess(data.err);
    } else {
      setUpdateSuccess("Profile updated successfully");
    }
  };

  return (
    <div className="profile-form">
      <form onSubmit={handleSubmit} className="form">
        <div className="profile-inputs">
          <input
            placeholder="update email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="form-submit" type="submit">
            Update Profile
          </button>
        </div>
      </form>
      <h3>{updateSuccess}</h3>
    </div>
  );
};
