const express = require('express');
const router = express.Router();
const request = require('request');
console.log('In template router');

router.get('/:player_type', (req, res) => {
    // console.log(req.params.player_type)
    let options = {
        url: `https://www.fantasyfootballnerd.com/service/players/json/qft55ekjyswk/${req.params.player_type}`,
        method: 'GET'
    };
    request(options, function (err, response) {
        // console.log(response.body);
        if (err) res.sendStatus(500)
        res.send(response.body)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;