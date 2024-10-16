const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');
const { ChecklistItem, Checklist } = require('../models'); // Make sure to import your models

// Create a new checklist item
router.post('/:checklistId/item', isAuthenticated, async (req, res) => {
  try {
    const { checklistId } = req.params; // Get checklistId from URL
    const { item_name } = req.body;

    // Check if the checklist exists
    const checklist = await Checklist.findByPk(checklistId);
    if (!checklist) {
      return res.status(404).json({ error: 'Checklist not found' });
    }

    // Create the item associated with the checklist
    const checklistItem = await ChecklistItem.create({
      item_name,
      checklist_id: checklistId,
    });
    res.status(201).json(checklistItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all items for a specific checklist
router.get('/:checklistId/item', isAuthenticated, async (req, res) => {
  try {
    const { checklistId } = req.params;

    const checklistItems = await ChecklistItem.findAll({
      where: { checklist_id: checklistId },
    });
    res.json(checklistItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all items for a specific checklist
router.get('/:checklistId/item/:itemId', isAuthenticated, async (req, res) => {
  try {
    const { itemId, checklistId } = req.params;

    const checklistItems = await ChecklistItem.findAll({
      where: { id: itemId, checklist_id: checklistId  },
    });
    res.json(checklistItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a checklist item by ID
router.put('/:checklistId/item/rename/:itemId', isAuthenticated, async (req, res) => {
  try {
    const { checklistId, itemId } = req.params;
    const { item_name } = req.body;

    // Check if the checklist exists
    const checklist = await Checklist.findByPk(checklistId);
    if (!checklist) {
      return res.status(404).json({ error: 'Checklist not found' });
    }

    // Find the item
    const checklistItem = await ChecklistItem.findByPk(itemId);
    if (!checklistItem) {
      return res.status(404).json({ error: 'Checklist item not found' });
    }

    // Update the item
    checklistItem.item_name = item_name;
    await checklistItem.save();
    res.json(checklistItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update status
router.put('/:checklistId/item/:itemId', isAuthenticated, async (req, res) => {
  try {
    const { checklistId, itemId } = req.params;
    const { item_name } = req.body;

    // Check if the checklist exists
    const checklist = await Checklist.findByPk(checklistId);
    if (!checklist) {
      return res.status(404).json({ error: 'Checklist not found' });
    }

    // Find the item
    const checklistItem = await ChecklistItem.findByPk(itemId);
    if (!checklistItem) {
      return res.status(404).json({ error: 'Checklist item not found' });
    }

    // Update the item
    checklistItem.is_checked = 1;
    await checklistItem.save();
    res.json(checklistItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a checklist item by ID
router.delete('/:checklistId/item/:itemId', isAuthenticated, async (req, res) => {
  try {
    const { itemId } = req.params;

    // Find the item
    const checklistItem = await ChecklistItem.findByPk(itemId);
    if (!checklistItem) {
      return res.status(404).json({ error: 'Checklist item not found' });
    }

    // Delete the item
    await checklistItem.destroy();
    res.json({ message: 'Checklist item deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;