const express = require('express');
const router = express.Router();
const Period = require('../models/PeriodLog');

// POST - Add new period entry
router.post('/', async (req, res) => {
  try {
    const period = new Period(req.body);
    await period.save();
    res.status(201).json(period);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET - Get all period entries
router.get('/', async (req, res) => {
  try {
    const periods = await Period.find();
    res.json(periods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
