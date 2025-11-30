import React from 'react';
import StatusBadge from './StatusBadge';

const DeviceCard = ({ device, onClick }) => {
  return (
    <div 
      className="p-4 mb-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(device)}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">{device.name}</h3>
        <StatusBadge status={device.status} />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p>ID: {device.deviceId}</p>
        {device.temperature !== null && (
          <p>Temperature: {device.temperature}°C</p>
        )}
        {device.voltage !== null && (
          <p>Voltage: {device.voltage}V</p>
        )}
      </div>
    </div>
  );
};

export default DeviceCard;
