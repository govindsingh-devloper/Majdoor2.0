// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (

    
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col overflow-y-auto">
      <div className="p-4 text-3xl font-semibold">Menu</div>
      <nav className="flex flex-col mt-4 space-y-2">
        <Link to="/CustomerHome" className="py-3 px-4 hover:bg-gray-700 text-xl">
          Home
        </Link>
        <Link to="/searchMajdoor" className="py-3 px-4 hover:bg-gray-700 text-xl">
          Search
        </Link>
        <Link to="/CustomerDashboard" className="py-3 px-4 hover:bg-gray-700 text-xl">
          Profile
        </Link>
        {/* <Link to="/customer/settings" className="py-2 px-4 hover:bg-gray-700">
          Settings
        </Link> */}
        <Link to="/logout" className="py-3 px-4 hover:bg-gray-700 text-xl">
          Logout
        </Link>
      </nav>
    </div>
    
  );
};

export default Sidebar;
