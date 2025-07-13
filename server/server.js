require('dotenv').config(); // ✅ Load .env first!

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./routes/postRoutes'); // adjust if your path differs

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {

})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  // Start server after DB is connected
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});










