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
            <h2>Majdoors</h2>
            <div className="majdoors-container">
                {majdoors.map((majdoor) => (
                    <div key={majdoor._id} className="card">
                        <div className="card-body">
                            <h3 className="card-title">{majdoor.firstName} {majdoor.lastName}</h3>
                            <p className="card-text">Skills: {majdoor.skills}</p>
                            {/* Example: Display other majdoor details here */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MajdoorsList;
