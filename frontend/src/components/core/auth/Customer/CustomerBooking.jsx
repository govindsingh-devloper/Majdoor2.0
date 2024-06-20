import React from 'react'
import { useState, useEffect } from 'react'
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { useSelector } from 'react-redux';

const CustomerBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const userid = user ? user._id : null;


  const getCustomerBookings = async () => {
    try {
      const response = await apiConnector("POST", ORDER_ENDPOINT.BOOKING_API, { userid }, {
        headers: {
          Authorization: `Bearer${token}`
        }
      })
      console.log(response.data)
      if (response.data.success) {
        setBookings(response.data.data)
      }

    } catch (error) {
      console.log("Customer Booking ERROR", error)
    }
  };

  useEffect(() => {
    getCustomerBookings();

  }, [])


  return (
    <>

      <div className="container m-4">
        <div class="bg-zinc-100 p-4 rounded-lg shadow-lg  text-center">

          <h2 class="text-2xl font-bold mb-4">My Bookings</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-zinc-200">
              <thead>
                <tr class="bg-zinc-100">
                  <th class="py-2 px-4 border-b">Booking ID</th>
                  <th class="py-2 px-4 border-b">User ID</th>
                  <th class="py-2 px-4 border-b">Majdoor Name</th>
                  <th class="py-2 px-4 border-b">Skills</th>
                  <th class="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings && bookings.map((item) => (
                  <tr key={item._id}>

                    <td class="py-2 px-4 border-b">{item._id}</td>
                    <td class="py-2 px-4 border-b">{user._id}</td>
                    <td class="py-2 px-4 border-b">{`${item.service.firstName} ${item.service.lastName}`}</td>
                    <td class="py-2 px-4 border-b">{item.service.skills}</td>
                    <td className={`py-2 px-4 border-b ${item.status === 'approved' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {item.status}
                    </td>


                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div></div>


    </>
  )
}

export default CustomerBooking