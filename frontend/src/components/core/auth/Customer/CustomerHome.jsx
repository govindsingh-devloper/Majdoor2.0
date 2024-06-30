import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import SearchMajdoors from './searchMajdoor';

import carpenter_icon from '../../../../images/carpenter-svgrepo-com.svg';
import plumber_icon from '../../../../images/plumber-svgrepo-com.svg';
import electrician_icon from '../../../../images/electrician-svgrepo-com.svg';
import painter_icon from '../../../../images/painter-employee-svgrepo-com.svg';
import worker_icon from '../../../../images/concrete-mixer-truck-svgrepo-com.svg';
import mason_icon from '../../../../images/wall-brick-svgrepo-com.svg';
import welder_icon from '../../../../images/welder-worker-svgrepo-com.svg';
import labour_icon from '../../../../images/engineer-worker-svgrepo-com.svg';
import history_icon from '../../../../images/history_icon.jpg';
import { apiConnector } from '../../../../services/apiconnector';
import { SearchEndpoint } from '../../../../services/api';
import { getCategories } from '../../../../services/operations/MajdoorAuthAPI';
import Cards from './Cards';

import thekedaaricon from '../../../../images/thekedaaricon.jpg';
import majdooricon from '../../../../images/majdooricon.jpg';


const categoryIcons = {
  'Painter': painter_icon,
  'Labour': labour_icon,
  'Electrician': electrician_icon,
  'Carpenter': carpenter_icon,
  'Plumber': plumber_icon,
  'Worker': worker_icon,
  'Mason': mason_icon,
  'Welder': welder_icon,
};
function App() {
  const dispatch=useDispatch();
  const [skills, setSkills] = useState('');
  const {categories}=useSelector((state)=>state.categories);

  console.log(categories);

  const [searchresults,setSearchResults]=useState([]);
  const [location, setLocation] = useState('');
  const [thekedarLocation, setThekedarLocation] = useState('');
  const [thekedarSearchResults, setThekedarSearchResults] = useState([]);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

 

  const handleOnSubmit = async(e) => {
    e.preventDefault();
   try {
     const response=await apiConnector("POST",SearchEndpoint.SEARCH_API,{skills});
     setSearchResults(response.data.data);
     const navigationUrl = "/searchMajdoor";
     console.log("Navigation URL:", navigationUrl);
     navigate(navigationUrl, { state: { searchresults: response.data.data } });
     console.log(response);
   } catch (error) {
    console.error('Error fetching data:', error);
    
   }
  };

  //Thekedars Serach 
  
  const handleThekedarSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await apiConnector('POST', SearchEndpoint.SEARCH_LOCATION, {
        location: thekedarLocation,
      });
      console.log("Loaction k response",response.data);
      setThekedarSearchResults(response.data.data);
      // const navigationUrl = '/searchMajdoor';
      // navigate(navigationUrl, { state: { thekedarSearchResults: response.data.data } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleMajdoor = async (categorySkills) => {
    try {
      const response = await apiConnector("POST", SearchEndpoint.SEARCH_API, { skills: categorySkills });
      navigate("/searchMajdoor", { state: { searchresults: response.data.data } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  
// //  try {
// //      e.preventDefault();
// //      // Implement search functionality
// //      // console.log(Searching for ${searchQuery} in ${location});
// //      const response=await apiConnector("POST",SearchEndpoint.SEARCH_API,{searchQuery});
// //      console.log(response);
// //      setSearchResults(response.data.data)
// //  } catch (error) {
// //   console.error("Error occurred during search:", error);
//  }//


  useEffect(()=>{
    dispatch(getCategories())
  },[])

  const uniqueCategories = [...new Map(categories.map(category => [category.skills, category])).values()];
  return (
  <>
          
    <div className="min-h-screen p-4 bg-white">
     
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome {user?.firstName + " " + user?.lastName}! </h1>

        <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Ready to Serve</h2>
        <form onSubmit={handleOnSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-yellow-500 rounded-lg shadow-lg text-center text-black">
            <h3 className="text-xl font-bold mb-2">Find Majdoors by Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center mb-4">
                  <img src={majdooricon} className="w-18 h-18  rounded-lg"></img>
                </div>
                < div className="flex flex-col items-center  justify-center mb-4">
                    <select
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4"
                  >
                    <option value="">Select a skill...</option>
                    {uniqueCategories.map((category) => (
                      <option key={category.skills} value={category.skills}>
                        {category.skills}
                      </option>
                    ))}
                  </select>
                  <button type='submit'className="w-full p-3 bg-blue-500 text-white rounded-lg">Search</button>  
                </div>
             </div>   
          </div>
          <div className="p-6 bg-yellow-500 rounded-lg shadow-lg text-center text-black"> 
            <h3 className="text-xl font-bold mb-2">Find Thekedar by Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center mb-4">
                  <img src={thekedaaricon} className="w-18 h-18  rounded-lg"></img>
                </div>
                < div className="flex flex-col items-center  justify-center mb-4">
                    {/* <select
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4"
                  >
                    <option value="">Select a skill...</option>
                    {uniqueCategories.map((category) => (
                      <option key={category.skills} value={category.skills}>
                        {category.skills}
                      </option>
                    ))}
                  </select> */}
                    <input
                      type="text"
                      placeholder="Location..."
                      value={thekedarLocation}
                      onChange={(e) => setThekedarLocation(e.target.value)}
                      className="w-full p-3 border rounded-lg mb-4"
                    />
                  <button type='button'   onClick={handleThekedarSearch} 
                  className="w-full p-3 bg-blue-500 text-white rounded-lg">Search</button>  
                </div>
             </div>   
          </div>
        </div>
        </form>
        
      </div>
    </section>


        <h3 className="text-3xl font-bold text-gray-800 mb-8 mt-8">Your Past Bookings</h3>
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center text-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className=" flex w-40 h-40">
              <img src={history_icon} className=" ml-40 w-full h-full object cover rounded-lg" alt="History Icon" />
            </div>
            <p className="text-xl md:text-3xl font-bold italic mb-4">
                Rediscover past escapes with just a click. Your booking history, all in one place!
              </p>
            <div className="flex flex-col items-center justify-center">
              
              <button className="p-3 bg-blue-500 text-white font-bold rounded-lg">
                History
              </button>
            </div>
          </div>
        </div>


        {/* /////////////////////////////////////////// */}
        <h3 className="text-3xl font-bold text-gray-800 mb-8 mt-8">Recommended Services For You</h3>
        <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center text-black">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {uniqueCategories && uniqueCategories.map((category) => (
            <div key={category._id} className="box bg-white border-2 border-gray-300 shadow-md hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out">
              <div className=" h-28 mx-auto mt-6 ">
                <img src={categoryIcons[category.skills]} alt={category} className=" h-28 mx-auto mt-6 " />
              </div>
              {/* <p className="mb-2">{category.firstName}</p> */}
              <p className="text-2xl font-bold text-uppercase py-4">{category.skills}</p>
              <button className="p-2 mb-3 bg-blue-500 text-white rounded" onClick={() => handleMajdoor(category.skills)}>
                Explore</button>
            </div>
          ))}

        </div>

        </div>

  

       <div className="container"><h1 className='text-3xl font-bold '>Thekedar near by your city</h1><div className='container flex'>
        
        {/* <Cards


        /><Cards/><Cards/><Cards/> */}
        {thekedarSearchResults.map((thekedar) => (
                <Cards
                  key={thekedar._id}
                  thekedarId={thekedar._id}
                  title={thekedar.firstName}
                  location={thekedar.location}
                  description={thekedar.description}
                  majdoors={thekedar.majdoors.length}
                  image={thekedar.image}
                  // Add other necessary props based on your Card component implementation
                />
              ))}

          
        </div></div>
      </div>
      {/* <SearchMajdoors searchresults={searchresults} /> */}
      {/* <SeacrhThekedars thekedarSearchResults={thekedarSearchResults}/> */}
     
    </div>
    <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2024 5 Stars. All rights reserved.</p>
    </footer>
  </>
  
  );
}

export default App;