const mongoose = require("mongoose");

const WaterLogSchema = new mongoose.Schema({
  date: String,
  count: Number,
});

module.exports = mongoose.model("WaterLog", WaterLogSchema);
