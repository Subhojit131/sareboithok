const express = require('express');
const { UserLogin, UserSignUp } = require('../controller/UserController');
const { VideoController } = require('../controller/VideoController');

const router = express.Router();

router.post('/login', UserLogin);
router.post('/signup', UserSignUp);
router.get('/video', (req, res) => {
    const { filename } = req.query;
    if (!filename) {
        res.status(400).send("Error: File name is required");
        return;
    }
    req.query.filename = filename; // Pass the filename to the controller
    VideoController(req, res); // Call the Videofetch function with request and response objects
});

module.exports = router;