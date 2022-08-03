const Task = require('../models/tasks')

const getAllTasks = (req, res) => {
    res.send('all items from the file')
  }
  
  
  const createTask = async (req, res) => {
    try{
      const task = await Task.create(req.body)
      res.status(201).json({ task })
    }
    catch(error){
      res.status(500).json({msg: error})
    }
    
    res.json(req.body)
  }
  
  
  const getTask = (req, res) => {
    res.json({id:req.params.id})
  }
  
  
  const deleteTask = (req, res) => {
    res.send('delete task')
  }
  
  
  const updateTask = (req, res) => {
    res.send('update tasks')
  }
  
  module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }
  