const express = require('express');
const router = express.Router();
const Song = require(`../model/Song`)

router.get(`/songs`, async function(req, res){ 
    let songs = await Song.find({})
    res.send(songs)
})

module.exports = router;