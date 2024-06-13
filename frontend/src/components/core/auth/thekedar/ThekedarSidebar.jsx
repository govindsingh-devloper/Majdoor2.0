import React from 'react';
import { useSelector } from 'react-redux';
import { sharedClasses } from './sharedClasses';

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
      <div className="text-center text-3xl font-semibold">Hi, {user.firstName}!</div>
      <nav>
        {renderButton('डैशबोर्ड')}
        {renderButton('रिकॉर्ड')}
        {renderButton('उपस्थिति')}
        {renderButton('प्रोफाइल')}
        {renderButton('श्रम अधिकार')}
        {renderButton('सहायता')}
        {renderButton('सेटिंग्स और समर्थन')}
      </nav>
    </aside>
  );
};

export default Sidebar;
