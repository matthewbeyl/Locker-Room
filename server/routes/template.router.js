const express = require('express');
const router = express.Router();
const request = require('request');
const pool = require('../modules/pool');

router.get('/:player_type', (req, res) => {
    let options = {
        url: `https://www.fantasyfootballnerd.com/service/players/json/qft55ekjyswk/${req.params.player_type}`,
        method: 'GET'
    };
    request(options, function (err, response) {
        if (err) res.sendStatus(500)
        res.send(response.body)
    })
});
router.post('/player', (req, res) => {
    pool.query(`SELECT team.id FROM team
JOIN person ON team.person_id = person.id
WHERE person.id = $1;`, [req.user.id])
        .then((response) => {
            let teamId = response.rows[0].id;
        })

})

// router.post('/player', (req, res) => {
//     console.log(req.user.id);
//     pool.query(`INSERT INTO "player"
//     ("playerId", "jersey", "displayName", "team", "position", "height", "weight", "dob", "college", "team_id")
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, [req.body.playerId, req.body.jersey, req.body.displayName,
//     req.body.team, req.body.position, req.body.height, req.body.weight, req.body.dob, req.body.college, req.team.id])
//         .then((results) => {
//             res.sendStatus(201);
//         }).catch((errorFromPG) => {
//             res.sendStatus(500);
//         })
// })

router.post('/team', (req, res) => {
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