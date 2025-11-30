import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevicesPage from './pages/DevicesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DevicesPage />} />
          <Route path="/devices" element={<DevicesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
