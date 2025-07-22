const express = require('express');
const router = express.Router();
const Symptom = require('../models/Symptomlog');

// @route   POST /api/symptoms
// @desc    Add a new symptom
router.post('/', async (req, res) => {
  try {
    const newSymptom = new Symptom(req.body);
    const savedSymptom = await newSymptom.save();
    res.status(201).json(savedSymptom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// @route   GET /api/symptoms
// @desc    Get all symptoms
router.get('/', async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.status(200).json(symptoms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   GET /api/symptoms/:userId
// @desc    Get symptoms by user ID
router.get('/:userId', async (req, res) => {
  try {
    const userSymptoms = await Symptom.find({ userId: req.params.userId });
    res.status(200).json(userSymptoms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   DELETE /api/symptoms/:id
// @desc    Delete a symptom by ID
router.delete('/:id', async (req, res) => {
  try {
    await Symptom.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Symptom deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
