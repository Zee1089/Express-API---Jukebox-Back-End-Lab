const mongoose = require('mongoose');

const jukeboxSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
    },
artist: {
    type: String,
    required: true
    }
})

const Jukebox = mongoose.model('Jukebox', jukeboxSchema);
module.exports = Jukebox;

