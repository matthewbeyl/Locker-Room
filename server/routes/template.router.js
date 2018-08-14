const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

console.log('In template router');

router.get('/https://www.fantasyfootballnerd.com/service/players/json/qft55ekjyswk/QB', (req, res) => {
    console.log('in router get').then((res) => {
        res.send(result)
    }).catch((error) => {
        console.log(error);
        res.sendstatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;