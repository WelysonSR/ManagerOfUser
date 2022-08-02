const express = require('express');
const app = express();

const router = require('./routes');

app.use(express.json());

app.use(router);

app.listen(3001, () => {
  console.log('Server running on port 3001');
  console.log('http://localhost:3001');
  console.log('control + c to stop');
});
