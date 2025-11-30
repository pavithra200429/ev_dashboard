import React from 'react';

const statusOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'active', label: 'Active' },
  { value: 'warning', label: 'Warning' },
  { value: 'offline', label: 'Offline' },
];

const StatusFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
        Filter by Status:
      </label>
      <select
        id="status-filter"
        className="block w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusFilter;
