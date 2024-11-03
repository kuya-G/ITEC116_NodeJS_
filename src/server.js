// src/server.js
const app = require('./app');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Factorial calculator server is running on http://localhost:${PORT}`);
});
 