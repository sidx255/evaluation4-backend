// controllers for tood: add task, delete task, update task, get all tasks, get task by id

// Path: backend/src/controllers/todo.controller.js
// const todo = require('../models/todo.model');
//

const todoService = require('../services/app.service');

const addTask = async (req, res) => {
  const { title, description } = req.body;
  const newTask = await todoService.addTask(title, description);
  res.status(201).json(newTask);
}; 

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await todoService.deleteTask(id);
  res.status(204).end();
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedTask = await todoService.updateTask(id, title, description);
  res.status(200).json(updatedTask);
};

const getAllTasks = async (req, res) => {
  const allTasks = await todoService.getAllTasks();
  res.status(200).json(allTasks);
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await todoService.getTaskById(id);
  res.status(200).json(task);
};

module.exports = {
  addTask,
  deleteTask,
  updateTask,
  getAllTasks,
  getTaskById
};