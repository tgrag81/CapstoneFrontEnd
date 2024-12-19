import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";


const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create-post">Create Post</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
