const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
//const testRoute = require('./routes/testRoute');

const periodRoutes = require("./routes/periodRoutes");
const waterRoutes = require("./routes/waterRoutes");
const yogaRoutes = require("./routes/yogaRoutes");
const dietRoutes = require("./routes/dietRoutes");
const symptomRoutes = require("./routes/symptomRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use all routes
app.use("/api/periods", periodRoutes);
app.use("/api/water", waterRoutes);
app.use("/api/yoga", yogaRoutes);
app.use("/api/diet", dietRoutes);
app.use("/api/symptoms", symptomRoutes);
//app.use('/api', testRoute); 


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(" MongoDB connected");
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
})
.catch((err) => console.error(" MongoDB connection failed:", err));
