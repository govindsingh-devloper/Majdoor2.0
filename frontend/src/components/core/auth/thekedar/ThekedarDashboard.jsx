// Dashboard.js
 import React, { useState } from 'react';
 import Sidebar from './ThekedarSidebar';
 import MainContent from './MainContent';
 import TLoginform from '../TLoginForm';

const ThekedarDashboard = () => {
  const [activeContent, setActiveContent] = useState('डैशबोर्ड');
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  // if (!token) {
  //   return <TLoginform onLogin={handleLogin} />;
  // }

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="dashboard-container flex">
      {/* Sidebar component */}
      <Sidebar activeContent={activeContent} onContentChange={handleContentChange} />
      {/* MainContent component positioned to the right of the Sidebar */}
      <MainContent activeContent={activeContent} token={token} />
    </div>
  );
};

export default ThekedarDashboard;
