const express = require('express');
const bodyParser = require ('body-parser');
const router = require ('./router/dash_owners.route.js');

const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.static('server/public'));

app.use(bodyParser.json());

// setup app routes
app.use('/dash', router);

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
})