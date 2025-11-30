const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;


app.use(cors());

const devices = [
  {
    deviceId: "A02130825",
    name: "Battery Pack 01",
    status: "active",
    temperature: 32,
    voltage: 48.5
  },
  {
    deviceId: "A02130826",
    name: "Battery Pack 02",
    status: "warning",
    temperature: 44,
    voltage: 47.9
  },
  {
    deviceId: "A02130827",
    name: "Battery Pack 03",
    status: "offline",
    temperature: null,
    voltage: null
  }
];


app.get("/api/devices", (req, res) => {
  const { status } = req.query;
  let data = [...devices];
  
  if (status) {
    data = data.filter(device => device.status === status);
  }
  

  setTimeout(() => {
    res.json(data);
  }, 500);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
