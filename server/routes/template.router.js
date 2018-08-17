const express = require('express');
const router = express.Router();
const request = require('request');
const pool = require('../modules/pool');

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
    console.log(req.body.user);
    
    pool.query(`INSERT INTO "team"
    ("name")
    VALUES ($1, $2);`, [person_id, req.body.teamName])
    .then((results) => {
        res.sendStatus(201);
    }).catch((errorFromPG) => {
        res.sendStatus(500);
    })
});

module.exports = router;