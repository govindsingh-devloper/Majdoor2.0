import React, { useState,useEffect } from 'react'
import { Link,  useHistory,useNavigate,useParams } from 'react-router-dom'
import { getSingleService } from '../../../../services/operations/MajdoorAuthAPI';


const SelectedMajdoor = () => {
  const navigate=useNavigate()
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

    console.log("Response data:", response ? response.data : null);
    const handleConfirmSelection = () => {
      if (response) {
        navigate(
          // pathname: "/MajdoorConfirmation",
          // state: { response } // Pass majdoorDetails as state
          "/MajdoorConfirmation",{state:{response}}
        );
      }
    };
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
      {/* <Link to={{
  pathname: `/MajdoorConfirmation/${response.data._id}`,
  state: { majdoorDetails: response.data}
}}>
  <button>Confirm Majdoor Selection</button>
</Link> */}
<button onClick={handleConfirmSelection}>Confirm Booking</button>
      </div>
    )}
    {/* <MajdoorBookingConfirmation response ={response}/> */}
    {!response && <p>No response received</p>}
  </div>

  )
}

export default SelectedMajdoor