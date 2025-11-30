# EV Device Monitoring Dashboard

A simple EV Device Monitoring Dashboard built with React, Tailwind CSS, and Node.js/Express.

## Features

- View a list of EV devices with their status
- Filter devices by status (Active, Warning, Offline)
- Click on a device to view detailed information
- Responsive design that works on mobile and desktop
- Loading and error states

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

   The backend will be available at `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`

## Project Structure

```
ev-dashboard/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DeviceCard.jsx
│   │   │   ├── DeviceDetails.jsx
│   │   │   ├── StatusBadge.jsx
│   │   │   └── StatusFilter.jsx
│   │   ├── pages/
│   │   │   └── DevicesPage.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## API Endpoint Details

- `GET /api/devices` - Get all devices
- `GET /api/devices?status={status}` - Filter devices by status (active, warning, offline)
