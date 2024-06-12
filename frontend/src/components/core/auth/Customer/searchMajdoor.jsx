import React from 'react';
import majdoor_icon from '../../../../images/default_majdoor.png';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchMajdoor = () => {
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();
  const searchresults = location.state?.searchresults;
  console.log(searchresults); 

  return (
    <>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        { searchresults && searchresults.map(profile => (
          <div key={profile.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <img 
              src={profile?.image ? profile.image : majdoor_icon} 
              alt={user?.firstName || 'Default Majdoor'} 
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" 
            />
            <h3 className="text-xl font-semibold mb-2">{profile.firstName}</h3>
            <p className="text-gray-700 mb-2">Skills: {profile.skills}</p>
            <p className="text-gray-700 mb-4">Contact: {profile.contactNumber}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Chat</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchMajdoor;
