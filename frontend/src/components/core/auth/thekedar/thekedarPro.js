// ThekedarDashboard.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MajdoorsList from './MajdoorsList'

const ThekedarPro = () => {
    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);

  return (
    <div className="flex-grow">
          <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
          <h2 className="text-zinc-500 dark:text-zinc-400 mb-2">ID: {user._id}</h2>
          <br />
          <MajdoorsList token={token} user={user} />
    </div>
  );
};

export default ThekedarPro;
