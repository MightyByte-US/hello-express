const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.send('🚀'));

app.get('/health-check', (req, res) => res.send('OK'));

app.listen(PORT)
    .on('listening',
    () => console.log('Listening on port', PORT));