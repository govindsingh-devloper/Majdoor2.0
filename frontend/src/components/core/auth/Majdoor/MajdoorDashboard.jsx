import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import IconBtn from '../../../common/IconBtn';
import { Link, useNavigate } from "react-router-dom"
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { RiEditBoxLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import gImg6 from "../../../../images/19340.jpg"
import gImg7 from "../../../../images/worker.jpg"
import gImg8 from "../../../../images/labour-day-5147441_1280.png"
import PropTypes from 'prop-types';



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

const Sidebar = ({ activeContent, onContentChange }) => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { t } = useTranslation();
  const [pendingCount, setPendingCount] = useState(0);
  const userid = user ? user._id : null;

  const getPendingBookingsCount = async () => {
    try {
      const response = await apiConnector("POST", ORDER_ENDPOINT.MAJDOORBOOKING_API, { userid }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        const pendingBookings = response.data.data.filter(booking => booking.status === 'Pending');
        setPendingCount(pendingBookings.length);
      }
    } catch (error) {
      console.error("Error fetching pending bookings count", error);
    }
  };

  useEffect(() => {
    getPendingBookingsCount();
  }, [userid, token]);

  const renderButton = (label) => (
    <button
      onClick={() => onContentChange(label)}
      className={activeContent === label ? sharedClasses.activeLink : sharedClasses.link}
    >
      {label}
    </button>
  );

  return (
    <aside className="bg-zinc-800 text-zinc-200 w-72 space-y-6 py-8 px-4">
      <button className={sharedClasses.NotificationButton}>
        <svg className={sharedClasses.bell} viewBox="0 0 448 512">
          <path
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
          ></path>
        </svg>
        Notifications
        <div className={sharedClasses.arrow}>›</div>
        {pendingCount > 0 && <div className={sharedClasses.dot}>{pendingCount}</div>}
      </button>
      <nav>
        {renderButton(t('m1'))}
        {renderButton(t('m11'))}
        {renderButton(t('m15'))}
        {renderButton(t('m16'))}
        {renderButton(t('m17'))}
      </nav>
      <div className="border-t border-zinc-700 mt-6 pt-6">
        {renderButton(t('m18'))}
        {renderButton(t('m19'))}
      </div>
    </aside>
  );
};


const MainContent = ({ activeContent }) => {
  const { t } = useTranslation();
  let content;
  switch (activeContent) {
    case t('m1'):
      content = <DashboardContent />;
      break;
    case t('m11'):
      content = <RecordsContent />;
      break;
    case t('m15'):
      content = <AttendanceContent />;
      break;
    case t('m16'):
      content = <ProfileContent />;
      break;
    case t('m17'):
      content = <LaborRightsContent />;
      break;
    case t('m18'):
      content = <HelpContent />;
      break;
    case t('m19'):
      content = <SettingsAndSupportContent />;
      break;
    default:
      content = <DashboardContent />;
  }

  return (
    <div className="flex-1 bg-zinc-100 text-zinc-900">
      <main className="p-6">
        {content}
      </main>
    </div>
  );
};




const ConfirmationBookingTable = ({ bookings }) => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-zinc-200">
        <thead className="bg-zinc-50">
          <tr>
            {["m2", "m3", "m4", "m5", "m6",  "m9", ].map((header) => (
              <th key={header} className={sharedClasses.tableHeader}>{t(header)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-zinc-200">
          {bookings.length > 0 ? bookings.map((booking) => (
            <TableRow
              key={booking._id}
              name={booking.firstName}
              bookingId={booking._id}
              address={booking.address}
              phoneNumber={booking.phoneNumber}
              work={user.skills}
              // date={booking.date}
              // cost={booking.cost}
              status={booking.status}
            />
          )) : (
            <tr>
              <td colSpan="9" className="text-center">{t("No bookings available")}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

ConfirmationBookingTable.propTypes = {
  bookings: PropTypes.array.isRequired
};
const TableRow = ({ name, bookingId, address, phoneNumber, work, date, cost, status }) => {
  const [approvalStatus, setApprovalStatus] = useState(status);
  const { token } = useSelector((state) => state.auth);

  const handleAccountStatus = async (bookingId, status) => {
    try {
      const response = await apiConnector("PUT", ORDER_ENDPOINT.STATUSUPDATE_API, { bookingId, status }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        setApprovalStatus(status);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  return (
    <tr>
      <td className={sharedClasses.tableRow}>{name}</td>
      <td className={sharedClasses.tableRow}>{bookingId}</td>
      <td className={sharedClasses.tableRow}>{address}</td>
      <td className={sharedClasses.tableRow}>{phoneNumber}</td>
      <td className={sharedClasses.tableRow}>{work}</td>
      {/* <td className={sharedClasses.tableRow}>{date}</td>
      <td className={sharedClasses.tableRow}>{cost}</td> */}
      <td className={sharedClasses.tableRow}>
        {approvalStatus === "Pending" ? (
          <div>
            <button className="text-green-500" onClick={() => handleAccountStatus(bookingId, "approved")}>Approve</button>
            <button className="text-red-500" onClick={() => handleAccountStatus(bookingId, "rejected")}>Reject</button>
          </div>
        ) : (
          <span>{approvalStatus}</span>
        )}
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  bookingId: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
};





const DashboardContent = () => {
  const { t } = useTranslation();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const userid = user ? user._id : null;

  const getMajdoorBookings = async () => {
    try {
      const response = await apiConnector("POST", ORDER_ENDPOINT.MAJDOORBOOKING_API, { userid }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        setBookings(response.data.data);
      }
    } catch (error) {
      console.error("Customer Booking ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userid && token) {
      getMajdoorBookings();
    }
  }, [userid, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container flex items-center justify-center gap-x-4">
        <img width="24" height="24" src="https://img.icons8.com/external-obvious-line-kerismaker/48/external-eid-ramadan-kareem-line-obvious-line-kerismaker-7.png" alt="Greeting Icon" />
        <div className="text-center text-3xl font-semibold">Namaste, {user.firstName}!</div>
      </div>
      <div className="container">
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
          <h2 className="text-xl font-semibold mb-4">{t("m12")}</h2>
          <ConfirmationBookingTable bookings={bookings} />
        </section>
        <img src={gImg8} alt="Dashboard Carousel" className={sharedClasses.HeaderImage} crossOrigin="anonymous" />
      </div>
    </>
  );
};


const RecordsContent = () => {
  const { t } = useTranslation();
  const [bookings, setBookings] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const userid = user ? user._id : null;

  const getMajdoorBookings = async () => {
    try {
      const response = await apiConnector("POST", ORDER_ENDPOINT.MAJDOORBOOKING_API, { userid }, {
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

  useEffect(() => {
    getMajdoorBookings();
  }, [userid, token]);

  const handleAccountStatus = async (bookingId, status) => {
    try {
      const response = await apiConnector("PUT", ORDER_ENDPOINT.STATUSUPDATE_API, { bookingId, status }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        console.log(response.data.message);
        // Optionally refresh bookings or update state to reflect the change
        getMajdoorBookings();
      }
    } catch (error) {
      console.error("Error updating booking status", error.message);
    }
  };

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
              <th className="py-2 px-4 border-b">स्थिति</th>
            </tr>
          </thead>
          <tbody>
            {bookings.filter(booking => booking.status === 'Pending').map(booking => (
              <tr key={booking._id}>
                <td className="py-2 px-4 border-b flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">
                    {booking.firstName[0]}
                  </div>
                  {booking.firstName}
                </td>
                <td className="py-2 px-4 border-b">{booking._id}</td>
                <td className="py-2 px-4 border-b">{booking.address}</td>
                <td className="py-2 px-4 border-b">{booking.phoneNumber}</td>
                <td className="py-2 px-4 border-b">{user.skills}</td>
                <td className="py-2 px-4 border-b">{booking.date}</td>
                <td className="py-2 px-4 border-b">{booking.cost}</td>
                <td className="py-2 px-4 border-b">
                  <div>
                    <button className="text-green-500 mr-2" onClick={() => handleAccountStatus(booking._id, "approved")}>Approve</button>
                    <button className="text-red-500" onClick={() => handleAccountStatus(booking._id, "rejected")}>Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AttendanceContent = () => {
  return <div><div class="bg-zinc-100 min-h-screen p-4">
    <div class="bg-white p-4 rounded-lg shadow-md">
      <nav class="flex items-center space-x-2 text-blue-500">
        <a href="#" class="hover:underline">डैशबोर्ड</a>
        <span>/</span>
        <a href="#" class="hover:underline">मेरा डैशबोर्ड</a>
      </nav>
      <div class="mt-6">
        <div class="flex justify-between items-center">
          <span>प्राथमिक</span>
          <span>विशेष</span>
        </div>
        <div class="bg-zinc-300 h-6 rounded-full mt-2 relative">
          <div class="bg-blue-500 h-full rounded-full w-1/2"></div>
        </div>
      </div>

      <div class="mt-6 text-center">
        <img src="https://placehold.co/50x50" alt="Star" class="inline-block" />
        <div class="text-lg mt-2">रेटिंग</div>
        <div class="text-2xl font-bold">4.0/5</div>
      </div>

      <div class="mt-6 bg-zinc-100 p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-4">कमेंट्स</h3>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <span
              class="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center"
            >KS</span
            >
            <span class="flex-1">के एस चौधरी</span>
            <span>काम में संलग्न हैं, बढ़िया काम किया</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center"
            >VY</span
            >
            <span class="flex-1">विकास यादव</span>
            <span>काम बेहतरीन प्रोफेशनल और कारगरतुल्य है</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center"
            >SN</span
            >
            <span class="flex-1">साली नगर</span>
            <span>काम ने मेरी समस्या को खुद हल किया, बढ़िया!</span>
          </div>
          <div class="flex items-center space-x-2">
            <span
              class="bg-yellow-500 text-white rounded-full h-8 w-8 flex items-center justify-center"
            >PV</span
            >
            <span class="flex-1">प्रकाश वेद</span>
            <span>मैं काम के साथ संतुष्ट हूं, इन्होंने अच्छा काम किया</span>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-semibold mb-4">मेरी उन्नति</h3>
        <img src="https://placehold.co/600x300" alt="Graph" />
      </div>
    </div>
  </div>
  </div>;
};

const ProfileContent = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate()



  return <div><div class="p-4 bg-zinc-100 light:bg-zinc-800">
    <div class="flex items-center mb-4">
      <a href="#" class="text-blue-500">डैशबोर्ड</a>
      <span class="mx-2 text-zinc-500">/</span>
      <span class="text-zinc-500">मेरा डैशबोर्ड</span>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
        <div className="h-20 w-20 relative">
          <img
            className="h-20 w-20 object-fit rounded-full"
            src={user?.image}
            alt="User Profile"
          />
        </div>
      </div>
      <div class="flex-grow">
        <h1 class="text-2xl font-bold">{user.firstName}</h1>
        <h2 class="text-zinc-500 light:text-zinc-400 mb-2">मेरा परिचय</h2>
        <p class="text-zinc-700 light:text-zinc-300 mb-4">
          {user?.additionalDetails?.about ||
            'Write something about yourself'}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-zinc-500 light:text-zinc-400">सर्विस</label>
            <div class="bg-zinc-200 light:bg-zinc-700 p-2 rounded">{user.skills}</div>
          </div>
          <div>
            <label class="block text-zinc-500 light:text-zinc-400">शुल्क/घंटा</label>
            <div class="bg-zinc-200 light:bg-zinc-700 p-2 rounded">200</div>
          </div>
          <div>
            <label class="block text-zinc-500 light:text-zinc-400">जगह</label>
            <div class="bg-zinc-200 light:bg-zinc-700 p-2 rounded">{user.location}</div>
          </div>
          <div>
            <label class="block text-zinc-500 light:text-zinc-400">स्थिति</label>
            <div class="bg-zinc-200 light:bg-zinc-700 p-2 rounded">उपलब्ध</div>
          </div>
        </div>
        <IconBtn text="Edit"
          onclick={() => {
            navigate("/CustomerDashboard/Edit")
          }}>
          <RiEditBoxLine />
        </IconBtn>
      </div>

    </div>
    <div class="mt-4">
      <h2 class="text-zinc-500 light:text-zinc-400 mb-2">मेरी गैलरी</h2>
      <div class="flex items-center">
        <img src="https://placehold.co/100x100" alt="Gallery Image" class="rounded" />
      </div>
    </div>
  </div>
  </div>;
};

const LaborRightsContent = () => {

  return <div><div className="p-4">
    <nav className="text-sm text-zinc-500 mb-4">
      <a href="#" className="text-blue-500">डैशबोर्ड</a> / <span>मेरा डैशबोर्ड</span>
    </nav>
    <h2 className="text-lg font-semibold mb-4">श्रम अधिकार</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <a href="https://www.youtube.com/watch?v=lP-y9_NXVAU?si=uq2DShO9Nk5h3KOx" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src="https://img.youtube.com/vi/lP-y9_NXVAU/0.jpg" alt="Image 1" className="w-full h-55 object-fit" />
        <div className="p-4">
          <h3 className="text-md font-semibold">
          श्रम अधिकार - परिचय</h3>
          <p className="text-sm text-zinc-500 mt-2">
          श्रम अधिकार के बारे में जानें।</p>
        </div>
      </a>
      <a href="https://www.youtube.com/watch?v=QcVPILsV84Q?si=r66LqomBDOssfn5j" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src="https://img.youtube.com/vi/QcVPILsV84Q/0.jpg" alt="Image 2" className="w-full h-55 object-fit" />
        <div className="p-4">
          <h3 className="text-md font-semibold">10 श्रम कानूनों को अवश्य जानना चाहिए - विवरण</h3>
          <p className="text-sm text-zinc-500 mt-2">10 श्रम कानूनों को अवश्य जानना चाहिए का विवरण।</p>
        </div>
      </a>
      <a href="https://www.youtube.com/watch?v=xg43pudL1Ko?si=nBWVBumxMeguwHwg" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src="https://img.youtube.com/vi/xg43pudL1Ko/0.jpg" alt="Image 3" className="w-full h-55 object-fit" />
        <div className="p-4">
          <h3 className="text-md font-semibold">श्रम कानून न्यूनतम वेतन 1948 जानकारी</h3>
          <p className="text-sm text-zinc-500 mt-2">श्रम कानून न्यूनतम वेतन 1948 के मुख्य बिंदु।</p>
        </div>
      </a>
      <a href="https://www.youtube.com/watch?v=kePyliKqy0o?si=bPFVNYYPpjetmzq7" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src="https://img.youtube.com/vi/kePyliKqy0o/0.jpg" alt="Image 4" className="w-full h-55 object-fit" />
        <div className="p-4">
          <h3 className="text-md font-semibold">श्रम कानून की व्याख्या।</h3>
          <p className="text-sm text-zinc-500 mt-2">श्रम कानून की व्याख्या।</p>
        </div>
      </a>

    </div>
  </div>

  </div>;
};

const HelpContent = () => {
  return <div><div className="flex h-screen bg-zinc-100 light:bg-zinc-900">
    <div className="w-1/4 bg-white light:bg-zinc-800 p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="खोजें"
          className="w-full p-2 rounded-lg bg-zinc-200 light:bg-zinc-700 text-zinc-900 light:text-zinc-100"
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center p-2 bg-blue-100 light:bg-blue-900 rounded-lg">
          <img
            src="https://placehold.co/40x40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <div className="text-sm font-semibold text-zinc-900 light:text-zinc-100">
              उपयोगकर्ता नाम
            </div>
            <div className="text-xs text-zinc-600 light:text-zinc-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
        <div className="flex items-center p-2 bg-zinc-100 light:bg-zinc-700 rounded-lg">
          <img
            src="https://placehold.co/40x40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <div className="text-sm font-semibold text-zinc-900 light:text-zinc-100">
              उपयोगकर्ता नाम
            </div>
            <div className="text-xs text-zinc-600 light:text-zinc-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 flex flex-col bg-zinc-50 light:bg-zinc-800 p-4">
      <div className="flex items-center mb-4">
        <img
          src="https://placehold.co/40x40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="text-lg font-semibold text-zinc-900 light:text-zinc-100">
          उपयोगकर्ता नाम
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4">
        <div className="flex justify-start">
          <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
            Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-zinc-200 light:bg-zinc-700 text-zinc-900 light:text-zinc-100 p-3 rounded-lg max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="संदेश..."
          className="flex-1 p-2 rounded-lg bg-zinc-200 light:bg-zinc-700 text-zinc-900 light:text-zinc-100"
        />
        <button className="ml-2 bg-blue-500 text-white p-2 rounded-lg">भेजें</button>
      </div>
    </div>
  </div></div>;
};

const SettingsAndSupportContent = () => {
  return <div>सेटिंग्स और समर्थन </div>;
};

const DefaultContent = () => {
  const { t } = useTranslation();
  return <div>{t('m14')}</div>;
};

const ReactComponent = () => {
  const [activeContent, setActiveContent] = useState('डैशबोर्ड');

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar onContentChange={handleContentChange} />
      <MainContent activeContent={activeContent} />
    </div>
  );
};

export default ReactComponent;
