const express = require('express');
const router = express.Router();
const Playlists = require(`../model/Playlists`)

router.get(`/playlists`, async function(req, res){ 
    let playlists = await Playlists.find({})
    res.send(playlists)
})

module.exports = router;