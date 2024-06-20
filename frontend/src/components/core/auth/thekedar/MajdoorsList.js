// components/MajdoorsList.js
import React, { useEffect, useState } from 'react';
import { apiConnector } from '../../../../services/apiconnector';
import { endpoints } from '../../../../services/api';
import '../../../../css/style.css';

const MajdoorsList = ({ token, user }) => {
    const [majdoors, setMajdoors] = useState([]);
    const [loading, setLoading] = useState(true);
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
            <h2>Majdoors</h2>
            <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-zinc-200">
    <thead>
      <tr className="bg-zinc-100">
        <th className="py-2 px-4 border-b">नाम</th>
        <th className="py-2 px-4 border-b">आईडी</th>
        <th className="py-2 px-4 border-b">पता</th>
        <th className="py-2 px-4 border-b">फोन नंबर</th>
        <th className="py-2 px-4 border-b">काम</th>
        <th className="py-2 px-4 border-b">तारीख</th>
        <th className="py-2 px-4 border-b">रकम</th>
      </tr>
    </thead>
    <tbody>
      {majdoors.map((majdoor) => (
        <tr key={majdoor.id}>
          <td className="py-2 px-4 border-b">{majdoor.name}</td>
          <td className="py-2 px-4 border-b">{majdoor.id}</td>
          <td className="py-2 px-4 border-b">{majdoor.address}</td>
          <td className="py-2 px-4 border-b">{majdoor.phone}</td>
          <td className="py-2 px-4 border-b">{majdoor.work}</td>
          <td className="py-2 px-4 border-b">{majdoor.date}</td>
          <td className="py-2 px-4 border-b">{majdoor.payment}</td>
        </tr>
      ))}
      {/* Placeholder for new data entry */}
      <tr>
        <td className="py-2 px-4 border-b">Sia Mehta</td>
        <td className="py-2 px-4 border-b">Placeholder ID</td>
        <td className="py-2 px-4 border-b">Placeholder Address</td>
        <td className="py-2 px-4 border-b">Placeholder Phone</td>
        <td className="py-2 px-4 border-b">Placeholder Work</td>
        <td className="py-2 px-4 border-b">Placeholder Date</td>
        <td className="py-2 px-4 border-b">Placeholder Payment</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MajdoorsList;
