const express = require('express');
const app = express();

app.use(express.json());

// Sample API Endpoint
app.get('/api/tasks', (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true }
    ]
  });
});

module.exports = app;