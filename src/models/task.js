// models/Task.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  due_date: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'TODO',
  },
  priority: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  deleted_at: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
});

module.exports = Task;
