import React from 'react';

const AddMajdoors = () => {
  return (
    <div className="bg-zinc-100 p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <nav className="text-sm text-zinc-500">
          <a href="#" className="text-blue-500">डैशबोर्ड</a> / <a href="#">मजदूर जोड़ें</a>
        </nav>
      </div>
      <h2 className="text-2xl font-bold mb-4">मजदूर जोड़ें</h2>
     <div className="container">
         <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">नाम</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">आईडी</label>
          <input type="text" id="id" name="id" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"/>
        </div>
        {/* Repeat for other fields like address, phone number, etc. */}
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            मजदूर जोड़ें
          </button>
        </div>
      </form>
     </div>
    </div>
  );
};

export default AddMajdoors;
