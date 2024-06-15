import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSingleService } from '../../../../services/operations/MajdoorAuthAPI';

const SelectedMajdoor = () => {
    const {id}=useParams();
    console.log("ID",id)
    //Declare kra variable uski state ko store krne k lyie
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchSingleService = async () => {
            try {
                const res = await getSingleService(id);
                console.log("Response from backend:", res);
                setResponse(res);
            } catch (error) {
                console.log("Error fetching service details:", error);
            }
        };

        if (id) { // Ensure serviceId is valid before fetching data
            fetchSingleService();
        }
    }, [id]);
    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // if (!response) {
    //     return <p>No data received</p>;
    // }


   
  return (
    <div>
    {console.log(response)}
    {response && response.data && (
      <div>
      <p>firstName: {response.data.firstName}</p>
      <p>lastName:{response.data.lastName}</p>
      <p>Skills: {response.data.skills}</p>
     <Link to="/MajdoorConfirmation"> <button>Done Kree</button></Link>
      </div>
    )}
    {!response && <p>No response received</p>}
  </div>

  )
}

export default SelectedMajdoor