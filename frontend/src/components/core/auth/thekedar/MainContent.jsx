import React from 'react';
import DashboardContent from './DashbordContent';
// import RecordsContent from './RecordsContent';
// import AttendanceContent from './AttendanceContent';
import ThekedarProfile from './ThekedarProfile';
// import LaborRightsContent from './LaborRightsContent';
// import HelpContent from './HelpContent';
// import SettingsAndSupportContent from './SettingsAndSupportContent';
// import DefaultContent from './DefaultContent';





const MainContent = ({ activeContent }) => {
  let content;
  switch (activeContent) {
    case 'डैशबोर्ड':
      content = <DashboardContent />;
      break;
    // case 'रिकॉर्ड':
    //   content = <RecordsContent />;
    //   break;
    // case 'उपस्थिति':
    //   content = <AttendanceContent />;
    //   break;
    case 'प्रोफाइल':
      content = <ThekedarProfile />;
      break;
    // case 'श्रम अधिकार':
    //   content = <LaborRightsContent />;
    //   break;
    // case 'सहायता':
    //   content = <HelpContent />;
    //   break;
    // case 'सेटिंग्स और समर्थन':
    //   content = <SettingsAndSupportContent />;
    //   break;
    // default:
    //   content = <DefaultContent />;
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

