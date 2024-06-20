const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const personRoutes = require('./routes/personRoutes');

// Middle to parse JSON bodies
app.use(bodyParser.json());

// Route to serve the menu card
app.get("/", (req, res) => {
    res.send("Welcome to our hotel");
});

// Use the person routes
app.use("/person", personRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//  comment added for testing purpose