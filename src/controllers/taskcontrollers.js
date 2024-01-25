// controllers/taskController.js
const Task = require('../models/task');

// Create Task API
const createTask = async (req, res) => {
  try {
    // Extract data from the request body
    const { title, description, due_date } = req.body;

    // Create the task in the database
    const newTask = await Task.create({
      title,
      description,
      due_date,
    });

    // Return success response
    return res.status(201).json({ message: 'Task created successfully', task: newTask });
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createTask,
};
