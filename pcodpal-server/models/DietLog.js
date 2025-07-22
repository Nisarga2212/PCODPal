const mongoose = require("mongoose");

const DietLogSchema = new mongoose.Schema({
  date: String,
  meals: [
    {
      mealType: String, // Breakfast, Lunch, Dinner
      food: String,
      calories: Number,
    },
  ],
});

module.exports = mongoose.model("DietLog", DietLogSchema);
