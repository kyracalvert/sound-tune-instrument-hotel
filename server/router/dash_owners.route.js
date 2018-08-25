const router = require('express').Router();
const pool = require('../modules/pool');

// Instruments POST route
router.post('/', (req, res) => {
    console.log('POST /dash', req.body);
    const newInstrument = req.body;
    const queryText = `INSERT INTO "instruments" ("ticket_date", "instrument", "model", "description", "issue", "checked_in", "owner_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(queryText, [newInstrument.ticket_date, newInstrument.instrument, newInstrument.model, newInstrument.description, newInstrument.issue, newInstrument.checked_in, newInstrument.owner_id])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error in route POST /dash', error);
            res.sendStatus(500);
        });
});

// Instruments GET route
router.get('/', (req, res) => {
    console.log('GET /dash');
    const queryText = `SELECT "name", "ticket_date", "instrument", "model", "description", "issue", "checked_in", "owner_id"
    FROM "owners" 
    FULL JOIN "instruments" ON "owners"."id" = "instruments"."owner_id";`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error selecting DASH - GET /dash -', error);
        res.sendStatus(500);
    });
});

// Instruments DELETE route

module.exports = router;