import React from 'react';

const sharedClasses = {
  button: 'px-4 py-2 rounded text-white',
  link: 'block py-2.5 px-4 rounded transition duration-200 hover:bg-zinc-700',
  tableHeader: 'px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider',
  tableRow: 'px-6 py-4 whitespace-nowrap text-sm text-zinc-500',
};

const Sidebar = () => {
  return (
    <aside className="bg-zinc-800 text-zinc-200 w-64 space-y-6 py-7 px-2">
      <div className="text-center text-2xl font-semibold">बलदेव</div>
      <nav>
        <a href="#" className={sharedClasses.link}>डैशबोर्ड</a>
        <a href="#" className={sharedClasses.link}>रिकॉर्ड</a>
        <a href="#" className={sharedClasses.link}>उपस्थिति</a>
        <a href="#" className={sharedClasses.link}>प्रोफाइल</a>
        <a href="#" className={sharedClasses.link}>श्रम अधिकार</a>
      </nav>
      <div className="border-t border-zinc-700 mt-6 pt-6">
        <a href="#" className={sharedClasses.link}>सहायता</a>
        <a href="#" className={sharedClasses.link}>सेटिंग्स और समर्थन</a>
      </div>
    </aside>
  );
};

const MainContent = () => {
  return (
    <div className="flex-1 bg-zinc-100 text-zinc-900">
      <header className="bg-zinc-900 text-white flex justify-between items-center py-4 px-6">
        <div className="text-xl font-semibold">MAJDOOR PANEL</div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="सर्च को खोजो..." className="px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className={sharedClasses.button}>🔍</button>
          <button className={sharedClasses.button}>🔔</button>
          <button className={sharedClasses.button}>👤 लॉग आउट</button>
        </div>
      </header>
      <main className="p-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">नई बुकिंग</h2>
          <BookingTable/>
          <TableRow/>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">मेरा आरक्षण</h2>
          <BookingTable/>
          <TableRow/>
          
        </section>
      </main>
    </div>
  );
};

const BookingTable = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-zinc-200">
        <thead className="bg-zinc-50">
          <tr>
            <th className={sharedClasses.tableHeader}>नाम</th>
            <th className={sharedClasses.tableHeader}>बुकिंग आईडी</th>
            <th className={sharedClasses.tableHeader}>पता</th>
            <th className={sharedClasses.tableHeader}>फोन नंबर</th>
            <th className={sharedClasses.tableHeader}>काम</th>
            <th className={sharedClasses.tableHeader}>तारीख</th>
            <th className={sharedClasses.tableHeader}>लागत</th>
            <th className={sharedClasses.tableHeader}>स्थिति</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-zinc-200">
  
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ name, bookingId, address, phoneNumber, work, date, cost, status }) => {
  return (
    <tr>
      <td className={sharedClasses.tableRow}>{name}</td>
      <td className={sharedClasses.tableRow}>{bookingId}</td>
      <td className={sharedClasses.tableRow}>{address}</td>
      <td className={sharedClasses.tableRow}>{phoneNumber}</td>
      <td className={sharedClasses.tableRow}>{work}</td>
      <td className={sharedClasses.tableRow}>{date}</td>
      <td className={sharedClasses.tableRow}>{cost}</td>
      <td className={sharedClasses.tableRow}>
        <span className="text-green-500">✔️</span>
        <span className="text-red-500">❌</span>
      </td>
    </tr>
  );
};

const ReactComponent = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default ReactComponent;
