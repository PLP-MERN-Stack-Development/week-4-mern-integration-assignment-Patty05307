
@echo off
(
echo const express = require('express');
echo const mongoose = require('mongoose');
echo const cors = require('cors');
echo const dotenv = require('dotenv');
echo.
echo dotenv.config();
echo const app = express();
echo.
echo app.use(cors());
echo app.use(express.json());
echo.
echo app.get('/', (req, res) => res.send('MERN Blog API is running'));
echo.
echo const PORT = process.env.PORT || 5000;
echo.
echo mongoose.connect(process.env.MONGO_URI, ^{
echo     useNewUrlParser: true,
echo     useUnifiedTopology: true
echo ^})
echo .then(() => app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT)))
echo .catch((err) => console.error("MongoDB connection error:", err.message));
) > server.js
