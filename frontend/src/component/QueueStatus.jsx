import React from 'react'

import QueueItem from "./QueueItem";

const queueData = [
  { name: "Main Cafeteria", waitTime: 15, level: "Moderate", color: "yellow" },
  { name: "Coffee Shop", waitTime: 5, level: "Low", color: "green" },
  { name: "Grab & Go Station", waitTime: 25, level: "High", color: "red" },
];

const QueueStatus = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Current Queue Status</h2>
      {queueData.map((item, index) => (
        <QueueItem key={index} data={item} />
      ))}
    </div>
  );
};

export default QueueStatus;