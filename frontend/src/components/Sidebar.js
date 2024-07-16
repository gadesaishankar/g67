// Sidebar.js
import React from 'react';
import './css/Sidebar.css';

const Sidebar = ({ isDarkMode }) => {
    return (
        <div className={`sidebar fixed border-end ${isDarkMode ? 'dark-mode' : ''}`}>
            <ul>
                <li>
                    <a href="/Home" className='dropbtn'>Home</a>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">1st Year</a>
                    <div className="dropdown-content">
                        <a href="#">NO subject found</a>
                    </div>
                </li>
                <li className='dropdown'>
                    <a href='javascript:void(0)' className="dropbtn">2nd Year</a>
                    <div className="dropdown-content">
                        <a href="/FirstSem"  className={isDarkMode ? 'dark-mode' : ''}>sem 1</a>
                        <a href="/SecondSem"  className={isDarkMode ? 'dark-mode' : ''}>sem 2</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">3rd Year</a>
                    <div className="dropdown-content">
                        <a href="#">NO subject found</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">4th Year</a>
                    <div className="dropdown-content">
                        <a href="#">NO subject found</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
