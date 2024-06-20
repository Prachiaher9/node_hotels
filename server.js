const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');

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
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//  comment added for testing purpose