const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello từ Kubernetes! 🚀',
    version: '2.0',
    pod: process.env.HOSTNAME
  });
});

module.exports = app;