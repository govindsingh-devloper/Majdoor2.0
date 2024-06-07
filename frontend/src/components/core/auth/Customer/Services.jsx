import React from 'react';
import '../../../../css/Services.css';

const Header = () => (
  <header class="header">
    <h1>MAJDOOR</h1>
    <div class="flex items-center space-x-4">
      <button class="button">
        <img src="https://placehold.co/20x20" alt="user icon" />
      </button>
      <button class="button">
        <img src="https://placehold.co/20x20" alt="notification icon" />
      </button>
    </div>
  </header>
);

const SearchBar = () => (
  <div class="search-bar">
    <h2>Welcome, me.mbisht.512@gmail.com</h2>
    <div class="search-container">
      <input type="text" placeholder="Search" class="input" />
      <button class="search-button">Search</button>
    </div>
  </div>
);

const BookingCard = () => (
  <div class="booking-card">
    <h3>Your Past Bookings</h3>
    <div class="card">
      <img src="https://placehold.co/50x50" alt="history icon" />
      <button class="explore-button">History</button>
    </div>
  </div>
);

const ServiceCard = ({ iconSrc, serviceName }) => (
  <div class="card">
    <img src={iconSrc} alt={`${serviceName} icon`} />
    <p>{serviceName}</p>
    <button class="explore-button">Explore</button>
  </div>
);

const RecommendedServices = () => (
  <div class="recommended-services">
    <h3>Recommended Services For You</h3>
    <div class="service-grid">
      <ServiceCard iconSrc="https://placehold.co/100x100" serviceName="Painter" />
      <ServiceCard iconSrc="https://placehold.co/100x100" serviceName="Labour" />
      <ServiceCard iconSrc="https://placehold.co/100x100" serviceName="Electrician" />
    </div>
  </div>
);

const App = () => (
  <div class="main">
    <Header />
    <main>
      <SearchBar />
      <BookingCard />
      <RecommendedServices />
    </main>
  </div>
);

export default App;
