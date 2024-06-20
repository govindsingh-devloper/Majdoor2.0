import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleService } from '../../../../services/operations/MajdoorAuthAPI';

const SelectedMajdoor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleService = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getSingleService(id);
        setResponse(res);
      } catch (error) {
        setError('Error fetching service details');
        console.error("Error fetching service details:", error);
      }
      setLoading(false);
    };

    if (id) {
      fetchSingleService();
    }
  }, [id]);

  const handleConfirmSelection = () => {
    if (response) {
      navigate("/MajdoorConfirmation", { state: { response } });
    }
  };

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  if (!response) {
    return <p className="text-center text-lg">No response received</p>;
  }

  return (
    <div className="container mx-auto p-4" style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>

      <div style={{ backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>

        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>First Name: {response.data.firstName}</p>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Last Name: {response.data.lastName}</p>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Skill: {response.data.skills}</p>
        <button onClick={handleConfirmSelection} style={{ backgroundColor: '#007bff', color: '#ffffff', padding: '.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
          Confirm Booking
        </button>
      </div>
    </div>

  );
};

export default SelectedMajdoor;
