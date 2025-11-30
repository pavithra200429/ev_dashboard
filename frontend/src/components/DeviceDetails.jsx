import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import StatusBadge from './StatusBadge';

const DeviceDetails = ({ device, onClose }) => {
  if (!device) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{device.name}</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Device ID:</span>
            <span className="font-medium">{device.deviceId}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <StatusBadge status={device.status} />
          </div>
          
          {device.temperature !== null && (
            <div className="flex justify-between">
              <span className="text-gray-600">Temperature:</span>
              <span className="font-medium">{device.temperature}°C</span>
            </div>
          )}
          
          {device.voltage !== null && (
            <div className="flex justify-between">
              <span className="text-gray-600">Voltage:</span>
              <span className="font-medium">{device.voltage}V</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;
