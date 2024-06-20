const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB URL


//const mongoURL = process.env.DB_URL_Local;
const mongoURL = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Event listeners for the connection
db.on("connected", () => {
    console.log("Connected to MongoDB Server");
});

db.on('error', (err) => {
    console.log("MongoDB connection error", err);
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

module.exports = db;
