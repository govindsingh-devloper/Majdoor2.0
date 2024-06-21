import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { useTranslation } from 'react-i18next';
import gImg8 from "../../../../images/labour-day-5147441_1280.png"

const CARD_CLASSES = 'bg-blue-50 light:bg-zinc-700 p-4 rounded-lg shadow-md';
const IMAGE_CLASSES = 'w-25 h-25';

function DashboardContent({ userName }) {
  const { user } = useSelector((state) => state.profile);
  // Dummy data for demonstration
  const stats = {
    totalMajdoors: 42,
    activeProjects: 5,
    pendingPayments: 12000,
  };


  function getCompletionColor(completion) {
    if (completion < 50) return 'bg-red-100';
    if (completion < 80) return 'bg-yellow-100';
    if (completion < 100) return 'bg-blue-100';
    return 'bg-green-100'; // Completed
  }
  const projects = [
    { id: 1, name: 'Project 1', completion: 100 },
    { id: 2, name: 'Project 2', completion: 50 },
    { id: 3, name: 'Project 3', completion: 90 },
    { id: 4, name: 'Project 3', completion: 100 },
    { id: 5, name: 'Project 3', completion: 30 },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      <main className="p-4">
        {/* Welcome Message */}
        <div className={CARD_CLASSES + ' mb-4'}>
          <h1 className="text-xl font-bold">Welcome, {user.firstName}!</h1>
          <p>Here's a summary of today's tasks.</p>
        </div>

        {/* Statistical Panel */}
        <div className={CARD_CLASSES + ' mb-4'}>
          <h2 className="text-lg font-bold">Quick Stats</h2>
          <p>Total Majdoors: {stats.totalMajdoors}</p>
          <p>Active Projects: {stats.activeProjects}</p>
          <p>Pending Payments: ₹{stats.pendingPayments}</p>
        </div>

   {/* Project Progress Section */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {projects.map((project) => (
            <div key={project.id} className={`${CARD_CLASSES} ${getCompletionColor(project.completion)}`}>
         <h3 className="font-bold">{project.name}</h3>

              <p>Completion: {project.completion}%</p>
            </div>
          ))}
        </div>

        {/* Majdoor Spotlight Area */}
        <div className="mt-4">
          <h2 className="text-lg font-bold">Majdoor Spotlight</h2>
          {/* Replace with actual majdoor data */}
         <div className="container flex row"> <div className={CARD_CLASSES}>
            <img
              src="https://placehold.co/400x200?text=Majdoor+of+the+Month"
              alt="Majdoor Spotlight"
              className={IMAGE_CLASSES}
            />
            {/* Majdoor details here */}
          </div>
          <div className={CARD_CLASSES}>
            <img
              src="https://placehold.co/400x200?text=Majdoor+of+the+Month"
              alt="Majdoor Spotlight"
              className={IMAGE_CLASSES}
            />
            {/* Majdoor details here */}
          </div>
          <div className={CARD_CLASSES}>
            <img
              src="https://placehold.co/400x200?text=Majdoor+of+the+Month"
              alt="Majdoor Spotlight"
              className={IMAGE_CLASSES}
            />
            {/* Majdoor details here */}
          </div>
        </div></div>

        {/* Alerts and Notifications Section */}
        <div className="mt-4">
          {/* <button className={BUTTON_CLASSES}>View Notifications</button> */}
          {/* Notification list/modal can be implemented here */}
        </div>
      </main>

      {/* Rest of your component */}
      {/* ... */}
    </div>
  );
}

export default DashboardContent;
