import React from 'react'
import { useState,useEffect } from 'react'
import { apiConnector } from '../../../../services/apiconnector';
import { ORDER_ENDPOINT } from '../../../../services/api';
import { useSelector } from 'react-redux';

const CustomerBooking = () => {
    const[bookings,setBookings]=useState([]);
    const {user}=useSelector((state)=>state.profile)
    const {token}=useSelector((state)=>state.auth)
    const userid = user ? user._id : null;


    const getCustomerBookings=async()=>{
        try {
            const response=await apiConnector("POST",ORDER_ENDPOINT.BOOKING_API,{userid},{
                headers:{
                    Authorization:`Bearer${token}`
                }
            })
            console.log(response.data)
            if(response.data.success){
                setBookings(response.data.data)
            }
            
        } catch (error) {
            console.log("Customer Booking ERROR",error)
        }
    };

    useEffect(()=>{
        getCustomerBookings();

    },[])


  return (
    <div>
      <h2>My Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User ID</th>
            <th>Majdoor Name</th>
            <th>Skills</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{user._id}</td>
              <td>{`${item.service.firstName} ${item.service.lastName}`}</td>
              <td>{item.service.skills}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerBooking