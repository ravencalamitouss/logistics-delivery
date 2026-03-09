const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    service: 'logistics-delivery',
    environment: APP_ENV,
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Delivery Service running on port ${PORT}`);
});
