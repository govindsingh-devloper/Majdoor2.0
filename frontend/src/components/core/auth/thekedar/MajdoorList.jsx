import React, { useState, useEffect } from 'react';


const MajdoorList = ({ majdoors }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-zinc-200">
        <thead>
          <tr className="bg-zinc-100">
            <th className="py-2 px-4 border-b">नाम</th>
            <th className="py-2 px-4 border-b">आईडी</th>
            <th className="py-2 px-4 border-b">पता</th>
            <th className="py-2 px-4 border-b">फोन नंबर</th>
            <th className="py-2 px-4 border-b">काम</th>
            <th className="py-2 px-4 border-b">तारीख</th>
            <th className="py-2 px-4 border-b">रकम</th>
          </tr>
        </thead>
        <tbody>
          {majdoors.map((majdoor) => (
            <tr key={majdoor.id}>
              <td className="py-2 px-4 border-b">{majdoor.name}</td>
              <td className="py-2 px-4 border-b">{majdoor.id}</td>
              <td className="py-2 px-4 border-b">{majdoor.address}</td>
              <td className="py-2 px-4 border-b">{majdoor.phone}</td>
              <td className="py-2 px-4 border-b">{majdoor.work}</td>
              <td className="py-2 px-4 border-b">{majdoor.date}</td>
              <td className="py-2 px-4 border-b">{majdoor.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MajdoorList;
