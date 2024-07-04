// // Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./css/Sidebar.css";


// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <ul>
//                 <li>
//                     <a href="/Home">Home</a>
//                 </li>
//                 {/* <li><a href="#news">News</a></li> */}
//                 <li class="dropdown">
//                     <a href="javascript:void(0)" class="dropbtn">OS</a>
//                     <div class="dropdown-content">
//                         <a href="#">UNIT 1</a>
//                         <a href="#">UNIT 2</a>
//                         <a href="#">UNIT 3</a>
//                     </div>
//                 </li>
//                 {/* <li className="nav-item pe-3 ">
//                      <a href='/UploadVideo'>
//                         <button className="btn btn-dark font-monospace">Upload Video</button>
//                     </a>

//                 </li>
//                 <li className="nav-item pe-3 ">
//                     <Link to='/UploadPDF'>
//                         <button className="btn btn-dark font-monospace">Upload PDF</button>
//                     </Link>
//                 </li> */}
//             </ul>
//         </div>
//     );
// }

// export default Sidebar;


// // import React from "react";
// // import "./Sidebar.css";




// // const Sidebar = () => { 
// //     return ( 
// //         <div className="sidebar">
// //             <a href="/home" >Home</a>
            
// //         </div>

           
// //      );
// // }
 
// // export default Sidebar;
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
