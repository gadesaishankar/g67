import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/Navbar.css";

const Navbar = ({ toggleDarkMode, isDarkMode, toggleSidebar }) => {

    const [logout, setlogout] = useState("");

    const handleOnClickLogout = () => {
        setlogout(window.location.href = "./");
    };

    const customPrimaryColor = '#27012d';
    const customSecondaryColor = '#ffffff';
    const custom3rdColor = '#f4cd0b';

    return (
        <>
            <nav className="navbar sticky-top border-bottom border-body navbar-expand-lg custom-navbar" style={{ backgroundColor: customPrimaryColor}}>
                <div className="container-fluid">
                    {/* Sidebar Button */}
                    <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Brand */}
                    <a className="navbar-brand" href="/Home" style={{ color: customSecondaryColor }}>
                        <img src="/dune.jpg" alt="" width="50" height="40" className="d-inline-block align-text-top " />
                        <br></br>
                        Dune state University
                    </a>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navbar Items */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li style={{ marginRight: 'auto' }}>
                                <button className="btn font-monospace" style={{ backgroundColor: custom3rdColor, color: customPrimaryColor , marginRight:10 }} onClick={toggleDarkMode}>
                                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                                </button>
                            </li>
                            <li className="nav-item pe-3">
                                <button className="btn font-monospace" style={{ backgroundColor: custom3rdColor, color: customPrimaryColor }} onClick={handleOnClickLogout}>LogOut</button>
                            </li>
                            <li className="nav-item pe-3">
                                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill={customSecondaryColor} className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
