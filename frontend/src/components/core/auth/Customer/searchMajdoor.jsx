import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




const sharedStyles = {
  carouselContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  carouselWrapper: {
    display: 'flex',
    width: '100%',
    position: 'relative',
  },
  carouselContentWrapper: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  carouselContent: {
    display: 'flex',
    transition: 'all 250ms linear',
    msOverflowStyle: 'none', // hide scrollbar in IE and Edge
    scrollbarWidth: 'none', // hide scrollbar in Firefox
  },
};

// Shared Tailwind CSS classes
const cardColors = ['bg-blue-100', 'bg-green-100', 'bg-red-100', 'bg-yellow-100'];
const headerClasses = 'text-2xl font-bold text-zinc-800';
const buttonClasses = 'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-4';

const WorkerCard = ({ profile, colorClass }) => {
  const getRandomRating = () => (Math.random() * 5).toFixed(1); // Simulate ratings

  return (
    <>


      <div className={`rounded-tl-3xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden ${colorClass} `}>
        <img
          src={profile.image ? profile.image : 'https://placehold.co/300'}
          alt={profile.firstName}
          className="w-24 h-24 object-cover rounded-full m-3"
        />
        <div className="p-6">
          <h3 className={headerClasses}>{profile.firstName}</h3>
          <p className="text-lg text-zinc-600">Skills: {profile.skills}</p>
          <p className="text-lg text-zinc-600">Contact: {profile.contactNumber}</p>
          <p className="text-lg text-zinc-600">Rating: {getRandomRating()} ⭐</p>
          <div className="flex justify-between mt-4">
            <a href={`tel:${profile.contactNumber}`} className={buttonClasses}>
              <FontAwesomeIcon icon={faPhone} /> Call
            </a>
            <Link to={`/searchMajdoor/${profile._id}`} className="bg-green-500 text-white text-xl py-2 px-4 rounded-full hover:bg-green-700">
              Book Now
            </Link>
          </div>
        </div>
      </div></>
  );
};

const WorkerCardsGrid = () => {
  const location = useLocation();
  const searchresults = location.state?.searchresults;

  return (

    <div style={sharedStyles.carouselContainer}>
   
      
      {/* <Carousel >
        {searchresults && searchresults.map(profile => (
          <div key={profile._id}>
            <img
              src={profile.image ? profile.image : 'https://placehold.co/300*300'}

              alt={profile.firstName}
              className="w-full h-48 object-cover "
            />
            <div className="p-4 bg-white dark:bg-zinc-800  shadow-lg">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">{profile.firstName}</h2>


              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </Carousel> */}

      <div className="container"><h3 className={headerClasses}>Here is your serched majdoors for :</h3><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 ">
        {searchresults && searchresults.map(profile => {
          const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];
          return <WorkerCard key={profile._id} profile={profile} colorClass={randomColor} />;
        })}
      </div></div>
    </div>
  );
};

export default WorkerCardsGrid;
