import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { setShippingInfo } from '../../../../slices/shippingInfoslice';
import{useLocation} from "react-router-dom"
import { useEffect } from 'react';

const BookingConfirmationForm = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location=useLocation()
  const {response}=location.state || {};

  const [formData, setFormData] = useState({
    address: '',
    city: '',
    street: '',
    state: '',
    pincode: '',
    phoneNumber: '',
    country: '',
    email: user?.email || '',
    firstName: `${user?.firstName} ${user?.lastName}` || '',
    service:'',
  });
    // Update formData state with response data on component mount
    useEffect(() => {
      if (response && response.data) {
        setFormData((prevData) => ({
          ...prevData,
          service: response.data._id || '', // Assuming _id is the service ID field
        }));
      }
    }, [response]);

  const { address, city, street, state, pincode, phoneNumber, country,email, firstName } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    dispatch(setShippingInfo({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // service:response?.response.data?._id

    try {
      console.log('Form Data:', formData); // Log form data before API call
      console.log('Token:', token); // Log token before API call
      const response = await apiConnector('POST', ORDER_ENDPOINT.ORDER_API, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('API Response:', response.data); // Log API response

      if (response.data.success) {
        toast.success('Your booking request has been submitted successfully.');
        // Optionally, update local state or clear form fields after successful submission
        setFormData({
          address: '',
          city: '',
          street: '',
          state: '',
          pincode: '',
          phoneNumber: '',
          country: '',
          service: '', // Reset service if needed
          email: user?.email || '',
          firstName: `${user?.firstName} ${user?.lastName}` || '',
        });
      } else {
        toast.error('Failed to submit booking request. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting booking request:', error);
      toast.error('Failed to submit booking request. Please try again later.');
    }
  };

  return (
    <main className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6">
      <h2 className="text-center text-2xl font-semibold mb-4">Majdoor Booking Confirmation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="border rounded p-2"
              placeholder="Email"
              required
              value={email}
              onChange={handleInputChange}
              disabled // Prevent user from editing email
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="full-name" className="font-semibold">Full Name:</label>
            <input
              type="text"
              id="full-name"
              name="firstName"
              className="border rounded p-2"
              placeholder="Full Name"
              required
              value={firstName}
              onChange={handleInputChange}
              disabled // Prevent user from editing full name
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="street" className="font-semibold">Street Number:</label>
            <input
              type="text"
              id="street"
              name="street"
              className="border rounded p-2"
              placeholder="Street"
              required
              value={street}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pincode" className="font-semibold">Pin code:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="border rounded p-2"
              placeholder="Pin code"
              required
              value={pincode}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="font-semibold">Contact Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="border rounded p-2"
              placeholder="Contact Number"
              required
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="font-semibold">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="border rounded p-2"
              placeholder="City"
              required
              value={city}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="font-semibold">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              className="border rounded p-2"
              placeholder="Address"
              required
              value={address}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="font-semibold">Country:</label>
            <select
              id="country"
              name="country"
              className="border rounded p-2"
              placeholder="Country"
              required
              value={country}
              onChange={handleInputChange}
            >
              <option value="">Select Country</option>
              {/* Replace with actual country options */}
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {country && (
            <div className="flex flex-col">
              <label htmlFor="state" className="font-semibold">State:</label>
              <select
                id="state"
                name="state"
                className="border rounded p-2"
                placeholder="State"
                required
                value={state}
                onChange={handleInputChange}
              >
                <option value="">Select State</option>
                {/* Replace with actual state options based on selected country */}
                <option value="NY">New York</option>
                <option value="CA">California</option>
                {/* Add more options as needed */}
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

export default BookingConfirmationForm;
