const router = require('express').Router();
const pool = require('../modules/pool');

// Instruments POST route
router.post('/', (req, res) => {
    console.log('POST /dash', req.body);
    const newInstrument = req.body;
})

// Instruments GET route
router.get('/', (req, res) => {
    console.log('GET /dash');
    const queryText = `SELECT "name", "ticket_date", "instrument", "model", "description", "issue"
    FROM "owners" 
    JOIN "instruments" ON "owners"."id" = "instruments"."owner_id";`;
pool.query(queryText).then(result => {
    res.send(result.rows);
}).catch(error => {
    console.log('Error selecting DASH - GET /dash -', error);
    res.sendStatus(500);
})
})
