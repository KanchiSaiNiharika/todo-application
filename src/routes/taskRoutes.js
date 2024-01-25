const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskcontrollers');
router.post('/create-task', taskController.createTask);
module.exports = router;
