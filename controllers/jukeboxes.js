const Jukebox = require('../models/jukebox.js');
const express = require('express');
const router = express.Router();

//test the route
// router.post('/', async (req, res) => {
//     res.json({ message: 'Create Route'})
// });
router.get('/', async (req, res) => {
    try {
    // throw new Error('This is an error message') testing the failure message
    const foundJukebox = await Jukebox.find()
    res.status(200).json(foundJukebox)
} catch (error) {
    res.status(500).json({ error: error.message});
    }
})

//Now that we have finished the route let’s test it with Postman. Send a GET request to http://localhost:3000/pets. Test both success and error messages.

router.post('/', async (req, res) => {
    try {
        const createdJukebox = await Jukebox.create(req.body);
        res.status(201).json(createdJukebox); 
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

module.exports = router;