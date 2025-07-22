const mongoose = require("mongoose");

const PeriodLogSchema = new mongoose.Schema({
  startDate: String,
  endDate: String,
  painLevel: Number,
  flow: String,
  notes: String,
});

module.exports = mongoose.model("PeriodLog", PeriodLogSchema);
