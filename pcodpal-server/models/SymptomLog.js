const mongoose = require("mongoose");

const SymptomLogSchema = new mongoose.Schema({
  date: String,
  symptoms: [{ name: String, severity: Number }],
});

module.exports = mongoose.model("SymptomLog", SymptomLogSchema);
