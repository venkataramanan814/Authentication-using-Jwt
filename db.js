const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
    console.log('Connected to database successfully');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};

module.exports = dbConnect;

