import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Country, State } from 'country-state-city';
import { setShippingInfo } from '../../../../slices/shippingInfoslice';
import { useLocation, useNavigate } from 'react-router-dom';
import { submitBooking } from '../../../../services/operations/MajdoorAuthAPI';
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';

const MajdoorBookingConfirmation = () => {
  const location = useLocation();
  const { response } = location.state || {};
  console.log(response.data._id)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { shippingInfo } = useSelector((state) => state.shippingInfoReducer);
  

  const [formdata, setFormData] = useState({
    address: shippingInfo.address || '',
    city: shippingInfo.city || '',
    state: shippingInfo.state || '',
    country: shippingInfo.country || '',
    street: shippingInfo.street || '',
    pincode: shippingInfo.pincode || '',
    phoneNumber: shippingInfo.phoneNumber || '',
    email: user?.email || '',
    fullName: `${user?.firstName} ${user?.lastName}` || '',
  });

  const { address, city, state, country, street, pincode, phoneNumber,email,fullName} = formdata;

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        email: user.email || '',
        fullName: `${user.firstName} ${user.lastName}` || '',
      }));
    }
  }, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    dispatch(setShippingInfo({
      ...shippingInfo,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      toast.error('Phone Number should be 10 digits');
      return;
    }

    if (!response || !response.data || !response.data._id) {
      throw new Error('Invalid response data');
    }

    const bookingData = {
      ...formdata,
      // user: user._id, // Uncomment if needed to include user ID in bookingData
      service: response.data._id,
    };
    console.log(bookingData)

    try {
      // const backendresponse = await apiConnector('POST', ORDER_ENDPOINT.ORDER_API, bookingData, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      console.log(token)
      const backendresponse=await apiConnector('POST',ORDER_ENDPOINT.ORDER_API,{
        address,
        city,
        state,
        country,
        street,
        pincode,
        phoneNumber,
        // email,
        // fullName,
        // service: response.data._id,
      },{
       headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      )
      console.log(backendresponse)

      if (backendresponse.data.success) {
        toast.success('Your request has been sent to Majdoor. Please wait for confirmation.');
        navigate('/CustomerHome');
      } else {
        toast.error('Failed to submit booking. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error('Failed to submit booking. Please try again later.');
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
                <span>{response && response.data && response.data.firstName}</span>
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
              onChange={handleOnChange}
              disabled // Prevent user from editing email
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
              value={user?.firstName}
              onChange={handleOnChange}
              disabled // Prevent user from editing full name
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
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pincode" className="font-semibold">Pin code:</label>
            <input
              type="text"
              id="pincode"
              className="border rounded p-2"
              placeholder="Pin code"
              required
              value={pincode}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="font-semibold">Contact Number:</label>
            <input
              type="text"
              id="phoneNumber"
              className="border rounded p-2"
              placeholder="Contact Number"
              required
              value={phoneNumber}
              onChange={handleOnChange}
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
              onChange={handleOnChange}
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
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="font-semibold">Country:</label>
            <select
              id="country"
              className="border rounded p-2"
              placeholder="Country"
              required
              value={country}
              onChange={handleOnChange}
            >
              <option value="">Select Country</option>
              {Country.getAllCountries().map((item) => (
                <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
              ))}
            </select>
          </div>
          {country && (
            <div className="flex flex-col">
              <label htmlFor="state" className="font-semibold">State:</label>
              <select
                id="state"
                className="border rounded p-2"
                placeholder="State"
                required
                value={state}
                onChange={handleOnChange}
              >
                <option value="">Select State</option>
                {State.getStatesOfCountry(country).map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="confirm-booking" className="mr-2" required />
          <label htmlFor="confirm-booking" className="font-semibold">I confirm this booking.</label>
        </div>
        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            REQUEST FOR BOOKING
          </button>
          <button
            type="button"
            className="border border-gray-500 text-gray-500 px-4 py-2 rounded hover:bg-gray-100"
          >
            DISCARD
          </button>
        </div>
      </form>
    </main>
  );
};

export default MajdoorBookingConfirmation;
