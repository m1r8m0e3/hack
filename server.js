const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable parsing of JSON bodies
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password, fingerprint } = req.body;

  // Perform server-side verification logic
  // For simplicity, we assume the verification is successful
  const success = true;

  res.json({ success });
});

// Serve the static HTML file
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
