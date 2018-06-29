const express = require('express');
const app = express();
const port = 8080;

let theKeys = {
    firebase: process.env.FIREBASE,
    google: process.env.GOOGLE
};

app.get('/keys', (req, res) => res.send(JSON.stringify(theKeys)));
app.use(express.static('www'));

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));