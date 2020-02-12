const mongoose = require('../db/connection');

const JukeboxSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: true },
    artist: { type: String, required: true },
    url: { type: String, required: true }
});

const Jukebox = mongoose.model('Jukebox', JukeboxSchema);

module.exports = Jukebox;
