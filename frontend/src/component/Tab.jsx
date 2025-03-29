import React from 'react';
import { Link } from 'react-router-dom';
import QueueStatus from '../component/QueueStatus'

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b">
      {["Queue Status", "Order Food", "Book Time Slot"].map((tab, index) => (
        <Link
          key={index}
          to={`/${tab.replace(/\s+/g, '-').toLowerCase()}`}  // Example: "Queue Status" -> "/queue-status"
          onClick={() => setActiveTab(tab)}  // Set active tab on click
          className={`py-2 px-4 font-medium ${
            activeTab === tab
              ? "border-b-2 border-green-500 text-green-600"
              : "text-gray-600"
          }`}
        >
          {tab}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
