
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import carpenter_icon from '../../../../images/carpenter-svgrepo-com.svg';
import plumber_icon from '../../../../images/plumber-svgrepo-com.svg';
import electrician_icon from '../../../../images/electrician-svgrepo-com.svg';
import painter_icon from '../../../../images/painter-employee-svgrepo-com.svg';
import worker_icon from '../../../../images/concrete-mixer-truck-svgrepo-com.svg';
import mason_icon from '../../../../images/wall-brick-svgrepo-com.svg';
import welder_icon from '../../../../images/welder-worker-svgrepo-com.svg';
import labour_icon from '../../../../images/engineer-worker-svgrepo-com.svg';
import history_icon from '../../../../images/history_icon.jpg';

const categories = [
  { name: 'Painter', image: painter_icon },
  { name: 'Labour', image: labour_icon },
  { name: 'Electrician', image: electrician_icon },
  { name: 'Carpenter', image: carpenter_icon},
  { name: 'Plumber', image: plumber_icon },
  { name: 'Worker', image: worker_icon },
  { name: 'Mason', image: mason_icon },
  { name: 'Welder', image: welder_icon },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement search functionality
    console.log(`Searching for ${searchQuery} in ${location}`);
  };
  return (
    <div className="min-h-screen p-4 bg-white">
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome {user?.firstName + " " + user?.lastName}! </h1>


      <div className="mb-6">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 p-3 border rounded-lg"
            />
            <button onClick={handleSearch} className="p-3 bg-blue-500 text-white rounded-lg">Search</button>
          </div>
        </div>
        <h3 className="text-lg mb-2">Your Past Bookings</h3>
        <div className="p-4 rounded-lg mb-6 border bg-white">
          <div className="flex justify-between items-center">
            <div className="w-40 h-40 bg-gray-200 flex items-center justify-center">
              <img className="w-40 h-40 object-cover" src={history_icon} alt="My Past Bookings" />
            </div>
            <button className="p-2 bg-gray-200 text-black rounded">History</button>
          </div>
        </div>


        <h3 className="text-lg mb-2">Recommended Services For You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="p-4 text-center border rounded-lg shadow-lg bg-white">
              <div className="w-24 h-24 mx-auto mb-4 ">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded" />
              </div>
              <p className="mb-2">{category.name}</p>
              <button className="p-2 bg-blue-500 text-white rounded">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


