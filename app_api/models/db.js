const mongoose = require('mongoose');
require('dotenv').config();
//const dbURI = 'mongodb://localhost/your-database-name'; // Replace with your actual MongoDB database URI

var gracefulShutdown;
var dbURI = "mongodb://0.0.0.0:27017/";
if (process.env.NODE_ENV === 'production'){
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

// Create the database connection
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Gracefully close the Mongoose connection when the application exits
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
