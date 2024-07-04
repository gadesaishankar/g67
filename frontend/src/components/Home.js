// // Home.js

// import React from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';


// function Home() {
//     return (
//         <div>
//             <Navbar/>
//             <Sidebar/>
//             <h2>Welcome to the Home Page</h2>
//             <p>This is the protected home page. Only logged-in users can access it.</p>
//         </div>
//     );  
// }


// export default Home;
// Home.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './css/home.css'; // Ensure your CSS file is imported

function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <div className={`home ${isDarkMode ? 'dark-mode' : ''}`}>
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <Sidebar isDarkMode={isDarkMode} />
            <br />
            <h2>Welcome to the Dune State University</h2>
            <p>This is the protected home page. Only logged-in users can access it.</p>
        </div>
    );
}

export default Home;
