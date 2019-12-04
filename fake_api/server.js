const express = require('express');
const server = express();
const cors = require('cors');
const fs = require('fs');

const port = '8080';
const financeStore = './finances.json';

server.use(cors());

server.get('/api/finances', (req, res) => {
    let raw = fs.readFileSync(financeStore);
    let finances = JSON.parse(raw).finances;
    finances = Object.keys(finances).map(id => {
        finances[id].id = id
        return finances[id]
    })
    return res.json({ finances });
});

server.get('/api/finance', (req, res) => {
    let { financeId } = req.query;

    let raw = fs.readFileSync(financeStore);
    let financeDetails = JSON.parse(raw).financeDetails[financeId.toString()];

    return res.json({financeDetails});
});

server.listen(port, () => console.log('listening on ', port));