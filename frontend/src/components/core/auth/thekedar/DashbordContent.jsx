<<<<<<< Updated upstream
import React from 'react';
import { useSelector } from 'react-redux';

const NAV_ITEM_CLASSES = 'p-2 hover:bg-blue-100 light:hover:bg-zinc-800';
const CARD_CLASSES = 'bg-blue-50 light:bg-zinc-700 p-4 rounded-lg shadow-md';
const IMAGE_CLASSES = 'w-25 h-25';
const BUTTON_CLASSES = 'bg-blue-400 text-white p-2 rounded-lg';





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
=======
// import React, { useState,useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import {useTranslation} from 'react-i18next';
// import { Link, useNavigate } from "react-router-dom";
// import { ORDER_ENDPOINT } from '../../../../services/api';
// import { apiConnector } from '../../../../services/apiconnector';

// const sharedClasses = {
//   button: 'px-6 py-3 rounded text-white bg-blue-600 hover:bg-blue-700 transition',
//   link: 'block py-3 px-6 rounded transition duration-200 hover:bg-zinc-700 text-zinc-200',
//   activeLink: 'block py-3 px-6 rounded bg-blue-600 text-white transition duration-200',
//   tableHeader: 'px-6 py-3 text-left text-sm font-medium text-zinc-600 uppercase tracking-wider',
//   tableRow: 'px-6 py-4 whitespace-nowrap text-sm text-zinc-500',
// };

// const BookingTable = ({bookings}) => {
//   const { t }=useTranslation();
//   const { user } = useSelector((state) => state.profile);
//   const {token}=useSelector((state)=>state.auth)
//   return (
//     <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//       <table className="min-w-full divide-y divide-zinc-200">
//         <thead className="bg-zinc-50">
//           <tr>
//             <th className={sharedClasses.tableHeader}>{t("m2")}</th>
//             <th className={sharedClasses.tableHeader}>{t("m3")}</th>
//             <th className={sharedClasses.tableHeader}>{t("m4")}</th>
//             <th className={sharedClasses.tableHeader}>{t("m5")}</th>
//             <th className={sharedClasses.tableHeader}>{t("m6")}</th>
//             <th className={sharedClasses.tableHeader}>{t("m7")}</th>
//             <th className={sharedClasses.tableHeader}>{t("m8")}</th>
//             <th className={sharedClasses.tableHeader}>{t("m9")}</th>
//             <th className={sharedClasses.tableHeader}>{t("m10")}</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-zinc-200">
//         {bookings && bookings.map((booking) => (
//             <TableRow
//               key={booking._id} // Make sure each row has a unique key
//               name={booking.firstName}
//               bookingId={booking.bookingId}
//               address={booking.address}
//               phoneNumber={booking.phoneNumber}
//               work={user.skills}
//               date={booking.date}
//               cost={booking.cost}
//               status={booking.status}
//               n={booking.status}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const TableRow = ({ name, bookingId, address, phoneNumber, work, date, cost, status }) => {
//   return (
//     <tr>
//       <td className={sharedClasses.tableRow}>{name}</td>
//       <td className={sharedClasses.tableRow}>{bookingId}</td>
//       <td className={sharedClasses.tableRow}>{address}</td>
//       <td className={sharedClasses.tableRow}>{phoneNumber}</td>
//       <td className={sharedClasses.tableRow}>{work}</td>
//       <td className={sharedClasses.tableRow}>{date}</td>
//       <td className={sharedClasses.tableRow}>{cost}</td>
//       <td className={sharedClasses.tableRow}>{status}</td>
//       <td className={sharedClasses.tableRow}>

//         {/* <button className="text-green-500">{status === "Pending" ? "✔️" : ""}</button>
//         <button className="text-red-500">{status === "❌" ? "❌" : ""}</button> */}

//         {status==="Pending" &&(
//          <div>
//          <button>Approved</button>
//          <button>Reject</button>
//          </div>
//         )}
//       </td>
//     </tr>
//   );
// };


// const DashboardContent = () => {
//   const { t }=useTranslation();
//   const[bookings,setBookings]=useState([]);
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);
//   const userid = user ? user._id : null;
//   console.log(userid)
//   const getThekedarBookings=async()=>{
//     try {
//         const response=await apiConnector("POST",ORDER_ENDPOINT.THEKEDARBOOKING_API,{userid},{
//             headers:{
//                 Authorization:`Bearer${token}`
//             }
//         })
//         console.log(response.data)
//         if(response.data.success){
//             setBookings(response.data.data)
//             console.log('Bookings:', response.data.data);
//         }
        
//     } catch (error) {
//         console.log("Customer Booking ERROR",error)
//     }
// };

// useEffect(()=>{
//     getThekedarBookings();
    

// },[userid, token])



//   return (
//     <>
//     <section className="mb-8">
//       <h2 className="text-xl font-semibold mb-4">{t("m12")}</h2>
//       <BookingTable bookings={bookings}/>
//     </section>

//     <section>
//       <h2 className="text-xl font-semibold mb-4">{t("m13")}</h2>
//       <BookingTable />
//     </section>

   
//   </>

//   )
// };


// function RecordsContent() {

//   return (
//     <div><div class="bg-zinc-100 p-4 rounded-lg shadow-lg">
//   <div class="mb-4">
//     <nav class="text-sm text-zinc-500">
//       <a href="#" class="text-blue-500">डैशबोर्ड</a> / <a href="#">मेरा डैशबोर्ड</a>
//     </nav>
//   </div>
//   <h2 class="text-2xl font-bold mb-4">पिछली बुकिंग</h2>
//   <div class="overflow-x-auto">
//     <table class="min-w-full bg-white border border-zinc-200">
//       <thead>
//         <tr class="bg-zinc-100">
//           <th class="py-2 px-4 border-b">नाम</th>
//           <th class="py-2 px-4 border-b">बुकिंग आईडी</th>
//           <th class="py-2 px-4 border-b">पता</th>
//           <th class="py-2 px-4 border-b">फोन नंबर</th>
//           <th class="py-2 px-4 border-b">काम</th>
//           <th class="py-2 px-4 border-b">तारीख</th>
//           <th class="py-2 px-4 border-b">रकम</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td class="py-2 px-4 border-b flex items-center">
//             <div
//               class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2"
//             >
//               DK
//             </div>
//             दीया कपूर
//           </td>
//           <td class="py-2 px-4 border-b">23S100005</td>
//           <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
//           <td class="py-2 px-4 border-b">1288003456</td>
//           <td class="py-2 px-4 border-b">लकड़ी के सीढ़ी निर्माण</td>
//           <td class="py-2 px-4 border-b">12/10/2023 10:00</td>
//           <td class="py-2 px-4 border-b">200</td>
//         </tr>
//         <tr>
//           <td class="py-2 px-4 border-b flex items-center">
//             <div
//               class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-2"
//             >
//               M
//             </div>
//             मिशा
//           </td>
//           <td class="py-2 px-4 border-b">23S100089</td>
//           <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
//           <td class="py-2 px-4 border-b">1276603456</td>
//           <td class="py-2 px-4 border-b">वुड फर्नीचर निर्माण</td>
//           <td class="py-2 px-4 border-b">22/10/2023 13:00</td>
//           <td class="py-2 px-4 border-b">500</td>
//         </tr>
//         <tr>
//           <td class="py-2 px-4 border-b flex items-center">
//             <div
//               class="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-2"
//             >
//               MB
//             </div>
//             मीनू भंडारी
//           </td>
//           <td class="py-2 px-4 border-b">23S125005</td>
//           <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
//           <td class="py-2 px-4 border-b">1348003456</td>
//           <td class="py-2 px-4 border-b">फ्लोरिंग काम</td>
//           <td class="py-2 px-4 border-b">02/11/2023 14:00</td>
//           <td class="py-2 px-4 border-b">800</td>
//         </tr>
//         <tr>
//           <td class="py-2 px-4 border-b flex items-center">
//             <div
//               class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-2"
//             >
//               NS
//             </div>
//             निहारिका शर्मा
//           </td>
//           <td class="py-2 px-4 border-b">23S100876</td>
//           <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
//           <td class="py-2 px-4 border-b">1288008456</td>
//           <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
//           <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
//           <td class="py-2 px-4 border-b">100</td>
//         </tr>
//         <tr>
//           <td class="py-2 px-4 border-b flex items-center">
//             <div
//               class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2"
//             >
//               AT
//             </div>
//             अमित त्रिपाठी
//           </td>
//           <td class="py-2 px-4 border-b">23S100876</td>
//           <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
//           <td class="py-2 px-4 border-b">1288008456</td>
//           <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
//           <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
//           <td class="py-2 px-4 border-b">100</td>
//         </tr>
//         <tr>
//           <td class="py-2 px-4 border-b flex items-center">
//             <div
//               class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-2"
//             >
//               SG
//             </div>
//             संदेश गुप्ता
//           </td>
//           <td class="py-2 px-4 border-b">23S100876</td>
//           <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
//           <td class="py-2 px-4 border-b">1288008456</td>
//           <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
//           <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
//           <td class="py-2 px-4 border-b">100</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div></div>
//   )
// }

// export default RecordsContent


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { apiConnector } from '../../../../services/apiconnector';

const sharedClasses = {
  button: 'px-6 py-3 rounded text-white bg-blue-600 hover:bg-blue-700 transition',
  tableHeader: 'px-6 py-3 text-left text-sm font-medium text-zinc-600 uppercase tracking-wider',
  tableRow: 'px-6 py-4 whitespace-nowrap text-sm text-zinc-500',
};

const BookingTable = ({ bookings, handleStatusChange }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-zinc-200">
        <thead className="bg-zinc-50">
          <tr>
            <th className={sharedClasses.tableHeader}>{t("m2")}</th>
            <th className={sharedClasses.tableHeader}>{t("m3")}</th>
            <th className={sharedClasses.tableHeader}>{t("m4")}</th>
            <th className={sharedClasses.tableHeader}>{t("m5")}</th>
            <th className={sharedClasses.tableHeader}>{t("m6")}</th>
            <th className={sharedClasses.tableHeader}>{t("m7")}</th>
            <th className={sharedClasses.tableHeader}>{t("m8")}</th>
            <th className={sharedClasses.tableHeader}>{t("m9")}</th>
            <th className={sharedClasses.tableHeader}>{t("m10")}</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-zinc-200">
          {bookings && bookings.map((booking) => (
            <TableRow
              key={booking._id}
              booking={booking}
              handleStatusChange={handleStatusChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ booking, handleStatusChange }) => {
  const { firstName, bookingId, address, phoneNumber, work, date, cost, status } = booking;

  return (
    <tr>
      <td className={sharedClasses.tableRow}>{firstName}</td>
      <td className={sharedClasses.tableRow}>{bookingId}</td>
      <td className={sharedClasses.tableRow}>{address}</td>
      <td className={sharedClasses.tableRow}>{phoneNumber}</td>
      <td className={sharedClasses.tableRow}>{work}</td>
      <td className={sharedClasses.tableRow}>{date}</td>
      <td className={sharedClasses.tableRow}>{cost}</td>
      <td className={sharedClasses.tableRow}>{status}</td>
      <td className={sharedClasses.tableRow}>
        {status === "Pending" && (
          <div>
            <button className="text-green-500" onClick={() => handleStatusChange(bookingId, 'Approved')}>Approve</button>
            <button className="text-red-500" onClick={() => handleStatusChange(bookingId, 'Rejected')}>Reject</button>
          </div>
        )}
      </td>
    </tr>
  );
};

const DashboardContent = () => {
  const { t } = useTranslation();
  const [bookings, setBookings] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const getThekedarBookings = async () => {
    try {
      const response = await apiConnector("POST", ORDER_ENDPOINT.THEKEDARBOOKING_API, { userid: user._id }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setBookings(response.data.data);
      }
    } catch (error) {
      console.error("Customer Booking ERROR", error);
    }
  };

  const handleStatusChange = async (bookingId, status) => {
    try {
      const response = await apiConnector("PATCH", ORDER_ENDPOINT.UPDATE_BOOKING_STATUS, { bookingId, status }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.bookingId === bookingId ? { ...booking, status } : booking
          )
        );
      }
    } catch (error) {
      console.error("Error updating booking status", error);
    }
  };

  useEffect(() => {
    if (user && token) {
      getThekedarBookings();
    }
  }, [user, token]);

  return (
    <>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("m12")}</h2>
        <BookingTable bookings={bookings} handleStatusChange={handleStatusChange} />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">{t("m13")}</h2>
        {/* Other table or components */}
      </section>
    </>
  );
};

const RecordsContent = () => {
  return (
    <div className="bg-zinc-100 p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <nav className="text-sm text-zinc-500">
          <a href="#" className="text-blue-500">डैशबोर्ड</a> / <a href="#">मेरा डैशबोर्ड</a>
        </nav>
      </div>
      <h2 className="text-2xl font-bold mb-4">पिछली बुकिंग</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-zinc-200">
          <thead>
            <tr className="bg-zinc-100">
              <th className="py-2 px-4 border-b">नाम</th>
              <th className="py-2 px-4 border-b">बुकिंग आईडी</th>
              <th className="py-2 px-4 border-b">पता</th>
              <th className="py-2 px-4 border-b">फोन नंबर</th>
              <th className="py-2 px-4 border-b">काम</th>
              <th className="py-2 px-4 border-b">तारीख</th>
              <th className="py-2 px-4 border-b">रकम</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample static rows */}
            <tr>
              <td className="py-2 px-4 border-b flex items-center">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">DK</div>
                दीया कपूर
              </td>
              <td className="py-2 px-4 border-b">23S100005</td>
              <td className="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
              <td className="py-2 px-4 border-b">1288003456</td>
              <td className="py-2 px-4 border-b">लकड़ी के सीढ़ी निर्माण</td>
              <td className="py-2 px-4 border-b">12/10/2023 10:00</td>
              <td className="py-2 px-4 border-b">200</td>
            </tr>
            <tr>
             <td class="py-2 px-4 border-b flex items-center">
               <div
                 class="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-2"
               >
                 M
               </div>
               मिशा
             </td>
             <td class="py-2 px-4 border-b">23S100089</td>
             <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
             <td class="py-2 px-4 border-b">1276603456</td>
             <td class="py-2 px-4 border-b">वुड फर्नीचर निर्माण</td>
             <td class="py-2 px-4 border-b">22/10/2023 13:00</td>
             <td class="py-2 px-4 border-b">500</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordsContent;
>>>>>>> Stashed changes
