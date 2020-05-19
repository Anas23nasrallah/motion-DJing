const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const playlistsSchema = new Schema({
    userName: String,
    sequence: String
})

const Playlists = mongoose.model(`Playlists`, playlistsSchema)

module.exports = Playlists