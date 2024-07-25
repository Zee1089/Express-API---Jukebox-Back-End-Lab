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

//testing route to find a single pet
// router.get('/:jukeboxId', async (req, res) => {
//   res.json({ message: `Show route with the param ${req.params.jukeboxId}`});
// })


// /:jukebodId will allow us to access the id parameter from the 
// req.params object 

// router.get('/:jukeboxId', async (req, res) => {
//     try {
//     const singleJukebox = await Jukebox.findById(req.params.body);
//     if (!singleJukebox) {
//         res.status(400);
//         throw new Error ('Jukebox not found.');
//     }
//     res.status(200).json(singleJukebox)
//  } catch (error) {
//         if (res.statusCode === 404) {
//             res.json({error: error.message});
//         } else {
//             res.status(500).json({ error: error.message })
//         }
//     }
// });

router.get('/:jukeboxId', async (req, res) => {
    try {
        const singleJukebox = await Jukebox.findById(req.params.jukeboxId)
        if (!singleJukebox) {
            // res.status(404);
            // throw new error ('Jukebox not found');
            res.status(404).json({error: 'Jukebox not found'})
        }
        res.status(200).json(singleJukebox);
    } catch (error) {
        res.status(500).json({erorr: error.message});
    }
})