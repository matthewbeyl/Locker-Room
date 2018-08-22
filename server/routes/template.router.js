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
router.post('/join', (req, res) => {
    pool.query(`SELECT team.id FROM team
    JOIN person ON team.person_id = person.id
    WHERE person.id = $1;`, [req.user.id])
        .then((response) => {
            res.send(response.rows)
            // console.log(response);
            // let teamId = response.rows[0].id;
            // console.log(teamId);
        }).catch((error) => {
            console.log('Error -- ', error);
            res.sendStatus(500);
        })
})

router.post('/player', (req, res) => {
    let isPostError = false
    for (let i = 0; i < req.body.players.length; i++) {
        pool.query(`INSERT INTO "player"
        ("playerId", "jersey", "displayName", "team", "position", "height", "weight", "dob", "college", "team_id")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, [req.body.players[i].playerId, req.body.players[i].jersey, req.body.players[i].displayName,
            req.body.players[i].team, req.body.players[i].position, req.body.players[i].height, req.body.players[i].weight, req.body.players[i].dob, req.body.players[i].college, req.body.teamId])
            .then((results) => { })
            .catch((errorFromPG) => {
                console.log(errorFromPG);
                isPostError = true
            })
    }
    if (isPostError == false) {
        res.sendStatus(201)
    }
    else {
        res.sendStatus(500)
    }
})

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