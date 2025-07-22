const express = require('express');
const router = express.Router();
const Yoga = require('../models/YogaLog');

// POST - Log yoga/meditation session
router.post('/', async (req, res) => {
  try {
    const yoga = new Yoga(req.body);
    await yoga.save();
    res.status(201).json(yoga);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET - Fetch all sessions
router.get('/', async (req, res) => {
  try {
    const yogaSessions = await Yoga.find();
    res.json(yogaSessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
