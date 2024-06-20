import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { RiEditBoxLine } from 'react-icons/ri';




const sharedClasses = {
  NotificationButton: "w-50 h-10 flex items-center justify-start space-x-2.5 px-4 bg-gray-800 rounded-lg text-white border-none relative cursor-pointer transition duration-200",
  dot: 'absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rounded-full',
  bell: 'text-white w-7 m-2  ', // Adjust width as needed
  arrow: 'absolute right-0 w-7.5 h-full text-lg flex items-center justify-center animate-slide-right',

  button: 'px-12 py-3 rounded text-white bg-blue-600 hover:bg-blue-700 transition',
  link: 'block py-3 px-6 rounded transition duration-200 hover:bg-zinc-700 text-zinc-200',
  activeLink: 'block py-3 px-12 rounded bg-blue-600 text-white transition duration-200',
  tableHeader: 'px-6 py-3 text-left text-sm font-medium text-zinc-600 uppercase tracking-wider',
  tableRow: 'px-6 py-4 whitespace-nowrap text-sm text-zinc-500',
};

const Sidebar = ({ activeContent, onContentChange }) => {
  const { user } = useSelector((state) => state.profile);

  const renderButton = (label) => (
    <button
      onClick={() => onContentChange(label)}
      className={activeContent === label ? sharedClasses.activeLink : sharedClasses.link}
    >
      {label}
    </button>
  );

  return (
    <aside className="bg-zinc-800 text-zinc-200 w-72 space-y-6 py-8 px-4"> 

      <button className={sharedClasses.NotificationButton}>
        <svg className={sharedClasses.bell} viewBox="0 0 448 512">
          <path
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
          ></path>
        </svg>
        Notifications
        <div className={sharedClasses.arrow}>›</div>
        <div className={sharedClasses.dot}>4</div>
      </button>

      <nav>
        {renderButton('Home')}
        {renderButton('Add Majdoors')}
        {renderButton('Majdoor List')}
        {renderButton('Projects')}
        {renderButton('Schedules')}
        {renderButton('Payments')}
        {renderButton('Settings')}
      </nav>
    </aside>
  );
};

export default Sidebar;
