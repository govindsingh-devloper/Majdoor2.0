import React from 'react';
import DashboardContent from './DashbordContent';
//import MyMajdoors from './MyMajdoors';
import ThekedarPro from './thekedarPro';
// import RecordsContent from './RecordsContent';
// import AttendanceContent from './AttendanceContent';
import ThekedarProfile from './ThekedarProfile';
// import LaborRightsContent from './LaborRightsContent';
// import HelpContent from './HelpContent';
// import SettingsAndSupportContent from './SettingsAndSupportContent';
// import DefaultContent from './DefaultContent';



const MainContent = ({ activeContent, token }) => {
  let content;
  switch (activeContent) {
    case 'डैशबोर्ड':
      content = <DashboardContent />;
      break;
    case 'प्रोफाइल':
      content = <ThekedarProfile />;
      break;
    case 'मेरे मजदूर':
      content = <ThekedarPro token={token} />;
      break;
    default:
      content = <DashboardContent />;
  }

  return (
    <div className="flex-1 bg-zinc-100 text-zinc-900">
      <main className="p-6">
        {content}
      </main>
    </div>
  );
};

export default MainContent;

