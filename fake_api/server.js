const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');
const fs = require('fs');

const port = '3000';
const financeStore = './finances.json';

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
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

    return res.json({financeDetails: financeDetails ? financeDetails : []});
});

server.post('/api/finance', (req, res) => {
    let { financeId } = req.body;
    let {financeDetail} = req.body;
    let fileContent = fs.readFileSync(financeStore);
    let raw = JSON.parse(fileContent);
    
    let financeDetails = raw.financeDetails[financeId];
    let currentFinanceDetailId = raw.financeDetailId;

    financeDetail.detailId = (parseInt(currentFinanceDetailId)+1).toString();
    financeDetails.push(financeDetail);

    raw.financeDetails[financeId] = financeDetails;
    raw.financeDetailId = financeDetail.detailId.toString();
    try{
        fs.writeFileSync(financeStore, JSON.stringify(raw));
        return res.json({
            financeId,
            financeDetail
        });
    }
    catch(ex) {
        return res.status(500).json({message: ex})
    }
})

server.put('/api/finance', (req, res) => {
    let { financeId } = req.body;
    let {financeDetail} = req.body;
    let fileContent = fs.readFileSync(financeStore);
    let raw = JSON.parse(fileContent);

    let financeDetails = raw.financeDetails[financeId];
    let detailIndex = financeDetails.findIndex(x => x.detailId == financeDetail.detailId)
    financeDetails[detailIndex] = financeDetail
    raw.financeDetails[financeId] = financeDetails;

    try{
        fs.writeFileSync(financeStore, JSON.stringify(raw));
        return res.json({
            financeId,
            financeDetail
        });
    }
    catch(ex) {
        return res.status(500).json({message: ex})
    }
})

server.listen(port, () => console.log('listening on ', port));