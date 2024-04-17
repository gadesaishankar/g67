// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import FileUpload from './FileUpload';
import "./Sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                {/* <li><a href="#news">News</a></li> */}
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">OS</a>
                    <div class="dropdown-content">
                        <a href="#">UNIT 1</a>
                        <a href="#">UNIT 2</a>
                        <a href="#">UNIT 3</a>
                    </div>
                </li>
                <li className="nav-item pe-3 ">
                     <a href='/UploadVideo'>
                        <button className="btn btn-dark font-monospace">Upload Video</button>
                    </a>
                        
                   

                </li>
                <li className="nav-item pe-3 ">
                    <Link to='/FileUpload'>
                        <button className="btn btn-dark font-monospace">Upload PDF</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;


// import React from "react";
// import "./Sidebar.css";




// const Sidebar = () => { 
//     return ( 
//         <div className="sidebar">
//             <a href="/home" >Home</a>
            
//         </div>

           
//      );
// }
 
// export default Sidebar;
