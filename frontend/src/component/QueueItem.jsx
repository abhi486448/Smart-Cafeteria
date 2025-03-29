import React from 'react'

const QueueItem = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border">
      <h3 className="text-lg font-semibold">{data.name}</h3>
      <p className="text-gray-700">
        Current wait time: <span className="font-bold">{data.waitTime} minutes</span>
      </p>
      <div className="relative mt-2">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className={`h-2 rounded-full bg-${data.color}-500`}
            style={{ width: `${(data.waitTime / 30) * 100}` }}
          ></div>
        </div>
      </div>
      <span
        className={`mt-2 text-sm px-3 py-1 rounded-full bg-${data.color}-100 text-${data.color}-700`}
      >
        {data.level}
      </span>
    </div>
  );
};

export default QueueItem;