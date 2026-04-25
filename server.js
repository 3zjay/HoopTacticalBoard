const express = require('express');
const path = require('path');

const app = express();

// Serve from root instead of /public
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🏀 Hoop Culture Board running on port ${PORT}`);
});
