const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Health route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Hi Manoranjan,The Express Server is running.",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Start server
app.listen(PORT,'0.0.0.0',() => {
  console.log(`Server running on port ${PORT}`);
});