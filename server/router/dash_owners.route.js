const router = require('express').Router();
const pool = require('../modules/pool');

// ***INSTRUMENTS*** // 
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
            console.log('Error in route POST /dash: ', error);
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
router.delete('/:id', (req,res)=>{
    console.log('in Instruments delete route');
    const idToDelete = req.params.id;
    console.log('deleting instrument: ', idToDelete);
    //query for DB
    const query = 'DELETE FROM "instruments" WHERE "id" = $1;';
    pool.query(query, [idToDelete]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in Instruments delete route: ', error);
        res.sendStatus(500);
    })
})

// ***OWNERS*** //
router.post('/owners', (req, res) => {
    console.log('/owners POST hit: ', req.body);
    const newOwner = req.body;
    const queryText = `INSERT INTO "owners" ("name", "email", "phone", "city")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [newOwner.name, newOwner.email, newOwner.phone, newOwner.city])
    .then((result)=>{
        res.send(result.rows);
    })
    .catch((error) =>{
        console.log('Error in route POST /owners: ', error);
        res.sendStatus(500);
    });
});

router.get('/owners', (req, res) => {
    console.log('GET /owners');
    const queryText = `SELECT "name", "owners"."id", COUNT ("instruments"."id")
    FROM "owners"
    FULL JOIN "instruments" ON "owners"."id" = "instruments"."owner_id"
    GROUP BY "owners"."name", "owners"."id";`
    console.log(queryText);
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error selecting OWNERS - GET /owners -', error);
        res.sendStatus(500);
    })
})

module.exports = router;