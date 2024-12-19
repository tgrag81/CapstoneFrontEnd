import React, { useState } from "react";
import "./profile.css"






const Profile = () => {

    const [username, setUsername] = useState("JohnDoe123");
    const [email, setEmail] = useState("johndoe@example.com");
    const [bio, setBio] = useState("This is your bio. Share something about yourself!");
    const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/150");

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        alert("Profile updated successfully!");
        // Add backend integration here
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicture(reader.result); // For a new profile picture
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className ="profile-container">
            <h1>Profile</h1>

{/* Profile Picture */}
<div className="profile-picture-section">
                <img
                    src={profilePicture}
                    alt="Profile"
                    className="profile-picture"
                />
                <label htmlFor="profilePictureInput" className="change-picture-button">
                    Change Picture
                </label>
                <input
                    type="file"
                    id="profilePictureInput"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    style={{ display: "none" }}
                />
            </div>

            {/* Profile Update Form */}
            <form onSubmit={handleProfileUpdate} className="profile-form">
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Bio:
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </label>
                <button type="submit" className="save-button">Save Changes</button>
            </form>
        </div>
    );
};

export default Profile;
