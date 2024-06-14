// Dashboard.js
 import React, { useState } from 'react';
 import Sidebar from './ThekedarSidebar';
 import MainContent from './MainContent';

const ThekedarDashbord = () => {
  const [activeContent, setActiveContent] = useState('डैशबोर्ड');

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="dashboard-container flex">
      {/* Sidebar component */}
      <Sidebar activeContent={activeContent} onContentChange={handleContentChange} />
      {/* MainContent component positioned to the right of the Sidebar */}
      <MainContent activeContent={activeContent} />
    </div>
  );
};

export default ThekedarDashbord;


// export default function Thekedar(){
//   return(
//     <>
//       <div className="dashboard-container flex">
// //       {/* Sidebar component */}
// //       <Sidebar activeContent={activeContent} onContentChange={handleContentChange} />
// //       {/* MainContent component positioned to the right of the Sidebar */}
// //       <MainContent activeContent={activeContent} />
// //     </div>
//     </>
//   )
// }