// components/MajdoorsList.js
import React, { useEffect, useState } from 'react';
import { apiConnector } from '../../../../services/apiconnector';
import { endpoints } from '../../../../services/api';
import '../../../../css/style.css';

const MajdoorsList = ({ token, user }) => {
    const [majdoors, setMajdoors] = useState([]);
    const [loading, setLoading] = useState(false);
    const userID = user._id;

    useEffect(() => {
        const fetchMajdoors = async () => {
            try {
                const response = await apiConnector("POST", endpoints.THEKEDAR_MAJDOORS , {userID}, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    } 
                });
                console.log("API response:",response.data);
                if (response.data.success && response.data.thekedar) {
                    console.log("Majdoors:", response.data.thekedar.majdoors);
                    setMajdoors(response.data.thekedar.majdoors);
                }
                //setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchMajdoors();
    }, [token, userID]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (majdoors.length === 0) {
        return <div>No majdoors found</div>;
    }

    return (
        <div>
           <div className="container m-2"> <h2>Majdoors</h2>
            <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-zinc-200">
    <thead>
      <tr className="bg-zinc-100">
        <th className="py-2 px-4 border-b">first name  </th>
        <th className="py-2 px-4 border-b">Last name </th>
        <th className="py-2 px-4 border-b">Majdoor Id</th>
        <th className="py-2 px-4 border-b">Skill's</th>
        <th className="py-2 px-4 border-b">Phone Number</th>
        <th className="py-2 px-4 border-b">Location</th>
        
      </tr>
    </thead>
    <tbody>
      {majdoors.map((majdoor) => (
        <tr key={majdoor.id}>
          <td className="py-2 px-4 border-b">{majdoor.firstName}</td>
          <td className="py-2 px-4 border-b">{majdoor.lastName}</td>
          <td className="py-2 px-4 border-b">{majdoor._id}</td>
          <td className="py-2 px-4 border-b">{majdoor.skills}</td>
          <td className="py-2 px-4 border-b">{majdoor.contactNumber}</td>
          <td className="py-2 px-4 border-b">{majdoor.location}</td>
        </tr>
      ))}
      {/* Placeholder for new data entry */}
    
    </tbody>
  </table>
</div>
</div>
        </div>
    );
};

export default MajdoorsList;
