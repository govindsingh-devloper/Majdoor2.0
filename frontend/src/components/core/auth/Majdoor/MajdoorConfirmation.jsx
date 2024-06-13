import React from 'react';
import { useSelector } from 'react-redux';
import IconBtn from '../../../common/IconBtn';
const MajdoorBookingConfirmation = () => {
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col">
          <span class="font-semibold">Name</span>
          <span>Aksha</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Skills</span>
          <span>painter</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Phone Number</span>
          <span>123456789</span>
        </div>
        <div class="flex flex-col">
          <span class="font-semibold">Location</span>
          <span>Mumbai</span>
        </div>
      </div>
    </div>
  </div>
  <form class="space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label for="email" class="font-semibold">Email:</label>
        <input type="email" id="email" class="border rounded p-2" />
      </div>
      <div class="flex flex-col">
        <label for="full-name" class="font-semibold">Full Name:</label>
        <input type="text" id="full-name" class="border rounded p-2" />
      </div>
      <div class="flex flex-col">
        <label for="street-number" class="font-semibold">Street Number:</label>
        <input type="text" id="street-number" class="border rounded p-2" />
      </div>
      <div class="flex flex-col">
        <label for="pin-code" class="font-semibold">Pin code:</label>
        <input type="text" id="pin-code" class="border rounded p-2" />
      </div>
      <div class="flex flex-col">
        <label for="state" class="font-semibold">State:</label>
        <input type="text" id="state" class="border rounded p-2" />
      </div>
      <div class="flex flex-col">
        <label for="contact-number" class="font-semibold">Contact Number:</label>
        <input type="text" id="contact-number" class="border rounded p-2" />
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
