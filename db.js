const mongoose = require('mongoose');

// MongoDB URL


const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
//const mongoURL = 'mongodb+srv://prachi_aher:Prachi12345@cluster0.kbw49sg.mongodb.net/hotels?retryWrites=true&w=majority';

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
