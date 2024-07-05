import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-hot-toast";
import { setShippingInfo } from '../../../../slices/shippingInfoslice';
import { useNavigate } from 'react-router-dom';
import { getorders1 } from '../../../../services/operations/MajdoorAuthAPI';
import { Country, State } from "country-state-city";

const ThekedarConfirmation = ({ thekedarId, title, location, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("Thekedar ki ID",thekedarId)

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

  // Closing pop up 
  const handleCancel = () => {
    onClose(); // Close the confirmation modal
  };

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
        // service: thekedarId,
        user: user._id,
        thekedar: thekedarId,
      };
  
      dispatch(getorders1(token, data, navigate));
      toast.success("Your request has been sent to Majdoor. Please wait for confirmation.");
      onClose(); // Close the confirmation modal after successful submission
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error('Failed to submit booking. Please try again later.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-4xl mx-auto mt-6">
        <button onClick={handleCancel} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">X</button>
        <h2 className="text-center text-2xl font-semibold mb-4">Majdoor Booking Confirmation</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
          <img
            src="https://placehold.co/100x100"
            alt="Worker"
            className="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-semibold">Thekedar ID</span>
                <span>{thekedarId}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Name</span>
                <span>{title}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Phone Number</span>
                <span>{phoneNumber}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Location</span>
                <span>{location}</span>
              </div>
            </div>
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
            <label htmlFor="street" className="font-semibold">Thekedaar:</label>
            <input
              type="text"
              id="street"
              className="border rounded p-2"
              placeholder="Street"
              required
              value={thekedarId}
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
              <label htmlFor="country" className="font-semibold">Country:</label>
              <select
                id="country"
                className="border rounded p-2"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                {Country.getAllCountries().map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                ))}
              </select>
            </div>
            {country && (
              <div className="flex flex-col">
                <label htmlFor="state" className="font-semibold">State:</label>
                <select
                  id="state"
                  className="border rounded p-2"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">Select State</option>
                  {State.getStatesOfCountry(country).map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="confirm-booking" className="mr-2" required />
            <label htmlFor="confirm-booking" className="font-semibold">I confirm the booking.</label>
          </div>
          <div className="flex justify-between mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Request Booking
            </button>
            <button
              type="button"
              className="border border-zinc-500 text-zinc-500 px-4 py-2 rounded hover:bg-zinc-500 hover:text-white"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ThekedarConfirmation;
