// Home.js

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


function Home() {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <h2>Welcome to the Home Page</h2>
            <p>This is the protected home page. Only logged-in users can access it.</p>
        </div>
    );  
}


export default Home;
