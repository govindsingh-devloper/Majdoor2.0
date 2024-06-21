import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { useTranslation } from 'react-i18next';
import gImg8 from "../../../../images/labour-day-5147441_1280.png"

const CARD_CLASSES = 'bg-blue-50 light:bg-zinc-700 p-4 rounded-lg shadow-md';
const IMAGE_CLASSES = 'w-25 h-25';
const BUTTON_CLASSES = 'bg-blue-400 text-white p-2 rounded-lg';

const sectionClasses = 'p-2 border-b border-zinc-200 white:border-zinc-700'
const cardClasses = 'p-4 rounded-lg text-center'
const textClasses = 'text-white font-semibold'
const valueClasses = 'font-bold'


const sharedClasses = {
  NotificationButton: "w-50 h-10 flex items-center justify-start space-x-2.5 px-4 bg-gray-800 rounded-lg text-white border-none relative cursor-pointer transition duration-200",
  dot: 'absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rounded-full',
  bell: 'text-white w-7 m-2  ', // Adjust width as needed
  arrow: 'absolute right-0 w-7.5 h-full text-lg flex items-center justify-center animate-slide-right',

  button: 'px-12 py-3 rounded text-white bg-blue-600 hover:bg-blue-700 transition',
  link: 'block py-3 px-6 rounded transition duration-200 hover:bg-zinc-700 text-zinc-200',
  activeLink: 'block py-3 px-12 rounded bg-blue-600 text-white transition duration-200',
  tableHeader: 'px-6 py-3 text-left text-sm font-medium text-zinc-600 uppercase tracking-wider',
  tableRow: 'px-6 py-4 whitespace-nowrap text-sm text-zinc-500',
  HeaderImage: " w-400 h-80  bg-contain bg-center",
  button: 'px-6 py-3 rounded text-white bg-blue-600 hover:bg-blue-700 transition',


  link: 'block py-3 px-6 rounded transition duration-200 hover:bg-zinc-700 text-zinc-200',

  activeLink: 'block py-3 px-6 rounded bg-blue-600 text-white transition duration-200',

  tableHeader: 'px-6 py-3 text-left text-xl font-bold text-zinc-700 uppercase tracking-wider',
  tableRow: 'px-6 py-4 whitespace-nowrap text-lg font-bold text-zinc-700',

};

const BookingTable = ({ bookings }) => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth)
  console.log("Merigh",bookings.length);
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
              key={booking._id} // Make sure each row has a unique key
              name={booking.firstName}
              bookingId={booking._id}
              address={booking.address}
              phoneNumber={booking.phoneNumber}
              work={user.skills}
              date={booking.date}
              cost={booking.cost}
              status={booking.status}
              n={booking.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
const TableRow = ({ name, bookingId, address, phoneNumber, work, date, cost, status }) => {
  const [approvalStatus, setApprovalStatus] = useState(null);

  const handleApprove = () => {
    setApprovalStatus('approved');
    // Call an API or perform any other action for approval
  };

  const handleReject = () => {
    setApprovalStatus('rejected');
    // Call an API or perform any other action for rejection
  };

  const {token}=useSelector((state)=>state.auth)

  const handleAccountStatus=async(bookingId,status)=>{
    try {
      const ps=await apiConnector("PUT",ORDER_ENDPOINT.STATUS_UPDATE_T,{bookingId,status},{
        headers:{
          Authorization:`Bearer${token}`
        }
      })
      if(ps.data.success){
        console.log(ps.data.message)
      }
      
    } catch (error) {
      console.log("Bhai Error aa gyi",error.message)

      
    }
  }
  // useEffect(()=>{
  //   handleAccountStatus()
  // },[])

  // const {orders}=useSelector((state)=>state.orders)
  // console.log("Mere saare Orders",orders)
  return (
    <tr>
      <td className={sharedClasses.tableRow}>{name}</td>
      <td className={sharedClasses.tableRow}>{bookingId}</td>
      <td className={sharedClasses.tableRow}>{address}</td>
      <td className={sharedClasses.tableRow}>{phoneNumber}</td>
      <td className={sharedClasses.tableRow}>{work}</td>
      <td className={sharedClasses.tableRow}>{date}</td>
      <td className={sharedClasses.tableRow}>{cost}</td>
      <td className={sharedClasses.tableRow}>

        {/* <button className="text-green-500">{status === "Pending" ? "✔️" : ""}</button>
        <button className="text-red-500">{status === "❌" ? "❌" : ""}</button> */}

        {status==="Pending" &&(
         <div>
         <button onClick={()=>handleAccountStatus(bookingId,"approved")}>Approved</button>
         <button onClick={()=>handleAccountStatus(bookingId,"reject")}>Reject</button>
         </div>
        )}
      </td>
    </tr>
  );
}




const DashboardContents = () => {
  const { t } = useTranslation();
  const [bookings, setBookings] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const userid = user ? user._id : null;
  console.log(userid)
  const getThekedarBookings = async () => {
    try {
      const response = await apiConnector("POST", ORDER_ENDPOINT.THEKEDAR_BOOKING, { userid }, {
        headers: {
          Authorization: `Bearer${token}`
        }
      })
      console.log("esrg",response.data)
      if (response.data.success) {
        setBookings(response.data.data)
        console.log('Bookings:', response.data.data);
        console.log('Bookings',response.data.data.length);
      }

    } catch (error) {
      console.log("Customer Booking ERROR", error)
    }
  };

  useEffect(() => {
    getThekedarBookings();


  }, [userid, token])



  return (
    <>
      

 <div className="container flex items-center justify-center gap-x-4">
<img width="24" height="24" src="https://img.icons8.com/external-obvious-line-kerismaker/48/external-eid-ramadan-kareem-line-obvious-line-kerismaker-7.png" alt="external-eid-ramadan-kareem-line-obvious-line-kerismaker-7"/>  
 <div className="text-center text-3xl font-semibold">
    Namaste, {user.firstName}!
  </div>
</div>
<div className="container">
        <div class="flex justify-center">

        </div>
        <section className={sectionClasses}>
          <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className={`bg-blue-400 light:bg-blue-800 ${cardClasses}`}>
              <p className={`text-xl ${textClasses}`}>Completed Jobs</p>
              <p className={`text-3xl ${valueClasses}`}>25</p>
            </div>
            <div className={`bg-green-400 light:bg-green-800 ${cardClasses}`}>
              <p className={`text-xl ${textClasses}`}>Ratings</p>
              <p className={`text-3xl ${valueClasses}`}>4.8</p>
            </div>
            <div className={`bg-yellow-400 light:bg-yellow-800 ${cardClasses}`}>
              <p className={`text-xl ${textClasses}`}>Earnings</p>
              <p className={`text-3xl ${valueClasses}`}>₹ 1500</p>
            </div>
          </div>



          {/* <div className="mt-4">
              <img
                src="https://placehold.co/600x300"
                alt="Monthly Earnings Chart"
                className="w-full rounded-lg shadow"
              />
            </div> */}
          <br /><br />
        </section>
        <h2 className="text-xl font-semibold mb-4">{t("m12")}</h2>
        <BookingTable bookings={bookings} />
      </div>

      {/* <section>
        <h2 className="text-xl font-semibold mb-4">{t("m13")}</h2>
        <BookingTable />
      </section> */}

      {/* <img
        src={gImg8}
        alt="Dashboard Carousel"
        className={sharedClasses.HeaderImage}
        crossOrigin="anonymous"
      /> */}
    </>

  )
};


function BookingsContent({ userName }) {
    const { user } = useSelector((state) => state.profile);
  
    return (
      <>
      <DashboardContents/>
      </>
    );
  }
  
  export default BookingsContent;