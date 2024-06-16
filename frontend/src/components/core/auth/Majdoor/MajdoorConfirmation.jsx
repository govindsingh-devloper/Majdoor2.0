import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../common/IconBtn';
import {Country,State} from "country-state-city"
import { toast } from "react-hot-toast"
import { setShippingInfo } from '../../../../slices/shippingInfoslice';
import {Link, useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'; 
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getorders } from '../../../../services/operations/MajdoorAuthAPI';




const MajdoorBookingConfirmation = () => {
  // const {id}=useParams()
  const location = useLocation();
  const { response } = location.state || {};
  console.log(response)
  
  const navigate=useNavigate();
  const dispatch=useDispatch();

const {categories}=useSelector((state)=>state.categories);
const { token } = useSelector((state) => state.auth);
const{user}=useSelector((state)=>state.profile);
const {shippingInfo}=useSelector((state)=>state.shippingInfoReducer);




const[email,setEmail]=useState(user.email);
const[fullName,setFullName]=useState(user.fullName)

const[address,setAddress]=useState(shippingInfo.address  || '');
const[country,setCountry]=useState(shippingInfo.country  || '');
const[state,setState]=useState(shippingInfo.state  || '');
const[phoneNumber,setPhoneNumber]=useState(shippingInfo.phoneNumber  || '');
const[pincode,setPincode]=useState(shippingInfo.pincode  || '');
const[street,setStreet]=useState(shippingInfo.street  || '')
const[city,setCity]=useState(shippingInfo.city  || '')

// const { id } = useParams();
// const location = useLocation();
// const majdoorDetails = location.state ? location.state.response : null;
// console.log("Loactaion stae",location.state)
// console.log(majdoorDetails)


const handleOnSubmit=async(e)=>{
  e.preventDefault();
  if(phoneNumber.length<10 || phoneNumber.length>10){
    toast.error("Phone Number should be 10 digit")
  }

  try {
   
    const data = {
      shippingInfo: {
        address,
        city,
        state,
        country,
        pincode,
        phoneNumber,
        street,
      },
      user:user._id,
      service:response.data._id,
     
    };
    dispatch(getorders(token,data))
  
    // const response1 = await apiConnector('POST', ORDER_ENDPOINT.ORDER_API,data);
    // console.log(response1)
  
    toast.success("Your Request send to Majdoor Pls wait 4 confirmation")
    navigate('/CustomerHome');
  } catch (error) {
    console.error('Error submitting booking:', error);
    toast.error('Failed to submit booking. Please try again later.');
  }
}

  return (
    <main class="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6">
  <h2 class="text-center text-2xl font-semibold mb-4">Majdoor Booking Confirmation</h2>
  <div class="flex flex-col md:flex-row items-center md:items-start mb-6">
    <img
      src="https://placehold.co/100x100"
      alt="Worker"
      class="rounded-full w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6"
    />
    <div class="flex-1">
      {response && response.data&&(
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col">
          <span class="font-semibold">Name</span>
          <span>{response.data.firstName}</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Skills</span>
          <span>{response.data.skills}</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Phone Number</span>
          <span>123456789</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">MajdoorId</span>
          <span>{response.data._id}</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Location</span>
          <span>{response.data.location}</span>
        </div>
      </div>
      )}
    </div>
  </div>
  <form  onSubmit ={handleOnSubmit} class="space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label for="email" class="font-semibold">Email:</label>
        <input type="text" id="full-name" class="border rounded p-2" 
          placeholder='email'
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div class="flex flex-col">
        <label for="full-name" class="font-semibold">FullName</label>
        <input type="text" id="full-name" class="border rounded p-2" 
          placeholder='EnterFullName'
          required
          value={user?.firstName + user?.lastName}
          onChange={(e)=>setFullName(e.target.value)}
        />
      </div>
      <div class="flex flex-col">
        <label for="street-number" class="font-semibold">Street Number:</label>
        <input type="text" id="full-name" class="border rounded p-2" 
          placeholder='Street'
          required
          value={street}
          onChange={(e)=>setStreet(e.target.value)}
        />
      </div>
      <div class="flex flex-col">
        <label for="pin-code" class="font-semibold">Pin code:</label>
        <input type="text" id="full-name" class="border rounded p-2" 
          placeholder='EnterFullName'
          required
          value={pincode}
          onChange={(e)=>setPincode(e.target.value)}
        />
      </div>
      {/* <div class="flex flex-col">
        <label for="state" class="font-semibold">State:</label>
        <input type="text" id="full-name" class="border rounded p-2" 
          placeholder='EnterFullName'
          required
          value={state}
          onChange={(e)=>setState(e.target.value)}
        />
      </div> */}
      <div class="flex flex-col">
        <label for="contact-number" class="font-semibold">Contact Number:</label>
        <input type="text" id="full-name" class="border rounded p-2" 
          placeholder='EnterFullName'
          required
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
        />
        <label for="contact-number" class="font-semibold">City:</label>
         <input type="text" id="full-name" class="border rounded p-2" 
          placeholder='ADDress'
          required
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />
        <label for="contact-number" class="font-semibold">address:</label>
         <input type="text" id="full-name" class="border rounded p-2" 
          placeholder='ADDress'
          required
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
         <select type="text" id="full-name" class="border rounded p-2" 
          placeholder='EnterFullName'
          required
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
          >
          <option value="">Country</option>
          {Country && Country.getAllCountries().map((item)=>(
            <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
          ))}
          </select>

          {
            country && (
              <div>
                <select
                required
                value={state}
                onChange={(e)=>setState(e.target.value)}
                >
                <option value="">State</option>
                {
                  State &&
                  State.getStatesOfCountry(country).map((item)=>(
                    <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                  ))
                }

                </select>
              </div>
            )
          }


      </div>
    </div>
    <div class="flex items-center">
      <input type="checkbox" id="confirm-booking" class="mr-2" />
      <label for="confirm-booking" class="font-semibold">I confirm that Booking.</label>
    </div>
    <div class="flex justify-between mt-4">
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        REQUEST FOR BOOKING
      </button>
      <button
        type="button"
        class="border border-zinc-500 text-zinc-500 px-4 py-2 rounded hover:bg-zinc-100"
      >
        DISCARD
      </button>
    </div>
  </form>
</main>
  );
};

export default MajdoorBookingConfirmation;
