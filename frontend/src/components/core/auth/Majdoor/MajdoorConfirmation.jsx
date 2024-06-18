// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import { apiConnector } from '../../../../services/apiconnector';
// import { ORDER_ENDPOINT } from '../../../../services/api';
// import { setShippingInfo } from '../../../../slices/shippingInfoslice';

// const BookingConfirmationForm = () => {
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);

//   const [formData, setFormData] = useState({
//     address: '',
//     city: '',
//     street: '',
//     state: '',
//     pincode: '',
//     phoneNumber: '',
//     country: '',
//     service: '', // You may get this from props or another source
//     email: user?.email || '',
//     firstName: `${user?.firstName} ${user?.lastName}` || '',
//   });

//   const { address, city, street, state, pincode, phoneNumber, country, service, email, firstName } = formData;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     dispatch(setShippingInfo({
//       ...formData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log(token)
//       const response = await apiConnector('POST', ORDER_ENDPOINT.ORDER_API, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.data.success) {
//         toast.success('Your booking request has been submitted successfully.');
//         // Optionally, update local state or clear form fields after successful submission
//         setFormData({
//           address: '',
//           city: '',
//           street: '',
//           state: '',
//           pincode: '',
//           phoneNumber: '',
//           country: '',
//           service: '', // Reset service if needed
//           email: user?.email || '',
//           firstName: `${user?.firstName} ${user?.lastName}` || '',
//         });
//       } else {
//         toast.error('Failed to submit booking request. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error submitting booking request:', error);
//       toast.error('Failed to submit booking request. Please try again later.');
//     }
//   };

//   return (
//     <main className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6">
//       <h2 className="text-center text-2xl font-semibold mb-4">Majdoor Booking Confirmation</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="flex flex-col">
//             <label htmlFor="email" className="font-semibold">Email:</label>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               className="border rounded p-2"
//               placeholder="Email"
//               required
//               value={email}
//               onChange={handleInputChange}
//               disabled // Prevent user from editing email
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="full-name" className="font-semibold">Full Name:</label>
//             <input
//               type="text"
//               id="full-name"
//               name="firstName"
//               className="border rounded p-2"
//               placeholder="Full Name"
//               required
//               value={firstName}
//               onChange={handleInputChange}
//               disabled // Prevent user from editing full name
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="street" className="font-semibold">Street Number:</label>
//             <input
//               type="text"
//               id="street"
//               name="street"
//               className="border rounded p-2"
//               placeholder="Street"
//               required
//               value={street}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="pincode" className="font-semibold">Pin code:</label>
//             <input
//               type="text"
//               id="pincode"
//               name="pincode"
//               className="border rounded p-2"
//               placeholder="Pin code"
//               required
//               value={pincode}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="phoneNumber" className="font-semibold">Contact Number:</label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="phoneNumber"
//               className="border rounded p-2"
//               placeholder="Contact Number"
//               required
//               value={phoneNumber}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="city" className="font-semibold">City:</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               className="border rounded p-2"
//               placeholder="City"
//               required
//               value={city}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="address" className="font-semibold">Address:</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               className="border rounded p-2"
//               placeholder="Address"
//               required
//               value={address}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="country" className="font-semibold">Country:</label>
//             <select
//               id="country"
//               name="country"
//               className="border rounded p-2"
//               placeholder="Country"
//               required
//               value={country}
//               onChange={handleInputChange}
//             >
//               <option value="">Select Country</option>
//               {/* Replace with actual country options */}
//               <option value="USA">USA</option>
//               <option value="Canada">Canada</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           {country && (
//             <div className="flex flex-col">
//               <label htmlFor="state" className="font-semibold">State:</label>
//               <select
//                 id="state"
//                 name="state"
//                 className="border rounded p-2"
//                 placeholder="State"
//                 required
//                 value={state}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select State</option>
//                 {/* Replace with actual state options based on selected country */}
//                 <option value="NY">New York</option>
//                 <option value="CA">California</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//           )}
//         </div>
//         <div className="flex items-center">
//           <input type="checkbox" id="confirm-booking" className="mr-2" required />
//           <label htmlFor="confirm-booking" className="font-semibold">I confirm this booking.</label>
//         </div>
//         <div className="flex justify-between mt-4">
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//             REQUEST FOR BOOKING
//           </button>
//           <button
//             type="button"
//             className="border border-gray-500 text-gray-500 px-4 py-2 rounded hover:bg-gray-100"
//           >
//             DISCARD
//           </button>
//         </div>
//       </form>
//     </main>
//   );
// };

// export default BookingConfirmationForm;



///////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Country, State } from 'country-state-city';
// import { toast } from 'react-hot-toast';
// import { setShippingInfo } from '../../../../slices/shippingInfoslice';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { getorders } from '../../../../services/operations/MajdoorAuthAPI';
// import IconBtn from '../../../common/IconBtn';

// const MajdoorBookingConfirmation = () => {
//   const location = useLocation();
//   const { response } = location.state || {};  // Ensure response is defined

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { categories } = useSelector((state) => state.categories);
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);
//   const { shippingInfo } = useSelector((state) => state.shippingInfoReducer);

//   const [email, setEmail] = useState(user.email);
//   const [fullName, setFullName] = useState(user.fullName);
//   const [address, setAddress] = useState(shippingInfo.address || '');
//   const [country, setCountry] = useState(shippingInfo.country || '');
//   const [state, setState] = useState(shippingInfo.state || '');
//   const [phoneNumber, setPhoneNumber] = useState(shippingInfo.phoneNumber || '');
//   const [pincode, setPincode] = useState(shippingInfo.pincode || '');
//   const [street, setStreet] = useState(shippingInfo.street || '');
//   const [city, setCity] = useState(shippingInfo.city || '');

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     if (phoneNumber.length !== 10) {
//       toast.error("Phone Number should be 10 digits");
//       return;
//     }

//     try {
//       const data = {
//         address,
//         city,
//         state,
//         country,
//         pincode,
//         phoneNumber,
//         street,
//         email,
//         firstName: user.firstName,
//         service: response?.data?._id,  // Use optional chaining
//         user: user._id,
//       };

//       console.log('Submitting order data:', data);  // Log data for debugging

//       dispatch(getorders(token, data));
//       toast.success("Your Request has been sent to Majdoor. Please wait for confirmation.");
//       navigate('/CustomerHome');
//     } catch (error) {
//       console.error('Error submitting booking:', error);
//       toast.error('Failed to submit booking. Please try again later.');
//     }
//   };

//   return (
//     <main className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6">
//       <h2 className="text-center text-2xl font-semibold mb-4">Majdoor Booking Confirmation</h2>
//       <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
//         <img
//           src="https://placehold.co/100x100"
//           alt="Worker"
//           className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6"
//         />
//         <div className="flex-1">
//           {response && response.data ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <span className="font-semibold">Name</span>
//                 <span>{response.data.firstName}</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-semibold">Skills</span>
//                 <span>{response.data.skills}</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-semibold">Phone Number</span>
//                 <span>123456789</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-semibold">MajdoorId</span>
//                 <span>{response.data._id}</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-semibold">Location</span>
//                 <span>{response.data.location}</span>
//               </div>
//             </div>
//           ) : (
//             <p>Loading...</p>  // Display loading or error message if response is not available
//           )}
//         </div>
//       </div>
//       <form onSubmit={handleOnSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="flex flex-col">
//             <label htmlFor="email" className="font-semibold">Email:</label>
//             <input
//               type="text"
//               id="email"
//               className="border rounded p-2"
//               placeholder="Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="full-name" className="font-semibold">Full Name</label>
//             <input
//               type="text"
//               id="full-name"
//               className="border rounded p-2"
//               placeholder="Enter Full Name"
//               required
//               value={user?.firstName + ' ' + user?.lastName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="street-number" className="font-semibold">Street Number:</label>
//             <input
//               type="text"
//               id="street-number"
//               className="border rounded p-2"
//               placeholder="Street"
//               required
//               value={street}
//               onChange={(e) => setStreet(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="pin-code" className="font-semibold">Pin code:</label>
//             <input
//               type="text"
//               id="pin-code"
//               className="border rounded p-2"
//               placeholder="Pin Code"
//               required
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="contact-number" className="font-semibold">Contact Number:</label>
//             <input
//               type="text"
//               id="contact-number"
//               className="border rounded p-2"
//               placeholder="Contact Number"
//               required
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//             <label htmlFor="city" className="font-semibold">City:</label>
//             <input
//               type="text"
//               id="city"
//               className="border rounded p-2"
//               placeholder="City"
//               required
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//             <label htmlFor="address" className="font-semibold">Address:</label>
//             <input
//               type="text"
//               id="address"
//               className="border rounded p-2"
//               placeholder="Address"
//               required
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             <select
//               id="country"
//               className="border rounded p-2"
//               required
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//             >
//               <option value="">Country</option>
//               {Country && Country.getAllCountries().map((item) => (
//                 <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
//               ))}
//             </select>
//             {country && (
//               <div>
//                 <select
//                   required
//                   value={state}
//                   onChange={(e) => setState(e.target.value)}
//                 >
//                   <option value="">State</option>
//                   {State && State.getStatesOfCountry(country).map((item) => (
//                     <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
//                   ))}
//                 </select>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex items-center">
//           <input type="checkbox" id="confirm-booking" className="mr-2" />
//           <label htmlFor="confirm-booking">I confirm the booking details are correct</label>
//         </div>
//         <div className="flex justify-end space-x-4">
//           <IconBtn text="Confirm" />
//           <button
//             className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
//             onClick={() => navigate('/CustomerHome')}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </main>
//   );
// };

// export default MajdoorBookingConfirmation;

/////////////////////////////////////////////////////////////////////
//second attempt
/////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-hot-toast";
import { setShippingInfo } from '../../../../slices/shippingInfoslice';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { getorders } from '../../../../services/operations/MajdoorAuthAPI';
import { Country, State } from "country-state-city";

const MajdoorBookingConfirmation = () => {
  const location = useLocation();
  const { response } = location.state || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { shippingInfo } = useSelector((state) => state.shippingInfoReducer);

  const [email, setEmail] = useState(user.email);
  const [fullName, setFullName] = useState(user.firstName + user.lastName);
  const [address, setAddress] = useState(shippingInfo.address || '');
  const [country, setCountry] = useState(shippingInfo.country || '');
  const [state, setState] = useState(shippingInfo.state || '');
  const [phoneNumber, setPhoneNumber] = useState(shippingInfo.phoneNumber || '');
  const [pincode, setPincode] = useState(shippingInfo.pincode || '');
  const [street, setStreet] = useState(shippingInfo.street || '');
  const [city, setCity] = useState(shippingInfo.city || '');

  // const location=useLocation()
  // const {response}=location.state || {};
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      toast.error("Phone Number should be 10 digits");
      return;
    }

    try {
      const data = {
        address,
        city,
        state,
        country,
        pincode,
        phoneNumber,
        street,
        email,
        firstName: user.firstName,
        service: response.data._id,
        user: user._id,
      };

      dispatch(getorders(token, data, navigate));
      // toast.success("Your Request has been sent to Majdoor. Please wait for confirmation.");
      // navigate('/CustomerHome');
    } catch (error) {
      console.error('Error submitting booking:', error);
      // toast.error('Failed to submit booking. Please try again later.');
    }
  };

  return (
    <main className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6">
      <h2 className="text-center text-2xl font-semibold mb-4">Majdoor Booking Confirmation</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
        <img
          src="https://placehold.co/100x100"
          alt="Worker"
          className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          {response && response.data && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-semibold">Name</span>
                <span>{response.data.firstName}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Skills</span>
                <span>{response.data.skills}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Phone Number</span>
                <span>123456789</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">MajdoorId</span>
                <span>{response.data._id}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Location</span>
                <span>{response.data.location}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">Email:</label>
            <input
              type="text"
              id="email"
              className="border rounded p-2"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="full-name" className="font-semibold">Full Name:</label>
            <input
              type="text"
              id="full-name"
              className="border rounded p-2"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="street" className="font-semibold">Street Number:</label>
            <input
              type="text"
              id="street"
              className="border rounded p-2"
              placeholder="Street"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="street" className="font-semibold">Service:</label>
            <input
              type="text"
              id="street"
              className="border rounded p-2"
              placeholder="Street"
              required
              value={response?.data?._id}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="street" className="font-semibold">User Id:</label>
            <input
              type="text"
              id="street"
              className="border rounded p-2"
              placeholder="Street"
              required
              value={user?._id}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="pincode" className="font-semibold">Pin Code:</label>
            <input
              type="text"
              id="pincode"
              className="border rounded p-2"
              placeholder="Pin Code"
              required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone-number" className="font-semibold">Contact Number:</label>
            <input
              type="text"
              id="phone-number"
              className="border rounded p-2"
              placeholder="Contact Number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="font-semibold">City:</label>
            <input
              type="text"
              id="city"
              className="border rounded p-2"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="font-semibold">Address:</label>
            <input
              type="text"
              id="address"
              className="border rounded p-2"
              placeholder="Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <select
              id="country"
              className="border rounded p-2"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country.getAllCountries().map((item) => (
                <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
              ))}
            </select>
          </div>
          {country && (
            <div className="flex flex-col">
              <select
                id="state"
                className="border rounded p-2"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State.getStatesOfCountry(country).map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="confirm-booking" className="mr-2" required />
          <label htmlFor="confirm-booking" className="font-semibold">I confirm that Booking.</label>
        </div>
        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            REQUEST FOR BOOKING
          </button>
          <button
            type="button"
            className="border border-zinc-500 text-zinc-500 px-4 py-2 rounded hover:bg-zinc-500 hover:text-white"
            onClick={() => navigate('/CustomerHome')}
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default MajdoorBookingConfirmation;


