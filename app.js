const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Health route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Hi Mano, Server is running",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});