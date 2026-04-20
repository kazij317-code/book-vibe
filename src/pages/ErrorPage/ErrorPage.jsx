// -------------------------------Start: 39_2 ---------------------------------------
// (2)st
// import React from 'react';

// const ErrorPage = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ErrorPage;
// (2)en

// (3)st  commit (2 and copy UI from chatgpt
import React from "react";

// import { Link } from "react-router-dom";
// (5) commit previous then in Navbar.jsx file
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center max-w-lg w-full border border-white/20">
        
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/80 mt-3 text-sm md:text-base">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-indigo-100 transition duration-300"
        >
          Go Back Home
        </Link>

        {/* Decorative Circle */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-400 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-400 opacity-30 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default ErrorPage;

// (3)en then in Routes.jsx file

// -------------------------------End:39_2-(1) to (13) --------------------------------