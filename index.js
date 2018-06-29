const express = require('express');
const app = express();
const port = 8080;

let theKeys = {
    firebase:'your Firebase key here',
    google:'your Google key here'
};

app.get('/keys', (req, res) => res.send(JSON.stringify(theKeys)));
app.use(express.static('www'));

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));