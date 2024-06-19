// src/components/Layout.js
import React from 'react';
import Sidebar from './CustomerSidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../../../common/Footer';

const CustomerLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-64">
      <main className="flex-grow bg-gray-100">
          <Outlet />
        </main>
        
      </div>
    </div>
  );
};

export default CustomerLayout;
