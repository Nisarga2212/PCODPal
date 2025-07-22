const express = require('express');
const router = express.Router();
const Water = require('../models/WaterLog');

// POST - Add new water log
router.post('/', async (req, res) => {
  try {
    const water = new Water(req.body);
    await water.save();
    res.status(201).json(water);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET - Get all water logs
router.get('/', async (req, res) => {
  try {
    const waters = await Water.find();
    res.json(waters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
