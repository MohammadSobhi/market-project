import React, { useState } from "react";
import { editMyProfile, getMyProfile,  } from "../api";
import { getAccessToken } from "../components/AuthRequired";

export default function User(params) {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  React.useEffect(() => {
    const token = getAccessToken();
    if (token) {
      async function fetchUserData() {
        const data = await getMyProfile(token);
        setUser(data.data);
      }
      fetchUserData();
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedUser({ ...user,password:"" });
  };

  const handleSaveClick = async () => {
    try {
        const token = getAccessToken();
        if (token) {
      await editMyProfile(token,editedUser);
    
    
    } 
      setIsEditing(false);
      setUser(editedUser);
    } catch (error) {
      console.error("Error updating profile:", error);
      
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  if (!user) {
    return (
      <div className="profile-body">
        <div className="profile-container">
          <h1>Loading ...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-body">
      
          {isEditing ? (
            <div className="profile-container">
        
            <div className="profile-info">
            <>
              <h1>Edit Profile</h1>
              <form>
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={editedUser.username}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="text"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={editedUser.password}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="first_name"
                    value={editedUser.first_name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="last_name"
                    value={editedUser.last_name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Photo:
                  <input
                    type="text"
                    name="photo"
                    value={editedUser.photo}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={editedUser.address}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Role:
                  <select
                    name="role"
                    value={editedUser.role}
                    onChange={handleInputChange}
                  >
                    <option value={0}>Regular User</option>
                    <option value={1}>Admin</option>
                  </select>
                </label>
              </form>
              <button className="edit-button" onClick={handleSaveClick}>
                Save
              </button>
            </>
            </div>
    </div>
          ) : (
            <div className="profile-container">
            <div className="profile-photo">
                  <img id="photo" src="" alt="Profile Photo" />
              </div>
            <div className="profile-info">
              <h1>
                {user.first_name} {user.last_name}
              </h1>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
              <p>
                <strong>Role:</strong>{" "}
                {user.role === 1 ? "Admin" : "Regular User"}
              </p>
              <button className="edit-button" onClick={handleEditClick}>
                Edit My Profile 
              </button>
              </div>
            </div>
            
          )}
        </div>
      
  );
}