import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import IconBtn from '../../../common/IconBtn';
import { Link, useNavigate } from "react-router-dom"
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { RiEditBoxLine } from 'react-icons/ri';







const sharedClasses = {
  button: 'px-6 py-3 rounded text-white bg-blue-600 hover:bg-blue-700 transition',
  link: 'block py-3 px-6 rounded transition duration-200 hover:bg-zinc-700 text-zinc-200',
  activeLink: 'block py-3 px-6 rounded bg-blue-600 text-white transition duration-200',
  tableHeader: 'px-6 py-3 text-left text-sm font-medium text-zinc-600 uppercase tracking-wider',
  tableRow: 'px-6 py-4 whitespace-nowrap text-sm text-zinc-500',
};

const Sidebar = ({ activeContent, onContentChange }) => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

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
      <div className="text-center text-3xl font-semibold">Hi, {user.firstName}!</div>
      <nav>
        {renderButton('डैशबोर्ड')}
        {renderButton('रिकॉर्ड')}
        {renderButton('उपस्थिति')}
        {renderButton('प्रोफाइल')}
        {renderButton('श्रम अधिकार')}
      </nav>
      <div className="border-t border-zinc-700 mt-6 pt-6">
        {renderButton('सहायता')}
        {renderButton('सेटिंग्स और समर्थन')}
      </div>
    </aside>
  );
};

const MainContent = ({ activeContent }) => {
  let content;
  switch (activeContent) {
    case 'डैशबोर्ड':
      content = <DashboardContent />;
      break;
    case 'रिकॉर्ड':
      content = <RecordsContent />;
      break;
    case 'उपस्थिति':
      content = <AttendanceContent />;
      break;
    case 'प्रोफाइल':
      content = <ProfileContent />;
      break;
    case 'श्रम अधिकार':
      content = <LaborRightsContent />;
      break;
    case 'सहायता':
      content = <HelpContent />;
      break;
    case 'सेटिंग्स और समर्थन':
      content = <SettingsAndSupportContent />;
      break;
    default:
      content = <DefaultContent />;
  }

  return (
    <div className="flex-1 bg-zinc-100 text-zinc-900">
      <main className="p-6">
        {content}
      </main>
    </div>
  );
};


const BookingTable = ({bookings}) => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-zinc-200">
        <thead className="bg-zinc-50">
          <tr>
            <th className={sharedClasses.tableHeader}>नाम</th>
            <th className={sharedClasses.tableHeader}>बुकिंग आईडी</th>
            <th className={sharedClasses.tableHeader}>पता</th>
            <th className={sharedClasses.tableHeader}>फोन नंबर</th>
            <th className={sharedClasses.tableHeader}>काम</th>
            <th className={sharedClasses.tableHeader}>तारीख</th>
            <th className={sharedClasses.tableHeader}>लागत</th>
            

            <th className={sharedClasses.tableHeader}>status</th>
            <th className={sharedClasses.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-zinc-200">
        {bookings && bookings.map((booking) => (
            <TableRow
              key={booking._id} // Make sure each row has a unique key
              name={booking.firstName}
              bookingId={booking.bookingId}
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
  return (
    <tr>
      <td className={sharedClasses.tableRow}>{name}</td>
      <td className={sharedClasses.tableRow}>{bookingId}</td>
      <td className={sharedClasses.tableRow}>{address}</td>
      <td className={sharedClasses.tableRow}>{phoneNumber}</td>
      <td className={sharedClasses.tableRow}>{work}</td>
      <td className={sharedClasses.tableRow}>{date}</td>
      <td className={sharedClasses.tableRow}>{cost}</td>
      <td className={sharedClasses.tableRow}>{status}</td>
      <td className={sharedClasses.tableRow}>

        {/* <button className="text-green-500">{status === "Pending" ? "✔️" : ""}</button>
        <button className="text-red-500">{status === "❌" ? "❌" : ""}</button> */}

        {status==="Pending" &&(
         <div>
         <button>Approved</button>
         <button>Reject</button>
         </div>
        )}
      </td>
    </tr>
  );
};





const DashboardContent = () => {
  const[bookings,setBookings]=useState([]);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const userid = user ? user._id : null;
  console.log(userid)
  const getMajdoorBookings=async()=>{
    try {
        const response=await apiConnector("POST",ORDER_ENDPOINT.MAJDOORBOOKING_API,{userid},{
            headers:{
                Authorization:`Bearer${token}`
            }
        })
        console.log(response.data)
        if(response.data.success){
            setBookings(response.data.data)
            console.log('Bookings:', response.data.data);
        }
        
    } catch (error) {
        console.log("Customer Booking ERROR",error)
    }
};

useEffect(()=>{
    getMajdoorBookings();

},[userid, token])
  return (
    <>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">नई बुकिंग</h2>
      <BookingTable bookings={bookings}/>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-4">मेरा आरक्षण</h2>
      <BookingTable />
    </section>

   
  </>

  )
};

const RecordsContent = () => {
  return <div><div class="bg-zinc-100 p-4 rounded-lg shadow-lg">
  <div class="mb-4">
    <nav class="text-sm text-zinc-500">
      <a href="#" class="text-blue-500">डैशबोर्ड</a> / <a href="#">मेरा डैशबोर्ड</a>
    </nav>
  </div>
  <h2 class="text-2xl font-bold mb-4">पिछली बुकिंग</h2>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-zinc-200">
      <thead>
        <tr class="bg-zinc-100">
          <th class="py-2 px-4 border-b">नाम</th>
          <th class="py-2 px-4 border-b">बुकिंग आईडी</th>
          <th class="py-2 px-4 border-b">पता</th>
          <th class="py-2 px-4 border-b">फोन नंबर</th>
          <th class="py-2 px-4 border-b">काम</th>
          <th class="py-2 px-4 border-b">तारीख</th>
          <th class="py-2 px-4 border-b">रकम</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              DK
            </div>
            दीया कपूर
          </td>
          <td class="py-2 px-4 border-b">23S100005</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1288003456</td>
          <td class="py-2 px-4 border-b">लकड़ी के सीढ़ी निर्माण</td>
          <td class="py-2 px-4 border-b">12/10/2023 10:00</td>
          <td class="py-2 px-4 border-b">200</td>
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
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              MB
            </div>
            मीनू भंडारी
          </td>
          <td class="py-2 px-4 border-b">23S125005</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1348003456</td>
          <td class="py-2 px-4 border-b">फ्लोरिंग काम</td>
          <td class="py-2 px-4 border-b">02/11/2023 14:00</td>
          <td class="py-2 px-4 border-b">800</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              NS
            </div>
            निहारिका शर्मा
          </td>
          <td class="py-2 px-4 border-b">23S100876</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1288008456</td>
          <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
          <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
          <td class="py-2 px-4 border-b">100</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              AT
            </div>
            अमित त्रिपाठी
          </td>
          <td class="py-2 px-4 border-b">23S100876</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1288008456</td>
          <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
          <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
          <td class="py-2 px-4 border-b">100</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border-b flex items-center">
            <div
              class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-2"
            >
              SG
            </div>
            संदेश गुप्ता
          </td>
          <td class="py-2 px-4 border-b">23S100876</td>
          <td class="py-2 px-4 border-b">123 एम स्ट्रीटसिटीविले, XX 12345 जानकपुरी</td>
          <td class="py-2 px-4 border-b">1288008456</td>
          <td class="py-2 px-4 border-b">लकड़ी के पुर्जों की मरम्मत और नवाचयन</td>
          <td class="py-2 px-4 border-b">12/10/2023 18:00</td>
          <td class="py-2 px-4 border-b">100</td>
        </tr>
      </tbody>
    </table>
  </div>
</div></div>;
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
                className="h-20 w-20 object-cover rounded-full"
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
          <div class="bg-zinc-200 light:bg-zinc-700 p-2 rounded">कारपेंटर</div>
        </div>
        <div>
          <label class="block text-zinc-500 light:text-zinc-400">शुल्क/घंटा</label>
          <div class="bg-zinc-200 light:bg-zinc-700 p-2 rounded">200</div>
        </div>
        <div>
          <label class="block text-zinc-500 light:text-zinc-400">जगह</label>
          <div class="bg-zinc-200 light:bg-zinc-700 p-2 rounded">उत्तम नगर</div>
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
      <a href="#" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src="https://placehold.co/300x200" alt="Image 1" className="w-full h-48 object-cover"/>
          <div className="p-4">
              <h3 className="text-md font-semibold">ट्रेड यूनियन एक्ट, 1926</h3>
              <p className="text-sm text-zinc-500 mt-2">विवरण देखें</p>
          </div>
      </a>
      <a href="#" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src="https://placehold.co/300x200" alt="Image 2" className="w-full h-48 object-cover"/>
          <div className="p-4">
              <h3 className="text-md font-semibold">मजदूरी भुगतान एक्ट, 1936</h3>
              <p className="text-sm text-zinc-500 mt-2">विवरण देखें</p>
          </div>
      </a>
      <a href="#" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src="https://placehold.co/300x200" alt="Image 3" className="w-full h-48 object-cover"/>
          <div className="p-4">
              <h3 className="text-md font-semibold">औद्योगिक विवाद एक्ट 1947</h3>
              <p className="text-sm text-zinc-500 mt-2">विवरण देखें</p>
          </div>
      </a>
      <a href="#" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src="https://placehold.co/300x200" alt="Image 4" className="w-full h-48 object-cover"/>
          <div className="p-4">
              <h3 className="text-md font-semibold">न्यूनतम मजदूरी एक्ट, 1948</h3>
              <p className="text-sm text-zinc-500 mt-2">विवरण देखें</p>
          </div>
      </a>
      <a href="#" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src="https://placehold.co/300x200" alt="Image 5" className="w-full h-48 object-cover"/>
          <div className="p-4">
              <h3 className="text-md font-semibold">मातृत्व लाभ एक्ट, 1961</h3>
              <p className="text-sm text-zinc-500 mt-2">विवरण देखें</p>
          </div>
      </a>
  </div>
</div></div>;
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
  return <div>सेटिंग्स और समर्थन Content</div>;
};

const DefaultContent = () => {
  return <div>Welcome! Please select an option from the sidebar.</div>;
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
