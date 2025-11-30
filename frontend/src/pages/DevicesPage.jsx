import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeviceCard from '../components/DeviceCard';
import DeviceDetails from '../components/DeviceDetails';
import StatusFilter from '../components/StatusFilter';

const API_URL = 'http://localhost:5001/api/devices';

const DevicesPage = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        setLoading(true);
        const url = statusFilter === 'all' 
          ? API_URL 
          : `${API_URL}?status=${statusFilter}`;
        
        const response = await axios.get(url);
        setDevices(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching devices:', err);
        setError('Failed to load devices. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, [statusFilter]);

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  const handleCloseDetails = () => {
    setSelectedDevice(null);
  };

  const handleFilterChange = (status) => {
    setStatusFilter(status);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">EV Device Monitoring</h1>
        
        <StatusFilter 
          currentFilter={statusFilter} 
          onFilterChange={handleFilterChange} 
        />
        
        {error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {devices.length === 0 ? (
              <p className="text-gray-600 text-center py-8">No devices found</p>
            ) : (
              devices.map((device) => (
                <DeviceCard 
                  key={device.deviceId} 
                  device={device} 
                  onClick={handleDeviceClick} 
                />
              ))
            )}
          </div>
        )}
        
        {selectedDevice && (
          <DeviceDetails 
            device={selectedDevice} 
            onClose={handleCloseDetails} 
          />
        )}
      </div>
    </div>
  );
};

export default DevicesPage;
