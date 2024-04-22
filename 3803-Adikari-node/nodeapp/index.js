const express = require("express");
const morgan = require("morgan");
const app = express();

// Use middleware for logging HTTP requests
app.use(morgan("combined"));

// Set Content-Type headers for JSON responses
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Define routes with consistent JSON responses
app.get("/", (req, res) => {
  res.json({ response: "Hello" });
});

app.get("/will", (req, res) => {
  // Ensure consistent JSON format
  res.json({ response: "Hello World" });
});

app.get("/ready", (req, res) => {
  res.json({ response: "Great!, It works!" });
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Listen on a specified port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

// Export the Express app for testing or integration
module.exports = app;
