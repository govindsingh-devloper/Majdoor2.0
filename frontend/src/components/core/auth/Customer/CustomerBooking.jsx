import React from 'react'
import { useState, useEffect } from 'react'
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { useSelector } from 'react-redux';


const sectionClasses = 'p-2 border-b border-zinc-200 white:border-zinc-700'
const cardClasses = 'p-4 rounded-lg text-center'
const textClasses = 'text-white font-semibold'
const valueClasses = 'font-bold'


const CustomerBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingss, setBookingss] = useState([]);
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const userid = user ? user._id : null;
  const [approvedCount, setApprovedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  const getCustomerBookings = async () => {
    try {
      const response = await apiConnector("POST", ORDER_ENDPOINT.BOOKING_API, { userid }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      if (response.data.success) {
        setBookings(response.data.data);
        const counts = response.data.data.reduce((acc, item) => {
          if (item.status === 'approved') {
            acc.approved += 1;
          } else if (item.status === 'reject') {
            acc.rejected += 1;
          } else if (item.status === 'Pending') {
            acc.pending += 1;
          }
          return acc;
        }, { approved: 0, rejected: 0, pending: 0 });
        setApprovedCount(counts.approved);
        setRejectedCount(counts.rejected);
        setPendingCount(counts.pending);
      }
    } catch (error) {
      console.log("Customer Booking ERROR", error);
    }
  };


  useEffect(() => {
    getCustomerBookings();

  }, [])


  const getThekedarBookings = async () => {
    try {
      const response = await apiConnector("POST", ORDER_ENDPOINT.THEKEDARBOOKING_API, { userid }, {
        headers: {
          Authorization: `Bearer${token}`
        }
      })
      console.log("Thekedar's Data:",response.data)

      if (response.data.success) {
        setBookingss(response.data.data)
      }

    } catch (error) {
      console.log("Customer Booking ERROR", error)
    }
  };

  useEffect(() => {
    getThekedarBookings();
    
  }, [])


  return (
    <>
      <div className="container flex items-center justify-center gap-x-4">
        <img width="24" height="24" src="https://img.icons8.com/external-obvious-line-kerismaker/48/external-eid-ramadan-kareem-line-obvious-line-kerismaker-7.png" alt="external-eid-ramadan-kareem-line-obvious-line-kerismaker-7" />
        <div className="text-center text-3xl font-semibold">
          Namaste, {user.firstName}! Here is your Dashboard Overview.
        </div>
      </div>

      <div class="flex justify-center"></div>
      <section className={sectionClasses}>
        {/* <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2> */}
        {/* <p className="text-lg mb-2">
      Total Bookings: <span className="font-semibold">50</span>
    </p> */}
        {/* <p className="text-lg mb-2">
      Upcoming Bookings: <span className="font-semibold">15</span>
    </p>
    <p className="text-lg mb-4">
      Completed Bookings: <span className="font-semibold">25</span>
    </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`bg-green-400 light:bg-blue-800 ${cardClasses}`}>
            <p className={`text-2xl ${textClasses}`}> Approved Bookings:</p>
            <p className={`text-5xl ${valueClasses}`}>{approvedCount}</p>
          </div>
          <div className={`bg-red-400 light:bg-green-800 ${cardClasses}`}>
            <p className={`text-2xl ${textClasses}`}>Rejected Bookings:</p>
            <p className={`text-5xl ${valueClasses}`}>{rejectedCount}</p>
          </div>
          <div className={`bg-yellow-400 light:bg-yellow-800 ${cardClasses}`}>
            <p className={`text-2xl ${textClasses}`}>Pending Bookings:</p>
            <p className={`text-5xl ${valueClasses}`}>{pendingCount}</p>
          </div>
        </div>
      </section>


      <div className="container m-4">
        <div class="bg-zinc-100 p-4 rounded-lg shadow-lg  text-center">

          <h2 class="text-2xl font-bold mb-4">My Majdoor's Booking</h2>
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
                    <td className={`py-2 px-4 border-b ${item.status === 'approved' ? 'bg-green-500' : item.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                      {item.status}
                    </td>


                  </tr>
                ))}
              </tbody>
            </table>
          </div>
<br/><br/>
          <h2 class="text-2xl font-bold mb-4">My Thekedar's Booking</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-zinc-200">
              <thead>
                <tr class="bg-zinc-100">
                  <th class="py-2 px-4 border-b">Booking ID</th>
                  <th class="py-2 px-4 border-b">User ID</th>
                  <th class="py-2 px-4 border-b">Thekedar Name</th>
                  <th class="py-2 px-4 border-b">Location</th>
                  <th class="py-2 px-4 border-b">Number of Majdoors</th>
                  <th class="py-2 px-4 border-b">Status</th>

                </tr>
              </thead>
              <tbody>
                {bookingss && bookingss.map((item) => (
                  <tr key={item._id}>

                    <td class="py-2 px-4 border-b">{item._id}</td>
                    <td class="py-2 px-4 border-b">{user._id}</td>
                    <td class="py-2 px-4 border-b">{`${item.thekedar.firstName} ${item.thekedar.lastName}`}</td>
                    <td class="py-2 px-4 border-b">{item.thekedar.location}</td>
                    <td class="py-2 px-4 border-b">{item.thekedar.majdoors.length}</td>
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