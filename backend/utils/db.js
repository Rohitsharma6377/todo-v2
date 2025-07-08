require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const setupDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected!');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};


module.exports = setupDB; 