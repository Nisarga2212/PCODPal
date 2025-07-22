const express = require('express');
const router = express.Router();
const Diet = require('../models/DietLog');

// POST - Add diet log
router.post('/', async (req, res) => {
  try {
    const diet = new Diet(req.body);
    await diet.save();
    res.status(201).json(diet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET - Get all diet logs
router.get('/', async (req, res) => {
  try {
    const diets = await Diet.find();
    res.json(diets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
