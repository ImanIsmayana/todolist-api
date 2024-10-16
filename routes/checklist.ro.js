const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');
const { Checklist } = require('../models');


// Create a new checklist feature
router.post('/', isAuthenticated, async (req, res) => {
  try {
    const { name } = req.body;
    const checklist = await Checklist.create({ name });
    res.json(checklist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all checklist features
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const checklists = await Checklist.findAll();
    res.json(checklists);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific checklist feature by ID
router.get('/:id', isAuthenticated, async (req, res) => {
  try {
    const checklist = await Checklist.findByPk(req.params.id);
    if (!checklist) {
      return res.status(404).json({ error: 'Checklist not found' });
    }
    res.json(checklist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a checklist feature by ID
router.put('/:id', isAuthenticated, async (req, res) => {
  try {
    const { name, description } = req.body;
    const checklist = await Checklist.findByPk(req.params.id);
    if (!checklist) {
      return res.status(404).json({ error: 'Checklist not found' });
    }
    checklist.name = name;
    checklist.description = description;
    await checklist.save();
    res.json(checklist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a checklist feature by ID
router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    const checklist = await Checklist.findByPk(req.params.id);
    if (!checklist) {
      return res.status(404).json({ error: 'Checklist not found' });
    }
    await checklist.destroy();
    res.json({ message: 'Checklist deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;