// // -------------------------------Start: 39_1 ---------------------------------------
// // (8)st
// import React from 'react';

// const Navbar = () => {
//     return (
//         // <div>
//         //     Navbar
//         // </div>
//         // (10)st commit previous and copy from daisyUI: Responsive (dropdown menu on small screen, center menu on large screen)
//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         <li><a>Item 1</a></li>
//                         <li>
//                             <a>Parent</a>
//                             <ul className="p-2">
//                                 <li><a>Submenu 1</a></li>
//                                 <li><a>Submenu 2</a></li>
//                             </ul>
//                         </li>
//                         <li><a>Item 3</a></li>
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     <li><a>Item 1</a></li>
//                     <li>
//                         <details>
//                             <summary>Parent</summary>
//                             <ul className="p-2 bg-base-100 w-40 z-1">
//                                 <li><a>Submenu 1</a></li>
//                                 <li><a>Submenu 2</a></li>
//                             </ul>
//                         </details>
//                     </li>
//                     <li><a>Item 3</a></li>
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Button</a>
//             </div>
//         </div>
//         // (10)en then index.html file
//     );
// };

// export default Navbar;
// // (8)en then create MainLayout.jsx file creating layout folder in src folder
// // -------------------------------End:39_1-(1) to (13) --------------------------------
// // -------------------------------Start: 39_2 ---------------------------------------

// import React from 'react';
// import { Link, NavLink } from 'react-router';

// const Navbar = () => {
//     // (14)st
//     // extra
//     // const getLinkClass = ({isActive}) => isActive ? "text-green-500 border border-green-500" : "";
//     // extra
//     // (14)en
//     // (15) commit (14) and copy and edit it as new
//     const getLinkClass = ({ isActive }) => `font-semibold mr-5 ${isActive ? "text-green-500 border border-green-500" : ""}`


//     // (7)st commit (7)
//     const links = <>
//         <li>
//             {/* <Link to={"/"}>Home</Link> */}
//             {/* (12)commit previous */}
//             {/* <NavLink to={"/"} className={({isActive}) => isActive ? "text-green-500 border border-green-500" : "" }>Home</NavLink> */}
//             {/* extra */}
//             <NavLink to={"/"} className={getLinkClass}>Home</NavLink>
//             {/* extra */}
//             {/* (12)en */}
//         </li>

//         <li>
//             {/* <Link to={"/books"}>Listed Books</Link> */}
//             {/* (13)commit previous */}
//             {/* <NavLink to={"/books"} className={({isActive}) => isActive ? "text-green-500 border border-green-500" : "" }>Listed Books</NavLink> */}
//             {/* extra */}
//             <NavLink to={"/books"} className={getLinkClass}>Listed Books</NavLink>
//             {/* extra */}
//             {/* (13)en */}

//         </li>

//         {/* <li><Link to={"/page-to-read"}>Page to Read</Link></li> */}
//         {/* (16)commit previous */}
//         <li><NavLink to={"/page-to-read"} className={getLinkClass}>Page to Read</NavLink></li>

//     </>
//     // (7)en 

//     return (

//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {/* (8)st */}
//                         {/* <li><a>Item 1</a></li>
//                         <li>
//                             <a>Parent</a>
//                             <ul className="p-2">
//                                 <li><a>Submenu 1</a></li>
//                                 <li><a>Submenu 2</a></li>
//                             </ul>
//                         </li>
//                         <li><a>Item 3</a></li> */}
//                         {/* (8)en */}

//                         {/* (9)commit (8) */}
//                         {links}

//                     </ul>
//                 </div>
//                 {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
//                 {/* (6) copy and commit previous then edit */}
//                 <h2 className="font-bold text-xl">Book Vibe</h2>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {/* (10) st */}
//                     {/* <li><a>Item 1</a></li>
//                     <li>
//                         <details>
//                             <summary>Parent</summary>
//                             <ul className="p-2 bg-base-100 w-40 z-1">
//                                 <li><a>Submenu 1</a></li>
//                                 <li><a>Submenu 2</a></li>
//                             </ul>
//                         </details>
//                     </li>
//                     <li><a>Item 3</a></li> */}
//                     {/* (10) en */}
//                     {/* (11) commit (10) */}
//                     {links}


//                 </ul>
//             </div>
//             {/* (18) gap-4  then create Banner.jsx creating homepage folder in components folder*/}
//             <div className="navbar-end gap-4">

//                 {/* <a className="btn">Button</a> */}
//                 {/* (17)st commit previous and copy Buttons colors from daisyUI  text-white*/}
//                 <button className="btn btn-success text-white">Sign In</button>
//                 <button className="btn btn-info text-white">Sign Up</button>
//                 {/* (17)en */}
//             </div>

//         </div>

//     );
// };

// export default Navbar;

// // -------------------------------End:39_2-(1) to (13) --------------------------------
// -------------------------------Start: 39_3 ---------------------------------------

import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const getLinkClass = ({ isActive }) => `font-semibold mr-5 ${isActive ? "text-green-500 border border-green-500" : ""}`
    const links = <>
        <li><NavLink to={"/"} className={getLinkClass}>Home</NavLink></li>
        <li><NavLink to={"/books"} className={getLinkClass}>Listed Books</NavLink></li>
        <li><NavLink to={"/page-to-read"} className={getLinkClass}>Page to Read</NavLink></li>
    </>
    return (
        // <div className="navbar bg-base-100 shadow-sm">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        //             </div>
        //             <ul
        //                 tabIndex="-1"
        //                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        //                 {links}
        //             </ul>
        //         </div>
        //         <h2 className="font-bold text-xl">Book Vibe</h2>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             {links}
        //         </ul>
        //     </div>
        //     <div className="navbar-end gap-4">
        //         <button className="btn btn-success text-white">Sign In</button>
        //         <button className="btn btn-info text-white">Sign Up</button>
        //     </div>
        // </div>

        // (1)st commit previous
        <nav className="bg-base-100 shadow-sm">
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h2 className="font-bold text-xl">Book Vibe</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn btn-success text-white">Sign In</button>
                <button className="btn btn-info text-white">Sign Up</button>
            </div>
        </div>
        </nav>
        // (1)en then create AllBooks.jsx file in components
    );
};

export default Navbar;
// -------------------------------End:39_3-(1) to (13) --------------------------------