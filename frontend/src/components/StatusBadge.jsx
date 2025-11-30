import React from 'react';

const statusColors = {
  active: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  offline: 'bg-gray-100 text-gray-800',
};

const StatusBadge = ({ status }) => {
  const colorClass = statusColors[status] || 'bg-gray-100 text-gray-800';
  
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;
