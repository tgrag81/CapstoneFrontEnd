import React, { useState } from "react";



const Settings = () => {

    const [username, setUsername] = useState("JohnDoe123");
    const [email, setEmail] = useState("johndoe@example.com");
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [password, setPassword] = useState("");

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        alert(`Profile updated for ${username}`);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        alert("Password updated successfully");
    };

    const toggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };




    return (
        <div style = {{maxWidth: "600px", margin: "0 auto", padding: "1rem"}}>
            <h1>Settings</h1>
            <p>Manage your account settings here.</p>
{/* Profile Update Section */}
<form onSubmit={handleUpdateProfile} style={{ marginBottom: "2rem" }}>
                <h2>Update Profile</h2>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }}
                    />
                </label>
                <button type="submit" style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
                    Update Profile
                </button>
            </form>

            {/* Password Change Section */}
            <form onSubmit={handlePasswordChange} style={{ marginBottom: "2rem" }}>
                <h2>Change Password</h2>
                <label>
                    New Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }}
                    />
                </label>
                <button type="submit" style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
                    Change Password
                </button>
            </form>

            {/* Notification Settings */}
            <div style={{ marginBottom: "2rem" }}>
                <h2>Notifications</h2>
                <p>
                    Notifications are currently <strong>{notificationsEnabled ? "Enabled" : "Disabled"}</strong>.
                </p>
                <button onClick={toggleNotifications} style={{ padding: "0.5rem 1rem" }}>
                    {notificationsEnabled ? "Disable Notifications" : "Enable Notifications"}
                </button>
            </div>




        </div>
    );
};

export default Settings;
