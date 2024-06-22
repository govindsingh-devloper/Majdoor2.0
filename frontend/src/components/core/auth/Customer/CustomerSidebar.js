// // src/components/Sidebar.js
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useRef, useState} from 'react';
// import { VscSignOut } from 'react-icons/vsc';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../../../services/operations/authAPI';
// import useOnClickOutside from '../../../../hooks/useOnClickOutside';

// const Sidebar = () => {
//   const ref = useRef(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(false);
//   useOnClickOutside(ref, () => setOpen(false));
//   return (

   
//     <div className="w-64 h-screen bg-gray-800 text-white fixed flex flex-col overflow-y-auto">
//       <div className="p-4 text-3xl font-semibold">Menu</div>
//       <nav className="flex flex-col mt-4 space-y-2">
//         <Link to="/CustomerHome" className="py-3 px-4 hover:bg-gray-700 text-xl">
//           Home
//         </Link>
//         <Link to="/CustomerBookings" className="py-3 px-4 hover:bg-gray-700 text-xl">
//           History
//         </Link>
//         <Link to="/CustomerDashboard" className="py-3 px-4 hover:bg-gray-700 text-xl">
//           Profile
//         </Link>
//         {/* <Link to="/customer/settings" className="py-2 px-4 hover:bg-gray-700">
//           Settings
//         </Link> */}
//         {/* <Link to="/logout" className="py-3 px-4 hover:bg-gray-700 text-xl">
//           Logout
//         </Link> */}

//         <div className="py-3 px-4 hover:bg-gray-700 text-xl">
//           {open && (
//             <div
//               onClick={(e) => e.stopPropagation()}
//               ref={ref}
//             >
//               <div
//                 onClick={() => {
//                   dispatch(logout(navigate));
//                   setOpen(false);
//                 }}
                
//               >
//                 <VscSignOut className="inline-block" />
//                 Logout
//               </div>
//             </div>
//           )}
//           Logout
//         </div>


//       </nav>
//     </div>
    
//   );
// };

// export default Sidebar;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { VscSignOut } from 'react-icons/vsc';
import { logout } from '../../../../services/operations/authAPI';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed flex flex-col overflow-y-auto">
      <div className="p-4 text-3xl font-semibold">Menu</div>
      <nav className="flex flex-col mt-4 space-y-2">
        <Link to="/CustomerHome" className="py-3 px-4 hover:bg-gray-700 text-xl">
          Home
        </Link>
        <Link to="/CustomerBookings" className="py-3 px-4 hover:bg-gray-700 text-xl">
          History
        </Link>
        <Link to="/CustomerDashboard" className="py-3 px-4 hover:bg-gray-700 text-xl">
          Profile
        </Link>
        <div 
          onClick={handleLogout} 
          className="flex items-center gap-x-2 py-3 px-4 hover:bg-gray-700 text-xl cursor-pointer"
        >
          <VscSignOut className="inline-block" />
          Logout
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
