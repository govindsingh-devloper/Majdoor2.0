import React from 'react';
import DashboardContent from './DashbordContent';
//import MyMajdoors from './MyMajdoors';
import ThekedarPro from './thekedarPro';
// import RecordsContent from './RecordsContent';
// import AttendanceContent from './AttendanceContent';
import ThekedarProfile from './ThekedarProfile';
import AddMajdoors from './AddMajdoors';
import MajdoorList from './MajdoorList';
// import LaborRightsContent from './LaborRightsContent';
// import HelpContent from './HelpContent';
// import SettingsAndSupportContent from './SettingsAndSupportContent';
// import DefaultContent from './DefaultContent';



const MainContent = ({ activeContent, token }) => {
  let content;
  switch (activeContent) {
    case 'Home':
      content = <DashboardContent />;
      break;
    case 'प्रोफाइल':
      content = <ThekedarProfile />;
      break;
    case 'Majdoor List':
      content = <ThekedarPro token={token} />;
      break;
 
    case 'Add Majdoors':
      content = <AddMajdoors/>;
      break;
    case 'Majdoor List':
      content = <MajdoorList/>;
      break;
    // case 'Projects':
    //   content = <ProjectsContent />;
    //   break;
    // case 'Schedules':
    //   content = <SchedulesContent />;
    //   break;
    // case 'Payments':
    //   content = <PaymentsContent />;
    //   break;
    // case 'Settings':
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

