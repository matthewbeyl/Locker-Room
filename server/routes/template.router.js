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

// router.post('/', (req, res) => {
//     console.log(req.body);
//     // pool.query(`INSERT INTO "player"
//     // ("playerId", "jersey", "displayName", "team", "position", "height", "weight", "dob", "college", "team_id")
//     // VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, [req.body.teamReducer.team.quarterbacks.playerId, req.body.teamReducer.team.quarterbacks.jersey])
//     //     .then((results) => {
//     //         res.sendStatus(201);
//     //     }).catch((errorFromPG) => {
//     //         res.sendStatus(500);
//     //     })

// })

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.user.id);

    console.log(req.body.teamName);
    pool.query(`INSERT INTO "team"
    ("name", "person_id")
    VALUES ($1, $2);`, [req.body.teamName, req.user.id])
    .then((results) => {
        res.sendStatus(201);
    }).catch((errorFromPG) => {
        res.sendStatus(500);
    })
});

module.exports = router;