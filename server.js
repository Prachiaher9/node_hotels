const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const passport = require('./auth');
const personRoutes = require('./routes/personRoutes');

// Middle to parse JSON bodies
app.use(bodyParser.json());
app.use(passport.initialize());
//Middleware function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next();
};
app.use(logRequest);

// Route to serve the menu card
const localAuthMiddleware = passport.authenticate('local',{session:false});
app.get("/",localAuthMiddleware, (req, res) => {
    res.send("Welcome to our hotel");
});

// Use the person routes
app.use("/person", personRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//  comment added for testing purpose