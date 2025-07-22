const mongoose = require("mongoose");

const YogaLogSchema = new mongoose.Schema({
  date: String,
  type: String, // e.g., "Meditation", "PCOD Yoga"
  duration: Number,
});

module.exports = mongoose.model("YogaLog", YogaLogSchema);
